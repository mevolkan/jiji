import { use } from 'react';
import path from 'path';
import fs from 'fs';
import { ProductProps } from '@/app/types/Product';

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = use(getProduct(params.id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <section className='flex'>
                <div>
                    <img src={product.imageUrl} alt={product.imageAlt} className="w-full h-auto mb-4" />
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
                        <p className="text-lg">{product.discountLabel}</p>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>
                            {product.shortDescription}
                        </p>
                    </div>

                </div>
            </section>
            <section>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Features</h2>
                    <ul>
                        {product.features.map((feature) => (
                            <li key={feature.id}>{feature.feature}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

async function getProduct(id: string): Promise<ProductProps | null> {
    const filePath = path.join(process.cwd(), 'public', 'data', 'productData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products: ProductProps[] = JSON.parse(jsonData);

    return products.find((product) => product.id === id) || null;
}
