// This file contains TypeScript type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// These types are based on the database schema.

export type User = {
  id: string; // UUID
  name: string;
  email: string;
  password: string; // This will be a hashed password.
  phone_number?: string | null;
};

export type Address = {
  id: string; // UUID
  user_id: string; // Foreign Key to users(id)
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  is_default?: boolean | null;
};

export type Product = {
  id: string; // UUID
  seller_id: string; // Foreign Key to users(id)
  name: string;
  description?: string | null;
  price: number; // DECIMAL(10, 2)
  quantity: number; // INT
};

export type ProductImage = {
  id: string; // UUID
  product_id: string; // Foreign Key to products(id)
  image_url: string;
  alt_text?: string | null;
  is_primary?: boolean | null;
};

export type Order = {
  id: string; // UUID
  client_id: string; // Foreign Key to users(id)
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address_id?: string | null; // Foreign Key to addresses(id)
  total_amount?: number | null; // DECIMAL(10, 2)
};

export type OrderItem = {
  id: string; // UUID
  order_id: string; // Foreign Key to orders(id)
  product_id: string; // Foreign Key to products(id)
  quantity: number; // INT
  price_at_purchase: number; // DECIMAL(10, 2)
};