import * as Controllers from "../controllers"
import express, { Router } from "express"

export const packageRouter: Router = express.Router()

packageRouter.get("/", Controllers.checkVersion)
