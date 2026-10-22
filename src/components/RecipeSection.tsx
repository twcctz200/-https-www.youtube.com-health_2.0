import React, { useState } from 'react';
import { 
  RECIPES_DATA, 
  RecipeDIY 
} from '../data/profileData';
import { 
  UtensilsCrossed, 
  Clock, 
  Users, 
  CheckSquare, 
  Square, 
  Printer, 
  Sparkles, 
  Timer, 
  ExternalLink,
  Heart,
  ChevronRight,
  Info
} from 'lucide-react';

export const RecipeSection: React.FC = () => {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState<number>(0);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const currentRecipe = RECIPES_DATA[activeRecipeIndex];

  const toggleIngredient = (name: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const startTimer = (minutes: number) => {
    setTimerSeconds(minutes * 60);
    setIsTimerRunning(true);
  };

  // Timer tick
  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds !== null && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => (prev !== null ? prev - 1 : 0));
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="recipes" className="py-16 lg:py-24 bg-stone-50/70 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-700" />
            <span>凱云媽咪的私房手作 · 實用養生DIY與親子料理</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            簡單、好喝、全家活力滿分
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            把複雜的保健理論變成廚房裡的美味日常！帶孩子一起動手DIY，品嚐無負擔的天然滋養。
          </p>
        </div>

        {/* Recipe Switcher Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {RECIPES_DATA.map((recipe, index) => (
            <button
              key={recipe.id}
              onClick={() => {
                setActiveRecipeIndex(index);
                setCheckedIngredients({});
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeRecipeIndex === index
                  ? 'bg-emerald-700 text-white shadow-md scale-105'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-2xs'
              }`}
            >
              {recipe.title.split(' ')[0]} {recipe.category}
            </button>
          ))}
        </div>

        {/* Main Recipe Detail Card */}
        <div className="mt-8 bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Overview & Ingredients Checklist */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-amber-50/40 border-b lg:border-b-0 lg:border-r border-stone-200 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                {currentRecipe.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-snug">
                {currentRecipe.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-emerald-800">
                {currentRecipe.subtitle}
              </p>
            </div>

            {/* Meta Tags */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-amber-200/70">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-stone-400">準備時間</div>
                  <div className="text-xs font-bold text-stone-800">{currentRecipe.prepTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-amber-200/70">
                <Users className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-stone-400">適合對象</div>
                  <div className="text-xs font-bold text-stone-800 line-clamp-1">{currentRecipe.suitableFor}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {currentRecipe.description}
            </p>

            {/* Ingredients Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  食材與準備清單 (點擊可勾選標記)
                </h4>
                <span className="text-[11px] text-stone-400">
                  {Object.values(checkedIngredients).filter(Boolean).length} / {currentRecipe.ingredients.length}
                </span>
              </div>

              <div className="space-y-2">
                {currentRecipe.ingredients.map((ing, i) => {
                  const isChecked = !!checkedIngredients[ing.name];
                  return (
                    <div
                      key={i}
                      onClick={() => toggleIngredient(ing.name)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked 
                          ? 'bg-emerald-50/70 border-emerald-300 text-stone-400' 
                          : 'bg-white border-stone-200 text-stone-800 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through' : ''}`}>
                          {ing.name}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 font-mono">
                        {ing.amount}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print Recipe Button */}
            <button
              onClick={handlePrint}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>列印 / 存為食譜卡片</span>
            </button>

          </div>

          {/* Right Column: Step-by-Step Instructions & Nutritional Insight */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>製作步驟與料理心法</span>
                </h4>

                {/* Quick Kitchen Timer Widget */}
                <div className="flex items-center gap-2">
                  {timerSeconds !== null && timerSeconds > 0 ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-mono text-xs font-bold animate-pulse">
                      <Timer className="w-3.5 h-3.5" />
                      <span>{Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}</span>
                      <button 
                        onClick={() => { setIsTimerRunning(false); setTimerSeconds(null); }}
                        className="ml-1 text-[10px] text-amber-700 hover:text-black cursor-pointer"
                      >
                        重置
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px]">
                      <span className="text-stone-400">計時小工具:</span>
                      <button 
                        onClick={() => startTimer(15)} 
                        className="px-2 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-xs cursor-pointer"
                      >
                        15分
                      </button>
                      <button 
                        onClick={() => startTimer(5)} 
                        className="px-2 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-xs cursor-pointer"
                      >
                        5分
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Step List */}
              <div className="space-y-4">
                {currentRecipe.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                    <span className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Nutrition Insight Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  <span>凱云營養筆記</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentRecipe.nutritionNote}
                </p>
              </div>
            </div>

            {/* Featured Product Box if available */}
            {currentRecipe.featuredProduct && (
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-yellow-500/10 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="space-y-0.5 text-center sm:text-left">
                  <div className="text-xs font-bold text-amber-950">
                    {currentRecipe.featuredProduct.name}
                  </div>
                  <div className="text-[11px] text-stone-600">
                    {currentRecipe.featuredProduct.description}
                  </div>
                </div>

                <a
                  href={currentRecipe.featuredProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shrink-0 transition-transform active:scale-95 shadow-xs"
                >
                  <span>{currentRecipe.featuredProduct.ctaText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
