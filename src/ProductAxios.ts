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
}

export default ProductAxios;