import express from "express"
import compression from "compression"
import bodyParser from "body-parser"
import logger from "morgan"
import * as lusca from "lusca"
import * as router from "./routes"
import cors from "cors"

const app = express()

app.use(logger("dev"))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe("SAMEORIGIN"))
app.use(lusca.xssProtection(true))
app.use(cors())

app.use("/package/", router.packageRouter)
app.use("/test", router.testRotuer)

export default app
