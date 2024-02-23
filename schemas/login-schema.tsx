import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is requierd 🙄",
  }),
  password: z.string().min(1, {
    message: "Password is requierd 🔑",
  }),
});
