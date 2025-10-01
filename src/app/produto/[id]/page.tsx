"use client"
import { Product } from "@/Entities/Product";
import ProductAxios from "@/ProductAxios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductPage(){

    const axios = new ProductAxios;
    const params = useParams();
    const {id} = params;

    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<Product>();

    const fetchData = async () => {
        const foundProduct = await axios.getProductById(id as string);
        setProductData(foundProduct);
        console.log(foundProduct);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [id]);


    return(
        <>
            {loading ? <div> Loading... </div> : <div> {productData?.name} - {productData?.unitPrice} </div> }
        </>
    );
}