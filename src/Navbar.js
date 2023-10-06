// Navbar.js
import React from 'react';

function Navbar({ categories, selectedCategory, onSelectCategory, selectedSubcategory, onSelectSubcategory }) {
  return (
    <div className="navbar">
      <div className="category-nav">
        {categories.map((category) => (
          <button 
            key={category.name} 
            className={selectedCategory === category.name ? "active" : ""} 
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="subcategory-nav">
          {categories.find(cat => cat.name === selectedCategory).subcategories.map((subcategory) => (
            <button 
              key={subcategory} 
              className={selectedSubcategory === subcategory ? "active" : ""}
              onClick={() => onSelectSubcategory(subcategory)}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
