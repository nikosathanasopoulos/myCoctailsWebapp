import { Ingredient, CocktailRecipe } from './types';
import { RECIPES_1_25 } from './data/recipes_1_25';
import { RECIPES_26_50 } from './data/recipes_26_50';
import { RECIPES_51_75 } from './data/recipes_51_75';
import { RECIPES_76_100 } from './data/recipes_76_100';
import { RECIPES_101_125 } from './data/recipes_101_125';
import { RECIPES_126_150 } from './data/recipes_126_150';
import { RECIPES_151_175 } from './data/recipes_151_175';
import { RECIPES_176_200 } from './data/recipes_176_200';

export const STOCK_INGREDIENTS: Ingredient[] = [
  // Spirits
  { id: 'gin', name: 'Gin', category: 'Spirit' },
  { id: 'vodka', name: 'Vodka', category: 'Spirit' },
  { id: 'bourbon', name: 'Bourbon/Rye Whiskey', category: 'Spirit' },
  { id: 'light_rum', name: 'Light Rum', category: 'Spirit' },
  { id: 'dark_rum', name: 'Dark Rum', category: 'Spirit' },
  { id: 'tequila', name: 'Silver Tequila', category: 'Spirit' },
  { id: 'reposado_tequila', name: 'Reposado Tequila', category: 'Spirit' },
  { id: 'base_brandy', name: 'Cognac/Brandy', category: 'Spirit' },
  { id: 'mezcal', name: 'Mezcal', category: 'Spirit' },
  
  // Liqueurs
  { id: 'triple_sec', name: 'Triple Sec / Cointreau', category: 'Liqueur' },
  { id: 'campari', name: 'Campari', category: 'Liqueur' },
  { id: 'aperol', name: 'Aperol', category: 'Liqueur' },
  { id: 'coffee_liqueur', name: 'Coffee Liqueur (Kahlúa)', category: 'Liqueur' },
  { id: 'amaretto', name: 'Amaretto', category: 'Liqueur' },
  { id: 'elderflower', name: 'Elderflower Liqueur', category: 'Liqueur' },
  
  // Vermouths
  { id: 'sweet_vermouth', name: 'Sweet Vermouth', category: 'Vermouth' },
  { id: 'dry_vermouth', name: 'Dry Vermouth', category: 'Vermouth' },
  
  // Mixers
  { id: 'soda', name: 'Club Soda / Carbonated Water', category: 'Mixer' },
  { id: 'tonic', name: 'Tonic Water', category: 'Mixer' },
  { id: 'ginger_beer', name: 'Ginger Beer', category: 'Mixer' },
  { id: 'cranberry', name: 'Cranberry Juice', category: 'Mixer' },
  { id: 'espresso', name: 'Fresh Espresso', category: 'Mixer' },
  { id: 'pineapple_juice', name: 'Pineapple Juice', category: 'Mixer' },
  { id: 'orange_juice', name: 'Orange Juice', category: 'Mixer' },
  { id: 'prosecco', name: 'Prosecco / Champagne', category: 'Mixer' },
  { id: 'lemon_juice', name: 'Fresh Lemon Juice', category: 'Mixer' },
  { id: 'lime_juice', name: 'Fresh Lime Juice', category: 'Mixer' },
  { id: 'grapefruit_juice', name: 'Grapefruit Juice', category: 'Mixer' },
  { id: 'coconut_cream', name: 'Cream of Coconut', category: 'Mixer' },
  { id: 'cream', name: 'Heavy Cream / Milk', category: 'Mixer' },
  
  // Syrups
  { id: 'simple_syrup', name: 'Simple Syrup', category: 'Syrup' },
  { id: 'honey_syrup', name: 'Honey Syrup', category: 'Syrup' },
  { id: 'grenadine', name: 'Grenadine', category: 'Syrup' },
  
  // Garnishes
  { id: 'mint', name: 'Fresh Mint Leaves', category: 'Garnish' },
  { id: 'lime_garnish', name: 'Lime Wheel or Wedge', category: 'Garnish' },
  { id: 'lemon_peel', name: 'Lemon Peel or Twist', category: 'Garnish' },
  { id: 'orange_peel', name: 'Orange Twist or Slice', category: 'Garnish' },
  { id: 'cherries', name: 'Brandied Cherries', category: 'Garnish' },
  { id: 'olives', name: 'Green Olives', category: 'Garnish' },
  { id: 'salt', name: 'Coarse Salt', category: 'Garnish' },
  
  // Others
  { id: 'angostura', name: 'Angostura Bitters', category: 'Other' },
  { id: 'orange_bitters', name: 'Orange Bitters', category: 'Other' },
  { id: 'egg_white', name: 'Egg White / Aquafaba', category: 'Other' },
];

export const CLASSIC_RECIPES: CocktailRecipe[] = [
  ...RECIPES_1_25,
  ...RECIPES_26_50,
  ...RECIPES_51_75,
  ...RECIPES_76_100,
  ...RECIPES_101_125,
  ...RECIPES_126_150,
  ...RECIPES_151_175,
  ...RECIPES_176_200,
];
