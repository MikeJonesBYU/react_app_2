// categoriesConfig.js

export const CATEGORIES = {
  MOTIVATIONAL: "Motivational",
  LOVE: "Love",
  NATURE: "Nature",
  ADVENTURE: "Adventure",
  WISDOM: "Wisdom",
  TECHNOLOGY: "Technology",
  SPORTS: "Sports"
};

export const SUBCATEGORIES = {
  LIFE: "Life",
  WORK: "Work",
  HEALTH: "Health",
  ROMANTIC: "Romantic",
  PLATONIC: "Platonic",
  FAMILY: "Family",
  FOREST: "Forest",
  MOUNTAIN: "Mountain",
  OCEAN: "Ocean",
  JOURNEY: "Journey",
  RISK: "Risk",
  DISCOVERY: "Discovery",
  ANCIENT: "Ancient",
  MODERN: "Modern",
  FUTURE: "Future",
  INNOVATION: "Innovation",
  PROGRAMMING: "Programming",
  ARTIFICIAL_INTELLIGENCE: "Artificial Intelligence",
  TEAMWORK: "Teamwork",
  ENDURANCE: "Endurance",
  VICTORY: "Victory"
};

const categoriesConfig = [
  {
    name: CATEGORIES.MOTIVATIONAL,
    subcategories: [SUBCATEGORIES.LIFE, SUBCATEGORIES.WORK, SUBCATEGORIES.HEALTH]
  },
  {
    name: CATEGORIES.LOVE,
    subcategories: [SUBCATEGORIES.ROMANTIC, SUBCATEGORIES.PLATONIC, SUBCATEGORIES.FAMILY]
  },
  {
    name: CATEGORIES.NATURE,
    subcategories: [SUBCATEGORIES.FOREST, SUBCATEGORIES.MOUNTAIN, SUBCATEGORIES.OCEAN]
  },
  {
    name: CATEGORIES.ADVENTURE,
    subcategories: [SUBCATEGORIES.JOURNEY, SUBCATEGORIES.RISK, SUBCATEGORIES.DISCOVERY]
  },
  {
    name: CATEGORIES.WISDOM,
    subcategories: [SUBCATEGORIES.ANCIENT, SUBCATEGORIES.MODERN, SUBCATEGORIES.FUTURE]
  },
  {
    name: CATEGORIES.TECHNOLOGY,
    subcategories: [SUBCATEGORIES.INNOVATION, SUBCATEGORIES.PROGRAMMING, SUBCATEGORIES.ARTIFICIAL_INTELLIGENCE]
  },
  {
    name: CATEGORIES.SPORTS,
    subcategories: [SUBCATEGORIES.TEAMWORK, SUBCATEGORIES.ENDURANCE, SUBCATEGORIES.VICTORY]
  }
];

export default categoriesConfig;
