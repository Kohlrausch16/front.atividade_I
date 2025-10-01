"use client"
import { User } from "@/Entities/User";
import UserAxios from "@/UserAxios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserPage(){

    const axios = new UserAxios;
    const params = useParams();
    const {id} = params;

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User>();

    const fetchData = async () => {
        const foundUser = await axios.getUserById(id as string);
        setUserData(foundUser);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [id]);


    return(
        <>
            {loading ? <div> Loading... </div> : <div> {userData?.name} - {userData?.userRole} </div> }
        </>
    );
}