// App.js
import React, { useState } from 'react';
import quotes from './quotes';
import QuoteCard from './QuoteCard';
import Sidebar from './Sidebar';
import categoriesConfig from './categoriesConfig';
import './styles.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectCategory = (category, subcategory = null) => {
    setSelectedCategory(category.name);
    setSelectedSubcategory(subcategory);
  };

  const filteredQuotes = quotes.filter(quote => 
    (!selectedCategory || quote.category === selectedCategory) && 
    (!selectedSubcategory || quote.subcategory === selectedSubcategory)
  );

  return (
    <div className="app">
      <Sidebar categories={categoriesConfig} onSelectCategory={handleSelectCategory} />
      <div className="quotes-container">
        {filteredQuotes.map(quote => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default App;
