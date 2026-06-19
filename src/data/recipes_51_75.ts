import { CocktailRecipe } from '../types';

export const RECIPES_51_75: CocktailRecipe[] = [
  {
    id: 'gold_rush',
    name: 'Gold Rush',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Sour', 'Warm', 'Honey'],
    description: 'A contemporary Bourbon classic featuring rich honey syrup and fresh lemon juice.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Honey Syrup', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Shake all ingredients with ice.',
      'Strain into a rocks glass over a single large ice cube.'
    ],
    story: 'Created at NYC\'s pioneering Milk & Honey bar in the early 2000s, this is essentially a Whiskey Sour sweetened with honey instead of simple syrup.',
  },
  {
    id: 'toronto',
    name: 'Toronto',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Bitter', 'Dry', 'Rich'],
    description: 'A complex, bitter-sweet rye whiskey cocktail with herbal and aromatic dimensions.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 3, unit: 'dash' },
      { name: 'Simple Syrup', amount: 7.5, unit: 'ml' },
    ],
    garnish: 'Orange twist.',
    instructions: [
      'Stir all ingredients in an ice-filled mixing glass for 30 seconds.',
      'Strain into a chilled rocks glass over a large ice cube.'
    ],
    story: 'Originally called the Fernet Cocktail in 1922, it morphed into the "Toronto" when published in David Embury\'s 1948 book *The Art of Mixing Drinks*.',
  },
  {
    id: 'new_york_sour',
    name: 'New York Sour',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Sour', 'Rich', 'Citrusy', 'Fruity'],
    description: 'A visually stunning classic sour topped with a vibrant dry red wine float.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 22.5, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 15, unit: 'ml' }, // using vermouth as red wine float approximation
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Shake whiskey, lemon juice, and simple syrup with ice.',
      'Strain into a rocks glass over fresh ice.',
      'Slowly pour the vermouth/red wine float over the back of a bar spoon onto the top of the drink.'
    ],
    story: 'Dating back to the 1880s, designed by Chicago and NYC bartenders who floated claret on sours.',
  },
  {
    id: 'el_diablo',
    name: 'El Diablo',
    category: 'Classic',
    spiritBase: 'Tequila',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Spicy', 'Fizzy', 'Fruity', 'Refreshing'],
    description: 'An elegant highball of tequila, orange liqueur, fresh lime, topped with spicy ginger beer.',
    ingredients: [
      { name: 'Silver Tequila', amount: 45, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Ginger Beer', amount: 90, unit: 'ml' },
    ],
    garnish: 'Lime wheel.',
    instructions: [
      'Shake Tequila, Orange liqueur, and Lime juice with ice.',
      'Strain into an ice-filled highball glass, top with ginger beer.'
    ],
    story: 'First referenced in Trader Vic\'s 1946 book *Book of Food and Drink*, standing out as a rare tequila highball icon of the era.',
  },
  {
    id: 'tommys_margarita',
    name: "Tommy's Margarita",
    category: 'Classic',
    spiritBase: 'Tequila',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Sour', 'Citrusy', 'Rich', 'Earthy'],
    description: 'The golden contemporary standard Margarita: replacing orange liqueur entirely with organic honey-nectar balance.',
    ingredients: [
      { name: 'Silver Tequila', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 30, unit: 'ml' },
      { name: 'Honey Syrup', amount: 15, unit: 'ml' }, // representing honey/agave balance
    ],
    garnish: 'Lime wedge.',
    instructions: [
      'Shake all ingredients with ice.',
      'Strain over ice into an unsalted rocks glass.'
    ],
    story: 'Created by Julio Bermejo in the early 1990s at his family\'s restaurant, Tommy\'s Joint, in San Francisco.',
  },
  {
    id: 'tequila_sunrise',
    name: 'Tequila Sunrise',
    category: 'Classic',
    spiritBase: 'Tequila',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Sweet', 'Citrusy', 'Pleasing'],
    description: 'A visual tribute to dawn: sweet silver tequila and orange juice topped with heavy sinking red grenadine.',
    ingredients: [
      { name: 'Silver Tequila', amount: 50, unit: 'ml' },
      { name: 'Orange Juice', amount: 120, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' },
    ],
    garnish: 'Orange wheel and a cherry.',
    instructions: [
      'Pour Tequila and orange juice in an ice-filled highball glass and stir.',
      'Slowly pour the grenadine down the inside of the glass so it sinks, then rises naturally.'
    ],
    story: 'The modern version was created in Sausalito, California, in the 1970s and popularized by The Rolling Stones on their infamous 1972 tour.',
  },
  {
    id: 'oaxaca_old_fashioned',
    name: 'Oaxaca Old Fashioned',
    category: 'Classic',
    spiritBase: 'Tequila',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Smoky', 'Rich', 'Earthy'],
    description: 'An outstanding modern old fashioned variant blending reposado tequila, smoky mezcal, and chocolate notes.',
    ingredients: [
      { name: 'Reposado Tequila', amount: 45, unit: 'ml' },
      { name: 'Mezcal', amount: 15, unit: 'ml' },
      { name: 'Simple Syrup', amount: 5, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Flamed orange peel.',
    instructions: [
      'Stir all ingredients with ice in a mixing glass.',
      'Strain into a rocks glass over a single cube, expressing orange peel over.',
    ],
    story: 'Created in 2007 by Phil Ward at NYC\'s Death & Co., which spearheaded the global acceptance of mezcal in craft premium cocktail builds.',
  },
  {
    id: 'siesta',
    name: 'Siesta',
    category: 'Classic',
    spiritBase: 'Tequila',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Earthy', 'Bitter', 'Sour', 'Fruity'],
    description: 'A modern bitter-sweet tequila sour combining grapefruit, lime, tequila, and red bitter Campari.',
    ingredients: [
      { name: 'Silver Tequila', amount: 45, unit: 'ml' },
      { name: 'Campari', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
    ],
    garnish: 'Lime wheel.',
    instructions: [
      'Shake all ingredients vigorously with ice.',
      'Double strain into a chilled coupe.'
    ],
    story: 'Created in 2006 by bartender Katie Stipe, beautifully marrying Italian bitter spirits with Mexico\'s classic agave flavors.',
  },
  {
    id: 'bloody_mary',
    name: 'Bloody Mary',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Savory', 'Spicy', 'Salty', 'Heavy'],
    description: 'The monumental savory brunch drink, marrying clean vodka, rich tomato, lemon, spices, and salt.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' }, // spices and aromatics
      { name: 'Coarse Salt', amount: 1, unit: 'pinch' },
    ],
    garnish: 'Celery stick and lemon wedge.',
    instructions: [
      'Stir or roll the vodka, juices, seasoning, and ice gently.',
      'Strain into a chimney/highball glass rimmed with salt.'
    ],
    story: 'Supposedly dreamed up by Fernand "Pete" Petiot in Paris at the Harry\'s New York Bar in the 1920s.',
  },
  {
    id: 'harvey_wallbanger',
    name: 'Harvey Wallbanger',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Anise', 'Citrusy', 'Herbal'],
    description: 'A retro classic combining smooth vodka and fresh orange juice topped with a sweet, vanilla-anise float.',
    ingredients: [
      { name: 'Vodka', amount: 45, unit: 'ml' },
      { name: 'Orange Juice', amount: 100, unit: 'ml' },
      { name: 'Elderflower Liqueur', amount: 15, unit: 'ml' }, // Vanilla-anise sweet floral float approximation
    ],
    garnish: 'Orange wheel.',
    instructions: [
      'Build vodka and orange juice in a tall highball glass filled with ice.',
      'Stir gently to combine, then sink your sweet herbal liqueur float on top.'
    ],
    story: 'Supposedly named after a Manhattan Beach surfer named Harvey who, after drinking too many, smashed his surfboard in distress.',
  },
  {
    id: 'sea_breeze',
    name: 'Sea Breeze',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Tart', 'Fruity', 'Refreshing', 'Fizzy'],
    description: 'A tart, breeze-fueled highball marrying vodka with freshly squeezed grapefruit and cranberry.',
    ingredients: [
      { name: 'Vodka', amount: 45, unit: 'ml' },
      { name: 'Cranberry Juice', amount: 90, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 30, unit: 'ml' },
    ],
    garnish: 'Lime wedge.',
    instructions: [
      'Add all items into a tall highball glass with ice.',
      'Stir gently and drop in a lime wedge.'
    ],
    story: 'Originated in the 1930s, initially relying on gin and grenadine before cranberries became massively populated by the Ocean Spray brand.',
  },
  {
    id: 'greyhound',
    name: 'Greyhound',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Bitter-sweet', 'Tart', 'Refreshing', 'Dry'],
    description: 'The ultimate minimalist two-ingredient refresher of vodka and fresh tart grapefruit juice.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 120, unit: 'ml' },
    ],
    garnish: 'Grapefruit slice.',
    instructions: [
      'Fill a highball glass with ice.',
      'Add Vodka and top with cold fresh grapefruit juice.'
    ],
    story: 'Mentioned as early as 1930, named after the prominent bus terminal chain where regular travelers ordered this fast combination.',
  },
  {
    id: 'salty_dog',
    name: 'Salty Dog',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Salty', 'Tart', 'Refreshing', 'Bitter-sweet'],
    description: 'A Greyhound cocktail complete with an elegant, savory salt-crusted glass rim.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 120, unit: 'ml' },
      { name: 'Coarse Salt', amount: 1, unit: 'pinch' },
    ],
    garnish: 'Salt rim.',
    instructions: [
      'Rim a highball glass with lime and coarse salt.',
      'Fill with ice, add vodka and cold grapefruit juice.'
    ],
    story: 'Switched from gin to vodka in the late 1940s, providing a refreshing savory solution to summer heat.',
  },
  {
    id: 'french_martini',
    name: 'French Martini',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Sweet', 'Silky', 'Pleasing'],
    description: 'A luxurious pre-millennial favorite marrying smooth vodka, sweet black raspberry, and fresh pineapple juice.',
    ingredients: [
      { name: 'Vodka', amount: 60, unit: 'ml' },
      { name: 'Pineapple Juice', amount: 45, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' }, // sweet berry modifier approximation
    ],
    garnish: 'Lemon peel.',
    instructions: [
      'Shake all ingredients vigorously with ice.',
      'Double strain into a chilled coupe to create a wonderful dynamic pink crema.'
    ],
    story: 'Invented in the late 1980s by the prominent McNally restaurant group in NYC. It became a flagship drink of the 1990s cocktail renaissance.',
  },
  {
    id: 'appletini',
    name: 'Appletini',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Tart', 'Crisp', 'Apple'],
    description: 'A neon-green 90s staple representing pure green apple acidity balanced with smooth vodka.',
    ingredients: [
      { name: 'Vodka', amount: 45, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Simple Syrup', amount: 10, unit: 'ml' },
    ],
    garnish: 'Dehydrated apple slice.',
    instructions: [
      'Combine all items in a cocktail shaker filled with ice.',
      'Shake robustly and double strain into a chilled glass.'
    ],
    story: 'Created in 1997 at Lola\'s West Hollywood bar, quickly becoming a staple of late 1990s pop television and cinema.',
  },
  {
    id: 'kamikaze',
    name: 'Kamikaze',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Sour', 'Citrusy', 'Crisp', 'Pleasing'],
    description: 'The legendary razor-sharp combination of equal parts vodka, orange triple sec, and fresh lime.',
    ingredients: [
      { name: 'Vodka', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 30, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 30, unit: 'ml' },
    ],
    garnish: 'Lime wedge.',
    instructions: [
      'Shake vigorously with clean ice and strain into a coupe or rocks glass.'
    ],
    story: 'Born near the end of WWII in US-occupied Japan, finding immense popularity as a high-density, sharp party shooter in the 1970s and 80s.',
  },
  {
    id: 'screwdriver',
    name: 'Screwdriver',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Fruity', 'Refresh', 'Sweet', 'Simple'],
    description: 'The ancient classic template of clean vodka mixed with cold orange juice.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Orange Juice', amount: 120, unit: 'ml' },
    ],
    garnish: 'Orange slice.',
    instructions: [
      'Pour Vodka directly into an ice-filled highball glass.',
      'Top with fresh cold orange juice and stir.'
    ],
    story: 'Legend has it that American oil workers in the Persian Gulf in the mid-20th century secretly added vodka to their orange juice, using screwdrivers to stir it.',
  },
  {
    id: 'cuba_libre',
    name: 'Cuba Libre',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Sweet', 'Citrusy', 'Refreshing', 'Spicy'],
    description: 'An elevated rum and coke standard featuring crisp light rum, carbonated soda elements, and fresh lime.',
    ingredients: [
      { name: 'Light Rum', amount: 50, unit: 'ml' },
      { name: 'Ginger Beer', amount: 100, unit: 'ml' }, // Cola substitute / dark spicy soda profile
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Lime Wheel or Wedge', amount: 1, unit: 'piece' },
    ],
    garnish: 'Lime wedge.',
    instructions: [
      'Squeeze lime juice into a tall glass, add ice cubes.',
      'Pour Rum and top up with cold dark soda/ginger mix, stir briefly.'
    ],
    story: 'Created in Havana around 1900 to celebrate Cuba\'s liberation from Spain, named "Free Cuba" as a patriotic toast.',
  },
  {
    id: 'mai_tai',
    name: 'Mai Tai',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Tropical', 'Nutty', 'Citrusy', 'Earthy'],
    description: 'The undisputed king of tiki culture: rich rums balanced with almond syrup, triple sec, and fresh lime.',
    ingredients: [
      { name: 'Light Rum', amount: 30, unit: 'ml' },
      { name: 'Dark Rum', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 7.5, unit: 'ml' },
    ],
    garnish: 'Mint sprig and lime wheel (representing a tropical sunset).',
    instructions: [
      'Shake all ingredients with crushed ice except dark rum.',
      'Pour unstrained into a rocks glass, then gently float the rich dark rum on top.'
    ],
    story: 'Created in 1944 by Victor J. "Trader Vic" Bergeron. When first served to his Tahitian friend, she cried "Maita\'i roa ae!" meaning "Out of this world - the best!"',
  },
  {
    id: 'el_presidente',
    name: 'El Presidente',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Complex', 'Spirit-forward', 'Bitter-sweet', 'Elegant'],
    description: 'A grand metropolitan Cuban standard marrying rich white rum, dry vermouth, curaçao, and red sweet grenadine.',
    ingredients: [
      { name: 'Light Rum', amount: 45, unit: 'ml' },
      { name: 'Dry Vermouth', amount: 22.5, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 7.5, unit: 'ml' },
      { name: 'Grenadine', amount: 5, unit: 'ml' },
    ],
    garnish: 'Orange twist.',
    instructions: [
      'Stir all ingredients with ice in a mixing glass.',
      'Strain neat into a chilled coupe.'
    ],
    story: 'Created in Havana during the 1920s Prohibition tourism, dedicated to Cuban President Mario García Menocal.',
  },
  {
    id: 'queens_park_swizzle',
    name: "Queen's Park Swizzle",
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Minty', 'Spicy', 'Cold', 'Punchy'],
    description: 'A deeper, spicier cousin to the Mojito: dark rum swizzled with lime, sugar, mint, and layers of rich aromatic bitters.',
    ingredients: [
      { name: 'Dark Rum', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 22.5, unit: 'ml' },
      { name: 'Fresh Mint Leaves', amount: 8, unit: 'leaves' },
      { name: 'Angostura Bitters', amount: 4, unit: 'dash' },
    ],
    garnish: 'Lush mint sprig bouquet.',
    instructions: [
      'Muddle mint, syrup, and lime gently in a tall glass, fill with crushed ice.',
      'Add dark rum, stir vigorously with a swizzle stick till frosted.',
      'Float heavy dashes of aromatic bitters on top.'
    ],
    story: 'Originating in Trinidad and Tobago at the famous Queen\'s Park Hotel in Port of Spain in the late 1910s.',
  },
  {
    id: 'planters_punch',
    name: "Planter's Punch",
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Rich', 'Tropical', 'Sour'],
    description: 'A historical Caribbean classic of rich rum, sweet citrus, sugar, spices, and heavy tropical fruit juices.',
    ingredients: [
      { name: 'Dark Rum', amount: 45, unit: 'ml' },
      { name: 'Pineapple Juice', amount: 60, unit: 'ml' },
      { name: 'Orange Juice', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Grenadine', amount: 10, unit: 'ml' },
    ],
    garnish: 'Pineapple and cherry.',
    instructions: [
      'Shake all ingredients vigorously with ice.',
      'Strain over fresh ice into a tall highball.'
    ],
    story: 'First printed in 1878 in Jamaica, this punch follows the traditional rhyme: "One of Sour, Two of Sweet, Three of Strong, Four of Weak".',
  },
  {
    id: 'zombie',
    name: 'Zombie',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Highball',
    strength: 'Strong',
    flavorProfile: ['Tropical', 'Spicy', 'Fruity', 'Fiery'],
    description: 'The ultimate tiki super-potency punch: marrying multiple dark and light rums, citrus, grapefruit, and spices.',
    ingredients: [
      { name: 'Light Rum', amount: 30, unit: 'ml' },
      { name: 'Dark Rum', amount: 30, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 30, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 20, unit: 'ml' },
      { name: 'Grenadine', amount: 10, unit: 'ml' },
    ],
    garnish: 'Mint sprig and cinnamon stick.',
    instructions: [
      'Shake all ingredients vigorously with ice.',
      'Strain into a chimney highball glass packed with crushed ice.'
    ],
    story: 'Created in 1934 by Donn Beach at Hollywood\'s Don the Beachcomber bar. He famously limited customers to two of these because of their sheer strength.',
  },
  {
    id: 'mary_pickford',
    name: 'Mary Pickford',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Tropical', 'Fruity', 'Silky'],
    description: 'A sweet, pink Cuban standard combining white rum, pineapple, maraschino, and grenadine.',
    ingredients: [
      { name: 'Light Rum', amount: 45, unit: 'ml' },
      { name: 'Pineapple Juice', amount: 45, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 7.5, unit: 'ml' },
      { name: 'Grenadine', amount: 5, unit: 'ml' },
    ],
    garnish: 'Maraschino cherry.',
    instructions: [
      'Shake all ingredients with ice.',
      'Double strain into a coupe.'
    ],
    story: 'Named after legendary silent film pioneer Mary Pickford, who visited Havana during the 1920s along with Charlie Chaplin and Douglas Fairbanks.',
  },
  {
    id: 'hemingway_daiquiri',
    name: 'Hemingway Daiquiri',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Dry', 'Tart', 'Grapefruit', 'Sour'],
    description: 'The rugged, dry daiquiri favorite: adding bitter-tart grapefruit and cherry liqueur, with zero added sugar.',
    ingredients: [
      { name: 'Light Rum', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Grapefruit Juice', amount: 15, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 10, unit: 'ml' }, // curaçao sweet-tart dry balance
    ],
    garnish: 'Lime slice.',
    instructions: [
      'Shake all ingredients aggressively with ice.',
      'Double strain into a coupe to catch ice crystals.'
    ],
    story: 'Created for Ernest Hemingway at Havana\'s El Floridita. He ordered his sours with double the rum and no sugar, leading to the nickname "Papa Doble".',
  }
];
