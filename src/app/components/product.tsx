

import React from 'react';
import { ProductProps } from '../types/Product';

interface ProductCardProps {
    product: ProductProps;
}

export default function Product({ product }: ProductCardProps) {

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
            {product.discountLabel && (
                <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {product.discountLabel}
                    </span>
                </div>
            )}
            <div className="h-56 w-full">
                <a href="#">
                    <img className="mx-auto object-contain hover:object-scale-down h-full dark:hidden" src={product.imageUrl} alt={product.productName} />
                    <img className="mx-auto object-contain hover:object-scale-down hidden h-full dark:block" src={product.imageUrl} alt={product.productName} />
                </a>
            </div>
            <div className="pt-6 text-center">

                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline ">
                    {product.productName}
                </a>
                <div className="mt-2 flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-900 ">{product.rating.toFixed(1)}</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.reviewCount})</p>
                </div>
                {product.features.length > 0 && (
                    <ul className="mt-2 flex items-center gap-4">
                        {product.features.map((feature) => (
                            <li key={feature.id} className="flex items-center gap-2">
                                {/* Feature icon */}
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{feature.feature}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <div className='text-center'>
                    <span className="text-sm font-extrabold leading-tight text-[#ebb760] line-through">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xl font-extrabold leading-tight text-gray-900 ">
                        ${product.salePrice.toFixed(2)}
                    </span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">


                    <button
                        type="button"
                        className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                        onClick={() => alert('Added to cart')}
                    >
                        <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
