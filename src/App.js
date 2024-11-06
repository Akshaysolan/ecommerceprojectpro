import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/CheckOut';
import SuccessPage from './pages/SuccessPage';
import FailurePage from './pages/FailurePage';
import Header from './pages/Header';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="//buy/:id" element={<BuyNow />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
