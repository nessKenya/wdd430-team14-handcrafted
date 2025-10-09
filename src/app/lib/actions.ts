'use server';

import bcrypt from 'bcrypt';
import { signIn, signOut } from '@/../auth';
import { AuthError } from 'next-auth';
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { sql } from '@/app/lib/data';
import { auth } from '@/../auth';

import { Item, Review } from '@/types';

// auth actions
export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signup(formData: FormData) {
  const firstName = formData.get("first_name") as string;
  const lastName = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm_password") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert seller and profile within a transaction
  const result = await sql.begin(async (tx) => {
    const [seller] = await tx`
      INSERT INTO sellers (first_name, last_name, email, password_hash)
      VALUES (${firstName}, ${lastName}, ${email}, ${hashedPassword})
      RETURNING id
    `;

    await tx`
      INSERT INTO profiles (seller_id, address, phone)
      VALUES (${seller.id}, ${address}, ${phone})
    `;

  });

  redirect('/auth/login');
}

export async function logout() {
  await signOut({
    redirectTo: "/",
  });
}

// item actions
export async function createItem(formData: FormData) {
  // Get session
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const sellerId = session.user.id;
  if (!sellerId) {
    throw new Error("Missing seller id in session");
  }

  // Get form data
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const imgUrl = formData.get("img") as string;

  if (!name || !price) {
    throw new Error("Missing required fields");
  }

  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice)) {
    throw new Error("Invalid price value");
  }

  // Insert into DB
  const [item] = await sql`
    INSERT INTO items (seller_id, name, price, img_url, description)
    VALUES (${sellerId}, ${name}, ${numericPrice}, ${imgUrl || null}, ${description || null})
    RETURNING *
  `;

  redirect('/seller/items');
}

export async function getItems(): Promise<Item[]> {
  try {
    const items = await sql<Item[]>`SELECT * FROM items ORDER BY created_at DESC`;
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items");
  }
}

export async function getSellerItems() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      redirect("/auth/login");
    }

    const sellerId = session.user.id;

    // Fetch items belonging to this seller
    const sellerItems = await sql<Item[]>`
      SELECT * FROM items WHERE seller_id = ${sellerId} ORDER BY created_at DESC
    `;
    return sellerItems;
  } catch (error) {
    console.error("[getSellerItems]", error);
    return [];
  }
}

export async function getItem(id: number): Promise<Item | null> {
  try{
    const [item] = await sql<Item[]>`
      SELECT id, seller_id, name, price, rating, favs, img_url, description, created_at, updated_at
      FROM items
      WHERE id = ${id}
    `;

    // fetch reviews for this item
      const reviews = await sql<Review[]>`
        SELECT * FROM reviews
        WHERE item_id = ${id}
        ORDER BY created_at DESC
      `;

      return {
        ...item,
        reviews,
      };
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items");
  }
}

export async function updateItem(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;
  const img_url = formData.get("img_url") as string;

  if (!id || !name || isNaN(price)) throw new Error("Invalid input");

  const sellerId = session.user.id;

  await sql`
    UPDATE items
    SET name = ${name},
        price = ${price},
        description = ${description},
        img_url = ${img_url},
        updated_at = NOW()
    WHERE id = ${id} AND seller_id = ${sellerId};
  `;

  redirect(`/seller/items`);
}

// review actions
export async function postReview(formData: FormData) {
  const item_id = Number(formData.get("item_id"));
  const reviewer_name = String(formData.get("name"));
  const rating = Number(formData.get("rating"));
  const review_text = String(formData.get("description"));

  if (!item_id || !reviewer_name || !rating || !review_text) {
    throw new Error("All fields are required");
  }

  await sql`
    INSERT INTO reviews (item_id, reviewer_name, rating, review_text)
    VALUES (${item_id}, ${reviewer_name}, ${rating}, ${review_text})
  `;

  // Calculate the new average rating for the item
    const [avgResult] = await sql<{ avg: number }[]>`
      SELECT AVG(rating)::numeric(2,1) AS avg
      FROM reviews
      WHERE item_id = ${item_id}
    `;

    const avgRating = avgResult?.avg ?? 0;

    // Update the item's rating
    await sql`
      UPDATE items
      SET rating = ${avgRating}
      WHERE id = ${item_id}
    `;

  // refetch item data
  revalidatePath(`/items/${item_id}`);
}

// schema creation
export async function createSchema () {
    await sql`
      -- sellers
      CREATE TABLE sellers (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          email VARCHAR(150) UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
      );
      `
    await sql`-- profiles (1-to-1 with sellers)
      CREATE TABLE profiles (
          id SERIAL PRIMARY KEY,
          seller_id INT NOT NULL UNIQUE REFERENCES sellers(id) ON DELETE CASCADE,
          address TEXT,
          phone TEXT,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
      );
      `
    await sql`-- items (belongs to a seller)
      CREATE TABLE items (
          id SERIAL PRIMARY KEY,
          seller_id INT NOT NULL REFERENCES sellers(id) ON DELETE CASCADE,
          name VARCHAR(200) NOT NULL,
          price NUMERIC(10,2) NOT NULL,
          rating NUMERIC(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
          favs INT DEFAULT 0,
          img_url TEXT,
          description TEXT,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
      );
      `
    await sql`-- reviews (belongs ONLY to an item)
      CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          item_id INT NOT NULL REFERENCES items(id) ON DELETE CASCADE,
          reviewer_name VARCHAR(150) NOT NULL,
          rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
          review_text TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
      );
    `
}
