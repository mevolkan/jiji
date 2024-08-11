export interface ProductProps {
    id: string;
    imageUrl: string;
    imageAlt: string;
    discountLabel: string;
    productName: string;
    rating: number;
    reviewCount: number;
    features: {
        id: string;
        feature: string;
    }[];
    price: number;
}
