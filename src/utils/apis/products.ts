import { IProducts, ProductSchema } from "../types/products";
import { IResponse } from "../types/api";
import axiosWithConfig from "./axios-with-config";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");
    return response.data as IResponse<IProducts[]>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw new Error(message);
  }
};

export const getDetailProduct = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${id}`);
    return response.data as IResponse<IProducts>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw new Error(message);
  }
};

export const createProduct = async (body: ProductSchema) => {
  try {
    console.log("Creating product with body:", body); // Debugging request body
    const response = await axiosWithConfig.post("/products", body);
    console.log("Response data:", response.data); // Debugging response data
    return response.data as IResponse<ProductSchema>;
  } catch (error: any) {
    console.error("Error while creating product:", error); // Debugging API error
    const message = error.response?.data?.message || "Failed to create product";
    throw new Error(message);
  }
};

