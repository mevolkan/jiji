import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ProductProps } from '@/app/types/Product';
import path from 'path';
import fs from 'fs';

interface ProductPageProps {
    product: ProductProps | null;
}

export default function ProductPage({ product }: ProductPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
            <img src={product.imageUrl} alt={product.productName} className="w-full h-auto mb-4" />
            <p className="text-lg">{product.discountLabel}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Features</h2>
                <ul>
                    {product.features.map((feature) => (
                        <li key={feature.id}>{feature.feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    const filePath = path.join(process.cwd(), 'public', 'productData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products: ProductProps[] = JSON.parse(jsonData);

    const paths = products.map((product) => ({
        params: { id: product.id },
    }));

    return {
        paths,
        fallback: true, 
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filePath = path.join(process.cwd(), 'public', 'productData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products: ProductProps[] = JSON.parse(jsonData);

    const product = products.find((p) => p.id === params?.id);

    return {
        props: {
            product: product || null,
        },
        revalidate: 10, 
    };
};
