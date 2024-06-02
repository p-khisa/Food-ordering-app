import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import MainMeal from './components/Meal/MainMeal';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(true);
  }
  const handleCardHide = () => {
    setShowCart(false);
  }
  return (
    <>
      <CartProvider>
        {
          showCart && <Cart onClose={handleCardHide} />
        }
        <Layout onShowCart={handleShowCart} />
        <MainMeal />
      </CartProvider>
    </>
  );
}

export default App;
