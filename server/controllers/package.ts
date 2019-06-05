import { Request, Response, NextFunction } from "express"
import { logger } from "../util"

export const checkVersion = (req: Request, res: Response, next: NextFunction) => {
  logger.log("info", "test")
  res.send("OK")
}
