import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  age: z.number().min(1, "Age must be > 0"),
});
