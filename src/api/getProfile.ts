import { app } from "@/lib/axios";

interface GetProfileResponse {
    userProfile: {
        name: string,
        email: string
    }
}

export async function getProfile(){
    const response = await app.get<GetProfileResponse>('/users/me')
    return response.data
}