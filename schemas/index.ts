import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is requierd 🙄",
  }),
  password: z.string().min(1, {
    message: "Password is requierd 🔑",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required 🙄",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is requierd 🙄",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is requierd 🙄",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters requierd 🔑",
  }),
  name: z.string().min(1, {
    message: "Name is requierd",
  }),
});
