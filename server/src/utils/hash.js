import argon2 from "argon2";

export function hashPass(pass) {
    return argon2.hash(pass)
}

export function verifyPassword (hash, password) {
    return argon2.verify(hash, password)
}