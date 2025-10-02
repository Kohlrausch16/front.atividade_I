"use client"
import { Product } from "@/Entities/Product";
import ProductAxios from "@/ProductAxios";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductPage() {

    const axios = new ProductAxios();
    const params = useParams();
    const router = useRouter();

    const { id } = params;

    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<Product>();
    const [updateProductSwitch, setSwitch] = useState(false);

    const [name, setName] = useState<string>('');
    const [unitPrice, setUnitPrice] = useState<number>(0);
    const [qtd, setQtd] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [length, setLength] = useState<number>(0);
    const [color, setColor] = useState<string>('');
    const [weight, setWeight] = useState<number>(0);
    const [material, setMaterial] = useState<string>('');

    const fetchData = async () => {
        const foundProduct = await axios.getProductById(id as string);
        setProductData(foundProduct);
        setLoading(false);
    }

    const redirect = () => {
        router.push('/');
    }

    const deleteProduct = async (id: string) => {
        await axios.deleteProduct(id);
        redirect();
    }

    const updateProduct = async (product: Product) => {
        const updatedProduct = await axios.updateProduct(id as string, product);
        router.push(`/produto/${updatedProduct?.id}`);
    }

    const setUpdateProductSwitch = (value: boolean) => {
        setSwitch(value);
        setName(productData?.name as string);
        setUnitPrice(productData?.unitPrice as number);
        setQtd(productData?.qtd as number);
        setWidth(productData?.width as number);
        setHeight(productData?.height as number);
        setLength(productData?.length as number);
        setColor(productData?.color as string);
        setWeight(productData?.weight as number);
        setMaterial(productData?.material as string);
    }

    const setProductProperties = () => {
        const product: Product = {
            id: '',
            name,
            unitPrice,
            qtd,
            width,
            height,
            length,
            color,
            weight,
            material
        }

        updateProduct(product);
    }

    useEffect(() => {
        fetchData();
    }, [id, updateProduct]);

    return (
        <>
            <button onClick={() => deleteProduct(productData?.id as string)}>Deletar produto</button>
            <button onClick={() => setUpdateProductSwitch(true)}>Atualizar produto</button>

            {loading ? (
                <div>Loading...</div>
            ) : (!updateProductSwitch) ? (
                <>
                    <div>{productData?.name}</div><br />
                    <div>{productData?.unitPrice}</div><br />
                    <div>{productData?.qtd}</div><br />
                    <div>{productData?.width}</div><br />
                    <div>{productData?.height}</div><br />
                    <div>{productData?.length}</div><br />
                    <div>{productData?.color}</div><br />
                    <div>{productData?.weight}</div><br />
                    <div>{productData?.material}</div>
                </>
            ) : (
                <form>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder={name} />
                    <input type="number" onChange={(e) => setUnitPrice(parseFloat(e.target.value))} placeholder={unitPrice.toString()} />
                    <input type="number" onChange={(e) => setQtd(parseInt(e.target.value))} placeholder={qtd.toString()} />
                    <input type="number" onChange={(e) => setWidth(parseFloat(e.target.value))} placeholder={width.toString()} />
                    <input type="number" onChange={(e) => setHeight(parseFloat(e.target.value))} placeholder={height.toString()} />
                    <input type="number" onChange={(e) => setLength(parseFloat(e.target.value))} placeholder={length.toString()} />
                    <input type="text" onChange={(e) => setColor(e.target.value)} placeholder={color} />
                    <input type="number" onChange={(e) => setWeight(parseFloat(e.target.value))} placeholder={weight.toString()} />
                    <input type="text" onChange={(e) => setMaterial(e.target.value)} placeholder={material} />

                    <button type="button" onClick={() => setProductProperties()}>Confirmar</button>
                </form>
            )}
        </>
    );
}
