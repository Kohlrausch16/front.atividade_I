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
    const [deletedUser, setDeletedUser] = useState(false);

    const fetchData = async () => {
        const foundUser = await axios.getUserById(id as string);
        setUserData(foundUser);
        console.log(foundUser);
        setLoading(false);
    }

    const redirect = () => {
        router.push('/');
    }

    const deleteUser = async (id: string) => {
        await axios.deleteUser(id as string);
        <button onClick={() => redirect}> Produto deletado !</button>
        setDeletedUser(true);
    }

    useEffect(() => {
        fetchData();
    }, [id, deleteUser]);


    return(
        <>
            <button onClick={() => deleteUser(userData?.id as string)}> Deletar produto </button>
            {loading ? <div> Loading... </div> : <div> {userData?.name} - {userData?.userRole} </div> }
        </>
    );
}