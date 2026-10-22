import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Calendar, 
  Sparkles, 
  Menu, 
  X, 
  Mail, 
  ExternalLink,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate countdown to next Saturday 20:00 (Taipei time, UTC+8)
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Target: next Saturday 20:00:00
      const target = new Date();
      const currentDay = now.getDay(); // 0 is Sunday, 6 is Saturday
      let daysUntilSaturday = (6 - currentDay + 7) % 7;
      
      target.setDate(now.getDate() + daysUntilSaturday);
      target.setHours(20, 0, 0, 0);

      // If today is Saturday and it's already past 20:00, target next Saturday
      if (currentDay === 6 && now.getTime() > target.getTime()) {
        target.setDate(target.getDate() + 7);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "關於凱云", href: "#about" },
    { name: "官方全社群", href: "#social-hub" },
    { name: "《健康云之道》", href: "#videos" },
    { name: "養生DIY與食譜", href: "#recipes" },
    { name: "蛋黃油推薦", href: "#eggoil" },
    { name: "家庭健康工具", href: "#tools" },
    { name: "合作洽談", href: "#contact" }
  ];

  return (
    <>
      {/* Top Premiere Notice Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-emerald-50 text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-emerald-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span className="font-semibold text-amber-300">＂健康云之道＂每週六晚上 20:00 首播</span>
            <span className="hidden md:inline text-emerald-200">｜生活親子與養生DIY，用最簡潔易懂的方式陪伴全家</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-0.5 rounded-full text-xs font-mono border border-emerald-600/40">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>距首播:</span>
              <span className="text-amber-300 font-bold">
                {countdown.days > 0 ? `${countdown.days}天 ` : ''}
                {String(countdown.hours).padStart(2, '0')}:
                {String(countdown.minutes).padStart(2, '0')}:
                {String(countdown.seconds).padStart(2, '0')}
              </span>
            </div>
            <a 
              href="https://www.youtube.com/@health_2.0?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white font-medium text-xs px-2.5 py-1 rounded-full transition-colors shadow-xs"
            >
              <span>訂閱開啟小鈴鐺</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-50/95 backdrop-blur-md shadow-md py-2.5 border-b border-amber-200/60' 
          : 'bg-amber-50/80 backdrop-blur-xs py-3.5 border-b border-amber-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ring-2 ring-emerald-600/40 p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-500 to-teal-500 shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-emerald-800 flex items-center justify-center text-amber-200 font-bold text-lg sm:text-xl">
                  云
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 bg-emerald-600 text-white rounded-full p-0.5 ring-2 ring-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-stone-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  健康主播 鄭凱云
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                  健康2.0 主持人
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium hidden sm:block">
                關心健康與孩子教養的暖心媽咪 · 健康生活DIY
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/80 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-700 bg-white/80 shadow-2xs transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>合作洽談</span>
            </a>
            <a
              href="https://lin.ee/BOysxHB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>加入官方 Line</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-100/60 focus:outline-none"
            aria-label="開啟選單"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-amber-50 border-b border-amber-200 px-4 pt-3 pb-5 space-y-2 mt-2 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-amber-200">
              <a
                href="https://lin.ee/BOysxHB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 text-white"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>官方 Line</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg border border-emerald-600 text-emerald-800 bg-white"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>合作洽談</span>
              </a>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-stone-800 hover:bg-emerald-100/70 hover:text-emerald-900 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-stone-500 text-center">
              合作信箱: yunbaby1017@gmail.com
            </div>
          </div>
        )}
      </header>
    </>
  );
};
