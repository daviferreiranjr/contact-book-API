import { z } from "zod"
import { contactSchema, contactSchemaRequest, contactSchemaResponse } from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactsResponse = z.infer<typeof contactSchemaResponse>
type TContactsUpdate = DeepPartial<TContactRequest>


export { TContact, TContactRequest, TContactsResponse, TContactsUpdate }