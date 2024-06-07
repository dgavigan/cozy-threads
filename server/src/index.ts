import express from 'express';
import path from 'path';
import cors from 'cors';
import products from './data/products';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-04-10',
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

/***
 * API Routes
 */
app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (error: any) {
    console.error('Error fetching all products:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products/:id', (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error: any) {
    console.error('Error fertching product by id:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  const calculateOrderAmount = (items: { id: string; quantity: number }[]) => {
    return items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  try {
    const orderAmount = calculateOrderAmount(items) * 100;

    const paymentMethodTypes = ['card'];

    //minimum amount for Affirm is $50
    if (orderAmount >= 5000) {
      paymentMethodTypes.push('affirm');
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: 'usd',
      payment_method_types: paymentMethodTypes,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Static Assets & App
 */
// Serve static files from the "public" directory
app.use(
  '/images',
  express.static(path.join(__dirname, '..', 'public', 'images'))
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../..', 'client', 'build')));

// Handle SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
