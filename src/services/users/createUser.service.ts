import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entites/user.entite";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/AppError";

const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const {email, name, password, phone} = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if(findUser){
        throw new AppError("user already exists", 409)
    }

    const hashPassword = await hash(password, 10)
    const user = userRepository.create({
        name, 
        email,
        password: hashPassword,
        phone
    })

    await userRepository.save(user)

    return user
}

export { createUserService }