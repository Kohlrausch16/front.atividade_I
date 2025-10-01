import axios from "axios";
import { Product } from "./Entities/Product";

const apiKey = 'http://localhost:4000';

class ProductAxios{

    async getProducts(){
        try{
            const foundProduct =  await axios.get<Product[]>(`${apiKey}/produto`);
            return foundProduct.data;
        } catch(err: any){
            alert(err.message);
        }
    }

    async getProductById(id: string){
        try{
            const foundProduct = await axios.get<Product>(`${apiKey}/produto/${id}`);
            return foundProduct.data;
        } catch(err: any){
            alert(err.message);
        }
    }

    async addProduct(product: Product){
        try{
            const foundProduct = await axios.post<Product>(`${apiKey}/produto/`, product);
            return foundProduct.data;
        } catch(err: any){
            alert(err.message);
        }
    }

    async deleteProduct(id: string){
        try{
            const foundProduct = await axios.delete(`${apiKey}/produto/${id}`);
            return foundProduct.data;
        } catch(err: any){
            alert(err.message);
        }
    }
}

export default ProductAxios;