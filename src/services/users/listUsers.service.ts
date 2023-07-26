import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { TUsersArray } from "../../interfaces/user.interfaces"
import { User } from "../../entites/user.entite"
import { usersSchemaResponse } from "../../schemas/users.schema"

const lisUsersService = async (): Promise<TUsersArray> =>{

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const returnUsers = usersSchemaResponse.parse(users)

    return returnUsers
}

export { lisUsersService }