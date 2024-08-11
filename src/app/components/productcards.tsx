import { ProductProps } from '../types/Product'
import Product from "./product"
import path from 'path';
import fs from 'fs';

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'data', 'productData.json');
    console.log('File Path:', filePath);

    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const product = JSON.parse(jsonData);
        console.log('Product Data:', product);

        return {
            props: {
                product,
            },
        };
    } catch (error) {
        console.error('Error reading file:', error);
        return {
            props: {
                product: null,
            },
        };
    }
}

interface ProductCardProps {
    product?: ProductProps;
}


export default function ProductCards({ product }: ProductCardProps) {

    if (!product) {
        return <div className="flex justify-center">No product data available</div>;
    }

    return (
        <>

          
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                <Product
                    imageUrl={product.imageUrl}
                    imageAlt={product.imageAlt}
                    discountLabel={product.discountLabel}
                    productName={product.productName}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    features={product.features}
                    price={product.price}
                />
            </div>
            
        </>

    )
}