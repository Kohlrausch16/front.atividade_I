import axios from "axios";
import { User } from "./Entities/User";

const apiKey = 'http://localhost:4000';

class UserAxios{

    async getUsers(): Promise<User[]>{
       const foundUser =  await axios.get<User[]>(`${apiKey}/usuario`);
       return foundUser.data;
    }

    async getUserById(id: string): Promise<User>{
       const foundUser =  await axios.get<User>(`${apiKey}/usuario/${id}`);
       console.log(foundUser);
       return foundUser.data;
    }
}

export default UserAxios;