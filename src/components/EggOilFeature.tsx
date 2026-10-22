import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Droplets, 
  Sun, 
  CheckCircle2, 
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EggOilFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'usage' | 'craft'>('benefits');

  const benefits = [
    {
      title: "天然珍純卵磷脂精華",
      desc: "蛋黃是自然界中卵磷脂密度最高的寶庫。古法蛋黃油將整顆蛋黃的微細精華濃縮，守護思緒敏捷、促進身心修護。",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    },
    {
      title: "溫潤不燥 · 四季滋養",
      desc: "遵循古法慢火熬製，非現代高溫化學溶劑萃取。性質平和溫潤，不管是幼兒、孕產媽咪或銀髮族長輩皆能安心調理。",
      icon: <Sun className="w-5 h-5 text-amber-600" />
    },
    {
      title: "雙效護理：內服溫補、外用滋潤",
      desc: "除晨起日常一匙溫吞，針對季節轉換皮膚乾燥、手足粗糙或頭皮調理，亦可作為純淨親膚的天然油脂護理。",
      icon: <Droplets className="w-5 h-5 text-amber-600" />
    },
    {
      title: "全家健康是最好的禮物",
      desc: "送禮送健康！天然好油是人體細胞膜不可或缺的基石，將大自然的滋潤送到最愛的家人手中。",
      icon: <Heart className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="eggoil" className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/50 via-amber-100/30 to-amber-50/60 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
            <Award className="w-4 h-4 text-amber-600" />
            <span>凱云嚴選 · 傳承千年中醫古方養生智慧</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            健康是最好的禮物：古法工藝「蛋黃油」
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            源自傳統養生經典，以純物理耐性慢火細工熬煉，將全蛋中最珍貴的卵磷脂與維生素E精華化為滴滴金黃溫潤。
          </p>
        </div>

        {/* Feature Showcase Card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Essence & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-800 text-white p-7 shadow-inner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
              
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-amber-900/60 text-amber-200 text-xs font-semibold rounded-full border border-amber-500/30">
                  純天然 · 無人工添加 · 古法傳承
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-100 tracking-tight">
                  eggoil 蛋黃油
                </h3>
                <p className="text-amber-100/90 text-sm leading-relaxed">
                  「現代人忙碌用腦過度、外食高油高鈉，最需要的就是乾淨純粹的天然好油。蛋黃油溫潤不燥熱，是我日常給全家人最踏實的基底守護。」
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <span>— 健康主播 鄭凱云 心得分享</span>
                </div>
              </div>

              {/* Bottom Gold Badges */}
              <div className="mt-6 pt-5 border-t border-amber-500/30 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-black text-white">100%</div>
                  <div className="text-[11px] text-amber-200">純粹物理提煉</div>
                </div>
                <div>
                  <div className="text-lg font-black text-white">卵磷脂</div>
                  <div className="text-[11px] text-amber-200">天然高濃縮</div>
                </div>
                <div>
                  <div className="text-lg font-black text-white">無防腐劑</div>
                  <div className="text-[11px] text-amber-200">安心無負擔</div>
                </div>
              </div>
            </div>

            {/* External Product Link Card */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-amber-950">
                  官方網站直接訂購與詳細檢驗報告
                </div>
                <div className="text-xs text-amber-800 font-mono">
                  https://www.nectw721.com
                </div>
              </div>
              <a
                href="https://www.nectw721.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-transform active:scale-95 whitespace-nowrap"
              >
                <span>前往了解更多</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Tabbed Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Nav Tabs */}
            <div className="flex border-b border-stone-200">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === 'benefits'
                    ? 'border-amber-600 text-amber-800'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                四大養生益處
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === 'usage'
                    ? 'border-amber-600 text-amber-800'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                家庭食用與使用建議
              </button>
              <button
                onClick={() => setActiveTab('craft')}
                className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === 'craft'
                    ? 'border-amber-600 text-amber-800'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                古法淬煉工藝
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
                {benefits.map((item, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200/80 transition-all space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pl-10">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-4 animate-in fade-in duration-300 text-stone-700 text-sm">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    早晨日常含服保養
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    清晨起床空腹，取 1 小匙或 2-3 滴管蛋黃油直接含入口中慢慢吞嚥，接著喝一杯溫開水。口感溫醇帶有天然烤蛋香氣，溫和甦醒腸胃消化機能。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    孩子與長輩的搭配吃法
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    對於不習慣直接吃油的孩子，可滴入微溫早餐燕麥粥、豆漿或淋在蔬菜烘蛋上，增添香氣的同時補充孩子成長所需的優質卵磷脂。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    外在肌膚修護
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    秋冬季雙手容易乾裂或嘴唇乾裂時，塗抹微量蛋黃油輕柔按摩，其極佳的親膚脂質能迅速形成天然保護膜。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'craft' && (
              <div className="space-y-4 animate-in fade-in duration-300 text-stone-700 text-sm">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  蛋黃油在中醫典籍如《本草綱目》、《外科正宗》中已有數百年記載。古人稱其能「生肌長肉、潤膚解毒、滋陰養血」。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-900">1. 純淨選卵</div>
                    <p className="text-[11px] text-stone-600">嚴格挑選無抗生素健康雞隻的純淨新鮮雞蛋黃</p>
                  </div>
                  <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-900">2. 慢火物理熬煉</div>
                    <p className="text-[11px] text-stone-600">歷經數小時低溫翻炒與精準火候控溫，自然釋出金黃油質</p>
                  </div>
                  <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-900">3. 澄澈提純</div>
                    <p className="text-[11px] text-stone-600">精密無菌過濾，保留全成分活性，無任何化學溶劑</p>
                  </div>
                </div>

                <div className="text-xs text-stone-500 bg-stone-100 p-3 rounded-xl">
                  💡 溫馨提醒：請存放於陰涼乾燥處或冷藏，開瓶後請儘早食用完畢，感受大自然最純淨的精華。
                </div>
              </div>
            )}

            {/* Bottom Direct CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://www.nectw721.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>前往 eggoil 蛋黃油 官方專頁</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-stone-500">
                網址：https://www.nectw721.com
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
