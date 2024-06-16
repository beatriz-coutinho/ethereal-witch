import { Axios } from '../Providers';
import { Users } from '../Types/User';

const createUser = (data:Users) => Axios.post('/user/create',data);
const getUserById = (id:number) => Axios.get(`/single/${id}`);
const getAllUser = () => Axios.get('/all/auth');

export const userService = {
    createUser,
    getUserById,
    getAllUser,
}