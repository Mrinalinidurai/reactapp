import React, { useState } from 'react';
import './App.css';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: Rs{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

function ShoppingCart({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <p key={index}>{item.name}: Rs{item.price}</p>
      ))}
      <h3>Total Price:Rs{totalPrice}</h3>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    { name: 'Item 3', price: 20 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>Shopping Cart App</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default App;

