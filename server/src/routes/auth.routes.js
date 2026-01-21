import {Router} from "express";
import {register} from "../service/auth.service.js";
import {loginFetch, registerFetch} from "../controllers/auth.controller.js";

export  const authRouter = Router()

authRouter.post('/register', registerFetch)
authRouter.post('/login', loginFetch)