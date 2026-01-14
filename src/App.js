import './App.css';
import Navbars from './Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Sneakers from './Navbar/component/men/Sneakers';
import Skechers from './Navbar/component/men/Skechers';
import Formal from './Navbar/component/men/Formal';

import WoSneakers from './Navbar/component/women/WSneaker';
import WoFormal from './Navbar/component/women/WFormal';
import Home from './Home/home';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addtocart(item) {
    let found = false;
    let newCart = cartItems.map(cartItem => {
      if (cartItem.name === item.name) {
        found = true;
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    if (!found) {
      newCart.push({ ...item, quantity: 1 });
    }
    setCartItems(newCart);
  }

  function removeItem(index) {
    const newCart = cartItems
      .map((item, i) => (i === index ? (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null) : item))
      .filter(item => item !== null);
    setCartItems(newCart);
  }

  return (
    <Router>
      <Navbars cartItems={cartItems} cartOpen={cartOpen} setCartOpen={setCartOpen} removeItem={removeItem} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/men/sneakers' element={<Sneakers addtocart={addtocart} />}/>
        <Route path='/men/skechers' element={<Skechers addtocart={addtocart} />} />
        <Route path='/men/formal' element={<Formal addtocart={addtocart} />} />
        <Route path='/women/sneakers' element={<WoSneakers addtocart={addtocart} />} />
        <Route path='/women/formal' element={<WoFormal addtocart={addtocart} />} />
      </Routes>
    </Router>
  );
}

export default App;
