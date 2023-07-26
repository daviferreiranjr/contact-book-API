import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'

const ensureIsUserOwnerAccountMiddleware =  async (req: Request, res: Response, next: NextFunction) => {

    const id = Number(req.params.id)
    const userId = Number(res.locals.userId)

    if (id != userId) {
        throw new AppError("Insufficient permission", 403)
    }

   
    return next()
}

export default ensureIsUserOwnerAccountMiddleware