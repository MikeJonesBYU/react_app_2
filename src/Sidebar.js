// Sidebar.js
import React from 'react';

function Sidebar({ categories, onSelectCategory }) {
  const [expandedCategory, setExpandedCategory] = React.useState(null);

  const handleCategoryClick = (category) => {
    // If the same category is clicked while it's expanded, collapse it. 
    // Otherwise, expand the clicked category.
    setExpandedCategory(current => current === category.name ? null : category.name);
    onSelectCategory(category);
  };

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={() => handleCategoryClick(category)}>
            {category.name}
            {expandedCategory === category.name && category.subcategories && (
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
