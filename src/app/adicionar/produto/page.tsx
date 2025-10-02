"use client";

import { Product } from "@/Entities/Product";
import { useState } from "react";
import ProductAxios from "@/ProductAxios";

export default function ProductRegisterPage() {

  const axios = new ProductAxios();

  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState<number>();
  const [qtd, setQtd] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [length, setLength] = useState<number>();
  const [color, setColor] = useState<string>();
  const [weight, setWeight] = useState<number>();
  const [material, setMaterial] = useState("");

  return(
    <>
      Welcome to add product page!
    </>
  );
}
