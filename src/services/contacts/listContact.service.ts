import { AppDataSource } from "../../data-source"
import { User } from "../../entites/user.entite"
import { AppError } from "../../errors/AppError"
import { TContactsResponse } from "../../interfaces/contacts.interface"
import { contactSchemaResponse } from "../../schemas/contacts.schemas"


const listContactsService = async (userId: number): Promise<TContactsResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },

        relations: {
            contacts: true
        }
    })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    return contactSchemaResponse.parse(user.contacts)
}

export { listContactsService }