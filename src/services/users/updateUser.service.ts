import { AppDataSource } from "../../data-source"
import { User } from "../../entites/user.entite"
import { TUserResponse, TUserUpdate } from "../../interfaces/user.interfaces"
import { AppError } from "../../errors/AppError";
import { userSchema } from "../../schemas/users.schema";



const updateUsersService = async (userData: TUserUpdate, userId: number): Promise<TUserResponse> => {

    const userRepository = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({id: userId})

    if(!oldUserData){
        throw new AppError("user not found", 404)
    }

    const newUserData = userRepository.create({
        ...oldUserData,
        ...userData,
    })
    await userRepository.save(newUserData)

    const returnUser = userSchema.parse(newUserData)

    return returnUser
}

export { updateUsersService }