'use client'

import React, { useEffect, useState } from 'react';
import Product from './product';
import { ProductProps } from '../types/Product';

export default function ProductCards() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch data from the public directory
        fetch('/data/productData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: ProductProps[]) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center">Error: {error}</div>;
    }

    if (!Array.isArray(products) || products.length === 0) {
        return <div className="flex justify-center">No product data available</div>;
    }

    return (
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
