// App.js

import React, { useState } from 'react';
import quotes from './quotes';
import Navbar from './Navbar';
import categoriesConfig from './categoriesConfig';
import './styles.css';

function App() {
  // declare state variables. 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // declare event handlers. 
  // note the use of the set functions. 
  const handleSelectCategory = (category) => {
    setSelectedCategory(category.name);
    setSelectedSubcategory(null);
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  // filter quotes based on selected category and subcategory.
  // this is called whenever the state changes.  That is significant. 
  const filteredQuotes = quotes.filter(quote => 
    (!selectedCategory || quote.category === selectedCategory) && 
    (!selectedSubcategory || quote.subcategory === selectedSubcategory)
  );

  return (
    // this is the JSX that will be rendered.
    // note that it is one component, but it is made up of other components.
    <div className="app">
      <Navbar 
        categories={categoriesConfig} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedSubcategory={selectedSubcategory}
        onSelectSubcategory={handleSelectSubcategory}
      />
      <div >
        {filteredQuotes.map(quote => (
          <p className="quotes-container" key={quote.id}>"{quote.text}" by {quote.author}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
