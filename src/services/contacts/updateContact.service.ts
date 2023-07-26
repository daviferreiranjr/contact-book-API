import { AppDataSource } from "../../data-source"
import { Contact } from "../../entites/contacts.entite"
import { AppError } from "../../errors/AppError"
import { TContact, TContactsUpdate } from "../../interfaces/contacts.interface"
import { contactSchema } from "../../schemas/contacts.schemas"


const updateContactsService = async (data: TContactsUpdate, contactId: number): Promise<TContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const oldContact = await contactRepository.findOneBy({id: contactId})

    if (!oldContact) {
        throw new AppError("contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContactData)

    return contactSchema.parse(newContactData)
}

export { updateContactsService }