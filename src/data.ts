import type { ResumeProfileData, AppCopy, StudyResource } from './types';

export const ResumeProfileEn: ResumeProfileData = {
  name: "Teddy Lin",
  title: "Android Developer",
  location: "Taoyuan City, Taiwan",
  email: "teddy.lin@example.com",
  githubUrl: "https://github.com/teddylinzz",
  linkedInUrl: "linkedin.com/in/teddy-lin-2945855a",
  summary: "Experienced Android developer with 10+ years of industry experience. Skilled in software architecture, team management, and performance optimization.",
  strengths: [
    "Android team leadership",
    "Mobile architecture",
    "Performance tuning",
    "Cross-functional delivery"
  ],
  skills: [
    { name: "Kotlin", level: 95, category: "Language" },
    { name: "Android SDK", level: 98, category: "Android" },
    { name: "Android Jetpack", level: 95, category: "Android" },
    { name: "Jetpack Compose", level: 92, category: "Android" },
    { name: "Software Architecture", level: 90, category: "Architecture" },
    { name: "Performance Optimization", level: 85, category: "Optimization" },
    { name: "Team Management", level: 88, category: "Management" },
    { name: "Jenkins", level: 80, category: "DevOps" }
  ],
  experience: [
    {
      role: "Android Team Lead",
      company: "LINE Bank",
      period: "Jun 2024 - Present",
      location: "Taipei, Taiwan · Hybrid",
      highlights: [
        "Lead the Android team and manage team resources.",
        "Keep delivery schedules on track across ongoing app work.",
        "Develop features for the current main app."
      ],
      startYear: 2024
    },
    {
      role: "Senior Android Developer",
      company: "LINE Bank",
      period: "Apr 2023 - Jun 2024",
      location: "Taipei, Taiwan · Hybrid",
      highlights: [
        "Developed production features for the current main app.",
        "Worked closely with UX, UI, and product managers."
      ],
      startYear: 2023
    },
    {
      role: "Senior Android Engineer",
      company: "EMQ Inc.",
      period: "Jun 2021 - Jan 2023",
      location: "Banqiao, New Taipei City, Taiwan",
      highlights: [
        "Built a completely new app from scratch with third-party collaboration.",
        "Designed software architecture for complicated functions.",
        "Partnered with UI, UX, and product managers to deliver app features."
      ],
      startYear: 2021
    },
    {
      role: "Senior Android Developer",
      company: "17 Media",
      period: "Nov 2019 - May 2021",
      location: "Taipei, Taiwan",
      highlights: [
        "Led junior developers to improve skill growth and delivery speed.",
        "Designed architecture for complicated Android functions.",
        "Created Jenkins jobs for beta APK distribution and scheduled daily tester builds.",
        "Built native libraries and analyzed performance issues such as ANR and OOM."
      ],
      startYear: 2019
    }
  ],
  education: {
    school: "Tamkang University",
    degree: "Master's degree, Department of Information Technology and Communications",
    period: "2008 - 2010"
  },
  projects: [
    {
      name: "MyResumeApp",
      description: "A Jetpack Compose resume app (the current one!) with offline support, PDF export, and responsive web design.",
      techStack: ["Kotlin", "Jetpack Compose", "React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/teddylinzz/MyResumeWithCompose"
    },
    {
      name: "AndroidCleanArch",
      description: "A template project showcasing Clean Architecture, MVVM/MVI, Kotlin Coroutines, Flow, and Hilt.",
      techStack: ["Kotlin", "Coroutines", "Flow", "Hilt", "Clean Architecture"],
      githubUrl: "https://github.com/teddylinzz/AndroidCleanArch"
    },
    {
      name: "AndroidPerformanceTuner",
      description: "A lightweight developer tool library to track memory leaks, ANR, and rendering lag.",
      techStack: ["Kotlin", "Android SDK", "ANR Tracking", "Memory Leak Finder"],
      githubUrl: "https://github.com/teddylinzz/AndroidPerformanceTuner"
    }
  ]
};

export const ResumeProfileZh: ResumeProfileData = {
  name: "Teddy Lin",
  title: "Android 開發者",
  location: "台灣桃園市",
  email: "teddy.lin@example.com",
  githubUrl: "https://github.com/teddylinzz",
  linkedInUrl: "linkedin.com/in/teddy-lin-2945855a",
  summary: "擁有 10 年以上產業經驗的 Android 開發者，熟悉軟體架構、團隊管理與效能最佳化。",
  strengths: [
    "Android 團隊領導",
    "行動端架構",
    "效能調校",
    "跨職能交付"
  ],
  skills: [
    { name: "Kotlin", level: 95, category: "語言" },
    { name: "Android SDK", level: 98, category: "Android" },
    { name: "Android Jetpack", level: 95, category: "Android" },
    { name: "Jetpack Compose", level: 92, category: "Android" },
    { name: "軟體架構", level: 90, category: "架構" },
    { name: "效能最佳化", level: 85, category: "優化" },
    { name: "團隊管理", level: 88, category: "管理" },
    { name: "Jenkins", level: 80, category: "DevOps" }
  ],
  experience: [
    {
      role: "Android 團隊負責人",
      company: "LINE Bank",
      period: "2024 年 6 月 - 目前",
      location: "台灣台北 · 混合辦公",
      highlights: [
        "帶領 Android 團隊並管理團隊資源。",
        "協調持續進行的 App 工作，確保交付時程穩定推進。",
        "開發目前主要 App 的產品功能。"
      ],
      startYear: 2024
    },
    {
      role: "資深 Android 開發者",
      company: "LINE Bank",
      period: "2023 年 4 月 - 2024 年 6 月",
      location: "台灣台北 · 混合辦公",
      highlights: [
        "開發正式環境使用的主要 App 功能。",
        "與 UX、UI 與產品經理密切合作。"
      ],
      startYear: 2023
    },
    {
      role: "資深 Android 工程師",
      company: "EMQ Inc.",
      period: "2021 年 6 月 - 2023 年 1 月",
      location: "台灣新北市板橋區",
      highlights: [
        "與第三方夥伴合作，從零建立全新的 App。",
        "為複雜功能設計軟體架構。",
        "與 UI、UX 與產品經理合作交付 App 功能。"
      ],
      startYear: 2021
    },
    {
      role: "資深 Android 開發者",
      company: "17 Media",
      period: "2019 年 11 月 - 2021 年 5 月",
      location: "台灣台北",
      highlights: [
        "帶領初階開發者提升技能成長與交付速度。",
        "為複雜 Android 功能設計架構。",
        "建立 Jenkins 工作，支援 beta APK 發佈與每日測試版排程建置。",
        "建置 native libraries，並分析 ANR、OOM 等效能問題。"
      ],
      startYear: 2019
    }
  ],
  education: {
    school: "淡江大學",
    degree: "資訊傳播學系碩士",
    period: "2008 年 - 2010 年"
  },
  projects: [
    {
      name: "MyResumeApp",
      description: "一款使用 Jetpack Compose 開發的個人履歷 App（即本專案！），支援離線模式、PDF 匯出以及響應式網頁設計。",
      techStack: ["Kotlin", "Jetpack Compose", "React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/teddylinzz/MyResumeWithCompose"
    },
    {
      name: "AndroidCleanArch",
      description: "一個展示 Clean Architecture、MVVM/MVI、Kotlin 協程 (Coroutines)、Flow 以及 Hilt 的模版專案。",
      techStack: ["Kotlin", "Coroutines", "Flow", "Hilt", "Clean Architecture"],
      githubUrl: "https://github.com/teddylinzz/AndroidCleanArch"
    },
    {
      name: "AndroidPerformanceTuner",
      description: "一款輕量化的開發者工具庫，用於追蹤記憶體洩漏 (Memory Leaks)、應用程式無回應 (ANR) 以及渲染延遲。",
      techStack: ["Kotlin", "Android SDK", "ANR 追蹤", "記憶體洩漏偵測"],
      githubUrl: "https://github.com/teddylinzz/AndroidPerformanceTuner"
    }
  ]
};

export const EnglishCopy: AppCopy = {
  experienceNav: "Experience",
  skillsNav: "Skills",
  studyNav: "Study",
  contactNav: "Contact",
  settingsNav: "Settings",
  shareContentDescription: "Share",
  settingsKicker: "System Configuration",
  settingsTitle: "Settings",
  generalSection: "GENERAL",
  languageLabel: "Language",
  englishLanguage: "ENGLISH",
  traditionalChineseLanguage: "繁體中文",
  interfaceThemeLabel: "Interface Theme",
  lightTheme: "LIGHT",
  darkTheme: "DARK",
  advancedSection: "ADVANCED",
  exportResumePdf: "Export Resume (PDF)",
  exportResumeSuccess: "Resume PDF exported.",
  exportResumeFailure: "Could not export resume PDF.",
  clearApplicationCache: "Clear Application Cache",
  clearCacheSuccess: "Application cache cleared.",
  clearCacheFailure: "Failed to clear application cache.",
  resumeCheckSection: "RESUME CHECK",
  resumeCheckStatusDue: "Status: LinkedIn review due",
  resumeCheckStatusVerified: "Status: Resume verified",
  resumeCheckLastReviewed: "Last reviewed",
  resumeCheckNeverReviewed: "Never reviewed",
  resumeCheckNextDue: "Next check",
  resumeCheckOpenLinkedIn: "Open LinkedIn",
  resumeCheckMarkReviewed: "Mark reviewed today",
  resumeEngineLabel: "RESUME ENGINE",
  resumeEngineStatus: "Status: Profile Data Verified",
  footerRole: "ANDROID DEVELOPER",
  professionalExperienceTitle: "Professional Experience",
  experienceSection: "Experience",
  educationSection: "Education",
  skillsTitle: "Skills & Expertise",
  skillsDescription: "A breakdown of my technical capabilities and creative arsenal.",
  technicalStackSection: "Technical Stack",
  studyTitle: "Android Study",
  studyDescription: "A curated list of my primary resources for staying updated with the Android ecosystem.",
  visitWebsite: "VISIT WEBSITE",
  contactInfoSection: "Contact Info",
  downloadResume: "DOWNLOAD RESUME",
  textDirectionLabel: "Text Direction",
  ltrLayout: "LTR",
  rtlLayout: "RTL",
  pdfCustomizationTitle: "PDF EXPORT OPTIONS",
  pdfShowSummaryLabel: "Include Summary",
  pdfShowEducationLabel: "Include Education",
  pdfShowSkillsLabel: "Include Skills",
  projectsTabTitle: "Projects",
  viewOnGithub: "VIEW ON GITHUB",
  filterAllYears: "All Years",
  filterSince2024: "Since 2024",
  filterSince2022: "Since 2022",
  filterSince2020: "Since 2020",
  selectedSkillLabel: "Filtered by skill: ",
  clearFilter: "Clear",
  skillAnalyticsTitle: "Skill Proficiency Analytics",
  qrCodeShareTitle: "Share via QR Code",
  timelineViewTitle: "Career Timeline"
};

export const TraditionalChineseCopy: AppCopy = {
  experienceNav: "經歷",
  skillsNav: "技能",
  studyNav: "學習",
  contactNav: "聯絡",
  settingsNav: "設定",
  shareContentDescription: "分享",
  settingsKicker: "系統設定",
  settingsTitle: "設定",
  generalSection: "一般",
  languageLabel: "語言",
  englishLanguage: "英文",
  traditionalChineseLanguage: "繁體中文",
  interfaceThemeLabel: "介面主題",
  lightTheme: "淺色",
  darkTheme: "深色",
  advancedSection: "進階",
  exportResumePdf: "匯出履歷（PDF）",
  exportResumeSuccess: "履歷 PDF 已匯出。",
  exportResumeFailure: "無法匯出履歷 PDF。",
  clearApplicationCache: "清除應用程式快取",
  clearCacheSuccess: "應用程式快取已清除。",
  clearCacheFailure: "無法清除應用程式快取。",
  resumeCheckSection: "履歷檢查",
  resumeCheckStatusDue: "狀態：LinkedIn 履歷待檢查",
  resumeCheckStatusVerified: "狀態：履歷已確認",
  resumeCheckLastReviewed: "上次檢查",
  resumeCheckNeverReviewed: "尚未檢查",
  resumeCheckNextDue: "下次檢查",
  resumeCheckOpenLinkedIn: "開啟 LinkedIn",
  resumeCheckMarkReviewed: "標記今天已檢查",
  resumeEngineLabel: "履歷資料",
  resumeEngineStatus: "狀態：資料已驗證",
  footerRole: "ANDROID 開發者",
  professionalExperienceTitle: "專業經歷",
  experienceSection: "工作經歷",
  educationSection: "學歷",
  skillsTitle: "技能與專長",
  skillsDescription: "整理我的技術能力、架構經驗與產品交付能力。",
  technicalStackSection: "技術棧",
  studyTitle: "Android 學習",
  studyDescription: "我用來追蹤 Android 生態系最新動態的主要學習資源。",
  visitWebsite: "前往網站",
  contactInfoSection: "聯絡資訊",
  downloadResume: "下載履歷",
  textDirectionLabel: "文字方向",
  ltrLayout: "由左至右 (LTR)",
  rtlLayout: "由右至左 (RTL)",
  pdfCustomizationTitle: "PDF 匯出選項",
  pdfShowSummaryLabel: "包含個人簡介",
  pdfShowEducationLabel: "包含學歷",
  pdfShowSkillsLabel: "包含技術專長",
  projectsTabTitle: "專案項目",
  viewOnGithub: "在 GITHUB 上查看",
  filterAllYears: "全部年份",
  filterSince2024: "2024 起",
  filterSince2022: "2022 起",
  filterSince2020: "2020 起",
  selectedSkillLabel: "已依技能篩選：",
  clearFilter: "清除",
  skillAnalyticsTitle: "技能熟練度分析",
  qrCodeShareTitle: "透過 QR Code 分享",
  timelineViewTitle: "職涯時光軸"
};

export const StudyResourcesEn: StudyResource[] = [
  {
    title: "Android Developers Blog",
    category: "Official News",
    description: "The latest news and announcements from the Android team at Google.",
    link: "https://android-developers.googleblog.com/",
    imageUrl: "https://developer.android.com/static/images/social/android-developers.png"
  },
  {
    title: "Android Developers Documentation",
    category: "Official Docs",
    description: "Modern Android development guides, samples, and API references.",
    link: "https://developer.android.com/",
    imageUrl: "https://developer.android.com/static/images/social/android-developers.png"
  },
  {
    title: "Kotlin Blog",
    category: "Language",
    description: "Official blog for the Kotlin programming language, covering multiplatform and Android updates.",
    link: "https://blog.jetbrains.com/kotlin/",
    imageUrl: "https://kotlinlang.org/assets/images/twitter-card.png"
  },
  {
    title: "Android Weekly",
    category: "Newsletter",
    description: "A free weekly newsletter that helps you stay cutting-edge with Android development.",
    link: "https://androidweekly.net/",
    imageUrl: "https://androidweekly.net/assets/logo-b2585243884814d95b058729517173e9d891632832811776c5b9671d1877660a.png"
  },
  {
    title: "Medium - Android Developers",
    category: "Community",
    description: "In-depth articles from the Google engineers working on the Android framework.",
    link: "https://medium.com/androiddevelopers",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*6ov000K6qZ95u4q2uN2LpA.png"
  },
  {
    title: "Claude Cookbook",
    category: "AI Cookbooks",
    description: "Learn how to build with Claude through hands-on examples and tutorials.",
    link: "https://platform.claude.com/cookbook/",
    imageUrl: "https://www.anthropic.com/images/icons/apple-touch-icon.png"
  },
  {
    title: "GitHub Copilot Cookbook",
    category: "AI Cookbooks",
    description: "Tutorials and guides for getting the most out of GitHub Copilot.",
    link: "https://docs.github.com/en/copilot/tutorials/copilot-chat-cookbook",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    title: "OpenAI Cookbook",
    category: "AI Cookbooks",
    description: "Examples and guides for building with the OpenAI API.",
    link: "https://developers.openai.com/cookbook",
    imageUrl: "https://openai.com/apple-touch-icon.png"
  },
  {
    title: "Gemini API Cookbook",
    category: "AI Cookbooks",
    description: "Examples and guides for building with the Gemini API.",
    link: "https://github.com/google-gemini/cookbook",
    imageUrl: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
  },
  {
    title: "ProAndroidDev",
    category: "Community",
    description: "Professional Android Development articles, tutorials, and guides.",
    link: "https://proandroiddev.com/",
    imageUrl: "https://miro.medium.com/v2/resize:fit:300/1*C4O_mIfhL4yP7o1d4XwGkg.png"
  },
  {
    title: "Google AI Blog",
    category: "AI News",
    description: "The latest news and research from Google AI.",
    link: "https://blog.research.google/",
    imageUrl: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPhO_Ckd_EQQ_Bxc=w300"
  }
];

export const StudyResourcesZh: StudyResource[] = [
  {
    title: "Android 開發者部落格",
    category: "官方消息",
    description: "Google Android 團隊發布的最新消息與公告。",
    link: "https://android-developers.googleblog.com/",
    imageUrl: "https://developer.android.com/static/images/social/android-developers.png"
  },
  {
    title: "Android 開發者文件",
    category: "官方文件",
    description: "現代 Android 開發指南、範例與 API 參考資料。",
    link: "https://developer.android.com/",
    imageUrl: "https://developer.android.com/static/images/social/android-developers.png"
  },
  {
    title: "Kotlin 部落格",
    category: "程式語言",
    description: "Kotlin 程式語言官方部落格，涵蓋 Multiplatform 與 Android 更新。",
    link: "https://blog.jetbrains.com/kotlin/",
    imageUrl: "https://kotlinlang.org/assets/images/twitter-card.png"
  },
  {
    title: "Android Weekly",
    category: "電子報",
    description: "免費的每週電子報，協助掌握 Android 開發前沿資訊。",
    link: "https://androidweekly.net/",
    imageUrl: "https://androidweekly.net/assets/logo-b2585243884814d95b058729517173e9d891632832811776c5b9671d1877660a.png"
  },
  {
    title: "Medium - Android 開發者",
    category: "社群",
    description: "Google Android 框架工程師撰寫的深入技術文章。",
    link: "https://medium.com/androiddevelopers",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*6ov000K6qZ95u4q2uN2LpA.png"
  },
  {
    title: "Claude Cookbook",
    category: "AI 實戰手冊",
    description: "透過實務範例與教學，學習如何使用 Claude 進行開發。",
    link: "https://platform.claude.com/cookbook/",
    imageUrl: "https://www.anthropic.com/images/icons/apple-touch-icon.png"
  },
  {
    title: "GitHub Copilot Cookbook",
    category: "AI 實戰手冊",
    description: "充分發揮 GitHub Copilot 潛力的教學與指南。",
    link: "https://docs.github.com/en/copilot/tutorials/copilot-chat-cookbook",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    title: "OpenAI Cookbook",
    category: "AI 實戰手冊",
    description: "使用 OpenAI API 進行開發的範例與指南。",
    link: "https://developers.openai.com/cookbook",
    imageUrl: "https://openai.com/apple-touch-icon.png"
  },
  {
    title: "Gemini API Cookbook",
    category: "AI 實戰手冊",
    description: "使用 Gemini API 進行開發的範例與指南。",
    link: "https://github.com/google-gemini/cookbook",
    imageUrl: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
  },
  {
    title: "ProAndroidDev",
    category: "社群",
    description: "專業的 Android 開發文章、教學與指南。",
    link: "https://proandroiddev.com/",
    imageUrl: "https://miro.medium.com/v2/resize:fit:300/1*C4O_mIfhL4yP7o1d4XwGkg.png"
  },
  {
    title: "Google AI Blog",
    category: "AI 消息",
    description: "來自 Google AI 的最新研究與新聞。",
    link: "https://blog.research.google/",
    imageUrl: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPhO_Ckd_EQQ_Bxc=w300"
  }
];
