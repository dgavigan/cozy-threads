import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-secondary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Cozy Threads
        </Link>
        <nav>
          <Link to="/shop" className="mr-4 hover:text-accent">
            Shop
          </Link>
          <Link to="/cart" className="mr-4 hover:text-accent">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
