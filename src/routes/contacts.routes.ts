import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";


const contactsRoutes = Router()

contactsRoutes.post("", ensureAuthMiddleware, ensureDataIsValid(contactSchemaRequest), createContactController)
contactsRoutes.get("", ensureAuthMiddleware, listContactController)
contactsRoutes.patch("/:id", ensureAuthMiddleware, ensureIsOwnerMiddleware, ensureDataIsValid(contactSchemaUpdate), updateContactController)
contactsRoutes.delete("/:id", ensureAuthMiddleware,  ensureIsOwnerMiddleware, deleteContactController)

export { contactsRoutes }
