import { z } from "zod"
import { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse } from "../schemas/users.schema"
import { DeepPartial } from "typeorm"

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUsersArray = z.infer<typeof usersSchemaResponse>
type TUserUpdate = DeepPartial<TUserRequest>

export { TUser, TUserRequest, TUserResponse, TUsersArray, TUserUpdate}