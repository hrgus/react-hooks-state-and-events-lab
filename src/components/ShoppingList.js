import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  function handleClick(category) { 
    const newCategory = items.filter((item) => item.category !== category);
    setSelectedCategory(newCategory);
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All" onClick={handleClick}>Filter by category</option>
          <option value="Produce" onClick={handleClick}>{selectedCategory}</option>
          <option value="Dairy" onClick={handleClick}>{selectedCategory}</option>
          <option value="Dessert" onClick={handleClick}>{selectedCategory}</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
