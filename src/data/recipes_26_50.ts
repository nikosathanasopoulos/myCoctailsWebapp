import { CocktailRecipe } from '../types';

export const RECIPES_26_50: CocktailRecipe[] = [
  {
    id: 'white_lady',
    name: 'White Lady',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Citrusy', 'Crisp', 'Silky', 'Sour'],
    description: 'An elegant pre-war classic: botanical gin shaken with orange triple sec, fresh lemon juice, and egg white for a velvety finish.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 20, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 20, unit: 'ml' },
      { name: 'Egg White / Aquafaba', amount: 15, unit: 'ml' },
    ],
    garnish: 'Manicured lemon twist.',
    instructions: [
      'Add Gin, Triple Sec, fresh lemon juice, and egg white to your shaker.',
      'Perform a Dry Shake (without ice) for 10 seconds.',
      'Add ice cubes, close the shaker, and Wet Shake vigorously for 12 seconds until extremely cold.',
      'Double strain into a pre-chilled coupe glass.'
    ],
    story: 'Redesigned in 1929 at Harry’s New York Bar in Paris by using dry gin instead of crèmes.',
  },
  {
    id: 'french_connection',
    name: 'French Connection',
    category: 'Classic',
    spiritBase: 'Brand',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Sweet', 'Amaretto', 'Warm', 'Almond'],
    description: 'A decadent and luxurious 2-ingredient slow sipper: rich oaky French Cognac and sweet Italian Amaretto over ice.',
    ingredients: [
      { name: 'Cognac/Brandy', amount: 45, unit: 'ml' },
      { name: 'Amaretto', amount: 45, unit: 'ml' },
    ],
    garnish: 'Orange twist.',
    instructions: [
      'Fill a rocks glass with a large clear block of ice.',
      'Pour in the Cognac/Brandy and slowly pour in the Amaretto liqueur.',
      'Stir gently with a bar spoon for 15 seconds to combine and chill.'
    ],
    story: 'Named after the legendary 1971 action film starring Gene Hackman, representing a beautiful blending of French and Italian characteristics.',
  },
  {
    id: 'black_russian',
    name: 'Black Russian',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Rich', 'Sweet', 'Coffee-forward', 'Spirit-forward'],
    description: 'The intense, dark, and bittersweet predecessor of the White Russian, marrying crisp clean vodka with deep roasted coffee liqueur.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Coffee Liqueur (Kahlúa)', amount: 25, unit: 'ml' },
    ],
    garnish: 'None.',
    instructions: [
      'Add the Vodka and Coffee Liqueur to a mixing glass filled with ice.',
      'Stir smoothly for 20 seconds to chill.',
      'Strain into a rocks glass packed with fresh ice.'
    ],
    story: 'Created in 1949 by Belgian bartender Gustave Tops at the Hotel Metropole in Brussels for US Ambassador Perle Mesta.',
  },
  {
    id: 'lemon_drop_martini',
    name: 'Lemon Drop Martini',
    category: 'Classic',
    spiritBase: 'Vodka',
    glass: 'Martini',
    strength: 'Medium',
    flavorProfile: ['Citrusy', 'Sweet', 'Tart', 'Refreshing'],
    description: 'A beautifully balanced sweet & tart citrus standard combining premium vodka, triple sec, clean lemon, and a touch of syrup.',
    ingredients: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 20, unit: 'ml' },
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
    ],
    garnish: 'Sugar rim and lemon wheel.',
    instructions: [
      'Prepare a chilled martini glass by painting an elegant sugar rim on one side.',
      'Add Vodka, Triple Sec, fresh lemon juice, and simple syrup to a shaker with plenty of ice.',
      'Shake vigorously for 12 seconds.',
      'Double strain into the prepared glass.'
    ],
    story: 'Invented in the 1970s by Norman Jay Hobday at Henry Africa\'s bar in San Francisco.',
  },
  {
    id: 'paper_plane',
    name: 'Paper Plane',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Bitter', 'Sour', 'Citrusy', 'Herbal'],
    description: 'A modern classic combining bourbon, herbal Aperol, amaro, and fresh lemon juice in perfect equal parts.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 22.5, unit: 'ml' },
      { name: 'Aperol', amount: 22.5, unit: 'ml' },
      { name: 'Campari', amount: 22.5, unit: 'ml' }, // mapped from amaro
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Tiny paper plane clip-on.',
    instructions: [
      'Add Bourbon, Aperol, Campari, and fresh lemon juice to a cocktail shaker.',
      'Fill with ice and shake vigorously for 12 seconds.',
      'Strain into a chilled coupe glass.'
    ],
    story: 'Created by award-winning bartender Sam Ross in 2008 for the opening of the bar The Violet Hour in Chicago. Named after the M.I.A. song "Paper Planes".',
  },
  {
    id: 'penicillin',
    name: 'Penicillin',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Medium',
    flavorProfile: ['Spicy', 'Earthy', 'Sour', 'Smoky'],
    description: 'A legendary modern cure-all marrying blended scotch whiskey with fresh lemon, spicy ginger, sweet honey syrup, and a smoky float.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
      { name: 'Honey Syrup', amount: 10, unit: 'ml' },
      { name: 'Ginger Beer', amount: 15, unit: 'ml' }, // representing the fresh ginger element
    ],
    garnish: 'Candied ginger piece.',
    instructions: [
      'Muddle ginger syrup or ingredients in a shaker if fresh. Otherwise, combine Bourbon, lemon juice, honey syrup, and ginger beer.',
      'Shake vigorously with ice for 12 seconds.',
      'Strain into a rocks glass over a single large ice cube.'
    ],
    story: 'Invented by Sydney mixology legend Sam Ross in NYC in 2005. It is widely considered the most successful scotch cocktail of the 21st century.',
  },
  {
    id: 'last_word',
    name: 'Last Word',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Botanical', 'Herbal', 'Sour', 'Sweet'],
    description: 'A sharp, complex pre-prohibition masterpiece composed of equal parts dry gin, herbal liqueurs, maraschino, and fresh lime.',
    ingredients: [
      { name: 'Gin', amount: 22.5, unit: 'ml' },
      { name: 'Elderflower Liqueur', amount: 22.5, unit: 'ml' }, // Representing complex botanical modifier
      { name: 'Sweet Vermouth', amount: 22.5, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Luxardo cherries.',
    instructions: [
      'Combine Gin, herbal modifiers, and lime juice in a shaker with plenty of ice.',
      'Shake hard for 12 seconds until icy cold.',
      'Strain into a coupe glass.'
    ],
    story: 'Created at the Detroit Athletic Club in the early 1920s and famously revived by Murray Stenson at Seattle\'s Zig Zag Café in 2004.',
  },
  {
    id: 'martinez',
    name: 'Martinez',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Botanical', 'Rich', 'Sweet', 'Spirit-forward'],
    description: 'The sweet, complex grandfather of the Martini, marrying sweet vermouth, Old Tom gin, and maraschino notes.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 45, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 5, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Stir all ingredients in an ice-filled mixing glass for 30 seconds.',
      'Strain into a coupe or martini glass.',
      'Garnish with a lemon peel.'
    ],
    story: 'Dating back to the 1880s, this drink was often touted as the bridge between Manhattan and the modern Dry Martini.',
  },
  {
    id: 'aviation',
    name: 'Aviation',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Floral', 'Sour', 'Citrusy', 'Botanical'],
    description: 'A sky-blue, elegant floral standard created in the early 20th century, balancing botanical gin, lemon juice, and violet notes.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 15, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Simple Syrup', amount: 5, unit: 'ml' },
    ],
    garnish: 'Brandied cherry.',
    instructions: [
      'Combine all ingredients in a cocktail shaker with ice.',
      'Shake vigorously for 10 seconds to chill.',
      'Strain into a coupe glass and garnish with a brandied cherry.'
    ],
    story: 'Created by Hugo Ensslin, head bartender at the Hotel Wallick in New York, and first published in his 1916 recipe guide.',
  },
  {
    id: 'clover_club',
    name: 'Clover Club',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Silky', 'Sour', 'Sweet'],
    description: 'A pre-Prohibition gentleman\'s standard featuring dry gin, sweet raspberry syrup, tart lemon, and elegant egg white foam.',
    ingredients: [
      { name: 'Gin', amount: 50, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' }, // representing berry/sweet profile
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Egg White / Aquafaba', amount: 15, unit: 'ml' },
    ],
    garnish: 'Fresh mint leaf on foam.',
    instructions: [
      'Dry shake all ingredients without ice for 10 seconds to whip the egg white.',
      'Add ice and shake wet for 12 seconds until frozen.',
      'Double strain into a coupe.'
    ],
    story: 'Named after a Philadelphia club of prominent writers, lawyers, and businessmen who met regularly at the Bellevue-Stratford Hotel starting in the 1880s.',
  },
  {
    id: 'corpse_reviver_2',
    name: 'Corpse Reviver #2',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Citrusy', 'Crisp', 'Herbal', 'Complex'],
    description: 'An exceptional morning picker-up balancing equal parts gin, orange liqueur, dry vermouth, and fresh lemon with a dash of absinthe.',
    ingredients: [
      { name: 'Gin', amount: 22.5, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 22.5, unit: 'ml' },
      { name: 'Dry Vermouth', amount: 22.5, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Lemon peel twist.',
    instructions: [
      'Rinse a chilled coupe glass with a single dash of botanical bitters or liqueur if available.',
      'Shake gin, triple sec, dry vermouth, and lemon juice with ice.',
      'Strain into the coupe glass and garnish with a lemon wheel.'
    ],
    story: 'Harry Craddock, compiler of *The Savoy Cocktail Book* of 1930, famously warned: "Four of these taken in swift succession will unrevive the corpse again."',
  },
  {
    id: 'southside',
    name: 'Southside',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Minty', 'Citrusy', 'Refreshing', 'Crisp'],
    description: 'The gin counterpart of the Mojito: crisp botanical gin, vibrant fresh lime, simple syrup, and refreshing garden mint.',
    ingredients: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 22.5, unit: 'ml' },
      { name: 'Simple Syrup', amount: 15, unit: 'ml' },
      { name: 'Fresh Mint Leaves', amount: 6, unit: 'leaves' },
    ],
    garnish: 'Single gorgeous mint leaf floated.',
    instructions: [
      'Gently slap the mint and place in the shaker.',
      'Add Gin, lime, and simple syrup with ice.',
      'Shake vigorously and double strain into a chilled coupe.'
    ],
    story: 'Associated with the South Side of Chicago during Prohibition, where Al Capone\'s gang imported sweet gin, while the North Side gang drank dry gin.',
  },
  {
    id: 'singapore_sling',
    name: 'Singapore Sling',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Highball',
    strength: 'Medium',
    flavorProfile: ['Tropical', 'Fruity', 'Complex', 'Herbaceous'],
    description: 'A spectacular, pink tropical classic marrying gin with cherry branding, herbal components, citrus, and sweet pineapple juice.',
    ingredients: [
      { name: 'Gin', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 7.5, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 7.5, unit: 'ml' },
      { name: 'Pineapple Juice', amount: 120, unit: 'ml' },
      { name: 'Fresh Lime Juice', amount: 15, unit: 'ml' },
      { name: 'Grenadine', amount: 10, unit: 'ml' },
    ],
    garnish: 'Pineapple wedge and cherry.',
    instructions: [
      'Combine all items in a cocktail shaker filled with ice.',
      'Shake vigorously for 12 seconds.',
      'Strain into a highball glass over ice.'
    ],
    story: 'Created in 1915 by Ngiam Tong Boon at the Long Bar in the Raffles Hotel, Singapore, designed to look like fruit juice to bypass drinking taboos for women.',
  },
  {
    id: 'hanky_panky',
    name: 'Hanky Panky',
    category: 'Classic',
    spiritBase: 'Gin',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Bitter', 'Sweet', 'Herbal', 'Botanical'],
    description: 'A sweet, complex, and slightly bitter vintage masterpiece combining gin, sweet vermouth, and a rich bitter digestif.',
    ingredients: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 45, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 3, unit: 'dash' }, // Mapped from fernet
    ],
    garnish: 'Orange peel twist.',
    instructions: [
      'Stir all ingredients with ice in a mixing glass for 30 seconds.',
      'Strain neat into a chilled coupe.',
      'Express orange oils over the glass.'
    ],
    story: 'Created by Ada Coleman, head bartender at the Savoy Hotel\'s American Bar in London, in 1925 for actor Charles Hawtrey.',
  },
  {
    id: 'negroni_sbagliato',
    name: 'Negroni Sbagliato',
    category: 'Classic',
    spiritBase: 'Liqueur',
    glass: 'Rocks',
    strength: 'Light',
    flavorProfile: ['Effervescent', 'Bitter', 'Herbal', 'Sweet'],
    description: 'A lighter, sparking mistake: swapping the bold gin of a classic Negroni for fine sparkling Italian prosecco.',
    ingredients: [
      { name: 'Campari', amount: 30, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Prosecco / Champagne', amount: 60, unit: 'ml' },
      { name: 'Orange Twist or Slice', amount: 1, unit: 'piece' },
    ],
    garnish: 'Orange slice.',
    instructions: [
      'Combine Campari and sweet vermouth in an ice-filled rocks glass.',
      'Top up with sparkling Prosecco.',
      'Stir very briefly and garnish with an orange slice.'
    ],
    story: 'Mirko Stocchetto at Milan\'s Bar Basso accidentally grabbed a bottle of Prosecco instead of Gin when mixing a standard Negroni in 1972.',
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Classic',
    spiritBase: 'Liqueur',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Bitter', 'Fizzy', 'Refreshing', 'Sweet'],
    description: 'A sparkling, bitter-sweet Italian classic combining Campari, rich sweet vermouth, and crisp cooling club soda.',
    ingredients: [
      { name: 'Campari', amount: 30, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Club Soda / Carbonated Water', amount: 90, unit: 'ml' },
      { name: 'Orange Twist or Slice', amount: 1, unit: 'piece' },
    ],
    garnish: 'Orange wheel slice and lemon twist.',
    instructions: [
      'Pour Campari and Sweet Vermouth directly into a highball glass over ice.',
      'Top with cold club soda and stir gently.'
    ],
    story: 'Originally named "Milano-Torino" after its origin ingredients. It was renamed "Americano" due to its immense popularity among American tourists in the early 20th century.',
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    category: 'Classic',
    spiritBase: 'Liqueur',
    glass: 'Highball',
    strength: 'Light',
    flavorProfile: ['Fruity', 'Sweet', 'Bitter', 'Fluffy'],
    description: 'An elegant Italian breakfast/brunch drink of bitter red Campari topped with freshly whipped, frothy orange juice.',
    ingredients: [
      { name: 'Campari', amount: 45, unit: 'ml' },
      { name: 'Orange Juice', amount: 120, unit: 'ml' },
    ],
    garnish: 'Orange wheel half.',
    instructions: [
      'Whip or blend high-quality orange juice to build a frothy foam head.',
      'Pour Campari into an ice-filled highball glass first.',
      'Gently layer the whipped orange juice over the top.'
    ],
    story: 'Named after Giuseppe Garibaldi, the general of the Italian unification. The bitter Campari represents the red capes of his soldiers, and oranges represent the South.',
  },
  {
    id: 'old_pal',
    name: 'Old Pal',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Bitter', 'Dry', 'Spicy', 'Spirit-forward'],
    description: 'A drier, spicy companion to the Boulevardier, marrying rye whiskey with dry vermouth and bitter Campari.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' },
      { name: 'Campari', amount: 30, unit: 'ml' },
      { name: 'Dry Vermouth', amount: 30, unit: 'ml' },
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Stir Bourbon, Campari, and Dry Vermouth with ice in a mixing glass.',
      'Strain into a pre-chilled coupe.'
    ],
    story: 'Created by Sparrow Robertson, a legendary sports writer and regular at Harry’s New York Bar in Paris during the late 1920s.',
  },
  {
    id: 'ward_8',
    name: 'Ward 8',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Sweet', 'Sour', 'Citrusy', 'Rich'],
    description: 'A pre-prohibition Boston original: rye whiskey shaken with fresh lemon, orange, and sweet grenadine.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml' },
      { name: 'Orange Juice', amount: 15, unit: 'ml' },
      { name: 'Grenadine', amount: 10, unit: 'ml' },
    ],
    garnish: 'Cherry and orange slice.',
    instructions: [
      'Combine all elements in a cocktail shaker with ice.',
      'Shake vigorously and strain into a coupe.'
    ],
    story: 'Created in 1898 at Boston\'s Locke-Ober restaurant to celebrate the election of political boss Martin M. Lomasney to the General Court representing Ward 8.',
  },
  {
    id: 'sazerac',
    name: 'Sazerac',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Anise', 'Rich', 'Aromatic'],
    description: 'New Orleans\' official cocktail: rye whiskey, cognac, sugar, Peychaud bitters, complete with a fragrant absinthe rim wash.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' },
      { name: 'Cognac/Brandy', amount: 15, unit: 'ml' },
      { name: 'Simple Syrup', amount: 5, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 3, unit: 'dash' },
    ],
    garnish: 'Lemon peel twist expressed.',
    instructions: [
      'Rinse a chilled rocks glass with botanical liqueur or bitters and dump excess.',
      'Stir whiskey, cognac, syrup, and bitters with ice in a separate mixing glass.',
      'Strain neat (no ice) into the prepared glass. Twist lemon peel over it.'
    ],
    story: 'Dating back to the mid-19th century New Orleans, originally mixed using Sazerac de Forge cognac before phylloxera forced the switch to rye whiskey.',
  },
  {
    id: 'rusty_nail',
    name: 'Rusty Nail',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Sweet', 'Rich', 'Spirit-forward', 'Warm'],
    description: 'An old-school slow sipper combining rich Scotch whiskey with sweet, botanical honey-herbal Drambuie liqueur.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' },
      { name: 'Honey Syrup', amount: 20, unit: 'ml' }, // Swapped for dramatical honey essence balance
    ],
    garnish: 'Lemon peel twist.',
    instructions: [
      'Build directly in a rocks glass with a large block of ice.',
      'Stir gently to chill and combine.'
    ],
    story: 'A Mid-Century icon, famously drank by the Rat Pack at the Sands Hotel in Las Vegas during the 1960s.',
  },
  {
    id: 'godfather',
    name: 'Godfather',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Rocks',
    strength: 'Strong',
    flavorProfile: ['Warm', 'Almond', 'Spirit-forward', 'Sweet'],
    description: 'A classic 1970s two-ingredient blend of scotch whiskey and sweet almond Amaretto over ice.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 45, unit: 'ml' },
      { name: 'Amaretto', amount: 30, unit: 'ml' },
    ],
    garnish: 'Orange twist.',
    instructions: [
      'Pour scotch/bourbon and Amaretto into a rocks glass filled with ice.',
      'Stir gently for 15 seconds.'
    ],
    story: 'Supposedly a favorite drink of legendary actor Marlon Brando, who starred in the 1972 cinematic masterpiece *The Godfather*.',
  },
  {
    id: 'rob_roy',
    name: 'Rob Roy',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Warm', 'Sweet', 'Bitter'],
    description: 'The Scottish version of the Manhattan, swapping sweet rye whiskey for smoky blended scotch.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' }, // representing base spirit class
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Angostura Bitters', amount: 2, unit: 'dash' },
    ],
    garnish: 'Brandied cherry.',
    instructions: [
      'Combine all ingredients in a mixing glass with ice.',
      'Stir for 30 seconds until cold, then strain into a coupe.'
    ],
    story: 'Created in NYC\'s Waldorf Astoria in 1894 to mark the premiere of a popular operetta based on Scottish folklore hero Rob Roy MacGregor.',
  },
  {
    id: 'blood_and_sand',
    name: 'Blood & Sand',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Medium',
    flavorProfile: ['Fruity', 'Deep', 'Sweet', 'Citrusy'],
    description: 'A deeply complex orange-forward classic combining blended scotch, sweet cherry liqueur, sweet vermouth, and fresh orange juice.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 22.5, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 22.5, unit: 'ml' },
      { name: 'Grenadine', amount: 22.5, unit: 'ml' }, // sweet berry cherry essence
      { name: 'Orange Juice', amount: 22.5, unit: 'ml' },
    ],
    garnish: 'Orange peel twist.',
    instructions: [
      'Combine all ingredients in a cocktail shaker filled with ice.',
      'Shake vigorously and strain into a chilled coupe.'
    ],
    story: 'First published in Harry Craddock\'s 1930 Savoy collection. Named after Rudolph Valentino\'s famous 1922 silent bullfighter film *Blood and Sand*.',
  },
  {
    id: 'bobby_burns',
    name: 'Bobby Burns',
    category: 'Classic',
    spiritBase: 'Whiskey',
    glass: 'Coupe',
    strength: 'Strong',
    flavorProfile: ['Spirit-forward', 'Rich', 'Complex', 'Herbal'],
    description: 'An incredible rich scotch Manhattan variant with an addition of sweet, herbal elixir details.',
    ingredients: [
      { name: 'Bourbon/Rye Whiskey', amount: 60, unit: 'ml' },
      { name: 'Sweet Vermouth', amount: 30, unit: 'ml' },
      { name: 'Triple Sec / Cointreau', amount: 5, unit: 'ml' }, // modification representing sweet accents
    ],
    garnish: 'Lemon twist.',
    instructions: [
      'Stir all ingredients with ice in a mixing glass for 30 seconds.',
      'Strain neat into a chilled coupe.'
    ],
    story: 'Dedicated to Robert Burns, Scotland\'s greatest national poet, commonly enjoyed on Burns Night.'
  }
];
