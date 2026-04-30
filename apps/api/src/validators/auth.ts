import { z } from "zod"

export const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
})

export type RegisterType = z.infer<typeof registerSchema>
