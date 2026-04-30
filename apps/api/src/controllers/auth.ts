import { AppError } from "@/lib/error"
import { createUser, getUserByEmail, sendEmailOTP } from "@/services/auth"
import { RegisterType } from "@/validators/auth"
import type { Request, Response, NextFunction } from "express"

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, fullName } = req.body as RegisterType

  const existingUser = await getUserByEmail(email)

  const accountId = await sendEmailOTP({ email })

  if (!accountId) throw new AppError("Failed to send OTP email", 500)

  if (!existingUser) {
    await createUser({
      email,
      fullName,
      accountId,
    })
  }

  return res.status(200).json({
    success: true,
    message: "OTP sent to email",
    accountId,
  })
}
