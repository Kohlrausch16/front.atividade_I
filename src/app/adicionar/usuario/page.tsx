"use client"

import { User } from "@/Entities/User";
import UserAxios from "@/UserAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddUser(){

    const axios = new UserAxios;
    const router = useRouter();

    const [userName, setUserName] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userRole, setUserRole] = useState<string>('');

    const addUser = async (user: User) => {
        const createdUser = await axios.addUser(user);
        router.push(`/produto/${createdUser?.id}`);
    }

    const setUserProperties = () => {
        const user: User = {
            id: '',
            name: userName,
            password: userPassword,
            userRole: userRole
        }

        addUser(user);
    }

    return(
        <>
            <form>
                <input type="text" onChange={(e) => setUserName(e.target.value)}  placeholder="Informe o nome do usuário"/>
                <input type="text" onChange={(e) => setUserPassword(e.target.value)}  placeholder="Informe a senha do usuário"/>
                <input type="text" onChange={(e) => setUserRole(e.target.value)}  placeholder="Informe o cargo do usuário"/>

                <button onClick={() => setUserProperties()}> Confirmar </button>
            </form>
        </>
    );
}