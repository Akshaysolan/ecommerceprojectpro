const express = require('express');
const cors = require('cors');
const Mongo = require('./mongo');
const Order = require('./Schema');
const app = express();
const PORT = 5000;
const products = require('./productsData');

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post('/api/checkout/:id', (req, res) => {
  const productId = parseInt(req.params.id);  
  const product = products.find(p => p.id === productId);
  
  
  if (product) {
    res.json({ success: true, message: "Payment successful" });  
  } else {
    res.status(400).json({ success: false, message: "Product not found" });  
  }
});

app.post('/api/order/:id', async (req, res) => {
  const { userEmail, userName, userAddress } = req.body;
  const productId = req.params.id;

  console.log('Received order data:', { userEmail, userName, userAddress, productId });
  
  if (!userEmail || !userName || !userAddress) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
   
    const order = new Order({
      productId,
      userEmail,
      userName,
      userAddress,
    });

    const savedOrder = await order.save();  

    res.status(200).json({ success: true, orderId: savedOrder.id });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
