import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    location: string;
    available: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rp. {product.price}</p>
            <p>{product.location}</p>
            <p>{product.available} Tersedia</p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductCard;
