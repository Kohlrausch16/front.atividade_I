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
      return foundUser.data;
   }

   async addUser(user: User){
      try{
         const createdUser = await axios.post<User>(`${apiKey}/usuario`, user);
         alert('Usuário criado com sucesso');
         return createdUser.data;
      } catch(err: any){
         alert(err.message);
      }
   }

   async deleteUser(id: string){
        try{
            const deletedUser = await axios.delete(`${apiKey}/usuario/${id}`);
            alert('usuario deletado com sucesso');
            return deletedUser.data;
        } catch(err: any){
            alert(err.message);
        }
    }
}

export default UserAxios;