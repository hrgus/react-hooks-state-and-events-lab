import React, { useState } from "react";

function Item({ name, category }) {
  
  const [addToCart, setAddToCart] = useState(false);
  const cartClass = addToCart ? "Remove From Cart" : "Add to Cart";
  const cartsClass = addToCart ? "in-cart" : "";

  function handleClick() {
    setAddToCart((addToCart) => !addToCart);
  }
  
  return (
    <li className={cartsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartClass}</button>
    </li>
  );
}

export default Item;
