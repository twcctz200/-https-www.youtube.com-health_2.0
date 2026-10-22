export interface SocialLink {
  id: string;
  name: string;
  category: 'video' | 'social' | 'line' | 'professional';
  handle: string;
  url: string;
  description: string;
  badge?: string;
  iconName: string;
  color: string;
  highlight?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: '養生保健DIY' | '親子教養心法' | '親子元氣料理' | '全家小旅行';
  duration: string;
  date: string;
  youtubeId: string;
  summary: string;
  keyPoints: string[];
  materials?: string[];
  tips: string;
  tag: string;
}

export interface RecipeDIY {
  id: string;
  title: string;
  subtitle: string;
  category: '養生保健' | '親子料理' | '日常茶飲' | '好眠舒壓';
  prepTime: string;
  suitableFor: string;
  description: string;
  ingredients: { name: string; amount: string }[];
  steps: string[];
  nutritionNote: string;
  featuredProduct?: {
    name: string;
    description: string;
    url: string;
    ctaText: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  category: '親子教養' | '生活養生' | '節目與合作';
  answer: string;
  highlights: string[];
}

export const PROFILE_DATA = {
  name: "鄭凱云",
  title: "健康主播 / 電視節目主持人 / 暖心媽咪",
  subTitle: "用最簡潔易懂的方式，傳遞生活中實用的親子教養與養生保健 DIY",
  intro: "鄭凱云是主播、是主持人，更是長期關心「健康」和「孩子成長教養」的媽咪。把生活中實用的親子和養生保健DIY，用最簡潔易懂的方式拍成影片，傳遞出來。讓我們照顧好自己跟家人的健康，也一起分享在教養中會遇到的問題，在生活中的親子料理，親子小旅行，讓我們一起陪伴孩子健康快樂成長。",
  showName: "健康云之道",
  showSchedule: "每週六晚上 20:00 首播",
  contactEmail: "yunbaby1017@gmail.com",
  linktreeUrl: "https://linktr.ee/health_2.0",
  featuredPartner: {
    title: "健康是最好的禮物 — 古法工藝 蛋黃油 (Egg Oil)",
    slogan: "自然精粹 卵磷脂與維生素E精華 傳承溫潤滋補之美",
    description: "傳統古法慢火熬製提煉的蛋黃油，蘊含極高濃度的天然卵磷脂、不飽和脂肪酸與多元微量元素，是世代相傳的全家人守護佳品。溫潤不燥，是送給家人最好的健康滋養禮物。",
    url: "https://www.nectw721.com",
    cta: "前往了解蛋黃油養生秘訣"
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "yt-channel",
    name: "YouTube 官方頻道",
    category: "video",
    handle: "@health_2.0",
    url: "https://www.youtube.com/@health_2.0",
    description: "每週六《健康云之道》首播、養生保健DIY與生活影片",
    badge: "每週六 20:00 首播",
    iconName: "Youtube",
    color: "bg-red-600 hover:bg-red-700 text-white",
    highlight: true
  },
  {
    id: "yt-podcasts",
    name: "健康 2.0 Podcasts",
    category: "video",
    handle: "@health_2.0/podcasts",
    url: "https://www.youtube.com/@health_2.0/podcasts",
    description: "通勤隨身聽！專家醫師名醫對談與育兒心法音頻專區",
    badge: "隨身音頻",
    iconName: "Headphones",
    color: "bg-amber-600 hover:bg-amber-700 text-white"
  },
  {
    id: "line-official",
    name: "鄭凱云 官方 Line",
    category: "line",
    handle: "lin.ee/BOysxHB",
    url: "https://lin.ee/BOysxHB",
    description: "第一時間掌握每週健康食譜、影音快訊與活動福利",
    badge: "官方認證",
    iconName: "MessageCircle",
    color: "bg-emerald-600 hover:bg-emerald-700 text-white",
    highlight: true
  },
  {
    id: "line-group",
    name: "鄭凱云 Line 私密社群",
    category: "line",
    handle: "媽咪與健康同好交流圈",
    url: "https://line.me/ti/g2/Pkd2xUzKKLvw0sV8t-WM6D7UEtqwFApL_Ndslg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    description: "溫暖互動私密交流，一起討論育兒難題、分享生活親子料理",
    badge: "VIP 互助交流",
    iconName: "Users",
    color: "bg-teal-700 hover:bg-teal-800 text-white",
    highlight: true
  },
  {
    id: "line-voom",
    name: "鄭凱云 Line Voom",
    category: "line",
    handle: "_dRkvE9r3K3fMj0XnIwzBEifAm2EMr7WFYdiatZQ",
    url: "https://linevoom.line.me/user/_dRkvE9r3K3fMj0XnIwzBEifAm2EMr7WFYdiatZQ",
    description: "Line 平台專屬生活短影音與最新動態更新",
    badge: "短影音",
    iconName: "Tv",
    color: "bg-emerald-700 hover:bg-emerald-800 text-white"
  },
  {
    id: "facebook",
    name: "Facebook 粉絲專頁",
    category: "social",
    handle: "health.yunbaby",
    url: "https://facebook.com/health.yunbaby",
    description: "凱云的日常生活圖文、節目預告、育兒心情手扎與即時互動",
    badge: "粉絲專頁",
    iconName: "Facebook",
    color: "bg-blue-600 hover:bg-blue-700 text-white"
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "social",
    handle: "@anchor.host",
    url: "https://instagram.com/anchor.host",
    description: "主持幕後花絮、主播穿搭美學、元氣便當與親子寫真",
    badge: "IG日常",
    iconName: "Instagram",
    color: "bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 hover:opacity-90 text-white"
  },
  {
    id: "threads",
    name: "Threads 隨筆交流",
    category: "social",
    handle: "@anchor.host",
    url: "https://threads.net/@anchor.host",
    description: "凱云媽咪的心靈悄悄話、教養即時感悟與快問快答",
    badge: "心靈隨筆",
    iconName: "AtSign",
    color: "bg-stone-900 hover:bg-black text-white"
  },
  {
    id: "tiktok",
    name: "TikTok 官方帳號",
    category: "video",
    handle: "@health_2.0",
    url: "https://tiktok.com/@health_2.0",
    description: "30秒快速掌握養生穴位、護嗓妙方與親子快問快答短影音",
    badge: "超人氣短片",
    iconName: "Flame",
    color: "bg-stone-900 hover:bg-black text-white"
  },
  {
    id: "redbook",
    name: "小紅書 (RedBook)",
    category: "social",
    handle: "健康主播鄭凱云",
    url: "https://xiaohongshu.com/user/profile/64ec8782000000000200db10",
    description: "圖文精緻食譜、女性內在保養手冊與好物心得",
    badge: "精選筆記",
    iconName: "BookOpen",
    color: "bg-red-500 hover:bg-red-600 text-white"
  },
  {
    id: "linktree",
    name: "Linktree 官方聚合導航",
    category: "social",
    handle: "health_2.0",
    url: "https://linktr.ee/health_2.0",
    description: "一站式快速跳轉所有官方社群與精選合作專案",
    badge: "快速傳送門",
    iconName: "Link2",
    color: "bg-lime-700 hover:bg-lime-800 text-white"
  },
  {
    id: "linkedin",
    name: "LinkedIn 專業檔案",
    category: "professional",
    handle: "twcctz5000",
    url: "https://www.linkedin.com/in/twcctz5000",
    description: "資深新聞主播、電視節目製作主持、演講授課與產學合作履歷",
    badge: "專業履歷",
    iconName: "Briefcase",
    color: "bg-sky-700 hover:bg-sky-800 text-white"
  }
];

export const VIDEO_SHOWCASE: VideoItem[] = [
  {
    id: "v1",
    title: "【健康云之道】主播私房護嗓秘笈！換季喉嚨乾癢、咳嗽必喝的「黃金蜜梨茶」",
    category: "養生保健DIY",
    duration: "14:20",
    date: "每週六 20:00 首播",
    youtubeId: "dQw4w9WgXcQ", // Representative embed or watch link
    summary: "凱云主持二十餘年，嗓子就是最重要的生財工具！這集手把手教大家用天然水梨、紅棗、老薑與蜂蜜，煮出全家老少都愛喝的溫潤潤肺良方。",
    keyPoints: [
      "水梨不去皮燉煮的營養價值比單吃高出數倍",
      "適合講話多、教師、業務、常待冷氣房者",
      "小提醒：體質偏寒者可多放兩片老薑溫中調和"
    ],
    materials: ["雪梨 1 顆", "紅棗 5 顆（劃開）", "枸杞 1 大匙", "天然生蜂蜜 適量", "老薑片 2 片"],
    tips: "水梨一定要清洗乾淨帶皮切塊，皮上的多酚類物質對潤肺化痰最有幫助喔！",
    tag: "熱門養生首選"
  },
  {
    id: "v2",
    title: "【親子元氣料理】孩子挑食不吃青菜？凱云媽咪的「彩虹能量烘蛋」10分鐘神級救援！",
    category: "親子元氣料理",
    duration: "12:45",
    date: "精選家庭特輯",
    youtubeId: "dQw4w9WgXcQ",
    summary: "利用鮮豔顏色與香濃蛋香，把平時孩子抗拒的甜椒、菠菜、胡蘿蔔巧妙融合，一口咬下滿滿優質蛋白質與葉黃素，連挑嘴孩子都搶著吃光光。",
    keyPoints: [
      "將蔬菜切細碎拌入蛋液，降低孩子防備心",
      "加入天然起司絲或滴幾滴好油提香",
      "讓孩子參與攪拌蛋液，建立對料理的認同感"
    ],
    materials: ["雞蛋 3 顆", "波菜碎 / 紅蘿蔔碎 各半碗", "低脂起司片 1 片", "優質好油 1 小匙", "少許海鹽"],
    tips: "在餐桌上用說故事的方式介紹『彩虹力量』，孩子會更願意嘗試新蔬菜喔！",
    tag: "媽媽必學私房菜"
  },
  {
    id: "v3",
    title: "【養生保健DIY】世代相傳的黃金滋養！認識古法「蛋黃油」的日常溫潤守護法",
    category: "養生保健DIY",
    duration: "18:10",
    date: "健康是最好的禮物特輯",
    youtubeId: "dQw4w9WgXcQ",
    summary: "傳統中醫典籍記載的蛋黃油，是提煉雞蛋精萃的古法工藝。富含天然卵磷脂、維生素A與E，無論是滋養全家體質、日常調理還是皮膚保濕，都是大自然的溫潤贈禮。",
    keyPoints: [
      "純天然無添加的蛋黃提煉工藝介紹",
      "豐富卵磷脂幫助思緒靈活與好體力",
      "如何挑選純淨安心的台灣在地品質蛋黃油"
    ],
    materials: ["優質古法蛋黃油", "溫水或晨起單匙含服"],
    tips: "蛋黃油氣味濃郁醇厚，每日清晨或餐後以一小匙溫潤入喉，給身體最踏實的基底養護。",
    tag: "古法養生精粹"
  },
  {
    id: "v4",
    title: "【親子教養心法】當孩子大發脾氣時…凱云媽咪的「情緒冰塊溶解法」與溫柔共情",
    category: "親子教養心法",
    duration: "15:30",
    date: "暖心育兒專欄",
    youtubeId: "dQw4w9WgXcQ",
    summary: "面對孩子在公共場所或家中的情緒風暴，大人往往比孩子更急躁。凱云分享親身經歷，教你三步驟：先深呼吸穩定自己、蹲下平視給予擁抱、等情緒退潮再講道理。",
    keyPoints: [
      "大人的情緒穩定，是孩子最好的安全感避風港",
      "「我看到你現在很生氣，我會陪著你」的力量",
      "事後回顧：建立『心情紅綠燈』家庭約定"
    ],
    tips: "孩子不是故意跟我們作對，他是被巨大的情緒淹沒了。先連結情感，再處理事情。",
    tag: "破萬媽媽共鳴"
  },
  {
    id: "v5",
    title: "【全家小旅行】免花大錢的森林系放電提案！大自然裡的「天然免疫力」私房路線",
    category: "全家小旅行",
    duration: "16:40",
    date: "親子探索日記",
    youtubeId: "dQw4w9WgXcQ",
    summary: "假日不要只待在室內滑手機！凱云帶大家走訪北部平緩好走的親子生態步道，吸收滿滿芬多精，觀察昆蟲植物，順便在野餐盒裡準備健康減糖小點心。",
    keyPoints: [
      "平緩推車友善與孩童步行的私房綠意步道",
      "野外五感觀察小遊戲：聽風聲、找葉片紋理",
      "自製健康野餐盒與防蚊精油配方"
    ],
    tips: "讓孩子親手觸摸泥土與落葉，大自然裡的微生物多樣性就是最好的天然免疫力訓練！",
    tag: "週末放鬆推薦"
  }
];

export const RECIPES_DATA: RecipeDIY[] = [
  {
    id: "r-eggoil",
    title: "古法工藝 蛋黃油 (Egg Oil) 全家養生養護守則",
    subtitle: "健康是最好的禮物 — 大自然賜予的卵磷脂與維生素精華",
    category: "養生保健",
    prepTime: "每日日常 1 分鐘",
    suitableFor: "銀髮長輩、忙碌上班族、成長中青少年與女性滋養",
    description: "源遠流長的古法蛋黃油，乃慢火淬煉純天然雞蛋黃中的珍貴油脂精萃。富含極高比例的純天然卵磷脂、不飽和脂肪酸、維生素E，能溫潤內在、滋養體魄，是古今醫家一致推崇的天然保養瑰寶。",
    ingredients: [
      { name: "純淨古法淬煉蛋黃油 (建議首選無添加天然工藝)", amount: "每日 1-2 滴管或約 3-5ml" },
      { name: "溫開水", amount: "約 150ml" },
      { name: "蜂蜜 (可依個人口味調配)", amount: "少許" }
    ],
    steps: [
      "早晨空腹或早餐後，直接含服 1 小勺天然蛋黃油，慢慢感受香醇濃郁的古法蛋香。",
      "若長輩或小朋友初次嘗試，可滴入微溫燕麥奶、溫豆漿或加入半匙蜂蜜攪拌溫潤飲用。",
      "局部外用滋潤：若換季乾燥、手肘指尖粗糙，亦可取一滴蛋黃油均勻塗抹按壓，天然修護屏障極佳。"
    ],
    nutritionNote: "卵磷脂為細胞膜與腦力神經傳導的重要基石，古法蛋黃油無化學溶劑殘留，天然好吸收。",
    featuredProduct: {
      name: "健康是最好的禮物 — eggoil 蛋黃油",
      description: "遵循嚴謹古法傳承，純淨原料慢火淬煉，無任何防腐劑與人工添加，守護全家元氣活力。",
      url: "https://www.nectw721.com",
      ctaText: "前往官方商城了解產品詳情"
    }
  },
  {
    id: "r-throat",
    title: "主播私房 潤喉舒肺蜜梨茶",
    subtitle: "電視主持 20 年必備！換季乾咳、講話多、冷氣房專屬潤喉方",
    category: "日常茶飲",
    prepTime: "20 分鐘",
    suitableFor: "說話頻繁者、教師、演講者、換季呼吸道敏感族",
    description: "以水梨的天然清甜為底，加入甘溫的紅棗與枸杞，不僅滋潤咽喉黏膜，還能生津止渴，告別喉嚨卡卡與乾癢。",
    ingredients: [
      { name: "台灣產水梨 (帶皮切小塊)", amount: "1 顆" },
      { name: "紅棗 (剪開去核去燥)", amount: "6 顆" },
      { name: "枸杞", amount: "15 克" },
      { name: "老薑片 (溫中祛寒)", amount: "1-2 片" },
      { name: "純蜂蜜", amount: "起鍋微溫後淋入 1 茶匙" }
    ],
    steps: [
      "水梨以小蘇打與清水徹底洗淨表皮，連皮切成立方小塊。",
      "鍋內倒入 1000ml 水，加入梨塊、紅棗、老薑片，大火煮滾後轉小火慢燉 15 分鐘。",
      "起鍋前 2 分鐘加入枸杞，熄火燜 3 分鐘。",
      "待茶湯降溫至 50 度左右微溫時，再依喜好加入蜂蜜攪勻即可熱飲（高溫會破壞蜂蜜營養活性）。"
    ],
    nutritionNote: "梨皮富含酚酸與果膠，連皮燉煮潤燥力更勝純梨肉。"
  },
  {
    id: "r-brain-balls",
    title: "15分鐘免烤箱！專注力堅果能量球",
    subtitle: "放學後元氣點心，拒絕高糖零食的親子 DIY 首選",
    category: "親子料理",
    prepTime: "15 分鐘",
    suitableFor: "成長期學童、讀書考生、運動前後能量補充",
    description: "無需烤箱，只要一隻攪拌盆就能和孩子一起動手捏出圓滾滾的美味能量球！豐富的 Omega-3 堅果與慢卡路里燕麥，提供持久專注力。",
    ingredients: [
      { name: "即食大燕麥片", amount: "1.5 杯" },
      { name: "無糖天然花生醬或芝麻醬", amount: "1/2 杯" },
      { name: "天然蜂蜜或楓糖漿", amount: "1/3 杯" },
      { name: "綜合堅果碎 (核桃、杏仁)", amount: "1/2 杯" },
      { name: "無糖蔓越莓乾或葡萄乾", amount: "1/4 杯" },
      { name: "熟白芝麻或純可可粉", amount: "裝飾適量" }
    ],
    steps: [
      "在大碗中將燕麥片、堅果碎、蔓越莓乾混合均勻。",
      "加入花生醬與蜂蜜，以刮刀或雙手充分抓勻直至成團具黏性。",
      "洗淨雙手抹少許飲用水，帶領小朋友一起將麵糰搓成約一口大小的可愛小圓球（約可做 12-15 顆）。",
      "滾上一層熟白芝麻或純可可粉，放入冰箱冷藏 20 分鐘定型，口感Q彈香濃！"
    ],
    nutritionNote: "核桃外形似大腦，富含亞麻酸，能輔助大腦神經網絡發育；燕麥升糖指數低，不容易引發孩子情緒浮躁。"
  },
  {
    id: "r-sleep-soak",
    title: "媽咪深層放鬆！洋甘菊草本暖足舒眠湯",
    subtitle: "卸下一整天主持與育兒疲勞的 15 分鐘夜晚儀式",
    category: "好眠舒壓",
    prepTime: "10 分鐘",
    suitableFor: "手腳冰冷、睡眠品質欠佳、壓力過大的爸爸媽媽",
    description: "足部為人體第二心臟，匯聚多條重要經絡。以溫和的洋甘菊與天然海鹽泡腳，能迅速引導虛火下行、促進全身微循環，帶來深層香甜好眠。",
    ingredients: [
      { name: "乾燥洋甘菊 (或天然茶包)", amount: "2 大包" },
      { name: "天然粗海鹽或瀉鹽 (Epsom Salt)", amount: "半碗" },
      { name: "老薑拍碎", amount: "2 大塊" },
      { name: "甜橙或薰衣草精油 (非必需)", amount: "2-3 滴" }
    ],
    steps: [
      "先用小鍋加 1500ml 水將拍碎的老薑與洋甘菊煮沸 5 分鐘，釋放草本芬芳與薑辣素。",
      "將濃縮草本湯汁倒入足浴桶中，加入溫熱水調和至約 40-42 度舒服溫度。",
      "倒入粗海鹽並攪拌融化，雙足浸泡至小腿肚三陰交穴上方。",
      "閉上雙眼深呼吸 15 分鐘，額頭微出薄汗即可擦乾穿上保暖棉襪入睡。"
    ],
    nutritionNote: "泡腳水溫不宜超過 43 度，飯後一小時內不宜浸泡，高血壓患者宜控制在 10 分鐘以內。"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "凱云的每週旗艦節目《健康云之道》什麼時候可以看到？在哪裡收看？",
    category: "節目與合作",
    answer: "《健康云之道》於每週六晚上 20:00 在 YouTube 官方頻道（@health_2.0）準時首播！每集聚焦於現代人最關心的生活健康、疾病預防、親子共育與天然養生妙方。首播時凱云也會在聊天室或社群與大家互動，歡迎點擊本站頂部按鈕一鍵訂閱並開啟小鈴鐺通知！",
    highlights: ["每週六 20:00 YouTube 首播", "首播聊天室即時互動", "訂閱並開啟小鈴鐺"]
  },
  {
    id: "faq-2",
    question: "官方 Line 和 Line 私密社群有什麼差別？如何加入？",
    category: "節目與合作",
    answer: "【官方 Line 帳號】（lin.ee/BOysxHB）主要發布官方權威推播、每週影片重點圖文懶人包與獨家活動資訊；【Line 私密社群】則是一個溫暖互助的專屬交流大家庭，裡面有許多熱心媽咪與健康夥伴，可以即時提出育兒疑惑、交流今天煮的親子料理，凱云有空也會在社群裡與大家聊天互勉。",
    highlights: ["官方Line：官方快訊與精美圖卡", "私密社群：雙向交流與即時發問互助"]
  },
  {
    id: "faq-3",
    question: "孩子放學回來常常情緒失控、尖叫或拒絕溝通，該如何引導？",
    category: "親子教養",
    answer: "很多時候孩子在學校已經消耗了整天的自制力（意志力疲勞），一回到最安全的家便容易宣洩情緒。建議大人遵循『三不二要』原則：不要立刻質問『你今天在學校怎麼了』、不要打斷他哭泣、不要說『這有什麼好哭的』；要先給他一杯溫水或小點心補充血糖，要張開雙臂平靜地說『媽媽在，等你想說的時候我都在』。給孩子 15 分鐘冷卻緩衝，往往問題就解決了大半。",
    highlights: ["先補充血糖與水分", "大人保持平靜呼吸", "先接納情緒，再梳理事件"]
  },
  {
    id: "faq-4",
    question: "為什麼凱云特別推薦古法工藝的「蛋黃油 (eggoil)」？家庭該如何搭配？",
    category: "生活養生",
    answer: "傳統古法慢火熬製的蛋黃油是極為珍貴的天然卵磷脂與脂溶性維生素濃縮精華。現代許多加工萃取常使用化學溶劑，而正統古法工藝只靠純物理火候提煉，純淨無添加。它非常適合長期用腦的學生、長輩滋養、產後媽咪修復與季節轉換時的體質調養。每日早晨一小匙，溫潤好吞，是我個人與家庭非常信賴的傳統養生良伴。更多工藝詳情可參考本專頁推薦的 https://www.nectw721.com 網站！",
    highlights: ["古法慢火熬製無化學殘留", "天然高濃度卵磷脂", "溫潤好吸收，四季皆宜"]
  },
  {
    id: "faq-5",
    question: "如何洽談鄭凱云主持、演講、公益代言或品牌合作？",
    category: "節目與合作",
    answer: "各類型電視與網路節目主持、政府與企業健康講座、親子教養親職教育講座、品牌形象代言與商品體驗合作，歡迎直接寄信至官方信箱：yunbaby1017@gmail.com。您也可以直接使用本網站底部的「合作洽談表單」自動生成合作企劃摘要，團隊將在收到信件後於 1-2 個工作天內專人回覆！",
    highlights: ["信箱：yunbaby1017@gmail.com", "涵蓋主持、演講、教養與品牌合作", "快速表單即時對接"]
  }
];

export const DAILY_INSPIRATIONS = [
  {
    quote: "照顧好自己的健康，是身為父母給孩子最棒、最長遠的身教禮物。",
    source: "鄭凱云 暖心語錄",
    category: "健康心法"
  },
  {
    quote: "教養不是把孩子雕刻成我們期待的模樣，而是像園丁一樣，提供肥沃土壤與陽光，等待他綻放自己的花期。",
    source: "鄭凱云 親子隨筆",
    category: "溫柔教養"
  },
  {
    quote: "累的時候不要硬撐，按下暫停鍵，喝一杯溫潤的茶，深呼吸三次。媽媽有笑容，全家才有陽光。",
    source: "鄭凱云 媽咪筆記",
    category: "日常充能"
  },
  {
    quote: "大自然的芬多精與泥土，是孩子天然的免疫力疫苗。週末牽起孩子的手，去戶外走走吧！",
    source: "健康云之道 小旅行篇",
    category: "戶外共融"
  },
  {
    quote: "古人的智慧往往藏在最樸實的食材裡。一顆雞蛋的精萃、一盅溫水梨，簡單也能蘊含巨大的滋養力量。",
    source: "健康云之道 養生篇",
    category: "天然食養"
  }
];
