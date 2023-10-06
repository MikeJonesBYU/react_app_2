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
  },
  {
    id: 100,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: CATEGORIES.MOTIVATIONAL,
    subcategory: SUBCATEGORIES.LIFE
  },
  {
    id: 101,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: CATEGORIES.MOTIVATIONAL,
    subcategory: SUBCATEGORIES.WORK
  },
  {
    id: 102,
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: CATEGORIES.MOTIVATIONAL,
    subcategory: SUBCATEGORIES.LIFE
  },
  {
    id: 103,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: CATEGORIES.MOTIVATIONAL,
    subcategory: SUBCATEGORIES.WORK
  },
  {
    id: 104,
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: CATEGORIES.MOTIVATIONAL,
    subcategory: SUBCATEGORIES.LIFE
  },
  {
    id: 105,
    text: "We are most alive when we're in love.",
    author: "John Updike",
    category: CATEGORIES.LOVE,
    subcategory: SUBCATEGORIES.ROMANTIC
  },
  {
    id: 106,
    text: "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    author: "Henry Miller",
    category: CATEGORIES.LOVE,
    subcategory: SUBCATEGORIES.FAMILY
  },
  {
    id: 107,
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou",
    category: CATEGORIES.LOVE,
    subcategory: SUBCATEGORIES.ROMANTIC
  },
  {
    id: 108,
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: CATEGORIES.LOVE,
    subcategory: SUBCATEGORIES.PLATONIC
  },
  {
    id: 109,
    text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller",
    category: CATEGORIES.LOVE,
    subcategory: SUBCATEGORIES.FAMILY
  }
  
  
  // ... you can continue adding more quotes similarly ...
];

export default quotes;

