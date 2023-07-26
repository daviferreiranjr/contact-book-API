import { Router } from "express"
import { createTokenController } from "../controllers/login.controller"

const LoginRoutes = Router()

LoginRoutes.post("", createTokenController)

export { LoginRoutes }