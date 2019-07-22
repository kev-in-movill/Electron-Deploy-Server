import { Request, Response, NextFunction } from "express"
import { logger } from "../util"

export const checkVersion = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params)

  logger.log("info", req.body)
  res.send("OK")
}
