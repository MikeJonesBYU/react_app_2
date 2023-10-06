// Sidebar.js
import React from 'react';

function Sidebar({ categories, onSelectCategory }) {
  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={() => onSelectCategory(category)}>
            {category.name}
            {category.subcategories && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory} onClick={(e) => {
                    e.stopPropagation();
                    onSelectCategory(category, subcategory);
                  }}>
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
