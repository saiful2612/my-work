import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/work">Work</a>
            </nav>
        </div>
    );
};

export default Header;