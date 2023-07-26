import { z } from "zod"

const contactSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10),
    dateRegister: z.date(),
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    dateRegister: true 
})

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()

const contactSchemaResponse = z.array(contactSchema)

export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactSchemaResponse }