"use client"

import { Product } from "@/Entities/Product";
import ProductAxios from "@/ProductAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProduct() {

    const axios = new ProductAxios();
    const router = useRouter();

    const [productName, setName] = useState<string>('');
    const [productUnitPrice, setUnitPrice] = useState<number>(0);
    const [productQtd, setQtd] = useState<number>(0);
    const [productWidth, setWidth] = useState<number>(0);
    const [productHeight, setHeight] = useState<number>(0);
    const [productLength, setLength] = useState<number>(0);
    const [productColor, setColor] = useState<string>('');
    const [productWeight, setWeight] = useState<number>(0);
    const [productMaterial, setMaterial] = useState<string>('');

    const addProduct = async (product: Product) => {
        const createdProduct = await axios.addProduct(product);
        router.push(`/produto/${createdProduct?.id}`);
    }

    const setProductProperties = () => {
        const product: Product = {
            id: '',
            name: productName,
            unitPrice: productUnitPrice,
            qtd: productQtd,
            width: productWidth,
            height: productHeight,
            length: productLength,
            color: productColor,
            weight: productWeight,
            material: productMaterial
        }

        addProduct(product);
    }

    return (
        <>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Nome do produto" />
                <input type="number" onChange={(e) => setUnitPrice(parseFloat(e.target.value))} placeholder="Preço unitário" />
                <input type="number" onChange={(e) => setQtd(parseInt(e.target.value))} placeholder="Quantidade" />
                <input type="number" onChange={(e) => setWidth(parseFloat(e.target.value))} placeholder="Largura (cm)" />
                <input type="number" onChange={(e) => setHeight(parseFloat(e.target.value))} placeholder="Altura (cm)" />
                <input type="number" onChange={(e) => setLength(parseFloat(e.target.value))} placeholder="Comprimento (cm)" />
                <input type="text" onChange={(e) => setColor(e.target.value)} placeholder="Cor" />
                <input type="number" onChange={(e) => setWeight(parseFloat(e.target.value))} placeholder="Peso (kg)" />
                <input type="text" onChange={(e) => setMaterial(e.target.value)} placeholder="Material" />

                <button type="button" onClick={() => setProductProperties()}>Confirmar</button>
            </form>
        </>
    );
}
