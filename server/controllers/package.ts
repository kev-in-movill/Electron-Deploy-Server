import { Request, Response, NextFunction } from "express"
import { logger } from "../util"
import path from "path"

export const checkVersion = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params.file)

  let fileName = req.params.file
  fileName = fileName.replace(/-/gi, " ")
  const appPath = path.resolve(__dirname, "..", "..", "release", fileName)

  logger.log("info", appPath)
  res.download(appPath)
}
