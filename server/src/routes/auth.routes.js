import {Router} from "express";
import {register} from "../service/auth.service.js";
import {registerFetch} from "../controllers/auth.controller.js";

export  const authRouter = Router()

authRouter.post('/register', registerFetch)
