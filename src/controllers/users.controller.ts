import { Response, Request } from "express";
import { TUserRequest, TUserUpdate } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { lisUsersService } from "../services/users/listUsers.service";
import { updateUsersService } from "../services/users/updateUser.service";
import { deleteUsersService } from "../services/users/deleteUser.service";


const createUserController = async (req: Request, res: Response) => {
    const data : TUserRequest = req.body

    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {

    const users = await lisUsersService()

    return res.json(users)
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData: TUserUpdate = req.body
    const userId = Number(req.params.id)

    const newUserData = await updateUsersService(userData, userId)

    return res.json(newUserData)
}

const deleteUserController = async (req: Request, res: Response) => {
    const userId = Number(req.params.id)

    await deleteUsersService(userId)

    return res.status(204).send()
}

export { createUserController, listUsersController, updateUserController, deleteUserController }