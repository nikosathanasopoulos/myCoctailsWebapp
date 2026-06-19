import React, { useState, useEffect } from 'react';
import { CocktailRecipe, IngredientAmount } from './types';
import { CLASSIC_RECIPES, STOCK_INGREDIENTS } from './data';
import CabinetDrawer from './components/CabinetDrawer';
import GlassIcon from './components/GlassIcon';
import { uiTranslations, ingredientTranslations, recipeTranslations } from './translations';
import {
  Search,
  Sparkles,
  SlidersHorizontal,
  Flame,
  Wine,
  BookOpen,
  Compass,
  Plus,
  Check,
  Volume2,
  Dice5,
  X,
  AlertCircle,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Bookmark
} from 'lucide-react';

export default function App() {
  // -------------------------------------------------------------
  // Language & Local Storage Persistence
  // -------------------------------------------------------------
  const [lang, setLang] = useState<'en' | 'el'>(() => {
    const saved = localStorage.getItem('alambic_lang');
    return (saved === 'el' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('alambic_lang', lang);
  }, [lang]);

  const t = uiTranslations[lang];

  // -------------------------------------------------------------
  // States & Local Storage Persistence
  // -------------------------------------------------------------
  const [cabinetIngredients, setCabinetIngredients] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('alambic_cabinet');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error("Error loading cabinet ingredients from localStorage", e);
    }
    return ['Gin', 'Campari', 'Sweet Vermouth', 'Fresh Orange Juice'];
  });

  const [customRecipes, setCustomRecipes] = useState<CocktailRecipe[]>(() => {
    try {
      const saved = localStorage.getItem('alambic_custom_recipes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error("Error loading custom recipes from localStorage", e);
    }
    return [];
  });

  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('old_fashioned');
  const [heroTab, setHeroTab] = useState<'ingredients' | 'instructions' | 'story'>('ingredients');

  // Interactive preparation checklist state
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Navigation and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpirit, setSelectedSpirit] = useState<string>('All');
  const [selectedStrength, setSelectedStrength] = useState<string>('All');
  const [showMatchReadyOnly, setShowMatchReadyOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSpirit, selectedStrength, showMatchReadyOnly]);

  // Synchronize state with Local Storage
  useEffect(() => {
    localStorage.setItem('alambic_cabinet', JSON.stringify(cabinetIngredients));
  }, [cabinetIngredients]);

  useEffect(() => {
    localStorage.setItem('alambic_custom_recipes', JSON.stringify(customRecipes));
  }, [customRecipes]);

  // Reset checked lists when active recipe changes
  useEffect(() => {
    setCheckedSteps({});
    setCheckedIngredients({});
  }, [selectedRecipeId]);

  // All combined recipes (Classic standard + Custom AI generated)
  const allRecipes = [...CLASSIC_RECIPES, ...customRecipes];

  // Localized recipe mapping helper
  const getLocalizedRecipe = (recipe: CocktailRecipe): CocktailRecipe => {
    if (lang === 'en') return recipe;
    const translation = recipeTranslations[recipe.id];
    if (!translation) return recipe;
    return {
      ...recipe,
      name: translation.name,
      description: translation.description,
      garnish: translation.garnish || recipe.garnish,
      instructions: translation.instructions,
      story: translation.story || recipe.story,
      flavorProfile: translation.flavorProfile || recipe.flavorProfile,
      ingredients: recipe.ingredients.map(ing => {
        const greekName = ingredientTranslations[ing.name];
        return greekName ? { ...ing, name: greekName } : ing;
      })
    };
  };

  // List of all localized recipes for the current active language representation
  const localizedAllRecipes = allRecipes.map(getLocalizedRecipe);

  // Current featured recipe object
  const currentRecipe = localizedAllRecipes.find(r => r.id === selectedRecipeId) || localizedAllRecipes[0];

  // -------------------------------------------------------------
  // Cabinet Matching Logic
  // -------------------------------------------------------------
  const getRecipeMatchStats = (recipe: CocktailRecipe) => {
    const requiredItems = recipe.ingredients.map(ing => ing.name.toLowerCase());
    const matchedItems = recipe.ingredients.filter(ing =>
        cabinetIngredients.some(ci => ci.toLowerCase() === ing.name.toLowerCase() ||
            ing.name.toLowerCase().includes(ci.toLowerCase()) ||
            ci.toLowerCase().includes(ing.name.toLowerCase()))
    );
    const matchCount = matchedItems.length;
    const totalCount = requiredItems.length;
    const isFullyMatch = matchCount === totalCount;
    const missingIngredients = recipe.ingredients.filter(ing =>
        !cabinetIngredients.some(ci => ci.toLowerCase() === ing.name.toLowerCase() ||
            ing.name.toLowerCase().includes(ci.toLowerCase()) ||
            ci.toLowerCase().includes(ing.name.toLowerCase()))
    );

    return {
      matchCount,
      totalCount,
      percent: Math.round((matchCount / totalCount) * 100),
      isFullyMatch,
      missingIngredients
    };
  };

  // Toggle ingredient in home cabinet
  const handleToggleIngredient = (name: string) => {
    setCabinetIngredients(prev =>
        prev.includes(name)
            ? prev.filter(item => item !== name)
            : [...prev, name]
    );
  };

  const handleClearCabinet = () => {
    setCabinetIngredients([]);
  };

  // Add all missing ingredients of current recipe to Cabinet
  const handleQuickStockMissing = (ingredients: IngredientAmount[]) => {
    const originalRecipe = allRecipes.find(r => r.id === currentRecipe.id);
    if (!originalRecipe) return;
    const namesToStock = originalRecipe.ingredients.map(i => i.name);
    setCabinetIngredients(prev => {
      const updated = [...prev];
      namesToStock.forEach(name => {
        if (!updated.includes(name)) {
          updated.push(name);
        }
      });
      return updated;
    });
  };

  // Shuffle button action (pick a random matching / standard cocktail)
  const handleShuffleRecipe = () => {
    const listToPick = sortedFilteredRecipes.length > 0 ? sortedFilteredRecipes : localizedAllRecipes;
    const randomIndex = Math.floor(Math.random() * listToPick.length);
    setSelectedRecipeId(listToPick[randomIndex].id);
  };

  // -------------------------------------------------------------
  // Search & Filtering Execution
  // -------------------------------------------------------------
  const filteredRecipes = localizedAllRecipes.filter(recipe => {
    const rawRecipe = allRecipes.find(r => r.id === recipe.id)!;
    const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rawRecipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rawRecipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.flavorProfile.some(fp => fp.toLowerCase().includes(searchQuery.toLowerCase())) ||
        rawRecipe.flavorProfile.some(fp => fp.toLowerCase().includes(searchQuery.toLowerCase())) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        rawRecipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpirit = selectedSpirit === 'All' || recipe.spiritBase === selectedSpirit;
    const matchesStrength = selectedStrength === 'All' || recipe.strength === selectedStrength;

    const stats = getRecipeMatchStats(rawRecipe);
    const matchesMatchReady = !showMatchReadyOnly || stats.isFullyMatch;

    return matchesSearch && matchesSpirit && matchesStrength && matchesMatchReady;
  });

  // Sort recipes: Put fully matching ones first, then by match percentage
  const sortedFilteredRecipes = [...filteredRecipes].sort((a, b) => {
    const rawA = allRecipes.find(r => r.id === a.id)!;
    const rawB = allRecipes.find(r => r.id === b.id)!;
    const statsA = getRecipeMatchStats(rawA);
    const statsB = getRecipeMatchStats(rawB);
    return statsB.percent - statsA.percent;
  });

  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(sortedFilteredRecipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = sortedFilteredRecipes.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  const handleDeleteCustomRecipe = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to discard this custom reservation?')) {
      setCustomRecipes(prev => prev.filter(r => r.id !== id));
      if (selectedRecipeId === id) {
        setSelectedRecipeId('old_fashioned');
      }
    }
  };

  // Helper translation maps for glass type and alcoholic strength
  const getLocalizedGlassName = (glassName: string) => {
    const key = `glass_${glassName}` as const;
    return t[key as keyof typeof t] || glassName;
  };

  const getLocalizedStrengthName = (strengthName: string) => {
    const normKey = strengthName.replace('-', '');
    const key = `strength_${normKey}` as const;
    return t[key as keyof typeof t] || strengthName;
  };

  return (
      <div className="min-h-screen bg-[#0a0a0a] text-stone-200 font-sans flex flex-col md:flex-row antialiased overflow-x-hidden selection:bg-[#c9a050] selection:text-[#0a0a0a]" id="alambic-app">

        {/* -------------------------------------------------------------
          Left Column Bar (Desktop Navigation & Branding Sidebar)
          ------------------------------------------------------------- */}
        <aside className="w-full md:w-80 bg-[#111]/80 md:min-h-screen border-b md:border-b-0 md:border-r border-stone-850 p-6 flex flex-col justify-between shrink-0" id="sidebar-panel">
          <div>
            {/* Logo Brand Header & Language Toggle */}
            <div className="mb-8 flex items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-serif tracking-widest text-[#c9a050] uppercase" id="brand-title">{t.brandTitle}</h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mt-1.5 font-mono">{t.brandSubtitle}</p>
              </div>

              {/* Language Switcher Trigger */}
              <div className="flex bg-[#161616] p-1 rounded border border-stone-800 scale-95 shrink-0 align-middle">
                <button
                    onClick={() => setLang('en')}
                    className={`px-2 py-1 rounded text-[10px] font-bold font-mono transition-all ${
                        lang === 'en' ? 'bg-[#c9a050] text-[#0a0a0a]' : 'text-stone-400 hover:text-stone-200'
                    }`}
                    title="English Version"
                    id="lang-btn-en"
                >
                  EN
                </button>
                <button
                    onClick={() => setLang('el')}
                    className={`px-2 py-1 rounded text-[10px] font-bold font-mono transition-all ${
                        lang === 'el' ? 'bg-[#c9a050] text-[#0a0a0a]' : 'text-stone-400 hover:text-stone-200'
                    }`}
                    title="Ελληνική Έκδοση"
                    id="lang-btn-el"
                >
                  ΕΛ
                </button>
              </div>
            </div>

            {/* Sidebar Search box */}
            <div className="relative mb-6 text-left">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-[#141414] hover:bg-[#181818] focus:bg-[#181818] border border-stone-800 hover:border-stone-700 focus:border-[#c9a050] text-[#e7e5e4] focus:outline-none pl-10 pr-9 py-2.5 rounded text-xs transition-all font-sans"
                  id="search-input"
              />
              {searchQuery && (
                  <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 pointer-events-auto"
                      id="btn-clear-search"
                      title="Clear Search"
                  >
                    <X className="w-4 h-4" />
                  </button>
              )}
            </div>

            {/* Quick Cabinets Stats Info */}
            <div className="bg-[#141414] rounded-lg border border-stone-800/80 p-4 mb-6">
              <h4 className="text-[10px] uppercase tracking-widest text-stone-500 font-mono mb-2">{t.cabinetStatus}</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xl font-serif text-[#c9a050] block">{cabinetIngredients.length}</span>
                  <span className="text-[10px] text-stone-400 font-sans">{t.activeIngredients}</span>
                </div>
                <div>
                <span className="text-xl font-serif text-stone-200 block">
                  {allRecipes.filter(r => getRecipeMatchStats(r).isFullyMatch).length}
                </span>
                  <span className="text-[10px] text-stone-400 font-sans">{t.mixableDrinks}</span>
                </div>
              </div>
            </div>

            <nav className="space-y-6">
              {/* Navigation options */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono block">{t.collectionNav}</span>

                <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSpirit('All');
                      setSelectedStrength('All');
                      setShowMatchReadyOnly(false);
                    }}
                    className={`w-full flex items-center gap-3 p-2 rounded text-left text-xs uppercase tracking-wider font-mono hover:bg-[#161616] ${!showMatchReadyOnly ? 'text-[#c9a050] bg-[#161616]' : 'text-stone-400 hover:text-stone-200'}`}
                    id="btn-nav-all"
                >
                  <Compass className="w-4 h-4 text-[#c9a050]" />
                  {t.showAllCocktails} ({allRecipes.length})
                </button>

                <button
                    onClick={() => {
                      setShowMatchReadyOnly(true);
                    }}
                    className={`w-full flex items-center gap-3 p-2 rounded text-left text-xs uppercase tracking-wider font-mono hover:bg-[#161616] ${showMatchReadyOnly ? 'text-[#c9a050] bg-[#161616]' : 'text-stone-400 hover:text-stone-200'}`}
                    id="btn-nav-matched"
                >
                  <Check className="w-4 h-4 text-emerald-500" />
                  {t.mixableRightNow}
                </button>
              </div>

              {/* Custom Recipes Sub-Shelf */}
              {customRecipes.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-stone-850">
                    <span className="text-[10px] uppercase tracking-widest text-[#c9a050]/80 font-mono block">{t.customInfusions}</span>
                    <div className="max-h-48 overflow-y-auto space-y-1.5 scrollbar-thin">
                      {customRecipes.map(recipe => (
                          <div
                              key={recipe.id}
                              onClick={() => setSelectedRecipeId(recipe.id)}
                              className={`group flex items-center justify-between p-2 rounded text-xs cursor-pointer transition-all ${
                                  selectedRecipeId === recipe.id ? 'bg-[#c9a050]/10 text-stone-100 border-l-2 border-[#c9a050]' : 'text-stone-400 hover:bg-stone-900/60'
                              }`}
                              id={`sidebar-custom-${recipe.id}`}
                          >
                      <span className="truncate pr-2 font-mono flex items-center gap-1.5">
                        <Bookmark className="w-3 h-3 text-[#c9a050]" />
                        {recipe.name}
                      </span>
                            <button
                                onClick={(e) => handleDeleteCustomRecipe(recipe.id, e)}
                                className="opacity-0 group-hover:opacity-100 p-1 hover:text-rose-400 transition-opacity"
                                id={`del-custom-${recipe.id}`}
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                      ))}
                    </div>
                  </div>
              )}
            </nav>
          </div>
        </aside>

        {/* -------------------------------------------------------------
          Main Sandbox Dashboard Area
          ------------------------------------------------------------- */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto" id="main-dashboard-content">

          {/* Top bar with quick metrics & triggers */}
          <header className="h-20 border-b border-stone-850/80 flex items-center justify-between px-6 sm:px-10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#c9a050]">{t.constantChill}</span>
              <span className="text-stone-600 font-mono text-[10px]">|</span>
              <span className="text-xs text-stone-400 font-serif">{t.idealService}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quick random pick matching */}
              <button
                  onClick={handleShuffleRecipe}
                  className="px-4 py-2 border border-[#c9a050]/40 text-[#c9a050] text-xs uppercase tracking-widest font-mono hover:bg-[#c9a050] hover:text-black transition-all flex items-center gap-2"
                  title="Pick a random recipe"
                  id="btn-shuffle-drink"
              >
                <Dice5 className="w-3.5 h-3.5" />
                <span>{t.shuffleCabinet}</span>
              </button>
            </div>
          </header>

          {/* -------------------------------------------------------------
            Featured Recipe Spotlight Display (Split Masterpiece Hero)
            ------------------------------------------------------------- */}
          <section className="bg-gradient-to-b from-stone-950 to-[#0a0a0a] border-b border-stone-850 p-6 sm:p-10" id="hero-spotlight">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

              {/* Masterpiece Metadata details */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#c9a050] text-[10px] uppercase tracking-[0.4em] font-bold font-mono">{t.spotlightRecipe}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-stone-900 border border-stone-800 text-stone-400">
                  {lang === 'el' ? (t[`cat_${currentRecipe.category.replace(' ', '')}` as keyof typeof t] || currentRecipe.category) : currentRecipe.category}
                </span>
                  {currentRecipe.isCustom && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {lang === 'el' ? 'Προσαρμοσμένο' : 'Custom'}
                  </span>
                  )}
                </div>

                <div>
                  <h2 className="text-4xl sm:text-5xl font-serif text-stone-100 tracking-wide mt-2" id="hero-cocktail-name">
                    {currentRecipe.name}
                  </h2>
                  <p className="text-xs text-stone-500 italic mt-1 font-mono">
                    {t.baseSpirit}: <span className="text-[#c9a050] font-semibold">{lang === 'el' ? (ingredientTranslations[currentRecipe.spiritBase] || currentRecipe.spiritBase) : currentRecipe.spiritBase}</span> &bull; {getLocalizedGlassName(currentRecipe.glass)} &bull; {t.intensity}: {getLocalizedStrengthName(currentRecipe.strength)}
                  </p>
                </div>

                <p className="text-stone-400 leading-relaxed italic text-lg" id="hero-cocktail-description">
                  "{currentRecipe.description}"
                </p>

                {/* Table of contents tabs */}

                {/* Interactive Tabs for Recipe Ingredients, Methods, Stories */}
                <div className="border-b border-stone-800 flex gap-4 overflow-x-auto scrollbar-none" id="tabs-indicator">
                  {(['ingredients', 'instructions', 'story'] as const).map(tab => (
                      <button
                          key={tab}
                          onClick={() => setHeroTab(tab)}
                          className={`pb-3 text-xs uppercase tracking-wider font-mono transition-colors border-b ${
                              heroTab === tab
                                  ? 'border-[#c9a050] text-[#c9a050] font-bold'
                                  : 'border-transparent text-stone-400 hover:text-stone-300'
                          }`}
                          id={`tab-hero-${tab}`}
                      >
                        {tab === 'ingredients' ? t.glassIngredients : tab === 'instructions' ? t.mixologyMethod : t.historicalChronicle}
                      </button>
                  ))}
                </div>

                {/* Tab: Ingredients list & checkmarks */}
                {heroTab === 'ingredients' && (
                    <div className="space-y-4 animate-fadeIn" id="content-ingredients">
                      <div className="flex items-center gap-3 text-stone-400 text-xs text-left">
                        <span className="font-mono">{t.vesselStandard}:</span>
                        <span className="text-stone-200 font-serif border-stone-800 px-2 py-0.5 rounded border bg-stone-900/50">
                      {lang === 'el' ? 'Παγωμένο' : 'Chilled'} {getLocalizedGlassName(currentRecipe.glass)}
                    </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentRecipe.ingredients.map((ing, idx) => {
                          const isChecked = !!checkedIngredients[`${currentRecipe.id}-${idx}`];
                          return (
                              <div
                                  key={idx}
                                  onClick={() => setCheckedIngredients(prev => ({...prev, [`${currentRecipe.id}-${idx}`]: !isChecked}))}
                                  className={`flex items-center justify-between p-3 rounded border cursor-pointer transition-all ${
                                      isChecked
                                          ? 'bg-[#c9a050]/5 border-[#c9a050]/40 text-stone-400'
                                          : 'bg-[#121212] border-stone-850 hover:border-stone-800 text-stone-200'
                                  }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all ${
                                      isChecked ? 'bg-[#c9a050] border-[#c9a050]' : 'border-stone-700'
                                  }`}>
                                    {isChecked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                  </div>
                                  <span className={`text-xs text-left ${isChecked ? 'line-through decoration-stone-600' : ''}`}>
                              {ing.name}
                            </span>
                                </div>
                                <span className="text-xs font-mono font-bold text-[#c9a050] bg-[#c9a050]/5 px-2 py-1 rounded shrink-0">
                            {ing.amount} {lang === 'el' ? (t[`unit_${ing.unit}` as keyof typeof t] || ing.unit) : ing.unit}
                          </span>
                              </div>
                          );
                        })}
                      </div>

                      {currentRecipe.garnish && (
                          <div className="p-3 bg-[#121212] border border-stone-850 rounded text-xs flex items-center justify-between">
                            <span className="text-stone-400 font-mono">{t.recommendedGarnish}:</span>
                            <span className="text-[#c9a050] italic font-semibold text-right">{currentRecipe.garnish}</span>
                          </div>
                      )}
                    </div>
                )}

                {/* Tab: Instructions / Step-by-Step guides */}
                {heroTab === 'instructions' && (
                    <div className="space-y-3 animate-fadeIn" id="content-instructions">
                      {currentRecipe.instructions.map((step, idx) => {
                        const isChecked = !!checkedSteps[`${currentRecipe.id}-${idx}`];
                        return (
                            <div
                                key={idx}
                                onClick={() => setCheckedSteps(prev => ({...prev, [`${currentRecipe.id}-${idx}`]: !isChecked}))}
                                className={`flex items-start gap-4 p-3.5 rounded border cursor-pointer transition-all ${
                                    isChecked
                                        ? 'bg-stone-900/50 border-stone-850/50 text-stone-500'
                                        : 'bg-[#121212] border-stone-850 hover:border-stone-800 text-stone-200'
                                }`}
                                id={`preparation-step-${idx}`}
                            >
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 transition-all ${
                                  isChecked ? 'bg-stone-800 text-[#c9a050]' : 'bg-[#c9a050]/10 text-[#c9a050] border border-[#c9a050]/30'
                              }`}>
                                {idx + 1}
                              </div>
                              <p className={`text-xs leading-relaxed ${isChecked ? 'line-through decoration-[#c9a050]/35' : ''}`}>
                                {step}
                              </p>
                            </div>
                        );
                      })}
                    </div>
                )}

                {/* Tab: Story / Backstory of the drink */}
                {heroTab === 'story' && (
                    <div className="p-5 bg-stone-900/30 border border-stone-850 rounded-lg space-y-4 animate-fadeIn" id="content-story">
                      <h4 className="text-xs uppercase tracking-widest text-[#c9a050] font-mono leading-tight">{t.originsAnecdote}</h4>
                      <p className="text-stone-300 text-xs leading-relaxed font-serif tracking-wide whitespace-pre-line text-left">
                        {currentRecipe.story || (lang === 'el' ? 'Αυτή η συνταγή αναπτύχθηκε στη σύγχρονη εποχή των craft κοκτέιλ, συνδυάζοντας την κλασική Mixology ισορροπία με νέες σπιτικές εκχύσεις.' : 'This particular recipe was developed in the modern craft cocktail era, blending traditional mixology balances with new wave house infusions.')}
                      </p>
                    </div>
                )}
              </div>

            </div>
          </section>

          {/* -------------------------------------------------------------
            Interactive Live Search & Filter Bar Custom Panel
            ------------------------------------------------------------- */}
          <section className="p-6 sm:p-10 border-b border-stone-850/60 max-w-6xl w-full mx-auto" id="filter-controls">
            <div className="space-y-6">

              <div className="flex flex-col sm:flex-row gap-4 justify-end">

                {/* Match Ready Only Filter Switcher */}
                <button
                    onClick={() => setShowMatchReadyOnly(!showMatchReadyOnly)}
                    className={`py-3 px-5 text-xs font-mono uppercase tracking-wider rounded border transition-all flex items-center justify-between gap-3 ${
                        showMatchReadyOnly
                            ? 'bg-emerald-500/10 border-emerald-500/50 text-[#fff] font-bold'
                            : 'bg-[#111] border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                    }`}
                    id="btn-filter-match-ready"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                        showMatchReadyOnly ? 'bg-emerald-500 border-emerald-500' : 'border-stone-600'
                    }`}>
                      {showMatchReadyOnly && <Check className="w-2.5 h-2.5 text-black stroke-[4]" />}
                    </div>
                    <span>{t.matchReadyOnly}</span>
                  </div>
                </button>
              </div>

              {/* Multi-layered Quick Filter categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Spirits quick selection */}
                <div className="space-y-2 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#c9a050] font-mono font-bold block">{t.spiritBase}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['All', 'Gin', 'Vodka', 'Whiskey', 'Rum', 'Tequila', 'Brand', 'Liqueur', 'None'].map(spirit => {
                      const getLocalizedSpiritName = (s: string) => {
                        if (lang !== 'el') return s;
                        if (s === 'All') return 'Όλα';
                        if (s === 'None') return 'Κανένα';
                        return ingredientTranslations[s] || s;
                      };
                      return (
                          <button
                              key={spirit}
                              onClick={() => setSelectedSpirit(spirit)}
                              className={`px-3 py-1.5 rounded uppercase font-mono text-[9px] tracking-wider border transition-all ${
                                  selectedSpirit === spirit
                                      ? 'bg-[#c9a050]/20 border-[#c9a050] text-[#c9a050] font-bold'
                                      : 'bg-[#111] border-stone-800 text-stone-400 hover:text-stone-200'
                              }`}
                              id={`filter-spirit-${spirit.toLowerCase()}`}
                          >
                            {getLocalizedSpiritName(spirit)}
                          </button>
                      );
                    })}
                  </div>
                </div>

                {/* Strength selectors */}
                <div className="space-y-2 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#c9a050] font-mono font-bold block">{t.alcoholicIntensity}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['All', 'Non-Alcoholic', 'Light', 'Medium', 'Strong'].map(strength => {
                      const getLocalizedStrengthLabel = (str: string) => {
                        if (lang !== 'el') return str;
                        if (str === 'All') return 'Όλα';
                        return getLocalizedStrengthName(str);
                      };
                      return (
                          <button
                              key={strength}
                              onClick={() => setSelectedStrength(strength)}
                              className={`px-3 py-1.5 rounded uppercase font-mono text-[9px] tracking-wider border transition-all ${
                                  selectedStrength === strength
                                      ? 'bg-[#c9a050]/20 border-[#c9a050] text-[#c9a050] font-bold'
                                      : 'bg-[#111] border-stone-800 text-stone-400 hover:text-stone-200'
                              }`}
                              id={`filter-strength-${strength.toLowerCase().replace(' ', '-')}`}
                          >
                            {getLocalizedStrengthLabel(strength)}
                          </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* -------------------------------------------------------------
            Master Cocktail List Block
            ------------------------------------------------------------- */}
          <section className="px-6 sm:p-10 max-w-6xl w-full mx-auto flex-1 space-y-6" id="coctail-collection">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif tracking-wide text-stone-300">
                {t.drinkLibrary} <span className="text-stone-500 font-sans text-sm">({sortedFilteredRecipes.length} {lang === 'el' ? 'επιλεγμένα' : 'curated'})</span>
              </h3>
              {showMatchReadyOnly && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono uppercase">
                Filter: {t.cabinetCompatible}
              </span>
              )}
            </div>

            {sortedFilteredRecipes.length === 0 ? (
                <div className="p-12 text-center bg-[#111] border border-stone-850 rounded-2xl space-y-4">
                  <Compass className="w-10 h-10 text-stone-600 mx-auto" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-stone-400">{t.noCocktailsMathDesc}</p>
                    <p className="text-xs text-stone-500 max-w-md mx-auto">
                      {t.clearFiltersSuggestion}
                    </p>
                  </div>
                  <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedSpirit('All');
                        setSelectedStrength('All');
                        setShowMatchReadyOnly(false);
                      }}
                      className="px-4 py-2 bg-stone-900 hover:bg-[#161616] border border-stone-800 hover:border-stone-700 text-[#c9a050] text-xs font-mono uppercase tracking-wider transition-colors rounded"
                      id="btn-reset-filters"
                  >
                    {t.resetAllFilters}
                  </button>
                </div>
            ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="cocktails-grid">
                    {paginatedRecipes.map(recipe => {
                      const stats = getRecipeMatchStats(recipe);
                      const isSelected = selectedRecipeId === recipe.id;

                      return (
                          <div
                              key={recipe.id}
                              onClick={() => {
                                setSelectedRecipeId(recipe.id);
                                // Scroll beautifully up to the spotlight section on mobile
                                document.getElementById('hero-spotlight')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-4 group ${
                                  isSelected
                                      ? 'bg-[#111] border-[#c9a050] ring-1 ring-[#c9a050]/20 shadow-[0_4px_25px_rgba(201,160,80,0.06)] scale-[0.99]'
                                      : 'bg-[#111]/60 hover:bg-[#111] border-stone-850 hover:border-stone-800'
                              }`}
                              id={`cocktail-card-${recipe.id}`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <div className="text-left">
                                  <p className="text-[9px] uppercase tracking-wider font-mono text-[#c9a050] font-bold">
                                    {lang === 'el' ? (ingredientTranslations[recipe.spiritBase] || recipe.spiritBase) : recipe.spiritBase} {lang === 'el' ? 'ως Βάση' : 'Base'}
                                  </p>
                                  <h4 className="text-lg font-serif text-stone-200 mt-1 line-clamp-1 group-hover:text-[#c9a050] transition-colors">
                                    {recipe.name}
                                  </h4>
                                </div>
                              </div>

                              <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed text-left">
                                {recipe.description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-stone-850/80 flex items-center justify-between text-[10px] font-mono text-stone-500">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                              recipe.strength === 'Strong' ? 'bg-[#c9a050]' : recipe.strength === 'Medium' ? 'bg-amber-400/80' : 'bg-[#e5e5e5]/40'
                          }`} />
                          {t.intensity}: {getLocalizedStrengthName(recipe.strength)}
                        </span>

                              {/* Match percentage meter */}
                              <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wide ${
                                  stats.isFullyMatch
                                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                      : stats.percent >= 50
                                          ? 'bg-amber-500/5 text-amber-500/90 border border-amber-500/10'
                                          : 'bg-stone-900 text-stone-500'
                              }`}>
                          {stats.isFullyMatch ? (lang === 'el' ? 'Διαθέσιμο' : 'Makeable') : `${lang === 'el' ? 'Ταίριασμα' : 'Match'}: ${stats.percent}%`}
                        </span>
                            </div>
                          </div>
                      );
                    })}
                  </div>

                  {/* Pagination controls */}
                  {totalPages > 1 && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-850/60 font-mono text-xs text-stone-400 animate-fadeIn" id="cocktail-pagination">
                        <div className="text-stone-500 text-center sm:text-left">
                          {t.showingCocktails} <span className="text-[#c9a050] font-sans font-bold">{Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, sortedFilteredRecipes.length)}</span>–<span className="text-[#c9a050] font-sans font-bold">{Math.min(currentPage * ITEMS_PER_PAGE, sortedFilteredRecipes.length)}</span> {t.of} <span className="text-stone-300 font-sans font-bold">{sortedFilteredRecipes.length}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                              onClick={() => {
                                const targetPage = Math.max(currentPage - 1, 1);
                                setCurrentPage(targetPage);
                                document.getElementById('coctail-collection')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              disabled={currentPage === 1}
                              className={`p-2 border rounded flex items-center gap-1 transition-all ${
                                  currentPage === 1
                                      ? 'border-stone-900 bg-stone-950/30 text-stone-600 cursor-not-allowed'
                                      : 'border-stone-800 bg-stone-900/60 text-stone-300 hover:text-[#c9a050] hover:border-[#c9a050] hover:bg-[#c9a050]/5 cursor-pointer'
                              }`}
                              id="btn-pagination-prev"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline uppercase text-[9px] tracking-wider font-mono">{t.previous}</span>
                          </button>

                          {/* Quick page numbers drawer list */}
                          <div className="flex items-center gap-1 overflow-x-auto max-w-[12rem] sm:max-w-none scrollbar-none">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
                              const isCurrent = pageNum === currentPage;
                              return (
                                  <button
                                      key={pageNum}
                                      onClick={() => {
                                        setCurrentPage(pageNum);
                                        document.getElementById('coctail-collection')?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                      className={`w-8 h-8 shrink-0 rounded border text-[11px] font-mono font-bold transition-all ${
                                          isCurrent
                                              ? 'bg-[#c9a050]/20 border-[#c9a050] text-[#c9a050]'
                                              : 'border-stone-850 bg-stone-900/20 hover:bg-stone-900/60 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                                      }`}
                                      id={`btn-pagination-page-${pageNum}`}
                                  >
                                    {pageNum}
                                  </button>
                              );
                            })}
                          </div>

                          <button
                              onClick={() => {
                                const targetPage = Math.min(currentPage + 1, totalPages);
                                setCurrentPage(targetPage);
                                document.getElementById('coctail-collection')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              disabled={currentPage === totalPages}
                              className={`p-2 border rounded flex items-center gap-1 transition-all ${
                                  currentPage === totalPages
                                      ? 'border-stone-900 bg-stone-950/30 text-stone-600 cursor-not-allowed'
                                      : 'border-stone-800 bg-stone-900/60 text-stone-300 hover:text-[#c9a050] hover:border-[#c9a050] hover:bg-[#c9a050]/5 cursor-pointer'
                              }`}
                              id="btn-pagination-next"
                          >
                            <span className="hidden sm:inline uppercase text-[9px] tracking-wider font-mono">{t.next}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                  )}
                </div>
            )}
          </section>

          {/* -------------------------------------------------------------
            Persistent Cabinets Panel in Dashboard Flow
            ------------------------------------------------------------- */}
          <section className="px-6 sm:p-10 max-w-6xl w-full mx-auto border-t border-stone-850/80" id="cabinet-shelf-section">
            <CabinetDrawer
                cabinetIngredients={cabinetIngredients}
                onToggleIngredient={handleToggleIngredient}
                onClearCabinet={handleClearCabinet}
                lang={lang}
            />
          </section>



        </main>

      </div>
  );
}