import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { mailRoutes } from "./router/email.routes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use([mailRoutes])

const port = process.env.PORT || 5000

app.listen(port)