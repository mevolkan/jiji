export interface ProductProps {
    id: string;
    imageUrl: string;
    discountLabel: string;
    productName: string;
    rating: number;
    reviewCount: number;
    features: {
        id: string;
        feature: string;
    }[];
    price: number;
    salePrice: number;
}
