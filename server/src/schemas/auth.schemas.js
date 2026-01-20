import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(3).max(15)
})

export const registerSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(3).max(15)
})
