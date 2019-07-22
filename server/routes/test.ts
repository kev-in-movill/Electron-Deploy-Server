import * as Controllers from "../controllers"
import express, { Router } from "express"

export const testRotuer: Router = express.Router()

testRotuer.post("/", Controllers.testPost)
