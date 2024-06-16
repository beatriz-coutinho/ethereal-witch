import { useCallback, useState } from "react"
import { userService } from "../Service/UserService"
import { Users } from "../Types/User"

export const useClient = () => {

   const [cliente, setClient] = useState<Users | undefined>(undefined)

   const createClient = useCallback(async (clientData:Users) => {
        const { status } = await userService.createUser(clientData)
        if (status !== 200) throw new Error('Erro ao enviar dados a Api...');
    },[]);

    const getClientById = useCallback(async (id:number) => {
        const { data, status} = await userService.getUserById(id);
        if (status !== 200) throw new Error('Erro ao buscar dados da Api...');
        setClient(data);
        return data;
    },[]);

    return {
        cliente,
        createClient,
        getClientById
    }
}