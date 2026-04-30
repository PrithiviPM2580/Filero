import { envSchema } from "@/validators/env"

const envConfig = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
  APPWRITE_PROJECT_NAME: process.env.APPWRITE_PROJECT_NAME,
  APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
  APPWRITE_DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
  APPWRITE_USERS_COLLECTION_ID: process.env.APPWRITE_USERS_COLLECTION_ID,
  APPWRITE_FILES_COLLECTION_ID: process.env.APPWRITE_FILES_COLLECTION_ID,
  APPWRITE_BUCKET_ID: process.env.APPWRITE_BUCKET_ID,
}

function validateEnv(config: any) {
  const result = envSchema.safeParse(config)
  if (!result.success) {
    console.error("Invalid environment variables:", result.error.message)
    throw new Error("Invalid environment variables")
  }
  return result.data
}

const ENV = validateEnv(envConfig)

export default ENV
