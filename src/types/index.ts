export interface Seller {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export interface Profile {
  id: number;
  seller_id: number;
  address: string | null;
  phone: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Item {
  id: number;
  seller_id: number;
  name: string;
  price: number;
  rating: number;
  favs: number;
  img_url: string | null;
  description: string | null;
  created_at: Date;
  updated_at: Date;
  reviews?: Review[];
}

export interface Review {
  id: number;
  item_id: number;
  reviewer_name: string;
  rating: number; // INT between 1–5
  review_text: string;
  created_at: Date;
}
