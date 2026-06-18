import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      if (prev.some(item => item.Id === product.Id)) {
        return prev
      }
      return [...prev, product]
    })
    if (cart.some(item => item.Название === product.Название)) {
      toast.error(`${product.Название} вже є у кошику`)
    } else {
      toast.success(`${product.Название} додано в кошик`, {
        style: {
          background: '#2c1810',
          color: '#ffd89a',
          fontSize: '14px'
        }
      })
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.Id != id))
  }

  return (
    <BrowserRouter>
    <Navigate to="/home" replace={true} />
      <div className="app-container">
        <header className="autumn-header">
          <div className="header-content">
            <div className="logo">
              <h1>🍂 Осінній Магазин 🍁</h1>
            </div>
            <nav>
              <Link to="/home" className="nav-link">Головна</Link>
              <Link to="/cart" className="cart-link">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">({cart.length})</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home addToCart={addToCart} />} />
            <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>

        <footer className="autumn-footer">
          <p>🍁 Осіння колекція 2024 | Тепло та затишок для вашого дому 🍂</p>
        </footer>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;