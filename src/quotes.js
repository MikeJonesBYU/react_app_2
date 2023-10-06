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
  {
    id: 53,
    text: "Forests were the first temples of God and in forests men grasped their first idea of architecture.",
    author: "James C. Snyder",
    category: CATEGORIES.NATURE,
    subcategory: SUBCATEGORIES.FOREST
  },
  {
    id: 54,
    text: "The best view comes after the hardest climb.",
    author: "Unknown",
    category: CATEGORIES.NATURE,
    subcategory: SUBCATEGORIES.MOUNTAIN
  },
  {
    id: 55,
    text: "With every drop of water you drink, every breath you take, you're connected to the sea.",
    author: "Sylvia Earle",
    category: CATEGORIES.NATURE,
    subcategory: SUBCATEGORIES.OCEAN
  },
  {
    id: 56,
    text: "Life is an adventure, not a package tour.",
    author: "Eckhart Tolle",
    category: CATEGORIES.ADVENTURE,
    subcategory: SUBCATEGORIES.JOURNEY
  },
  {
    id: 57,
    text: "In the midst of every crisis, lies great opportunity.",
    author: "Albert Einstein",
    category: CATEGORIES.ADVENTURE,
    subcategory: SUBCATEGORIES.RISK
  },
  {
    id: 58,
    text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
    author: "Marcel Proust",
    category: CATEGORIES.ADVENTURE,
    subcategory: SUBCATEGORIES.DISCOVERY
  },
  {
    id: 59,
    text: "The past has no power over the present moment.",
    author: "Eckhart Tolle",
    category: CATEGORIES.WISDOM,
    subcategory: SUBCATEGORIES.ANCIENT
  },
  {
    id: 60,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: CATEGORIES.WISDOM,
    subcategory: SUBCATEGORIES.FUTURE
  },
  {
    id: 61,
    text: "Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.",
    author: "Dean Kamen",
    category: CATEGORIES.TECHNOLOGY,
    subcategory: SUBCATEGORIES.INNOVATION
  },
  {
    id: 62,
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: CATEGORIES.TECHNOLOGY,
    subcategory: SUBCATEGORIES.PROGRAMMING
  },
  {
    id: 63,
    text: "Artificial intelligence is the future, not only for Russia but for all humankind.",
    author: "Vladimir Putin",
    category: CATEGORIES.TECHNOLOGY,
    subcategory: SUBCATEGORIES.ARTIFICIAL_INTELLIGENCE
  },
  {
    id: 64,
    text: "Talent wins games, but teamwork and intelligence win championships.",
    author: "Michael Jordan",
    category: CATEGORIES.SPORTS,
    subcategory: SUBCATEGORIES.TEAMWORK
  },
  {
    id: 65,
    text: "Endurance is not just the ability to bear a hard thing, but to turn it into glory.",
    author: "William Barclay",
    category: CATEGORIES.SPORTS,
    subcategory: SUBCATEGORIES.ENDURANCE
  },
  {
    id: 66,
    text: "The thrill of victory and the agony of defeat.",
    author: "Jim McKay",
    category: CATEGORIES.SPORTS,
    subcategory: SUBCATEGORIES.VICTORY
  }
  // ... you can continue adding more quotes similarly ...
];

export default quotes;

