// App.js
import React from 'react';
import quotes from './quotes';
import QuoteCard from './QuoteCard';
import './styles.css';

function App() {
  return (
    <div className="app">
      <h1>Welcome to the quotes app!</h1>
      {quotes.map(quote => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}

export default App;
