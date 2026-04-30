import { NextFunction, Router, Request, Response } from "express"
import authRouter from "./auth"
import { AppError } from "@/lib/error"

const router = Router()

router.get("/", (req, res) => {
  res.send("Welcome to the API!")
})

router.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

router.use("/auth", authRouter)

router.all("*", (req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404))
})

export default router
