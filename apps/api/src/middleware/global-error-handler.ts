import type { ErrorRequestHandler } from "express"
import { AppError } from "@/lib/error"

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next
) => {
  const appError = error as AppError & { message?: string }
  const statusCode = appError.statusCode ?? 500

  res.status(statusCode).json({
    success: false,
    status: appError.status ?? (statusCode >= 500 ? "error" : "fail"),
    message: appError.message ?? "Something went wrong",
  })
}
