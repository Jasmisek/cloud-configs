import { Router } from "express"
import controller from "./controller"

/**
 * Config Routes
 */
const router = Router()

router.get("/get", controller.getMultiple)
router.get("/get/:id", controller.getSingle)
router.post("/create", controller.create)
router.put("/update/:id", controller.update)
router.delete("/delete/:id", controller.delete)

export default router
