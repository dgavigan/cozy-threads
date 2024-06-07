import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductList } from './components/pages/ProductList';
import { Cart } from './components/pages/Cart';
import Header from './components/components/Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './components/pages/Home';
import ProductDetail from './components/pages/ProductDetail';
import Checkout from './components/pages/Checkout';
import Confirmation from './components/pages/Confirmation';
import { STRIPE_PUBLIC_KEY } from './constants';

const queryClient = new QueryClient();
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY!);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Elements stripe={stripePromise}>
        <Router>
          <Header />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout-page" element={<Checkout />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </div>
        </Router>
      </Elements>
    </QueryClientProvider>
  );
}

export default App;
