import type { NextFunction, Request, RequestHandler, Response } from "express"

export const asyncHandler = <
  P = Record<string, string>,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = Record<string, unknown>,
>(
  handler: RequestHandler<P, ResBody, ReqBody, ReqQuery>
): RequestHandler<P, ResBody, ReqBody, ReqQuery> => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next)
  }
}
