import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div className="text-center text-lg p-6">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8  bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

       
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Category:</span>
            <span className="ml-2 text-gray-600">{product.category}</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Rating:</span>
            <span className="ml-2 text-yellow-500">{product.rating} / 5</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Price:</span>
            <span className="ml-2 text-gray-800">{product.price}</span>
          </div>

         
          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Brand:</span>
            <span className="ml-2 text-gray-600">{product.brand || 'N/A'}</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Color:</span>
            <span className="ml-2 text-gray-600">{product.color || 'N/A'}</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Available:</span>
            <span className="ml-2 text-gray-600">{product.available ? 'In Stock' : 'Out of Stock'}</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Status:</span>
            <span className="ml-2 text-gray-600">{product.status || 'N/A'}</span>
          </div>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-800">Features:</span>
            <ul className="ml-4 list-disc text-gray-600">
              {product.features && product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <Link
            to={`/buy/${product.id}`}
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
