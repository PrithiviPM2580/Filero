import {
  Client,
  Account,
  Databases,
  Storage,
  Avatars,
  TablesDB,
} from "node-appwrite"
import ENV from "@/config/env"

const client = new Client()
  .setEndpoint(ENV.APPWRITE_ENDPOINT)
  .setProject(ENV.APPWRITE_PROJECT_ID)
  .setKey(ENV.APPWRITE_API_KEY)

export const account = new Account(client)
export const databases = new Databases(client)
export const tablesDB = new TablesDB(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
