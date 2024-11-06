import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { FaBars } from 'react-icons/fa';   
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      <div className="flex items-center justify-center w-1/2">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 pl-10 pr-4 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white flex items-center">
          <FaShoppingCart className="mr-2" />
          <Link to="/products">Product List</Link >
        </button>
      </div>
    </header>
  );
};

export default Header;
