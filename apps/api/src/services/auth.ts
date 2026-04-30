import ENV from "@/config/env"
import { account, tablesDB } from "@/lib/appwrite"
import { AppError } from "@/lib/error"
import { ID, Query } from "node-appwrite"

export async function getUserByEmail(email: string) {
  try {
    const result = await tablesDB.listRows({
      databaseId: ENV.APPWRITE_DATABASE_ID,
      tableId: ENV.APPWRITE_USERS_COLLECTION_ID,
      queries: [Query.equal("email", email)],
    })
    return result.total > 0 ? result.rows[0] : null
  } catch (error) {
    console.error("Error fetching user by email:", error)
    throw new AppError("Failed to fetch user", 500)
  }
}

export async function sendEmailOTP({ email }: { email: string }) {
  try {
    const session = await account.createEmailToken({
      userId: ID.unique(),
      email,
    })
    return session.userId
  } catch (error) {
    console.error("Error sending OTP email:", error)
    throw new AppError("Failed to send OTP email", 500)
  }
}

export async function createUser({
  email,
  fullName,
  accountId,
}: {
  email: string
  fullName: string
  accountId: string
}) {
  try {
    const result = await tablesDB.createRow({
      databaseId: ENV.APPWRITE_DATABASE_ID,
      tableId: ENV.APPWRITE_USERS_COLLECTION_ID,
      rowId: ID.unique(),
      data: {
        fullName,
        email,
        avatar:
          "https://imgs.search.brave.com/0iI1DLrWKEiJZbfti0sCP7o1B738UIoyfeIsSH8yaaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NDA0Lzg2NC9zbWFs/bC8zZC1tYW4tYXZh/dGFyLXBuZy5wbmc",
        accountId,
      },
    })
    return result
  } catch (error) {
    console.error("Error creating user:", error)
    throw new AppError("Failed to create user", 500)
  }
}
