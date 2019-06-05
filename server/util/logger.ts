import * as winston from "winston"
import path from "path"

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.json(),
    winston.format.printf(
      info =>
        `${info.timestamp} ${info.level} ${info.message}` +
        (info.splat !== undefined ? `${info.splat}` : " ")
    )
  ),
  defaultMeta: { service: "movill-deploy-service" },
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "..", "..", "logs", "error.log"),
      level: "error"
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "..", "..", "logs", "debug.log"),
      level: "debug"
    })
  ]
})

if (process.env.NODE_ENV !== "production") {
  logger.debug("Logging initialized at debug level")
}
