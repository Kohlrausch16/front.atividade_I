"use client"

import ProductCard from "@/components/ProductCard";
import UserCard from "@/components/UserCard";
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
    }, [optionKey]);
    
    function refetchData(selectedOption: boolean){
      setOptionKey(selectedOption);
      fetchData();
    }

    return(
        <>

        <button onClick={() => refetchData(true)}> Produto </button>
        <button onClick={() => refetchData(false)}> Usuario </button>

        <a href={`/adicionar/${optionKey ? 'produto' : 'usuario'}`}><button>Adicionar {optionKey ? 'produto' : 'usuario'}</button></a>

        {loading ? <div> Loading... </div> : (optionKey) ? foundProduct?.map((item: Product) => {return <a href={`/produto/${item.id}`}><ProductCard product={item} /></a>}) : <div>{foundUser?.map((item: User) => {return <a href={`/usuario/${item.id}`}><UserCard user={item} /></a>})}</div>}
      
        </>   
    );
}