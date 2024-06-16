import { useCallback } from "react"
import { userService } from "../Service/UserService"
import { Users } from "../Types/User"

export const useClient = () => {

   const createClient = useCallback(async (clientData:Users) => {
        const { status } = await userService.createUser(clientData)
        if (status !== 200) throw new Error('Erro ao enviar dados a Api...');
    },[]);

    return {
        createClient,
    }
}