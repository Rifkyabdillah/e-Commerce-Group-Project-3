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
    const response = await axiosWithConfig.post("/products", body);
    return response.data as IResponse<ProductSchema>;
  } catch (error: any) {
    const message = error.response?.data?.message || "Failed to create product";
    throw new Error(message);
  }
};
