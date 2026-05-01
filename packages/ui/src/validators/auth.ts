import { z } from "zod"

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
})

export const signInSchema = z.object({
  email: z.string().email("Invalid email address."),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
export type SignInSchema = z.infer<typeof signInSchema>
