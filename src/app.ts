import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoutes } from "./routes/users.routes"
import { handleAppError } from "./middlewares/handleAppError.middleware"
import { LoginRoutes } from "./routes/login.routes"
import { contactsRoutes } from "./routes/contacts.routes"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))
app.use("/users", userRoutes)
app.use("/login", LoginRoutes)
app.use("/contacts", contactsRoutes)
app.use(handleAppError)

export default app