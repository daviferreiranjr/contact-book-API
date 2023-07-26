import { Response, Request } from "express";
import { TContactRequest, TContactsUpdate } from "../interfaces/contacts.interface";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listContact.service";
import { updateContactsService } from "../services/contacts/updateContact.service";
import { deleteContactsService } from "../services/contacts/deleteContact.service";


const createContactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId
    const data : TContactRequest = req.body

    const newContact = await createContactService(data, userId)

    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId

    const contacts = await listContactsService(userId)

    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const data : TContactsUpdate = req.body

    const updateContact = await updateContactsService(data, id)

    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    await deleteContactsService(id)

    return res.status(204).send()
}

export { createContactController, listContactController, updateContactController, deleteContactController }