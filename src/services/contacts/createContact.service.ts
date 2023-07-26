import { AppDataSource } from "../../data-source";
import { Contact } from "../../entites/contacts.entite";
import { User } from "../../entites/user.entite";
import { AppError } from "../../errors/AppError";
import { TContact, TContactRequest } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schemas";


const createContactService = async (data: TContactRequest, userId: number): Promise<TContact> => {
   
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    const contact = contactRepository.create({
        ...data,
        user
    })

    await contactRepository.save(contact)

    return contactSchema.parse(contact)
}

export { createContactService }