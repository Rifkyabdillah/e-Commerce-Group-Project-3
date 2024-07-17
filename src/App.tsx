import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

const products = [
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    { id: 1, name: 'Sabun x', price: 30000, location: 'Kota Jakarta', available: 200, image: 'https://assets.unileversolutions.com/v1/87635838.png' },
    // Tambahkan produk lainnya dengan format yang sama
];

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="banner">
                <h1>Pure soap</h1>
                <p>Get Discount</p>
                <button>Subscribe</button>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default App;
