import { Response, Request } from "express";
import { TLoginRequest } from "../interfaces/login.interface";
import { createTokenService } from "../services/login/createToken.service";


const createTokenController = async (req: Request, res: Response) => {
    const data : TLoginRequest = req.body

    const token = await createTokenService(data)

    return res.json({token})
}

export { createTokenController }