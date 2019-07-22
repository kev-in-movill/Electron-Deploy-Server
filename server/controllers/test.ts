import { Request, Response, NextFunction } from "express"
import { logger } from "../util"

export const testPost = (req: Request, res: Response, next: NextFunction) => {
  console.log("req body: ", req.body)
  logger.log("info", req.body)
  res.send({
    success: true,
    items: []
  })
}
