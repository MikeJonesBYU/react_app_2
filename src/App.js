// App.js
import React, { useState } from 'react';
import quotes from './quotes';
import QuoteCard from './QuoteCard';
import Navbar from './Navbar';
import categoriesConfig from './categoriesConfig';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category.name);
    setSelectedSubcategory(null); // Reset the subcategory when a new category is selected
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredQuotes = quotes.filter(quote => 
    (!selectedCategory || quote.category === selectedCategory) && 
    (!selectedSubcategory || quote.subcategory === selectedSubcategory)
  );

  return (
    <div className="app">
      <Navbar 
        categories={categoriesConfig} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedSubcategory={selectedSubcategory}
        onSelectSubcategory={handleSelectSubcategory}
      />
      <div className="quotes-container">
        {selectedSubcategory && filteredQuotes.map(quote => ( // Only render if a subcategory is selected
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default App;
