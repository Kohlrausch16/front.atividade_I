"use client"

import { Product } from "@/Entities/Product";
import { User } from "@/Entities/User";
import ProductAxios from "@/ProductAxios";
import UserAxios from "@/UserAxios";
import { useEffect, useState } from "react";

export default function Home(){

    const productAxios = new ProductAxios;
    const userAxios = new UserAxios;

    const [loading, setLoading] = useState(true);
    const [foundProduct, setProducts] = useState<Product[]>();
    const [foundUser, setUsers] = useState<User[]>();

    let [optionKey, setOptionKey] = useState(true);

    const fetchData = async () => {
      if(optionKey){
        const requestResponse = await productAxios.getProducts();
        setProducts(requestResponse);
        setLoading(false);
      } else {
        const requestResponse = await userAxios.getUsers();
        setUsers(requestResponse);
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);
    
    function refetchData(selectedOption: boolean){
      console.log(foundUser);
      setOptionKey(selectedOption);
      fetchData();
    }


    return(
        <>
        
        <button onClick={() => refetchData(true)}> Product </button>
        <button onClick={() => refetchData(false)}> User </button>

        <a href={`/adicionar/${optionKey ? 'produto' : 'usuario'}`}><button>Adicionar {optionKey ? 'produto' : 'usuario'}</button></a>

        {(optionKey)? 'Products': 'Users'}

        {loading ? <div> Loading... </div> : (optionKey) ? <div>{foundProduct?.map((item: Product) => {return item.name})}</div> : <div>{foundUser?.map((item: User) => {return item.name})}</div>}
      
        </>
    );
}