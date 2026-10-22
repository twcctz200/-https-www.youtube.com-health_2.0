import React, { useState } from 'react';
import { 
  DAILY_INSPIRATIONS, 
  FAQS_DATA 
} from '../data/profileData';
import { 
  Droplets, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  RefreshCw, 
  Share2, 
  Check, 
  Heart,
  Search,
  Coffee,
  Activity
} from 'lucide-react';

export const WellnessTools: React.FC = () => {
  // Hydration Calculator State
  const [weight, setWeight] = useState<number>(55);
  const [activity, setActivity] = useState<'normal' | 'light' | 'intense'>('normal');

  // Inspiration State
  const [inspirationIndex, setInspirationIndex] = useState<number>(0);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  // FAQ State
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Water calculations
  const multiplier = activity === 'normal' ? 33 : activity === 'light' ? 38 : 45;
  const totalWater = Math.round(weight * multiplier);
  const pureWater = Math.round(totalWater * 0.7);
  const herbalTeaOrSoup = Math.round(totalWater * 0.3);

  const currentInspiration = DAILY_INSPIRATIONS[inspirationIndex];

  const handleNextInspiration = () => {
    setInspirationIndex((prev) => (prev + 1) % DAILY_INSPIRATIONS.length);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`「${currentInspiration.quote}」—— ${currentInspiration.source}`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const q = faqSearch.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <section id="tools" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>全家元氣加油站 · 互動小工具與育兒智庫</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
          日常健康計算 & 凱云問答庫
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          關心全家人的生活細節，從每天一杯溫熱的好水、一句溫柔的鼓勵開始。
        </p>
      </div>

      {/* Grid of Two Interactive Cards */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Hydration & Wellness Calculator (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-stone-900 text-lg">全家飲水與茶飲計量儀</h3>
                <p className="text-xs text-stone-500">依體重計算每日黃金代謝水分</p>
              </div>
            </div>
            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
              代謝守護
            </span>
          </div>

          {/* Weight Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-stone-700">體重設定 (kg)</span>
              <span className="text-emerald-700 text-base font-mono font-black">{weight} kg</span>
            </div>
            <input
              type="range"
              min="20"
              max="110"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>孩童 20kg</span>
              <span>青少年/女性 50kg</span>
              <span>成年人 80kg+</span>
            </div>
          </div>

          {/* Activity Level Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-700 block">今日活動與講話量</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'normal', label: '一般辦公/室內', factor: '33ml/kg' },
                { id: 'light', label: '輕度運動/多說話', factor: '38ml/kg' },
                { id: 'intense', label: '戶外爆汗/主播主持', factor: '45ml/kg' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActivity(lvl.id as any)}
                  className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                    activity === lvl.id
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 text-xs'
                  }`}
                >
                  <div className="text-xs">{lvl.label}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">{lvl.factor}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Result Display */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-950 text-white space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-200">每日建議總水分補給</span>
              <span className="text-2xl font-black text-amber-300 font-mono">
                {totalWater} ml
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-teal-700/60 text-xs">
              <div className="bg-teal-900/60 p-2.5 rounded-xl">
                <div className="text-stone-300 text-[11px]">純溫開水 (70%)</div>
                <div className="text-white font-bold font-mono text-sm">{pureWater} ml</div>
              </div>
              <div className="bg-teal-900/60 p-2.5 rounded-xl">
                <div className="text-stone-300 text-[11px]">潤喉茶/清湯 (30%)</div>
                <div className="text-amber-200 font-bold font-mono text-sm">{herbalTeaOrSoup} ml</div>
              </div>
            </div>

            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              💡 凱云小叮嚀：早晨醒來先喝一杯 250ml 溫開水；若是說話多的工作者，可將部分水分以「蜜梨茶」或「無糖溫茶」補充喔！
            </p>
          </div>

          {/* Daily Inspiration Box */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                今日健康與育兒小錦囊
              </span>
              <button
                onClick={handleNextInspiration}
                className="text-xs text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer font-semibold"
              >
                <RefreshCw className="w-3 h-3" />
                <span>換一張</span>
              </button>
            </div>

            <blockquote className="text-xs sm:text-sm font-medium text-stone-800 italic leading-relaxed">
              「{currentInspiration.quote}」
            </blockquote>

            <div className="flex items-center justify-between text-xs text-stone-500 pt-1 border-t border-amber-200/50">
              <span className="text-amber-900 font-semibold">{currentInspiration.source}</span>
              <button
                onClick={handleCopyQuote}
                className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedQuote ? '已複製' : '分享錦囊'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Searchable Parenting & Health FAQ (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-stone-900 text-lg">凱云媽咪育兒生活智庫</h3>
                <p className="text-xs text-stone-500">節目、社群、教養難題與養生實務常見問題</p>
              </div>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋問題關鍵字..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-stone-50 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* FAQ Accordion Items */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center text-stone-400 text-sm">
                找不到相關問題，歡迎使用「合作洽談」或寄信直接詢問！
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? 'border-emerald-300 bg-emerald-50/20 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                          {faq.category}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 space-y-3 border-t border-emerald-100/60 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {faq.answer}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {faq.highlights.map((h, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-white border border-emerald-200 text-emerald-800 font-medium px-2 py-0.5 rounded-md"
                            >
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Prompt */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
            <span className="text-stone-600">想跟凱云即時討論育兒教養疑問？</span>
            <a
              href="https://line.me/ti/g2/Pkd2xUzKKLvw0sV8t-WM6D7UEtqwFApL_Ndslg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
            >
              <span>加入 Line 私密社群</span>
              &rarr;
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
