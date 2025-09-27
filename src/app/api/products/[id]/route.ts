import { NextResponse } from "next/server";

// Mock DB (replace with real database)
let products = [
  { id: "1", name: "Handmade Vase", price: 50, image: "/images/vase.jpg", archived: false },
  { id: "2", name: "Woven Basket", price: 30, image: "/images/basket.jpg", archived: false },
];

// Update Product
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { price, image } = body;
  
  const product = products.find(p => p.id === params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (price !== undefined) product.price = price;
  if (image !== undefined) product.image = image;

  return NextResponse.json(product);
}

// Archive (soft delete)
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });

  product.archived = true; // Mark as archived
  return NextResponse.json({ message: "Product archived", product });
}
