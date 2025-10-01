"use client"
import { Product } from "@/Entities/Product";
import ProductAxios from "@/ProductAxios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductPage(){

    const axios = new ProductAxios;
    const params = useParams();
    const router = useRouter();

    const {id} = params;

    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<Product>();
    const [deletedProduct, setDeletedProduct] = useState(false);

    const fetchData = async () => {
        const foundProduct = await axios.getProductById(id as string);
        setProductData(foundProduct);
        console.log(foundProduct);
        setLoading(false);
    }

    const redirect = () => {
        router.push('/');
    }

    const deleteProduct = async (id: string) => {
        await axios.deleteProduct(id as string);
        <button onClick={() => redirect}> Produto deletado !</button>
        setDeletedProduct(true);
    }

    useEffect(() => {
        fetchData();
    }, [id, deleteProduct]);


    return(
        <>
            <button onClick={() => deleteProduct(productData?.id as string)}> Deletar produto </button>
            {loading ? <div> Loading... </div> : <div> {productData?.name} - {productData?.unitPrice} </div> }
        </>
    );
}