import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState([...items])
  
  let filteredItems
  const handleSelectedCategory = (e) => {
    console.log(selectedCategory)
    if (e.target.value === "All") {
      filteredItems = items
    } else {
      filteredItems = items.filter(item => item.category === e.target.value)
    }
    setSelectedCategory(filteredItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
