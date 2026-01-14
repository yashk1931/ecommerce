// import React, { useState, useEffect } from "react";
// import '../../navbar.css';
// import { Link } from 'react-router-dom';

// const products = [
//     {
//         name: "GraceStep",
//         brand: "Vellia",
//         price: "$150",
//         image: "/pictures/wSn1.jpg",
//     },
//     {
//         name: "FemmeFlex",
//         brand: "Liora",
//         price: "$220",
//         image: "/pictures/wsn3.jpg",
//     },
//     {
//         name: "RoyalEase",
//         brand: "Avena",
//         price: "$65",
//         image: "/pictures/wsn4.jpg",
//     },
//     {
//         name: "SilkStride",
//         brand: "Converse",
//         price: "$70",
//         image: "/pictures/wsn5.jpg",
//     },
//     {
//         name: "PureComfort",
//         brand: "Nelia",
//         price: "$110",
//         image: "/pictures/wsn6.jpeg",
//     },
//     {
//         name: "LuxeRunner",
//         brand: "Arista",
//         price: "$90",
//         image: "/pictures/sk6.jpg",
//     },
// ];

// export default function WoSneakers() {
//     const [cartItems, setCartItems] = useState([]);
//     const [cartOpen, setCartOpen] = useState(false);
//     function addtocart(item) {
//         let found = false;

//         let newCart = cartItems.map(cartItem => {
//             if (cartItem.name === item.name) {
//                 found = true;
//                 return {
//                     ...cartItem,
//                     quantity: cartItem.quantity + 1
//                 };
//             }
//             return cartItem;
//         });

//         if (!found) {
//             newCart.push({
//                 ...item,
//                 quantity: 1
//             });
//         }

//         setCartItems(newCart);
//     }
//     function removeItem(index) {
//         const newCart = cartItems.map((item, i) => {
//             if (i === index) {
//                 if (item.quantity > 1) {
//                     return { ...item, quantity: item.quantity - 1 };
//                 } else {
//                     return null;
//                 }
//             }
//             return item;
//         }).filter(item => item !== null);

//         setCartItems(newCart);
//     }
//     return (

//         <>
//             <header>
//                 <div className="navbar">
//                     <a href="index.html" className="sneakers">
//                         <h1 className="name">SneakerShop</h1>
//                     </a>

//                     <nav className="navs">
//                         <ul className="nav-icon">
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>

//                             <li>
//                                 <Link>Men</Link>
//                                 <ul className="drop">
//                                     <li><Link to="/men/sneakers">Sneakers</Link></li>
//                                     <li><Link to="/men/skechers">Skechers</Link></li>
//                                     <li><Link to="/men/formal">formal</Link></li>
//                                 </ul>
//                             </li>

//                             <li>
//                                 <Link>Women</Link>
//                                 <ul className="drop">
//                                     <li><Link to="/women/sneakers">Sneakers</Link></li>
//                                     <li><Link to="/women/formal">formal</Link></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </nav>
//                     <p className="cart-icon" onClick={() => setCartOpen(true)}>
//                         &#x1F6D2;
//                         {cartItems.length}
//                     </p>
//                 </div>
//             </header>
//             <section className="products">
//                 <h2>Featured Sneakers</h2>
//                 <div className="product-grid">
//                     {products.map((item, index) => (
//                         <div id="productGrid" className="card" key={index}>
//                             <img src={item.image} alt={item.name} />
//                             <h3>{item.name}</h3>
//                             <p>{item.brand}</p>
//                             <p>{item.price}</p>
//                             <button className="add-btn" onClick={() => addtocart(item)}>Add to cart</button>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//             <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
//                 <button className="close-btn" onClick={() => setCartOpen(false)}>
//                     &times;
//                 </button>

//                 <h2>Your Cart</h2>

//                 {cartItems.length === 0 ? (
//                     <p>Your cart is empty.</p>
//                 ) : (
//                     cartItems.map((item, index) => (
//                         <div className="cart-item" key={index}>
//                             <img src={item.image} alt={item.name} width="60" />
//                             <div>
//                                 <h4>{item.name}</h4>
//                                 <p>{item.price} × {item.quantity}</p>
//                             </div>
//                             <button onClick={() => removeItem(index)}>&times;</button>
//                         </div>
//                     ))
//                 )}
//             </div>

//             <footer>
//                 © {new Date().getFullYear()} SneakerShop — Designed by NxStep
//             </footer>
//         </>
//     );
// }

import '../../navbar.css';

const products = [
    {
        name: "GraceStep",
        brand: "Vellia",
        price: "$150",
        image: "/pictures/wSn1.jpg",
    },
    {
        name: "FemmeFlex",
        brand: "Liora",
        price: "$220",
        image: "/pictures/wsn3.jpg",
    },
    {
        name: "RoyalEase",
        brand: "Avena",
        price: "$65",
        image: "/pictures/wsn4.jpg",
    },
    {
        name: "SilkStride",
        brand: "Converse",
        price: "$70",
        image: "/pictures/wsn5.jpg",
    },
    {
        name: "PureComfort",
        brand: "Nelia",
        price: "$110",
        image: "/pictures/wsn6.jpeg",
    },
    {
        name: "LuxeRunner",
        brand: "Arista",
        price: "$90",
        image: "/pictures/sk6.jpg",
    },
];


export default function Sneakers({ addtocart }) {
  return (
     <>
    <section className="products">
      <h2>Featured Sneakers</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div class="card-content">
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p class="price">{item.price}</p>
            <button onClick={() => addtocart(item)} className="add-btn">
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <footer>
        &copy; <span id="year"></span> SneakerShop — Designed by NxStep
    </footer>
    </>
  );
}
