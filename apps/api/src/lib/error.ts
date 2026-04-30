export class AppError extends Error {
  statusCode: number
  status: "fail" | "error"

  constructor(message: string, statusCode = 500) {
    super(message)
    this.name = "AppError"
    this.statusCode = statusCode
    this.status = this.statusCode >= 500 ? "error" : "fail"

    Error.captureStackTrace?.(this, this.constructor)
  }
}
