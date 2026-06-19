import { CocktailRecipe } from '../types';

export const RECIPES_76_100: CocktailRecipe[] = [
  {
    id: 'hurricane',
    name: 'Hurricane',
    category: 'Classic',
    spiritBase: 'Rum',
    glass: 'Highball',
    strength: 'Strong',
    flavorProfile: ['Sweet', 'Tropical', 'Fruity', 'Rich'],
    description: 'A sweet, high-potency New Orleans standard combining dark and light rums, passionfruit notes, and lemon.',
    ingredients: [
      { name: 'Light Rum', amount: 60, unit: 'ml' },
      { name: 'Dark Rum', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 30, unit: 'ml' },
      { name: 'Grenadine', amount: 20, unit: 'ml' },
    ],
    garnish: 'Orange wheel and cherry.',
    instructions: [
      'Combine all ingredients in a cocktail shaker with ice.',
      'Shake vigorously and strain into a tall curved glass over crushed ice.'
    ],
    story: 'Invented at Pat O\'Brien\'s bar in New Orleans during WWII to help offload slow-selling rum stocks.',
  },
  {
    id: 'brandy_alexander',
    name: 'Brandy Alexander',
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Creamy', 'Sweet', 'Rich', 'Warm'],
    description: 'A decadent, creamy dessert signature combining fine brandy, rich cocoa notes, and heavy double cream.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 30, unit: 'ml' },
      { name: 'Coffee Liqueur (Kahlúa)', amount: 30, unit: 'ml' }, // mapped sweet dark cocoa representation
      { name: 'Heavy Cream / Milk', amount: 30, unit: 'ml' },
    ],
    garnish: 'Freshly grated nutmeg.',
    instructions: [
      'Shake all ingredients extremely well with ice to aerate the heavy cream.',
      'Double strain into a pre-chilled coupe and grate fresh nutmeg over.'
    ],
    story: 'An evolution of the original gin-based Alexander, supposedly created in London in 1922 for the royal wedding of Princess Mary.',
  },
  {
    id: 'vieux_carre',
    name: 'Vieux Carré',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Rich', 'Warm', 'Herbal'],
    description: 'A luxurious, deep and complex slow-sipper merging rye whiskey, cognac, sweet vermouth, herbal notes, and bitters.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 30, unit: 'ml' },
      { name: 'Cognac/Brandy', amount: 30, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 7.5, unit: 'ml' }, // complex sweet-herbal modifier approximation
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Lemon twist and cherry.',
    instructions: [
      'Stir all ingredients in an ice-filled mixing glass for 30 seconds.',
      'Strain into a rocks glass over a single cube.'
    ],
    story: 'Created in 1938 by Walter Bergeron at the legendary Carousel Bar in the Hotel Monteleone, named after New Orleans\' French Quarter ("Vieux Carré").',
  },
  {
    id: 'stinger',
    name: 'Stinger',
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Minty', 'Sweet', 'Spirit-forward', 'Cold'],
    description: 'The ultimate historic upper-class digestif pairing clean brandy with cooling white mint.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 60, unit: 'ml' },
      { name: 'Fresh Mint Leaves', amount: 12, unit: 'leaves' }, // muddled mint for sweet cooling profile
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
    ],
    garnish: 'Mint sprig.',
    instructions: [
      'Gently muddle mint, syrup, and brandy in a shaker.',
      'Add plenty of ice, shake hard, and double strain into a chilled coupe.'
    ],
    story: 'Created in the late 19th century, famously ordered by society legend Reginald Vanderbilt and popularized in classic cinema like *High Society*.',
  },
  {
    id: 'brandy_sour',
    name: 'Brandy Sour',
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Sour', 'Citrusy', 'Rich', 'Sweet'],
    description: 'The ancient citrus standard sour, balancing fine Cognac brandy, fresh lemon, sugar, and bitters.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 60, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 22.5, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 1, unit: 'dash' },
    ],
    garnish: 'Orange wheel.',
    instructions: [
      'Shake brandy, lemon, and syrup with ice.',
      'Strain into an ice-filled rocks glass and drop a dash of bitters over.'
    ],
    story: 'Dating back to the earliest 19th century sour blueprints when brandy was the preferred spirit in metropolitan USA.',
  },
  {
    id: 'horses_neck',
    name: "Horse's Neck",
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Fizzy', 'Refreshing', 'Warm', 'Ginger'],
    description: 'A spectacular simple hybrid of brandy, aromatic bitters, and cold spicy ginger beer.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 45, unit: 'ml' },
      { name: 'Ginger Beer', amount: 120, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Extremely long lemon spiral draped over the rim.',
    instructions: [
      'Pack a tall highball glass with ice and wrap a complete lemon peel spiral internally.',
      'Pour brandy and ginger beer, top with bitters.'
    ],
    story: 'Supposedly called "Horse\'s Neck" because the long spiral peel resembled a horse\'s neck draped over the side of the glass.',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Bitter', 'Sour', 'Citrusy', 'Dry'],
    description: 'A beautiful pastel pink gin sour combining bitter Campari, refreshing triple sec, and lemon.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Campari', amount: 7.5, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 7.5, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Shake all ingredients vigorously with ice.',
      'Double strain into a coupe.'
    ],
    story: 'Created by Paul Harrington at the Townhouse Bar in Emeryville, California, in the mid-1990s. Named after a favorite regular.',
  },
  {
    id: 'bamboo',
    name: 'Bamboo',
    category: 'Classic',
    spiritBase: 'Liqueur', // dry vermouth / sherry base representation
    glass: 'Coupe',
    strength: 'Light',
    flavorProfile: ['Dry', 'Aromatic', 'Botanical', 'Spirit-forward'],
    description: 'A dry, brilliant low-alcohol classic combining dry vermouth, sweet vermouth, and orange bitters.',
    ingredients: [
      { name: 'Dry Vermouth', amount: 45, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 45, unit: 'ml' },
      { name: 'Orange Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Lemon peel.',
    instructions: [
      'Stir all ingredients in an ice-filled mixing glass and strain into a pre-chilled coupe.'
    ],
    story: 'Created in the 1890s by Louis Eppinger at the Grand Hotel in Yokohama, Japan, catering to Western travelers expecting vermouth standards.',
  },
  {
    id: 'bellini',
    name: 'Bellini',
    category: 'Classic',
    spiritBase: 'None',
    glass: 'Flute',
    strength: 'Light',
    flavorProfile: ['Sweet', 'Fruity', 'Effervescent', 'Refreshing'],
    description: 'A classic Venetian celebratory standard of sweet pureed fruit topped with fine dry prosecco.',
    ingredients: [
      { name: 'Prosecco / Champagne', amount: 90, unit: 'ml' },
      { name: 'Simple Syrup', amount: 15, unit: 'ml' }, // sweet pureed syrup balance approximation
    ],
    garnish: 'Fresh fruit slice.',
    instructions: [
      'Add sweet fruit modifier to a chilled champagne flute.',
      'Top slowly with cold sparkling Prosecco, stirring gently once.'
    ],
    story: 'Created in 1948 by Giuseppe Cipriani, owner of Harry\'s Bar in Venice. He named it after the Renaissance painter Giovanni Bellini.',
  },
  {
    id: 'mimosa',
    name: 'Mimosa',
    category: 'Classic',
    spiritBase: 'None',
    glass: 'Flute',
    strength: 'Light',
    flavorProfile: ['Fresh', 'Effervescent', 'Citrusy', 'Simple'],
    description: 'The universal brunch celebration pairing dry cold sparkling wine and fresh citrus orange juice.',
    ingredients: [
      { name: 'Prosecco / Champagne', amount: 75, unit: 'ml' },
      { name: 'Orange Juice', amount: 75, unit: 'ml' },
    ],
    garnish: 'Orange wheel.',
    instructions: [
      'Pour orange juice into a chilled flute.',
      'Slowly top up with dry cold Prosecco.'
    ],
    story: 'Created at the Ritz Hotel in Paris in 1925 by Frank Meier, named after the bright yellow Mimosa plant.',
  },
  {
    id: 'champagne_cocktail',
    name: 'Champagne Cocktail',
    category: 'Classic',
    spiritBase: 'None',
    glass: 'Flute',
    strength: 'Light',
    flavorProfile: ['Aromatic', 'Effervescent', 'Dry', 'Sweet'],
    description: 'An elegant sparkling classic featuring a bitter-soaked sugar cube dissolving slowly in dry champagne.',
    ingredients: [
      { name: 'Prosecco / Champagne', amount: 120, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 3, unit: 'dash' },
      { name: 'Simple Syrup', amount: 5, unit: 'ml' }, // sweet sugar representation
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Pour sugar/syrup and bitters into a flute.',
      'Top up slowly with cold dry champagne and express a lemon peel over.'
    ],
    story: 'One of the oldest recorded cocktails, dating back to Jerry Thomas\' 1862 collection *The Bon Vivant\'s Companion*.',
  },
  {
    id: 'irish_coffee',
    name: 'Irish Coffee',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Mug',
    strength: 'Medium',
    flavorProfile: ['Roasted', 'Warm', 'Creamy', 'Sweet'],
    description: 'The legendary winter warmer: hot rich coffee, oaky Irish whiskey, and sugar topped with cold cream.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' }, // rye/bourbon standard proxy
      { name: 'Espresso', amount: 60, unit: 'ml' }, // coffee base element
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
      { name: 'Heavy Cream / Milk', amount: 30, unit: 'ml' },
    ],
    garnish: 'Coffee beans dusting.',
    instructions: [
      'In a warm mug, combine hot coffee, whiskey, and simple syrup.',
      'Gently layer lightly whipped cold cream on top so it floats.'
    ],
    story: 'Created in 1943 by Joe Sheridan at Foynes Flying Boat Terminal in Ireland to warm up cold airline passengers arriving from Newfoundland.',
  },
  {
    id: 'hot_toddy',
    name: 'Hot Toddy',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Mug',
    strength: 'Light',
    flavorProfile: ['Warm', 'Spicy', 'Earthy', 'Lemon'],
    description: 'Warm comfort in a glass: steaming water, hot whiskey, lemon, and cloves.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Honey Syrup', amount: 20, unit: 'ml' },
    ],
    garnish: 'Cinnamon stick and lemon slice.',
    instructions: [
      'Combine whiskey, lemon, and honey in a warm mug.',
      'Fill with piping hot water and stir with a cinnamon stick.'
    ],
    story: 'Utilized for centuries as a traditional Scottish remedy for high winter cold or chills.',
  },
  {
    id: 'gin_fizz',
    name: 'Gin Fizz',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Citrusy', 'Fizzy', 'Refreshing', 'Sour'],
    description: 'A crisp, cold, and airy classic: dry gin shaken with lemon and sugar and topped with bubbly soda.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 20, unit: 'ml' },
      { name: 'Club Soda / Carbonated Water', amount: 60, unit: 'ml' },
    ],
    garnish: 'Lemon slice.',
    instructions: [
      'Shake gin, lemon juice, and syrup vigorously with ice.',
      'Strain into a highball glass, top up with cold club soda.'
    ],
    story: 'Made wildly famous in New Orleans starting in the 1880s, becoming an iconic morning eye-opener.',
  },
  {
    id: 'bramble',
    name: 'Bramble',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Sour', 'Citrusy', 'Fruity', 'Berry-forward'],
    description: 'A beautiful premium classic of dry gin, lemon, and sweet rich berry grenadine.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' }, // sweet berry finish
    ],
    garnish: 'Blackberry or brandied cherries.',
    instructions: [
      'Shake gin, lemon juice, and simple syrup with ice.',
      'Strain into a rocks glass packed with crushed ice, then drizzle grenadine over the top.'
    ],
    story: 'Created by London mixologist legend Dick Bradsell in Fred\'s Club in London in 1984, seeking to craft a true British summer drink.',
  },
  {
    id: 'gibson',
    name: 'Gibson',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Martini',
    strength: 'Strong',
    flavorProfile: ['Dry', 'Botanical', 'Savory', 'Crisp'],
    description: 'A dry martini given a beautiful, vintage savory twist by swapping the olive for a pickled cocktail onion.',
    ingredients: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Dry Vermouth', amount: 10, unit: 'ml' },
      { name: 'Olives', amount: 1, unit: 'piece' }, // picked onion alternative proxy
    ],
    garnish: 'Cocktail pickled onion.',
    instructions: [
      'Stir gin and dry vermouth with clean ice for 30 seconds.',
      'Strain into a frozen martini glass and drop in the onion.'
    ],
    story: 'Created at NYC\'s Players Club in the early 2000s or 1930s, popular with creative artists.',
  },
  {
    id: 'pink_lady',
    name: 'Pink Lady',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Silky', 'Sour', 'Sweet'],
    description: 'An old-school theatrical classic of dry gin, sweet grenadine, tart lemon, and silky egg white.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Egg White / Aquafaba', amount: 15, unit: 'ml' },
    ],
    garnish: 'Cherry.',
    instructions: [
      'Dry shake, then wet shake with ice and strain into a coupe.'
    ],
    story: 'Created in the early 20th century, named after the popular 1911 musical theater show of the same name.',
  },
  {
    id: 'pegu_club',
    name: 'Pegu Club',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Citrusy', 'Spicy', 'Dry', 'Sour'],
    description: 'A pre-war colonial signature combining gin, dry orange liqueur, fresh lime, and aromatic angostura.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 1, unit: 'dash' },
      { name: 'Orange Bitters', amount: 1, unit: 'dash' },
    ],
    garnish: 'Lime peel.',
    instructions: [
      'Shake all ingredients with ice.',
      'Double strain into a coupe.'
    ],
    story: 'The signature cocktail of the celebrated Pegu Club in Rangoon, Burma during the British colonial era.',
  },
  {
    id: 'bijou',
    name: 'Bijou',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Rich', 'Herbal', 'Sweet', 'Spirit-forward'],
    description: 'A high-potency pre-war standard of gin, sweet vermouth, orange curaçao, and organic modifiers.',
    ingredients: [
      { name: 'Gin', amount: 30, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 30, unit: 'ml' },
      { name: 'Orange Bitters', amount: 1, unit: 'dash' },
    ],
    garnish: 'Cherry and orange twist.',
    instructions: [
      'Stir all ingredients with ice and strain into a coupe.'
    ],
    story: 'First referenced in Harry Johnson\'s 1900 collection. Named "Bijou" (jewel) because it combined crystal gin (diamond), vermouth (ruby), and herbal green (emerald).',
  },
  {
    id: 'eastside',
    name: 'Eastside',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Refreshing', 'Minty', 'Crisp', 'Sour'],
    description: 'A crisp modern standard adding cooling mint and fresh cucumber to a gin gimlet framework.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 20, unit: 'ml' },
      { name: 'Fresh Mint Leaves', amount: 6, unit: 'leaves' },
    ],
    garnish: 'Cucumber wheel.',
    instructions: [
      'Muddle cucumber and mint gently in a shaker.',
      'Add gin, lime, and simple syrup with ice.',
      'Shake vigorously and double strain into a coupe.'
    ],
    story: 'Created in the early 2000s in NYC as a cooling, garden-fresh response to Prohibition classic templates.',
  },
  {
    id: 'ramos_gin_fizz',
    name: 'Ramos Gin Fizz',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Citrusy', 'Floral', 'Creamy'],
    description: 'The legendary frothy, rich New Orleans orange blossom fizz of gin, cream, lime, lemon, egg white, and orange flower notes.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Simple Syrup', amount: 20, unit: 'ml' },
      { name: 'Heavy Cream / Milk', amount: 30, unit: 'ml' },
      { name: 'Egg White / Aquafaba', amount: 15, unit: 'ml' },
      { name: 'Club Soda / Carbonated Water', amount: 30, unit: 'ml' },
    ],
    garnish: 'Orange blossom oils.',
    instructions: [
      'Shake all ingredients without ice for 20 seconds to emulsify.',
      'Add ice and shake hard for at least 60 seconds.',
      'Strain into a highball glass (no ice), then add soda slowly to raise a foam tower.',
    ],
    story: 'Created in 1888 by Henry C. Ramos at the Imperial Cabinet Saloon in New Orleans. His crew of "shaker boys" would shake cocktails continuously for 12 minutes to build the tower.',
  },
  {
    id: 'japanese_cocktail',
    name: 'Japanese Cocktail',
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Rich', 'Sweet', 'Almond', 'Spirit-forward'],
    description: 'A pre-war classic utilizing Cognac brandy, sweet almond syrup, and angostura aromatic bitters.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 60, unit: 'ml' },
      { name: 'Honey Syrup', amount: 15, unit: 'ml' }, // almond/sweet high-density modifier proxy
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Stir all ingredients with ice and strain into a coupe.'
    ],
    story: 'First printed in Jerry Thomas\' 1862 collection, celebrating the first Japanese diplomatic mission to the US in 1860.',
  },
  {
    id: 'clover_club_original',
    name: 'White Clover Club',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Silky', 'Sour', 'Sweet'],
    description: 'An original sweet berry variant of the classic Clover Club with simple syrup modifications.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Grenadine', amount: 20, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 20, unit: 'ml' },
      { name: 'Egg White / Aquafaba', amount: 15, unit: 'ml' },
    ],
    garnish: 'Berry skewered.',
    instructions: [
      'Dry shake, wet shake, and double strain into a coupe.'
    ],
    story: 'Dating to the pre-Prohibition era of Philadelphia.',
  },
  {
    id: 'champagne_sparkler',
    name: 'Champagne Sparkler',
    category: 'Signature',
    spiritBase: 'None',
    glass: 'Flute',
    strength: 'Light',
    flavorProfile: ['Sweet', 'Effervescent', 'Fruity', 'Light'],
    description: 'A sparkling signature combining sweet berry syrup and sparkling champagne.',
    ingredients: [
      { name: 'Prosecco / Champagne', amount: 100, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Drizzle syrup into a chilled champagne flute, top up with cold bubbly champagne.'
    ],
    story: 'Created as a luxury signature celebrating beautiful milestones.',
  },
  {
    id: 'cosmophilic_signature',
    name: 'Cosmophilic Sparkler',
    category: 'Signature',
    spiritBase: 'Vodka',
    glass: 'Flute',
    strength: 'Medium',
    flavorProfile: ['Effervescent', 'Citrusy', 'Fruity', 'Elegant'],
    description: 'An exquisite sparkling signature, combining crisp vodka, triple sec, citrus, topped with cold prosecco.',
    ingredients: [
      { name: 'Vodka', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Prosecco / Champagne', amount: 60, unit: 'ml' },
    ],
    garnish: 'Orange peel spiral.',
    instructions: [
      'Shake vodka, triple sec, and lime with ice.',
      'Strain into a champagne flute and top with sparkling prosecco.'
    ],
    story: 'Designed as a 100th celebration masterwork representing perfect high-energy balance.',
  }
];
