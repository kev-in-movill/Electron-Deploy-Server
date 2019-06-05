import { Request, Response, NextFunction } from "express"
import { logger } from "../util"

export const checkVersion = (req: Request, res: Response, next: NextFunction) => {
  console.log("req body: ", req.body)
  logger.log("info", req.body)
  res.send("OK")
}
