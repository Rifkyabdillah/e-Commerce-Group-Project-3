import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">Soap Shop</div>
            <input type="text" placeholder="Sabun cair" className="search" />
            <button className="search-button">Search</button>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Basket</a>
                <a href="#">History order</a>
                <a href="#">Purchaser</a>
                <div className="account-dropdown">
                    <a href="#">Manage My Account</a>
                    <a href="#">My Product</a>
                    <a href="#">Logout</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
