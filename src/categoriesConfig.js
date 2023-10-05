// categoriesConfig.js
export const CATEGORIES = {
    MOTIVATIONAL: "Motivational",
    LOVE: "Friendship",
    // ... add more main categories as needed
  };
  
  export const SUBCATEGORIES = {
    LIFE: "Life",
    WORK: "Work",
    HEALTH: "Health",
    REPITITION: "Repeated",
    ROMANTIC: "Casual",
    PLATONIC: "Close",
    FAMILY: "Family",
    // ... add more subcategories as needed
  };
  
  const categoriesConfig = [
    {
      name: CATEGORIES.MOTIVATIONAL,
      subcategories: [SUBCATEGORIES.LIFE, SUBCATEGORIES.WORK, SUBCATEGORIES.REPITITION]
    },
    {
      name: CATEGORIES.LOVE,
      subcategories: [SUBCATEGORIES.ROMANTIC, SUBCATEGORIES.PLATONIC, SUBCATEGORIES.FAMILY]
    }
    // ... add more categories and subcategories as needed
  ];
  
  export default categoriesConfig;
  