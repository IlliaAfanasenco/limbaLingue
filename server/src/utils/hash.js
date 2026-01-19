import argon2 from "argon2";

export function hashPass(pass) {
    return argon2.hash(pass)
}