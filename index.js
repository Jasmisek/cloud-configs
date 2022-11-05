const express = require("express")
const bodyParser = require("body-parser")
const app = express()
var fs = require("fs")
const port = process.env.PORT || 3000
const config = require("./src/routes/config.route")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.json({ message: "hi <3" })
})

app.use("/api", config)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })

    return
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
