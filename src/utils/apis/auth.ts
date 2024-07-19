import { IResponse } from "../types/api";
import { Ilogin, loginSchema, RegisterSchema } from "../types/auth";
import axiosWithConfig from "./axios-with-config";


export const userLogin = async (body: loginSchema) => {
  try {
    const response = await axiosWithConfig.post(`/login`, body);
    return response.data as IResponse<Ilogin>; 
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "user login failed");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
export const userRegister = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(`/users`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

