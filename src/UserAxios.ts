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

   async deleteUser(id: string){
        try{
            const deletedUser = await axios.delete(`${apiKey}/usuario/${id}`);
            return deletedUser.data;
        } catch(err: any){
            alert(err.message);
        }
    }
}

export default UserAxios;