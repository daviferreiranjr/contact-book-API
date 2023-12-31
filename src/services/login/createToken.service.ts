import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entites/user.entite"
import { AppError } from "../../errors/AppError"
import { TLoginRequest } from "../../interfaces/login.interface"
import jwt from "jsonwebtoken"
import "dotenv/config"

const createTokenService = async ({email, password}: TLoginRequest) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            email
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign(
        {
            userName: user.name,
            subject: user.id
        }, 
        process.env.SECRET_KEY!,
        {
            expiresIn: "1h",
            subject: user.id.toString(),
        }  
    )

    return token
}

export { createTokenService }