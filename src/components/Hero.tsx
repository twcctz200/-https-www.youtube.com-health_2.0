import React, { useState } from 'react';
import { 
  Play, 
  Youtube, 
  Sparkles, 
  Mail, 
  Copy, 
  Check, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Compass, 
  UtensilsCrossed,
  ArrowRight
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="about" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Decorative Warm Ambient Gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Identity & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Identity Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                健康2.0 電視節目主持人
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                暖心媽咪 · 親子成長教養
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                資深新聞主播
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                把實用的<span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">親子教養</span>與<br className="hidden sm:inline" />
                <span className="text-teal-700">養生保健 DIY</span> 溫暖傳遞
              </h1>
              <p className="text-stone-600 text-base sm:text-lg font-medium leading-relaxed pt-2">
                鄭凱云是主播、是主持人，更是長期關心「健康」和「孩子成長教養」的媽咪。
                用最簡潔易懂的方式拍成影片，陪伴大家照顧好自己跟家人，陪伴孩子健康快樂成長。
              </p>
            </div>

            {/* Weekly Show Card Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-md relative overflow-hidden border border-emerald-700/60">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
                <Play className="w-48 h-48 text-white fill-white" />
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-stone-950 text-xs font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      旗艦影音
                    </span>
                    <span className="text-amber-300 font-bold text-sm tracking-wide">
                      ＂健康云之道＂
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    每週六晚上 20:00 準時首播
                  </h3>
                  <p className="text-emerald-200 text-xs sm:text-sm">
                    每週分享實用養生妙方、親子減糖料理、教養溝通法與元氣生活
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/@health_2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-transform active:scale-95 shadow-sm whitespace-nowrap"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>前往首播頻道</span>
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#social-hub"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>探索全部官方社群</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={PROFILE_DATA.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm border border-stone-300 shadow-xs transition-all active:scale-95"
              >
                <Share2 className="w-4 h-4 text-emerald-700" />
                <span>Linktree 聚合頁</span>
              </a>

              {/* Email Copy Pill */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-100/80 hover:bg-amber-100 text-amber-950 font-semibold text-xs sm:text-sm border border-amber-300/80 transition-all active:scale-95 cursor-pointer"
                title="點擊複製合作洽談信箱"
              >
                <Mail className="w-4 h-4 text-amber-700" />
                <span>合作洽談: yunbaby1017@gmail.com</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-amber-700 opacity-70" />
                )}
              </button>
            </div>

            {/* Quick Micro Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-200/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">實用養生DIY</div>
                  <div className="text-[11px] text-stone-500">簡潔好懂無負擔</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">親子教養心法</div>
                  <div className="text-[11px] text-stone-500">溫柔堅定陪伴</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">健康親子料理</div>
                  <div className="text-[11px] text-stone-500">全家餐桌元氣</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">週末親子小旅行</div>
                  <div className="text-[11px] text-stone-500">大自然免疫力</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Container */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-amber-200/80 relative">
                
                {/* Visual Avatar Badge */}
                <div className="flex items-center gap-4 pb-5 border-b border-stone-100">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 p-1 shadow-md shrink-0 flex items-center justify-center">
                    <div className="w-full h-full bg-emerald-900 rounded-xl flex flex-col items-center justify-center text-amber-200">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-widest">鄭凱云</span>
                      <span className="text-[10px] text-emerald-200 font-medium">健康主播</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h2 className="text-xl font-bold text-stone-900">鄭凱云</h2>
                      <span className="bg-emerald-600 text-white p-0.5 rounded-full" title="官方認證">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                      主播 · 主持人 · 親子健康媽咪
                    </p>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      「讓我們照顧好自己跟家人的健康，一起陪伴孩子健康快樂成長。」
                    </p>
                  </div>
                </div>

                {/* Quick Join Line & Private Group Box */}
                <div className="mt-5 space-y-3">
                  <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/70">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span className="text-xs font-bold text-emerald-900">Line 私密社群熱烈交流中</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        免費加入
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800/80 mt-1.5 leading-relaxed">
                      和全台關心健康的家長、夥伴即時聊育兒日常、分享好菜與健康心法！
                    </p>
                    <a
                      href="https://line.me/ti/g2/Pkd2xUzKKLvw0sV8t-WM6D7UEtqwFApL_Ndslg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-all shadow-2xs"
                    >
                      <span>點此一鍵申請加入私密社群</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Featured Product Mention */}
                  <a
                    href="#eggoil"
                    className="group block bg-amber-50/80 hover:bg-amber-100/80 rounded-2xl p-3.5 border border-amber-200 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        健康是最好的禮物：古法蛋黃油
                      </span>
                      <span className="text-xs text-amber-800 font-medium group-hover:translate-x-0.5 transition-transform">
                        了解專訪 &rarr;
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-900/70 mt-1 line-clamp-1">
                      天然卵磷脂與維生素E精粹，傳承溫潤滋補的好油力量
                    </p>
                  </a>
                </div>

                {/* Email Inquiry Contact Bar */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>商業演講與主持合作洽談</span>
                  <a
                    href="mailto:yunbaby1017@gmail.com"
                    className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                  >
                    <span>寄信聯繫</span>
                    &rarr;
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
