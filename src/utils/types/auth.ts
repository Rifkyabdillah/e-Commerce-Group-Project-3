import * as z from "zod";

export interface Ilogin {
  token: string;
}

export const loginSchema = z.object({
  email: z.string().email("email must be a valid email").min(1, { message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

export type loginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email("Email must be a valid email").min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegisterSchema = z.infer<typeof registerSchema>;

