import { Router } from "express"
import userRouter from "./user"
import cartRouter from "./cart"
import viewRouter from "./view"

const router = Router()

router.use("/", viewRouter)
router.use("/api/", userRouter)
router.use("/api/", cartRouter)

export default router
