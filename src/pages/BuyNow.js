import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log('Error fetching product details:', error));
  }, [id]);

  const handleOrderSubmit = () => {
   
    axios.post(`http://localhost:5000/api/order/${id}`, { userEmail, userName, userAddress })
      .then(response => {
        if (response.data.success) {
          navigate(`/checkout/${product.id}`);  
        } else {
          navigate('/failure');  
        }
      })
      .catch(error => {
        console.error('Error placing order:', error);
        navigate('/failure');  
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-30">
        {product && (
          <>
            <div className="mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-32 h-32 object-contain mx-auto" 
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-gray-600 text-lg mt-2">${product.price}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              onClick={handleOrderSubmit}
              className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
