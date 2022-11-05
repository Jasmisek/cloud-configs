const db = require("./db.service")
const helper = require("../utils/helper.util")
const config = require("../configs/general.config")
const fs = require("fs")
const { v4: uuidv4 } = require("uuid")

async function getMultiple(req) {
    const result = await db.query(
        `SELECT * FROM configs WHERE user = ?`,
        [req.user],
        function (err, results, fields) {
            console.log(results) // results contains rows returned by server
        }
    )
    const data = helper.emptyOrRows(result)

    return { data }
}

async function getSingle(id) {
    const result = await db.query(
        `SELECT * FROM configs WHERE id = ?`,
        [id],
        function (err, results, fields) {
            console.log(results) // results contains rows returned by server
        }
    )

    const data = helper.emptyOrRows(result)

    return { result }
}

async function create(config) {
    const id = uuidv4()

    const result = await db.query(
        `INSERT INTO configs (id, user, name) VALUES (?, ?, ?)`,
        [id, config.user, config.name]
    )

    let message = "Error in creating config"

    if (result.affectedRows) {
        message = "Config created successfully"
    }

    return { message }
}

async function update(id, config) {
    const result = await db.query(
        `UPDATE configs SET content = ? WHERE id = ?`,
        [config.content, id]
    )

    let message = "Error in updating config"

    if (result.affectedRows) {
        message = "Config updated successfully"
    }

    return { message }
}

async function remove(id) {
    const result = await db.query(`DELETE FROM configs WHERE id = ?`, [id])

    let message = "Error in deleting config"

    if (result.affectedRows) {
        message = "Config deleted successfully"
    }

    return { message }
}

module.exports = {
    getMultiple,
    getSingle,
    create,
    update,
    remove,
}
