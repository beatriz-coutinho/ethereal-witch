import { Axios } from '../Providers';
import { Users } from '../Types/User';

const createUser = (data:Users) => Axios.post('/user/create',data);

export const userService = {
    createUser,
}