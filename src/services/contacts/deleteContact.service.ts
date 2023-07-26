import { AppDataSource } from "../../data-source"
import { Contact } from "../../entites/contacts.entite"
import { AppError } from "../../errors/AppError"


const deleteContactsService = async (contactId: number): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOneBy({id: contactId})

    if (!contact) {
        throw new AppError("contact not found", 404)
    }

    await contactRepository.remove(contact)

}

export { deleteContactsService }