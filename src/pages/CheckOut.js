import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { checkoutProduct } from '../api';

const Checkout = () => {
  const { id } = useParams();  
  const navigate = useNavigate();  

  const handleCheckout = () => {
    checkoutProduct(id)  
      .then((response) => {
        if (response.data.success) {
          navigate('/success');  
        } else {
          navigate('/failure');  
        }
      })
      .catch(() => navigate('/failure'));  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>
        <button
          onClick={handleCheckout}
          className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
