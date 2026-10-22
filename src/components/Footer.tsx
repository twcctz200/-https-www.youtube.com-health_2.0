import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Mail, 
  Youtube, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-amber-200 font-extrabold text-lg">
                云
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                  健康主播 鄭凱云
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </h3>
                <p className="text-xs text-stone-400">
                  健康2.0節目主持人 · 暖心媽咪 · 親子健康顧問
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              把生活中實用的親子和養生保健DIY，用最簡潔易懂的方式拍成影片，傳遞出來。照顧好自己跟家人的健康，一起陪伴孩子健康快樂成長。
            </p>

            <div className="pt-2 text-xs text-stone-300">
              <span className="text-amber-400 font-bold">每週六 20:00</span>《健康云之道》YouTube 準時首播
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              本站導航
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  關於凱云主播
                </a>
              </li>
              <li>
                <a href="#social-hub" className="hover:text-amber-400 transition-colors">
                  官方全平台社群導航
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-amber-400 transition-colors">
                  《健康云之道》影音筆記
                </a>
              </li>
              <li>
                <a href="#recipes" className="hover:text-amber-400 transition-colors">
                  實用養生DIY與親子料理
                </a>
              </li>
              <li>
                <a href="#eggoil" className="hover:text-amber-400 transition-colors">
                  健康禮物：古法蛋黃油
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-amber-400 transition-colors">
                  每日飲水計算與育兒FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  商業演講與品牌合作洽談
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Featured Partner (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              官方聯絡與嚴選推薦
            </h4>
            
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Mail className="w-3.5 h-3.5" />
                <span>合作洽談信箱</span>
              </div>
              <a
                href="mailto:yunbaby1017@gmail.com"
                className="text-white hover:text-amber-300 font-mono font-bold block"
              >
                yunbaby1017@gmail.com
              </a>
              <p className="text-stone-400 text-[11px]">
                誠摯歡迎各大品牌、電視台與教育演講邀約。
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-900/60 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-amber-200 text-xs">
                  健康是最好的禮物：蛋黃油
                </div>
                <div className="text-[11px] text-amber-300/80 font-mono">
                  nectw721.com
                </div>
              </div>
              <a
                href="https://www.nectw721.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-amber-600 hover:bg-amber-500 text-white px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1"
              >
                <span>逛逛</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-stone-800 text-center space-y-3">
          <p className="text-[11px] text-stone-500 max-w-3xl mx-auto leading-relaxed">
            【健康免責聲明】本專頁為健康主播鄭凱云之影音傳播、生活養生DIY及親職教養經驗分享。所載之飲食、調理與作息建議僅供一般健康生活參考，並不能取代專業醫師、營養師之臨床診斷或醫療處方。身體如有不適，請務必諮詢合格醫療專業人員。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-stone-500">
            <div className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} 健康主播 鄭凱云 · 保留所有權利</span>
              <span className="hidden sm:inline">｜ 用愛與健康陪伴每個家庭</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer text-xs font-semibold"
            >
              <span>回到頂部</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
