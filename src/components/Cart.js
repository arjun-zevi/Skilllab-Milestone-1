
import React from 'react';

const Cart = ({ cartItems, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} - ₹{item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
