const env = process.env
const fs = require("fs")
const db = {
    host: env.DB_HOST,
    user: "root",
    password: env.DB_PASSWORD,
    database: env.DB_NAME || "cloud_cfg",
    port: env.DB_PORT || 3306,
}

module.exports = db
