import app from "./app"
import * as config from "./config/ENV"
import { Request, Response, NextFunction } from "express"
import * as constants from "./constants"

app.use((err: constants.Error, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") == "development" ? err : {}
  res.status(err.status || 500).send(err.message || err)
})

process.on("uncaughtException", err => {
  console.error("uncaughtException: ", err)
})

app.set("port", config.default.PORT)

const server = app.listen(app.get("port"), () =>
  console.log(
    "[",
    new Date(),
    "]",
    `🚀 Server ready at http://localhost:${config.default.PORT} in ${config.default.ENV} mode`
  )
)

export default server
