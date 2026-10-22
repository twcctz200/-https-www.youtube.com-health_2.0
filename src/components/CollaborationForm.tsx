import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Briefcase, 
  ExternalLink, 
  Clock, 
  Building, 
  User, 
  Phone, 
  FileText,
  Sparkles
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const CollaborationForm: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<string>('電視/網路節目主持');
  const [orgName, setOrgName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const inquiryTypes = [
    '電視/網路節目主持',
    '品牌形象代言/健康好物推薦',
    '親子教養與親職教育講座',
    '企業健康促進與舒壓講座',
    '專欄撰稿與媒體專訪',
    '公益代言與教育推廣'
  ];

  const generateEmailBody = () => {
    return `您好，我是【${orgName || '合作單位'}】的【${contactName || '聯絡人'}】。

我們希望邀請鄭凱云主播洽談合作，相關細節如下：

【合作項目】：${inquiryType}
【單位名稱】：${orgName || '未填寫'}
【聯絡人姓名】：${contactName || '未填寫'}
【聯絡電話】：${phone || '未填寫'}
【聯絡信箱】：${email || '未填寫'}
【預計日期/檔期】：${eventDate || '依主持方檔期配合'}

【企劃內容與需求簡述】：
${details || '希望能與凱云主播進一步討論合作細節，期待收到您的回覆！'}

謝謝您！祝一切順心。`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【合作洽談】${inquiryType} - ${orgName || '合作提案'}`);
    const body = encodeURIComponent(generateEmailBody());
    window.location.href = `mailto:${PROFILE_DATA.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-stone-50 via-white to-amber-50/40 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>官方合作窗口 · 專業信賴對接</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            商業主持、品牌代言與演講合作
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            感謝各大電視台、品牌、企業福委會與教育機構的信賴與支持。歡迎透過下方表單或直接寄信至官方信箱，我們將儘速由專人與您對接！
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Professional Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  官方合作信箱
                </span>
                <span className="text-[11px] bg-emerald-800/80 px-2 py-0.5 rounded-full border border-emerald-600/50">
                  專人收信回覆
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${PROFILE_DATA.contactEmail}`}
                  className="text-lg sm:text-xl font-bold font-mono text-white hover:text-amber-300 transition-colors break-all"
                >
                  {PROFILE_DATA.contactEmail}
                </a>
                <p className="text-xs text-emerald-200/90 mt-1">
                  請附上企劃主旨、預計合作期程與聯絡窗口資訊。
                </p>
              </div>

              <div className="pt-3 border-t border-teal-700/60 flex items-center justify-between text-xs text-emerald-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  回覆時間：約 1-2 工作天內
                </span>
                <a
                  href={`mailto:${PROFILE_DATA.contactEmail}`}
                  className="font-bold text-amber-300 hover:text-white"
                >
                  直接寫信 &rarr;
                </a>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    鄭凱云 LinkedIn 專業履歷
                  </h4>
                  <p className="text-xs text-stone-500 font-mono">
                    linkedin.com/in/twcctz5000
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                查閱凱云主播過往二十餘年的新聞主播資歷、醫療健康節目製作、親職教養暢銷著作與產學合作成果。
              </p>

              <a
                href="https://www.linkedin.com/in/twcctz5000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-sky-600 text-sky-800 hover:bg-sky-50 text-xs font-bold transition-colors"
              >
                <span>前往 LinkedIn 檔案</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Cooperation Principles */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-2 text-xs text-stone-700">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>凱云的合作理念</span>
              </div>
              <p className="leading-relaxed">
                堅持「傳遞真實健康價值與溫暖善意」，秉持主播專業嚴謹把關。商品代言與健康推薦皆經團隊審慎了解與實際體驗，對閱聽眾與家庭負責。
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Collaboration Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                線上填寫合作意向表單
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                填寫完成後可自動產生格式化信件，直接發送或複製內容！
              </p>
            </div>

            <form onSubmit={handleSendMail} className="space-y-4">
              {/* Inquiry Type Radio Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 block">
                  合作項目類型
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        inquiryType === type
                          ? 'bg-emerald-700 text-white shadow-2xs'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company / Org and Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-stone-400" />
                    <span>邀約單位 / 公司機構</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：台灣優質企業 / XX國小家長會"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    <span>聯絡窗口姓名</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：陳小姐 / 林專員"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>聯絡電話</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="例：0912-345-678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    <span>回覆信箱</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="例：contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Target Date */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>預計合作日期或檔期</span>
                </label>
                <input
                  type="text"
                  placeholder="例：2026年Q4 / 某月某日週末下午"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              {/* Details */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  <span>合作內容簡述與需求期望</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="請簡單說明活動主旨、受眾對象、地點或預計合作方式..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>立即開啟郵件寄出</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold cursor-pointer transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>草稿已複製！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>複製信件草稿</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
