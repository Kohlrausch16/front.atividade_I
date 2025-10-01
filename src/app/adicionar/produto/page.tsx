import { Product } from "@/Entities/Product";

export default function ProductPage(product: Product){

    return(
        <>
            Welcome to add product {product.id} page!
        </>
    );
}