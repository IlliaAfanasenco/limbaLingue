import {loginSchema, registerSchema} from "../schemas/auth.schemas.js";
import {login, register} from "../service/auth.service.js";

export async function registerFetch(req, res, next) {
    try {
        const {email, password} = registerSchema.parse(req.body)
        const result = await register({email, password})
        return res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}

export async function loginFetch (req, res, next) {
    try {
        const {email, password} = loginSchema.parse(req.body)
        const result = await login({email, password})
        return res.status(201).json(result)
    }
    catch (err) {
        next(err)
    }
}