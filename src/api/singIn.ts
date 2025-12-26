import { app } from "@/lib/axios"

interface ISignInBody{
    email: string,
    password: string
}

export async function signIn({email,password} : ISignInBody){
    await app.post('/users/auth', {
        email,
        password
    })
}