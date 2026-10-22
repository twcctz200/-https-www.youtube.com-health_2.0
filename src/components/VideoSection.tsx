import React, { useState } from 'react';
import { 
  VIDEO_SHOWCASE, 
  VideoItem 
} from '../data/profileData';
import { 
  Play, 
  Youtube, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  X, 
  ExternalLink,
  BookOpen,
  Share2,
  Check
} from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [copiedModal, setCopiedModal] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: '全部精選' },
    { id: '養生保健DIY', label: '養生保健DIY' },
    { id: '親子教養心法', label: '親子教養心法' },
    { id: '親子元氣料理', label: '親子元氣料理' },
    { id: '全家小旅行', label: '全家小旅行' }
  ];

  const filteredVideos = VIDEO_SHOWCASE.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleShareVideo = (video: VideoItem) => {
    const url = `https://www.youtube.com/@health_2.0`;
    navigator.clipboard.writeText(`${video.title} - ${url}`);
    setCopiedModal(true);
    setTimeout(() => setCopiedModal(false), 2000);
  };

  return (
    <section id="videos" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
            <Youtube className="w-3.5 h-3.5 fill-red-600 text-red-600" />
            <span>旗艦節目 · 每週六 20:00 準時首播</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            《健康云之道》影音與實用筆記
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl">
            「把生活中實用的親子和養生保健DIY，用最簡潔易懂的方式拍成影片傳遞出來。」
            點擊任一影片卡片，即可快速查閱本集重點筆記、食材材料與凱云悄悄話！
          </p>
        </div>

        {/* Subscribe channel button */}
        <a
          href="https://www.youtube.com/@health_2.0?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm transition-transform active:scale-95 whitespace-nowrap self-start md:self-auto"
        >
          <Youtube className="w-4 h-4 fill-white" />
          <span>訂閱 @health_2.0 頻道</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => setActiveModalVideo(video)}
            className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Fake thumbnail banner with warm editorial gradient */}
              <div className="relative aspect-video bg-gradient-to-tr from-stone-900 via-emerald-950 to-teal-900 overflow-hidden flex items-center justify-center p-6 text-center">
                {/* Visual badge */}
                <span className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-400/30">
                  {video.category}
                </span>

                <span className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  {video.duration}
                </span>

                {/* Center Play Button Overlay */}
                <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>

                {/* Subtitle tag inside thumbnail */}
                <div className="absolute bottom-2 inset-x-3 text-center">
                  <span className="text-stone-300 text-[11px] font-medium tracking-wide line-clamp-1">
                    {video.tag} · 健康云之道
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{video.date}</span>
                </div>

                <h3 className="font-bold text-base text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                  {video.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {video.summary}
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                查看重點筆記與步驟 &rarr;
              </span>
              <span className="text-[11px] text-stone-400 font-normal">
                YouTube 隨選
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Detail Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 relative">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-stone-950">
                    {activeModalVideo.category}
                  </span>
                  <span className="text-emerald-200 text-xs">
                    {activeModalVideo.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {activeModalVideo.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-2 rounded-full text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                aria-label="關閉"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                  影片內容概要
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  {activeModalVideo.summary}
                </p>
              </div>

              {/* Key Takeaways */}
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>本集重點筆記</span>
                </h4>
                <ul className="space-y-2">
                  {activeModalVideo.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials Checklist (if applicable) */}
              {activeModalVideo.materials && (
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>準備材料與道具</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalVideo.materials.map((mat, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Kai-Yun's Personal Tip */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-1">
                <div className="text-xs font-bold text-emerald-900">
                  💬 凱云媽咪悄悄話
                </div>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  {activeModalVideo.tips}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleShareVideo(activeModalVideo)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                >
                  {copiedModal ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>已複製影片資訊</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>分享本集筆記</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.youtube.com/@health_2.0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>前往 YouTube 觀看原片</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
