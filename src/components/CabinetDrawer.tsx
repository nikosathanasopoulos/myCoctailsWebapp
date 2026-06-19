import React, { useState } from 'react';
import { Ingredient } from '../types';
import { STOCK_INGREDIENTS } from '../data';
import { Flame, Wine, Droplet, Coffee, Filter, Check, RotateCcw } from 'lucide-react';
import { ingredientTranslations } from '../translations';

interface CabinetDrawerProps {
  cabinetIngredients: string[];
  onToggleIngredient: (name: string) => void;
  onClearCabinet: () => void;
  lang?: 'en' | 'el';
}

const CATEGORIES_EN = [
  { name: 'Spirit', label: 'Base Spirits', icon: Flame },
  { name: 'Liqueur', label: 'Liqueurs', icon: Wine },
  { name: 'Vermouth', label: 'Vermouth / Aperitifs', icon: Filter },
  { name: 'Mixer', label: 'Mixers / Juices', icon: Coffee },
  { name: 'Syrup', label: 'Sweeteners / Syrups', icon: Droplet },
  { name: 'Garnish', label: 'Garnishes / Elements', icon: Check },
  { name: 'Other', label: 'Bitters & Modifiers', icon: Droplet },
];

const CATEGORIES_EL = [
  { name: 'Spirit', label: 'Βασικά Αλκοολούχα', icon: Flame },
  { name: 'Liqueur', label: 'Λικέρ', icon: Wine },
  { name: 'Vermouth', label: 'Βερμούτ / Απεριτίφ', icon: Filter },
  { name: 'Mixer', label: 'Χυμοί / Αναψυκτικά', icon: Coffee },
  { name: 'Syrup', label: 'Σιρόπια / Γλυκαντικά', icon: Droplet },
  { name: 'Garnish', label: 'Γαρνιτούρες', icon: Check },
  { name: 'Other', label: 'Bitters & Modifiers', icon: Droplet },
];

export default function CabinetDrawer({
  cabinetIngredients,
  onToggleIngredient,
  onClearCabinet,
  lang = 'en'
}: CabinetDrawerProps) {
  const [activeTab, setActiveTab] = useState<string>('All');

  const CATEGORIES = lang === 'el' ? CATEGORIES_EL : CATEGORIES_EN;

  // Filter stock ingredients by category
  const filteredCategories = CATEGORIES.filter(cat => activeTab === 'All' || cat.name === activeTab);

  const getT = (key: string) => {
    if (lang === 'el') {
      return ingredientTranslations[key] || key;
    }
    return key;
  };

  return (
    <div className="bg-[#111] rounded-2xl border border-stone-800/80 p-6 overflow-hidden shadow-2xl" id="bar-cabinet">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800/85 pb-5 mb-5">
        <div>
          <h2 className="text-xl font-serif font-semibold text-stone-200 tracking-tight flex items-center gap-2">
            <span className="p-1 px-2.5 rounded bg-[#c9a050]/15 text-[#c9a050] text-[10px] font-mono uppercase tracking-widest border border-[#c9a050]/20">
              {lang === 'el' ? 'ΚΑΒΑ' : 'Cabinet'}
            </span>
            {lang === 'el' ? 'Συστατικά Οικιακού Μπαρ' : 'Home Bar Ingredients'}
          </h2>
          <p className="text-stone-400 text-xs mt-1 font-sans">
            {lang === 'el' 
              ? 'Επιλέξτε τα ποτά και τα υλικά που έχετε στο σπίτι. Θα σας εμφανίσουμε συνταγές που μπορείτε να φτιάξετε τώρα.'
              : 'Select spirits and mixers stocked in your cabinet. We’ll show drinks you can mix right now.'}
          </p>
        </div>
        
        {cabinetIngredients.length > 0 && (
          <button
            onClick={onClearCabinet}
            className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#c9a050]/40 text-[#c9a050] hover:bg-[#c9a050] hover:text-black transition-all text-xs uppercase tracking-widest font-mono"
            id="btn-clear-cabinet"
          >
            <RotateCcw className="w-3 h-3" />
            {lang === 'el' ? `Καθαρισμός Ραφιών (${cabinetIngredients.length})` : `Reset Shelves (${cabinetIngredients.length})`}
          </button>
        )}
      </div>

      {/* Category selector tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-3.5 py-1.5 rounded uppercase tracking-wider text-[10px] font-mono whitespace-nowrap transition-all border ${
            activeTab === 'All'
              ? 'bg-[#c9a050] text-[#0a0a0a] border-[#c9a050] font-bold'
              : 'bg-stone-900/65 text-stone-400 hover:text-stone-200 border-stone-800'
          }`}
          id="tab-all-ingredients"
        >
          {lang === 'el' ? `ΟΛΑ ΤΑ ΡΑΦΙΑ (${STOCK_INGREDIENTS.length})` : `All Shelves (${STOCK_INGREDIENTS.length})`}
        </button>
        {CATEGORIES.map(category => {
          const qty = STOCK_INGREDIENTS.filter(i => i.category === category.name).length;
          const userQty = STOCK_INGREDIENTS.filter(i => i.category === category.name && cabinetIngredients.includes(i.name)).length;
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded uppercase tracking-wider text-[10px] font-mono whitespace-nowrap transition-all border ${
                activeTab === category.name
                  ? 'bg-[#c9a050] text-[#0a0a0a] border-[#c9a050] font-bold'
                  : 'bg-stone-900/65 text-stone-400 hover:text-stone-200 border-stone-800'
              }`}
              id={`tab-${category.name}`}
            >
              <Icon className="w-3 h-3 shrink-0" />
              <span>{category.label}</span>
              <span className={`px-1 rounded ${
                userQty > 0 
                  ? (activeTab === category.name ? 'bg-black/30 text-stone-900 font-bold' : 'bg-[#c9a050]/20 text-[#c9a050] font-bold') 
                  : 'bg-stone-800 text-stone-500'
              }`}>
                {userQty}/{qty}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cabinet Shelves */}
      <div className="space-y-6">
        {filteredCategories.map(cat => {
          const items = STOCK_INGREDIENTS.filter(i => i.category === cat.name);
          const CatIcon = cat.icon;
          return (
            <div key={cat.name} className="space-y-3" id={`category-shelf-${cat.name}`}>
              <div className="flex items-center gap-2 border-b border-stone-800/80 pb-1.5">
                <CatIcon className="w-3.5 h-3.5 text-[#c9a050]" />
                <h3 className="text-[10px] tracking-widest text-[#c9a050]/80 font-mono uppercase font-bold">{cat.label}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {items.map(ingredient => {
                  const isStocked = cabinetIngredients.includes(ingredient.name);
                  return (
                    <button
                      key={ingredient.id}
                      onClick={() => onToggleIngredient(ingredient.name)}
                      className={`flex items-center justify-between p-2.5 rounded border text-left transition-all ${
                        isStocked
                          ? 'bg-[#c9a050]/15 border-[#c9a050]/50 text-stone-100 font-medium tracking-wide shadow-inner ring-1 ring-[#c9a050]/30'
                          : 'bg-[#161616] hover:bg-stone-900 border-stone-800/80 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                      }`}
                      id={`ingredient-toggle-${ingredient.id}`}
                    >
                      <span className="text-xs leading-tight line-clamp-2 pr-1 font-sans">{getT(ingredient.name)}</span>
                      {isStocked ? (
                        <div className="flex items-center justify-center w-4 h-4 rounded bg-[#c9a050] text-[#0a0a0a] shrink-0 shadow">
                          <Check className="w-2.5 h-2.5 stroke-[4]" />
                        </div>
                      ) : (
                        <div className="w-3.5 h-3.5 rounded border border-stone-700 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
