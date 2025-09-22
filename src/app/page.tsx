"use client"

import Loading from "@/components/Loading";
import { Product } from "../Entities/Product";
import ProductAxios from "../ProductAxios";
import { useState, useEffect } from "react";
import "./globals.css"

export default function Home() {

  const productAxios = new ProductAxios;
  const [loading, setLoading] = useState(true);
  const [foundProduct, setProducts]= useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const requestResponse = await productAxios.getProducts();
      setProducts(requestResponse);
      setLoading(false);
    }
    fetchData();
  })
  
  return (
    <body>
      {(loading == true) ? <Loading /> : <div>{foundProduct?.map((item: Product) => {
        return <div>{item.name}</div>
      })}</div>}
    </body>
  );
}
