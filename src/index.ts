import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { config } from "./api"
import { logger } from "./middlewares/logger"

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use("/api", logger, config)

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
