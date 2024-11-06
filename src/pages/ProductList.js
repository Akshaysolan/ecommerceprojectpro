import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8  bg-gray-100">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <div className="h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="block mt-4 text-indigo-600 hover:text-indigo-400"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
