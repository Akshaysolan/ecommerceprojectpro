import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="max-w-xl text-center bg-white shadow-xl rounded-lg p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Mock eCommerce
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop shop for amazing products. Browse our collection and shop now!
      </p>
      <Link
        to="/products"
        className="bg-indigo-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-indigo-500 transition-colors"
      >
        View Products
      </Link>
    </div>
  </div>
);

export default Homepage;
