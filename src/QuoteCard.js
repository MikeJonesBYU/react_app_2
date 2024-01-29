// QuoteCard.js

// not used. 

import React from 'react';

function QuoteCard({ quote }) {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.text}"</p>
      <div className="quote-footer">
        <span className="quote-author">{quote.author}</span>
        {quote.source && <span className="quote-source"> - {quote.source}</span>}
      </div>
    </div>
  );
}

export default QuoteCard;
