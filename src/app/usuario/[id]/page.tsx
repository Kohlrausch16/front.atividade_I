"use client"
import { User } from "@/Entities/User";
import UserAxios from "@/UserAxios";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserPage(){

    const axios = new UserAxios;
    const params = useParams();
    const router = useRouter();

    const {id} = params;

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User>();
    const [updateUserSwitch, setSwitch] = useState(false);
    const [userName, setUserName] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userRole, setUserRole] = useState<string>('');

    const fetchData = async () => {
        const foundUser = await axios.getUserById(id as string);
        setUserData(foundUser);
        setLoading(false);
    }

    const redirect = () => {
        router.push('/');
    }

    const deleteUser = async (id: string) => {
        await axios.deleteUser(id as string);
        <button onClick={() => redirect}> Produto deletado !</button>
    }

    const updateUser = async (user: User) => {
        const createdUser = await axios.updateUser(id as string, user);
        router.push(`/produto/${createdUser?.id}`);
    }

    const setUpdateUserSwitch = (value: boolean) => {
        setSwitch(value);
        setUserName(userData?.name as string);
        setUserPassword(userData?.password as string);
        setUserRole(userData?.userRole as string);
    }

    const setUserProperties = () => {
        const user: User = {
            id: '',
            name: userName,
            password: userPassword,
            userRole: userRole
        }

        updateUser(user);
    }

    useEffect(() => {
        fetchData();
    }, [id, updateUser]);


    return(
        <>
            <button onClick={() => deleteUser(userData?.id as string)}> Deletar usuario </button>
            <button onClick={() => setUpdateUserSwitch(true)}> Atualizar usuario </button>

            {loading ? 
                <div> Loading... </div> : 
                (!updateUserSwitch) ? 
                    <>  <div>{userData?.name}</div> <br></br>
                        <div>{userData?.password}</div> <br></br>
                        <div>{userData?.userRole}</div></> : 
                        
                        <form><input type="text" onChange={(e) => setUserName(e.target.value)} placeholder={userName}/>
                            <input type="text" onChange={(e) => setUserPassword(e.target.value)} placeholder={userPassword}/>
                            <input type="text" onChange={(e) => setUserRole(e.target.value)} placeholder={userRole}/>
                            <button onClick={() => setUserProperties()}> Confirmar </button>
                        </form>
            }
        </>
    );
}