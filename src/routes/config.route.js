const express = require("express")
const router = express.Router()
const config = require("../controllers/config.controller")

/* GET - all configs for user. */
router.get("/get", config.getMultiple)

/* GET - config by id. */
router.get("/get/:id", config.getSingle)

/* POST - create config. */
router.post("/create", config.create)

/* PUT - update config. */
router.put("/update/:id", config.update)

/* DELETE - delete config. */
router.delete("/delete/:id", config.remove)

module.exports = router
