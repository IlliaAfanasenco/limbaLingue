import jwt from 'jsonwebtoken'


export  function signToken (userId){
    return jwt.sign({sub: userId}, process.env.JWT_SECRET, {expiresIn: '15m'})
}

export  function refreshToken (userId){
    return jwt.sign({sub: userId}, process.env.JWT_REFRESH_SECRET, {expiresIn: '15m'})
}

export function verifyToken (token) {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
}

