import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, usersSchemaUpdate } from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware";
import ensureIsUserOwnerAccountMiddleware from "../middlewares/ensureIsOwnerAccount.middleware";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get("", ensureAuthMiddleware, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureIsUserOwnerAccountMiddleware, ensureDataIsValid(usersSchemaUpdate), updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIsUserOwnerAccountMiddleware, deleteUserController)

export { userRoutes }

