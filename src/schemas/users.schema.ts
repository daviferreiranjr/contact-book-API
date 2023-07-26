import { z } from "zod"

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string().min(10),
    dateRegister: z.date(),
})

const userSchemaRequest = userSchema.omit({
    id: true,
    dateRegister: true 
})

const userSchemaResponse = userSchema.omit({
    password: true
})

const usersSchemaUpdate = userSchema.omit({
    id: true,
    dateRegister: true 
}).partial()

const usersSchemaResponse = z.array(userSchemaResponse)

export { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse, usersSchemaUpdate}