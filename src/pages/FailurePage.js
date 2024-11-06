import React from 'react';
import { Link } from 'react-router-dom';

const FailurePage = () => (
  <div className="flex items-center justify-center h-screen bg-red-50">
    <div className="text-center bg-white shadow-lg rounded-lg p-10 border border-red-200 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-red-600 mb-4 animate-bounce">Payment Failed</h1>
      <p className="text-gray-700 mb-6">
        There was an issue with your payment. Please try again or contact support if the issue persists.
      </p>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none transition-all">
        <Link to="/products">Try Again</Link>
      </button>
    </div>
  </div>
);

export default FailurePage;
