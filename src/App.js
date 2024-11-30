// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import CakeDetails from './components/CakeDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles.css'; // Ensure this is correctly imported

const App = () => {
  const [cart, setCart] = useState([]);

  // Updated featuredCakes array with more cakes
  const [featuredCakes] = useState([
    { 
      id: 1, 
      name: 'Butter Chicken', 
      price: 150, 
      imageUrl: 'https://www.marionskitchen.com/wp-content/uploads/2024/02/20240212_MK_Easiest-Butter-Chicken-From-Scratch-8.webp', 
      description: 'A rich and creamy North Indian curry', 
      ingredients: 'Chicken, yogurt, ginger-garlic paste, chili powder, garam masala, tomatoes, butter, cream, cashews, kasuri methi, oil, salt.'
    },
    { 
      id: 2, 
      name: 'Sushi', 
      price: 130, 
      imageUrl: 'https://themodernnonna.com/wp-content/uploads/2021/10/WhatsApp-Image-2024-06-10-at-13.40.09-1.jpeg', 
      description: 'Japanese dish of vinegared rice, paired with raw or cooked seafood, vegetables', 
      ingredients: 'Sushi rice, rice vinegar, sugar, salt, nori, fish or vegetables, soy sauce, wasabi, pickled ginger.'
    },
    { 
      id: 3, 
      name: 'Tacos', 
      price: 100, 
      imageUrl: 'https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg', 
      description: 'Mexican dish with a folded corn or wheat tortilla filled with seasoned meat, vegetables,',
      ingredients: 'Tortillas, protein, taco seasoning, lettuce, tomato, onion, cheese, salsa, guacamole.'
    },
    { 
      id: 4, 
      name: 'Biryani', 
      price: 140, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWliVh6RpjTGDgExkB_-RCk237fP6qwQLpA&s', 
      description: 'A flavorful and aromatic rice dish cooked with spiced meat or vegetables', 
      ingredients: 'Rice, meat/vegetables, yogurt, onions, tomatoes, spices, saffron, ghee, coriander, mint.'
    },
    { 
      id: 5, 
      name: 'Masala Dosa', 
      price: 80, 
      imageUrl: 'https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg', 
      description: 'A crispy South Indian rice and lentil crepe filled with a spiced potato mixture', 
      ingredients: 'Dosa batter, potatoes, onions, chilies, mustard seeds, curry leaves, turmeric, oil, salt.'
    },

  ]);

  const addToCart = (cake, quantity) => {
    setCart([...cart, { ...cake, quantity }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(cake => cake.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home featuredCakes={featuredCakes} />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} total={total} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cake/:id" element={<CakeDetails cake={featuredCakes[0]} addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
