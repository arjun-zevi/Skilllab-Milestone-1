
import React, { useState } from 'react';

const CakeDetails = ({ cake, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(cake, quantity);
  };

  return (
    <div className="cake-details">
      <img src={cake.imageUrl} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients}</p>
      <p>Price: ₹{cake.price}</p>
      <div className="customization">
        <label>Quantity: </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
