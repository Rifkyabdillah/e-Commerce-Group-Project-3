import { z } from "zod";

export interface IProducts {
  product_id: number;
  product_name: string;
  price: number;
  images: string;
  city: string;
  stock: number;
  description: string;
}

const productSchema = z.object({
  product_name: z.string().min(1, { message: "Product name is required" }),
  price: z.number().positive("Price must be a positive number"),
  images: z.string().min(1, { message: "Image URL or Base64 is required" }),
  city: z.string().min(1, { message: "City is required" }),
  stock: z.number().int().positive("Stock must be a positive integer"),
  description: z.string().min(1, { message: "Description is required" }),
});

export type ProductSchema = z.infer<typeof productSchema>;

export default productSchema;
