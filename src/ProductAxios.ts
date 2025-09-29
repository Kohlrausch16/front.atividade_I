import axios from "axios";
import { Product } from "./Entities/Product";

const apiKey = 'http://localhost:4000';

class ProductAxios{

    async getProducts(): Promise<Product[]>{
       const foundProduct =  await axios.get<Product[]>(`${apiKey}/produto`);
       return foundProduct.data;
    }
}

export default ProductAxios;