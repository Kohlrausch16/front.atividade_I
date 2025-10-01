"use client";

import { Product } from "@/Entities/Product";
import { useState } from "react";
import ProductAxios from "@/ProductAxios"; // assumindo que existe este service

export default function ProductRegisterPage() {

  const axios = new ProductAxios();

  // estados para cada campo
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState<number>(0);
  const [qtd, setQtd] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [color, setColor] = useState<string[]>([]);
  const [weight, setWeight] = useState<number>(0);
  const [material, setMaterial] = useState("");

  const [newColor, setNewColor] = useState(""); // campo auxiliar para inserir cores individuais

  const handleAddColor = () => {
    if (newColor.trim() !== "") {
      setColor([...color, newColor.trim()]);
      setNewColor("");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      unitPrice,
      qtd,
      width,
      height,
      length,
      color,
      weight,
      material,
    };

    await axios.addProduct(newProduct);
    alert("Produto cadastrado com sucesso!");
  };

  return (
    <>
      <h2>Cadastro de Produto</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome do produto" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /><br />

        <input 
          type="number" 
          placeholder="Preço unitário" 
          value={unitPrice} 
          onChange={(e) => setUnitPrice(Number(e.target.value))} 
        /><br />

        <input 
          type="number" 
          placeholder="Quantidade" 
          value={qtd} 
          onChange={(e) => setQtd(Number(e.target.value))} 
        /><br />

        <input 
          type="number" 
          placeholder="Largura (cm)" 
          value={width} 
          onChange={(e) => setWidth(Number(e.target.value))} 
        /><br />

        <input 
          type="number" 
          placeholder="Altura (cm)" 
          value={height} 
          onChange={(e) => setHeight(Number(e.target.value))} 
        /><br />

        <input 
          type="number" 
          placeholder="Comprimento (cm)" 
          value={length} 
          onChange={(e) => setLength(Number(e.target.value))} 
        /><br />

        <input 
          type="number" 
          placeholder="Peso (kg)" 
          onChange={(e) => setWeight(Number(e.target.value))} 
        /><br />

        <input 
          type="text" 
          placeholder="Material" 
          value={material} 
          onChange={(e) => setMaterial(e.target.value)} 
        /><br />

        {/* Inserção de cores */}
        <div>
          <input 
            type="text" 
            placeholder="Adicionar cor" 
            value={newColor} 
            onChange={(e) => setNewColor(e.target.value)} 
          />
          <button type="button" onClick={handleAddColor}>Adicionar cor</button>
        </div>

        <div>
          <p>Cores adicionadas:</p>
          <ul>
            {color.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </>
  );
}
