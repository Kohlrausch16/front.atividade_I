import { Product } from "@/Entities/Product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product}: ProductCardProps){
    return(
        <>
            <div>{product.name}</div>
        </>
    );
}