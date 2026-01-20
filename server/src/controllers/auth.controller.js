import {registerSchema} from "../schemas/auth.schemas.js";
import {register} from "../service/auth.service.js";

export async function registerFetch(req, res, next) {
    try {
        const {email, password} = registerSchema.parse
        const result = await register({email, password})
        return res.status(201).Json(result)
    } catch (err) {
        next(err)
    }
}