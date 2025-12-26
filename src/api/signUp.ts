import { app } from "@/lib/axios"

interface ISignUpBody{
    name: string,
    email: string,
    password: string
}

export async function signUp({email,name,password} : ISignUpBody){
    await app.post('/users/register', {
        name,
        email,
        password
    })
}