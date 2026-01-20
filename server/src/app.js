import express from "express"
import cors from "cors"
import {authRouter} from "./routes/auth.routes.js";
import {errorMiddleware} from "./middleware/error.middleware.js";

export const app =  express()

app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use('/auth', authRouter)


app.use(errorMiddleware)
