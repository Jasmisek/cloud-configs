import { Router } from "express"
import controller from "./controller"

/**
 * Config Routes
 */
const router = Router()

router.get("/get", controller.getMultiple)
router.get("/get/:id", controller.getSingle)
router.post("/create", controller.create)
router.put("/update/", controller.update)
router.delete("/delete/", controller.delete)

export default router
