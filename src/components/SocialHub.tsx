import React, { useState } from 'react';
import { 
  SOCIAL_LINKS, 
  SocialLink 
} from '../data/profileData';
import { 
  Youtube, 
  Headphones, 
  MessageCircle, 
  Users, 
  Tv, 
  Facebook, 
  Instagram, 
  AtSign, 
  Flame, 
  BookOpen, 
  Link2, 
  Briefcase,
  Copy,
  Check,
  ExternalLink,
  Search,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const SocialHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'AtSign':
        return <AtSign className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Link2':
        return <Link2 className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Link2 className="w-5 h-5" />;
    }
  };

  const handleCopyLink = (item: SocialLink) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLinks = SOCIAL_LINKS.filter((item) => {
    const matchesCategory = 
      activeCategory === 'all' || 
      (activeCategory === 'video' && item.category === 'video') ||
      (activeCategory === 'line' && item.category === 'line') ||
      (activeCategory === 'social' && item.category === 'social') ||
      (activeCategory === 'professional' && item.category === 'professional');

    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.handle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="social-hub" className="py-16 bg-white/70 backdrop-blur-xs border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            官方社群矩陣 · 即時互動與最新資訊
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            歡迎關注鄭凱云官方各平台
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            無論是 YouTube 每週六首播、Podcast 隨身聽、Facebook 圖文隨筆，或是加入 Line 私密社群與凱云媽咪即時暢聊，所有官方認證入口都在這裡！
          </p>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/90 rounded-2xl w-full md:w-auto">
            {[
              { id: 'all', label: '全部平台 (12)' },
              { id: 'video', label: '影音與 Podcast' },
              { id: 'line', label: 'Line 專區與社群' },
              { id: 'social', label: '日常社群 (FB/IG/Threads)' },
              { id: 'professional', label: '專業經歷與聚合' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜尋社群名稱或帳號..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl text-xs sm:text-sm border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 px-1"
              >
                清除
              </button>
            )}
          </div>
        </div>

        {/* Grid of Social Channels */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLinks.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                  item.highlight
                    ? 'border-emerald-300 ring-1 ring-emerald-200 shadow-xs'
                    : 'border-stone-200/80 hover:border-emerald-300'
                }`}
              >
                {/* Top Badge & Platform Indicator */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${item.color}`}>
                        {getPlatformIcon(item.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-700 transition-colors">
                            {item.name}
                          </h3>
                          <span title="官方驗證">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          </span>
                        </div>
                        <p className="text-xs font-mono text-stone-400">
                          {item.handle}
                        </p>
                      </div>
                    </div>

                    {item.badge && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 whitespace-nowrap">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 mt-3.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <span>立即前往</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopyLink(item)}
                    className="p-2 rounded-xl border border-stone-200 hover:border-emerald-500 text-stone-600 hover:text-emerald-700 bg-stone-50 hover:bg-emerald-50 transition-colors cursor-pointer"
                    title="複製官方連結"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Linktree Quick Callout */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-stone-950">
              <Link2 className="w-3.5 h-3.5" />
              <span>一鍵整合頁面</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              習慣使用 Linktree 嗎？所有連結都在 linktr.ee/health_2.0
            </h3>
            <p className="text-emerald-200 text-xs sm:text-sm max-w-xl">
              收藏官方 Linktree 頁面，隨時查看各平台的最新動態與精選好物推薦！
            </p>
          </div>

          <a
            href="https://linktr.ee/health_2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm shadow-sm transition-transform active:scale-95 whitespace-nowrap"
          >
            <span>開啟 Linktree 導航</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
