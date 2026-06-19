export interface Ingredient {
  id: string;
  name: string;
  category: 'Spirit' | 'Liqueur' | 'Vermouth' | 'Mixer' | 'Syrup' | 'Garnish' | 'Other';
}

export interface IngredientAmount {
  name: string;
  amount: number;
  unit: string; // e.g., 'ml', 'oz', 'dash', 'tsp', 'leaves', 'slice', 'top-up'
}

export interface CocktailRecipe {
  id: string;
  name: string;
  category: 'Classic' | 'Signature' | 'Mocktail' | 'Custom';
  spiritBase: 'Gin' | 'Vodka' | 'Whiskey' | 'Rum' | 'Tequila' | 'Brand' | 'Liqueur' | 'None';
  glass: 'Coupe' | 'Rocks' | 'Highball' | 'Martini' | 'Flute' | 'Mug';
  strength: 'Non-Alcoholic' | 'Light' | 'Medium' | 'Strong';
  flavorProfile: string[]; // e.g., ["Citrusy", "Botanical", "Sweet", "Bitter"]
  ingredients: IngredientAmount[];
  garnish?: string;
  instructions: string[];
  description: string;
  story?: string;
  isCustom?: boolean;
}

export interface MixologistResponse {
  name: string;
  description: string;
  spiritBase: 'Gin' | 'Vodka' | 'Whiskey' | 'Rum' | 'Tequila' | 'Brand' | 'Liqueur' | 'None';
  glass: 'Coupe' | 'Rocks' | 'Highball' | 'Martini' | 'Flute' | 'Mug';
  strength: 'Non-Alcoholic' | 'Light' | 'Medium' | 'Strong';
  flavorProfile: string[];
  ingredients: IngredientAmount[];
  garnish?: string;
  instructions: string[];
  story?: string;
}
