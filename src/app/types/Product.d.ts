export interface ProductProps {
    imageUrl: string;
    imageAlt: string;
    discountLabel: string;
    productName: string;
    rating: number;
    reviewCount: number;
    features: {
        id: Key | null | undefined;
        feature: ReactNode; icon: string; label: string 
}[];
    price: number;
}
