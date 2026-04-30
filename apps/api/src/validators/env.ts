import { z } from "zod"

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().regex(/^\d+$/).transform(Number),
  APPWRITE_ENDPOINT: z.string(),
  APPWRITE_PROJECT_ID: z.string(),
  APPWRITE_PROJECT_NAME: z.string().max(100),
  APPWRITE_API_KEY: z.string(),
  APPWRITE_DATABASE_ID: z.string(),
  APPWRITE_USERS_COLLECTION_ID: z.string(),
  APPWRITE_FILES_COLLECTION_ID: z.string(),
  APPWRITE_BUCKET_ID: z.string(),
})

export type Env = z.infer<typeof envSchema>
