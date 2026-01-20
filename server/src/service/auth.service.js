import {prisma} from "../prisma.js";
import {hashPass} from "../utils/hash.js";
import {refreshToken, signToken} from "../utils/token.js";

export async function register ({email, password}){
    const exist = await prisma.user.findUnique({
        where: {email}
    })
    if(exist) throw  {status: 409, message: "email exist"}

    const passwordHash = await hashPass(password)

    const user = await prisma.user.create({data: {email, passwordHash}})
    const acToken = signToken(user.id)
    const refToken = refreshToken(user.id)


    return {user: {id: user.id, email:user.email}, acToken, refToken}

}