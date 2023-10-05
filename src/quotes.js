// quotes.js
import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig';

const quotes = [
  {
      id: 1,
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      source: "Song",
      category: CATEGORIES.MOTIVATIONAL,
      subcategory: SUBCATEGORIES.LIFE
    },
    {
        id: 2,
        text: "again with the: Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        source: "Song",
        category: CATEGORIES.MOTIVATIONAL,
        subcategory: SUBCATEGORIES.REPITITION
        }, 
      {
        id: 3,
        text: "And yet again Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        source: "Song",
        category: CATEGORIES.MOTIVATIONAL,
        subcategory: SUBCATEGORIES.REPITITION
        },
    // ... more quotes
  ];

  export default quotes;
  