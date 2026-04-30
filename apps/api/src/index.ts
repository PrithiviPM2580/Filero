import express, { Express, NextFunction, Request, Response } from "express"
import ENV from "./config/env"
import router from "./routes"
import { globalErrorHandler } from "./middleware/global-error-handler"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", router)

app.use(globalErrorHandler)

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port http://localhost:${ENV.PORT}`)
})
