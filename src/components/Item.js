import React, { useState } from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  
  let isInCart = inCart ? "Remove From Cart" : "Add to Cart"
  let inCartClass = inCart ? "in-cart" : ""
  
  const handleInCart = () => {
    setInCart(!inCart)
  }
  return (
    <li className= {inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleInCart}>{isInCart}</button>
    </li>
  );
}

export default Item;
