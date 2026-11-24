/* =========================================================
   Abdalhadi Almajali — Portfolio
   All text lives in CONTENT (en / ar). Edit it there.
   To show a photo, put it at assets/photo.jpg — the initials
   are used automatically when the photo is missing.
   ========================================================= */

const PROFILE = {
  email: "mjalybdalhady@gmail.com",
  phone: "+962 79 103 5095",
  phoneHref: "+962791035095",
  linkedin: "https://www.linkedin.com/in/abdalhadi-majali",
  linkedinLabel: "linkedin.com/in/abdalhadi-majali",
  github: "https://github.com/Abdelhady123",
  githubLabel: "github.com/Abdelhady123",
  cv: "assets/Abdalhadi_Majali_CV.pdf",
  photo: "assets/photo.jpg",
};

/* Skill groups: names are shared, only group titles are translated. */
const SKILLS = [
  { cat: "android", key: "languages", items: ["Kotlin", "Java"] },
  { cat: "android", key: "android", items: ["Android SDK", "Android Jetpack", "Jetpack Compose", "XML Layouts", "Material Design"] },
  { cat: "android", key: "arch", items: ["MVVM", "ViewModel", "StateFlow", "Kotlin Coroutines", "Flow", "Dagger Hilt"] },
  { cat: "android", key: "net", items: ["REST APIs", "Retrofit", "OkHttp", "JSON"] },
  { cat: "android", key: "firebase", items: ["Firebase Cloud Messaging (FCM)", "Push Notifications"] },
  { cat: "qa", key: "qa", items: ["Manual Testing", "Automation Testing", "Bug Reporting"] },
  { cat: "qa", key: "practices", items: ["Unit Testing", "Debugging", "Code Reviews", "Refactoring"] },
  { cat: "data", key: "db", items: ["SQL", "MySQL", "PostgreSQL"] },
  { cat: "data", key: "tools", items: ["Git", "GitHub", "Gradle", "CI/CD", "Android Studio", "Docker", "Jira", "Postman"] },
  { cat: "ai", key: "ai", items: ["MCP", "Tools", "Agent Skills", "Hooks", "Harness Design", "AI Agent Orchestration", "LiteLLM", "Playwright"] },
];

const CONTENT = {
  en: {
    dir: "ltr",
    langSwitch: "ع",
    langSwitchLabel: "التبديل إلى العربية",
    themeLabel: "Toggle dark mode",
    skip: "Skip to main content",
    nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", projects: "Projects", education: "Education", contact: "Contact" },
    hero: {
      hi: "Hi, I'm",
      name: "Abdalhadi Almajali",
      roles: ["Android Developer", "QA Engineer", "Kotlin & Jetpack Compose", "AI-Driven Development"],
      tagline: "I build reliable Android apps with Kotlin and Jetpack Compose, and test every feature end to end so it ships stable.",
      projects: "View projects",
      contact: "Contact me",
      location: "Amman, Jordan",
    },
    stats: [
      { n: "3+", l: "Years of Android development" },
      { n: "2", l: "Years of hands-on QA" },
      { n: "2", l: "Companies" },
    ],
    about: {
      title: "About",
      p: [
        "I'm <strong>Abdalhadi Almajali</strong>, an Android Developer based in Amman, Jordan, with <strong>3 years</strong> of professional experience building and maintaining Android apps in Kotlin. I deliver new features, refactor existing ones, and migrate legacy XML screens to Jetpack Compose within an MVVM architecture.",
        "I also bring <strong>2 years of hands-on QA experience</strong>. I test each feature I deliver end to end with manual and automation testing, write clear bug reports in Jira, and work closely with backend and QA engineers to ship reliable, maintainable releases.",
      ],
      cv: "Download CV",
      cards: [
        { icon: "code", t: "What I build", d: "Android apps with Kotlin, Jetpack Compose, MVVM, Coroutines, Flow and Dagger Hilt." },
        { icon: "check", t: "How I test", d: "Manual and automation testing, API checks with Postman, SQL data checks, and bug reports in Jira." },
        { icon: "globe", t: "Languages", d: "Arabic (native) · English (fluent)" },
      ],
    },
    skills: {
      title: "Skills",
      tabs: { all: "All", android: "Android", qa: "QA & Testing", data: "Data & Tools", ai: "AI Engineering" },
      groups: { languages: "Languages", android: "Android", arch: "Architecture & State", net: "Networking", firebase: "Firebase", qa: "QA", practices: "Practices", db: "Database", tools: "Tools", ai: "AI-Driven Engineering" },
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Android Developer", company: "Folowise", where: "Amman, Jordan", when: "Oct 2025 – Present",
          points: [
            "Migrated the Captain (driver) app's legacy XML-based Sign Up flow to Jetpack Compose, rebuilding the screens in Kotlin with UI state owned by the ViewModel for a cleaner, more maintainable codebase.",
            "Improved state management by consolidating screen state in ViewModel and StateFlow, giving the UI a single source of truth for loading, success, and error states.",
            "Integrated Firebase Cloud Messaging (FCM) push notifications for captains and delivered new features in close collaboration with backend and QA engineers.",
            "Tested the Captain app's login, sign-in, and order flows, along with other core features, using manual and automation testing, and wrote detailed bug reports in Jira to catch issues before release.",
          ],
          tags: ["Kotlin", "Jetpack Compose", "MVVM", "StateFlow", "FCM", "Jira"],
        },
        {
          role: "Android Developer", company: "Zero On Tech", where: "Amman, Jordan", when: "Oct 2023 – Oct 2025",
          points: [
            "Delivered new features for Android applications using Kotlin, Android Jetpack, and MVVM architecture, from requirements through release.",
            "Refactored existing features and migrated legacy XML-based screens to Jetpack Compose, managing UI state with ViewModel and StateFlow.",
            "Implemented asynchronous data loading with Kotlin Coroutines and Flow, and structured dependencies with Dagger Hilt.",
            "Debugged and fixed application issues, took part in code reviews, and wrote unit tests to keep features stable.",
          ],
          tags: ["Kotlin", "Android Jetpack", "Jetpack Compose", "Coroutines", "Flow", "Dagger Hilt", "Unit Testing"],
        },
      ],
    },
    projects: {
      title: "Projects",
      tabs: { all: "All", android: "Android", qa: "QA" },
      projects: [
        {
          cat: "android", badge: "Android", ctx: "Folowise · Captain (driver) app",
          t: "Sign Up flow rebuilt in Jetpack Compose",
          d: "Replaced the legacy XML Sign Up screens with Jetpack Compose. UI state lives in the ViewModel and is exposed through StateFlow, giving one source of truth for loading, success and error states.",
          tags: ["Kotlin", "Jetpack Compose", "MVVM", "ViewModel", "StateFlow"],
        },
        {
          cat: "android", badge: "Android", ctx: "Folowise · Captain (driver) app",
          t: "Push notifications for captains",
          d: "Integrated Firebase Cloud Messaging so captains receive push notifications, delivered together with the backend and QA engineers.",
          tags: ["Kotlin", "Firebase", "FCM", "Push Notifications"],
        },
        {
          cat: "qa", badge: "QA", ctx: "Folowise · Captain (driver) app",
          t: "Release testing of core flows",
          d: "Tested login, sign-in, order flows and other core features with manual and automation testing, and logged detailed bug reports in Jira so issues were fixed before release.",
          tags: ["Manual Testing", "Automation Testing", "Bug Reporting", "Jira"],
        },
        {
          cat: "android", badge: "Android", ctx: "Zero On Tech",
          t: "Legacy XML screens migrated to Compose",
          d: "Refactored existing features and moved XML screens to Jetpack Compose, with asynchronous loading through Coroutines and Flow and dependencies managed by Dagger Hilt.",
          tags: ["Jetpack Compose", "Coroutines", "Flow", "Dagger Hilt", "Unit Testing"],
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Bachelor of Software Engineering",
      school: "Mutah University, Jordan",
      when: "Sep 2020 – Jan 2025",
    },
    contact: {
      title: "Contact",
      intro: "Open to Android Developer and QA Engineer roles. You can reach me through any of these channels.",
      email: "Email", phone: "Phone", showPhone: "Show phone number", linkedin: "LinkedIn", github: "GitHub",
      location: "Location", locationValue: "Amman, Jordan", cv: "Download CV", cvSub: "My résumé as a PDF file",
    },
    footer: "© 2026 Abdalhadi Almajali. All rights reserved.",
  },

  ar: {
    dir: "rtl",
    langSwitch: "EN",
    langSwitchLabel: "Switch to English",
    themeLabel: "تبديل الوضع الليلي",
    skip: "تخطَّ إلى المحتوى الرئيسي",
    nav: { home: "الرئيسية", about: "نبذة عني", skills: "المهارات", experience: "الخبرات", projects: "المشاريع", education: "التعليم", contact: "تواصل معي" },
    hero: {
      hi: "مرحبًا، أنا",
      name: "عبدالهادي المجالي",
      roles: ["مطوّر أندرويد", "مهندس ضمان الجودة", "Kotlin و Jetpack Compose", "التطوير المدعوم بالذكاء الاصطناعي"],
      tagline: "أبني تطبيقات أندرويد موثوقة باستخدام Kotlin و Jetpack Compose، وأختبر كل ميزة من البداية إلى النهاية لضمان إصدارات مستقرة.",
      projects: "عرض المشاريع",
      contact: "تواصل معي",
      location: "عمّان، الأردن",
    },
    stats: [
      { n: "+3", l: "سنوات في تطوير أندرويد" },
      { n: "2", l: "سنوات خبرة عملية في ضمان الجودة" },
      { n: "2", l: "شركات عملت بها" },
    ],
    about: {
      title: "نبذة عني",
      p: [
        "أنا <strong>عبدالهادي المجالي</strong>، مطوّر أندرويد مقيم في عمّان، الأردن، لديّ <strong>3 سنوات</strong> من الخبرة المهنية في بناء تطبيقات أندرويد وصيانتها باستخدام Kotlin. أطوّر ميزات جديدة، وأعيد هيكلة الميزات الحالية، وأنقل شاشات XML القديمة إلى Jetpack Compose ضمن بنية MVVM.",
        "كما أمتلك <strong>سنتين من الخبرة العملية في ضمان الجودة</strong>؛ إذ أختبر كل ميزة أسلّمها من البداية إلى النهاية بالاختبار اليدوي والآلي، وأكتب تقارير أخطاء واضحة على Jira، وأعمل عن قرب مع مهندسي الواجهات الخلفية وضمان الجودة لإصدار تطبيقات موثوقة وسهلة الصيانة.",
      ],
      cv: "تحميل السيرة الذاتية",
      cards: [
        { icon: "code", t: "ماذا أبني", d: "تطبيقات أندرويد باستخدام Kotlin و Jetpack Compose و MVVM و Coroutines و Flow و Dagger Hilt." },
        { icon: "check", t: "كيف أختبر", d: "اختبار يدوي وآلي، وفحص واجهات API باستخدام Postman، والتحقق من البيانات بـ SQL، وكتابة تقارير الأخطاء على Jira." },
        { icon: "globe", t: "اللغات", d: "العربية (اللغة الأم) · الإنجليزية (بطلاقة)" },
      ],
    },
    skills: {
      title: "المهارات",
      tabs: { all: "الكل", android: "أندرويد", qa: "الجودة والاختبار", data: "البيانات والأدوات", ai: "هندسة الذكاء الاصطناعي" },
      groups: { languages: "لغات البرمجة", android: "أندرويد", arch: "البنية وإدارة الحالة", net: "الشبكات", firebase: "Firebase", qa: "ضمان الجودة", practices: "الممارسات", db: "قواعد البيانات", tools: "الأدوات", ai: "الهندسة المدعومة بالذكاء الاصطناعي" },
    },
    experience: {
      title: "الخبرات",
      jobs: [
        {
          role: "مطوّر أندرويد", company: "Folowise", where: "عمّان، الأردن", when: "أكتوبر 2025 – حتى الآن",
          points: [
            "نقلت مسار التسجيل في تطبيق الكابتن (السائق) من واجهات XML القديمة إلى Jetpack Compose، وأعدت بناء الشاشات بلغة Kotlin مع إدارة حالة الواجهة داخل ViewModel للحصول على كود أنظف وأسهل في الصيانة.",
            "حسّنت إدارة الحالة بتجميع حالة الشاشة في ViewModel و StateFlow، ما منح الواجهة مصدرًا واحدًا موثوقًا لحالات التحميل والنجاح والخطأ.",
            "دمجت إشعارات Firebase Cloud Messaging (FCM) للكباتن، وطوّرت ميزات جديدة بالتعاون الوثيق مع مهندسي الواجهات الخلفية وضمان الجودة.",
            "اختبرت مسارات تسجيل الدخول والطلبات وغيرها من الميزات الأساسية في تطبيق الكابتن بالاختبار اليدوي والآلي، وكتبت تقارير أخطاء مفصّلة على Jira لاكتشاف المشكلات قبل الإصدار.",
          ],
          tags: ["Kotlin", "Jetpack Compose", "MVVM", "StateFlow", "FCM", "Jira"],
        },
        {
          role: "مطوّر أندرويد", company: "Zero On Tech", where: "عمّان، الأردن", when: "أكتوبر 2023 – أكتوبر 2025",
          points: [
            "طوّرت ميزات جديدة لتطبيقات أندرويد باستخدام Kotlin و Android Jetpack وبنية MVVM، من مرحلة المتطلبات حتى الإصدار.",
            "أعدت هيكلة ميزات قائمة ونقلت شاشات XML القديمة إلى Jetpack Compose، مع إدارة حالة الواجهة عبر ViewModel و StateFlow.",
            "نفّذت تحميل البيانات بشكل غير متزامن باستخدام Kotlin Coroutines و Flow، ونظّمت الاعتماديات باستخدام Dagger Hilt.",
            "شخّصت مشكلات التطبيقات وأصلحتها، وشاركت في مراجعات الكود، وكتبت اختبارات الوحدة للحفاظ على استقرار الميزات.",
          ],
          tags: ["Kotlin", "Android Jetpack", "Jetpack Compose", "Coroutines", "Flow", "Dagger Hilt", "Unit Testing"],
        },
      ],
    },
    projects: {
      title: "المشاريع",
      tabs: { all: "الكل", android: "أندرويد", qa: "ضمان الجودة" },
      projects: [
        {
          cat: "android", badge: "أندرويد", ctx: "Folowise · تطبيق الكابتن (السائق)",
          t: "إعادة بناء مسار التسجيل بـ Jetpack Compose",
          d: "استبدال شاشات التسجيل القديمة المبنية بـ XML بواجهات Jetpack Compose، مع إدارة حالة الواجهة في ViewModel وعرضها عبر StateFlow كمصدر واحد لحالات التحميل والنجاح والخطأ.",
          tags: ["Kotlin", "Jetpack Compose", "MVVM", "ViewModel", "StateFlow"],
        },
        {
          cat: "android", badge: "أندرويد", ctx: "Folowise · تطبيق الكابتن (السائق)",
          t: "الإشعارات الفورية للكباتن",
          d: "دمج Firebase Cloud Messaging ليتلقى الكباتن الإشعارات الفورية، بالتعاون مع مهندسي الواجهات الخلفية وضمان الجودة.",
          tags: ["Kotlin", "Firebase", "FCM", "Push Notifications"],
        },
        {
          cat: "qa", badge: "ضمان الجودة", ctx: "Folowise · تطبيق الكابتن (السائق)",
          t: "اختبار المسارات الأساسية قبل الإصدار",
          d: "اختبار تسجيل الدخول ومسارات الطلبات وغيرها من الميزات الأساسية بالاختبار اليدوي والآلي، وتوثيق تقارير أخطاء مفصّلة على Jira لإصلاح المشكلات قبل الإصدار.",
          tags: ["Manual Testing", "Automation Testing", "Bug Reporting", "Jira"],
        },
        {
          cat: "android", badge: "أندرويد", ctx: "Zero On Tech",
          t: "ترحيل شاشات XML القديمة إلى Compose",
          d: "إعادة هيكلة ميزات قائمة ونقل شاشات XML إلى Jetpack Compose، مع تحميل غير متزامن عبر Coroutines و Flow وإدارة الاعتماديات باستخدام Dagger Hilt.",
          tags: ["Jetpack Compose", "Coroutines", "Flow", "Dagger Hilt", "Unit Testing"],
        },
      ],
    },
    education: {
      title: "التعليم",
      degree: "بكالوريوس هندسة البرمجيات",
      school: "جامعة مؤتة، الأردن",
      when: "سبتمبر 2020 – يناير 2025",
    },
    contact: {
      title: "تواصل معي",
      intro: "متاح لفرص العمل كمطوّر أندرويد أو مهندس ضمان جودة. يمكنك التواصل معي عبر أي من هذه القنوات.",
      email: "البريد الإلكتروني", phone: "الهاتف", showPhone: "إظهار رقم الهاتف", linkedin: "لينكدإن", github: "GitHub",
      location: "الموقع", locationValue: "عمّان، الأردن", cv: "تحميل السيرة الذاتية", cvSub: "سيرتي الذاتية بصيغة PDF",
    },
    footer: "© 2026 عبدالهادي المجالي. جميع الحقوق محفوظة.",
  },
};

/* ---------- Icons (inline SVG) ---------- */
const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  about: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  skills: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  experience: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  projects: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  education: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  contact: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  download: '<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  check: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
};
const icon = (name, cls = "") => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const SECTIONS = ["home", "about", "skills", "experience", "projects", "education", "contact"];

/* ---------- Preferences (stored per browser, optional) ---------- */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let theme = store.get("theme") || (prefersDark ? "dark" : "light");
let lang = store.get("lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Render ---------- */
const $ = (sel) => document.querySelector(sel);
const head = (n, title) =>
  `<div class="section-head reveal"><span class="num">0${n}.</span><h2>${title}</h2><span class="line"></span></div>`;

function renderRail(c) {
  $("#rail").innerHTML =
    SECTIONS.map((id) => `<a href="#${id}" data-sec="${id}" aria-label="${c.nav[id]}">${icon(id)}<span class="tip">${c.nav[id]}</span></a>`).join("") +
    `<span class="sep"></span>
     <button type="button" id="themeBtn" aria-label="${c.themeLabel}">${icon(theme === "dark" ? "sun" : "moon")}<span class="tip">${c.themeLabel}</span></button>
     <button type="button" id="langBtn" class="lang" aria-label="${c.langSwitchLabel}">${c.langSwitch}<span class="tip">${c.langSwitchLabel}</span></button>`;
  $("#themeBtn").addEventListener("click", toggleTheme);
  $("#langBtn").addEventListener("click", toggleLang);
}

function renderHero(c) {
  $("#home").innerHTML = `
    <div class="hero-text">
      <p class="hi reveal">${c.hero.hi}</p>
      <h1 class="reveal"><span class="grad">${c.hero.name}</span></h1>
      <div class="typed reveal" aria-live="polite"><span class="prompt">&gt;_</span><span id="typed"></span><span class="caret"></span></div>
      <p class="tagline reveal">${c.hero.tagline}</p>
      <div class="ctas reveal">
        <a class="btn btn-primary" href="#projects">${c.hero.projects} ${icon("arrow", "flip")}</a>
        <a class="btn btn-ghost" href="#contact">${icon("contact")} ${c.hero.contact}</a>
      </div>
      <div class="stats reveal">
        ${c.stats.map((s) => `<div class="card stat"><b class="grad">${s.n}</b><span>${s.l}</span></div>`).join("")}
      </div>
      <div class="loc reveal">${icon("pin")} ${c.hero.location}</div>
    </div>
    <div class="avatar-wrap reveal" aria-hidden="true">
      <div class="halo"></div><div class="ring"></div>
      <div class="avatar"><span class="initials grad">AM</span></div>
      <span class="float f1"><i></i>Kotlin</span>
      <span class="float f2"><i></i>Jetpack Compose</span>
      <span class="float f3"><i></i>QA · Jira</span>
    </div>`;
  // Show assets/photo.jpg if it exists; keep the initials otherwise.
  const img = new Image();
  img.alt = c.hero.name;
  img.onload = () => $(".avatar").appendChild(img);
  img.src = PROFILE.photo;
}

function renderAbout(c) {
  $("#about").innerHTML = `${head(1, c.about.title)}
    <div class="about-grid">
      <div class="about-text reveal">
        ${c.about.p.map((p) => `<p>${p}</p>`).join("")}
        <a class="btn btn-primary" href="${PROFILE.cv}" download>${icon("download")} ${c.about.cv}</a>
      </div>
      <div class="about-cards">
        ${c.about.cards.map((k) => `<div class="card mini reveal"><span class="ic">${icon(k.icon)}</span><div><h3>${k.t}</h3><p>${k.d}</p></div></div>`).join("")}
      </div>
    </div>`;
}

function tabs(map, group) {
  return `<div class="tabs reveal" role="group">${Object.entries(map)
    .map(([k, v], i) => `<button type="button" class="tab" data-group="${group}" data-filter="${k}" aria-pressed="${i === 0}">${v}</button>`)
    .join("")}</div>`;
}

function renderSkills(c) {
  $("#skills").innerHTML = `${head(2, c.skills.title)}
    ${tabs(c.skills.tabs, "skills")}
    <div class="skills-grid">
      ${SKILLS.map((g) => `<div class="card skill-card reveal" data-cat="${g.cat}">
          <h3><span class="dot"></span>${c.skills.groups[g.key]}</h3>
          <div class="chips">${g.items.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;
}

function renderExperience(c) {
  $("#experience").innerHTML = `${head(3, c.experience.title)}
    <div class="timeline">
      ${c.experience.jobs.map((j) => `<article class="card job reveal">
          <div class="job-top"><h3>${j.role} · <span class="co">${j.company}</span></h3><span class="when">${j.when}</span></div>
          <div class="where">${j.where}</div>
          <ul>${j.points.map((p) => `<li>${p}</li>`).join("")}</ul>
          <div class="chips">${j.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        </article>`).join("")}
    </div>`;
}

function renderProjects(c) {
  $("#projects").innerHTML = `${head(4, c.projects.title)}
    ${tabs(c.projects.tabs, "projects")}
    <div class="projects-grid">
      ${c.projects.projects.map((p) => `<article class="card project reveal" data-cat="${p.cat}">
          <div class="meta"><span class="badge">${p.badge}</span></div>
          <h3>${p.t}</h3>
          <div class="ctx">${icon("building")} ${p.ctx}</div>
          <p>${p.d}</p>
          <div class="chips">${p.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        </article>`).join("")}
    </div>`;
}

function renderEducation(c) {
  const e = c.education;
  $("#education").innerHTML = `${head(5, e.title)}
    <div class="card edu reveal">
      <span class="ic">${icon("education")}</span>
      <div><h3>${e.degree}</h3><div class="co">${e.school}</div><span class="chip">${e.when}</span></div>
    </div>`;
}

function renderContact(c) {
  const k = c.contact;
  const item = (href, ic, label, value, extra = "") =>
    `<a class="card contact-item reveal" href="${href}" ${extra}><span class="ic">${icon(ic)}</span><span><small>${label}</small><b>${value}</b></span></a>`;
  $("#contact").innerHTML = `${head(6, k.title)}
    <p class="contact-intro reveal">${k.intro}</p>
    <div class="contact-grid">
      ${item(`mailto:${PROFILE.email}`, "contact", k.email, PROFILE.email)}
      <button type="button" class="card contact-item reveal" id="phoneBtn"><span class="ic">${icon("phone")}</span><span><small>${k.phone}</small><b id="phoneVal">••• •• ••• ••••</b><small id="phoneHint">${k.showPhone}</small></span></button>
      ${item(PROFILE.linkedin, "linkedin", k.linkedin, PROFILE.linkedinLabel, 'target="_blank" rel="noopener"')}
      ${item(PROFILE.github, "github", k.github, PROFILE.githubLabel, 'target="_blank" rel="noopener"')}
      <div class="card contact-item reveal"><span class="ic">${icon("pin")}</span><span><small>${k.location}</small><b style="direction:inherit">${k.locationValue}</b></span></div>
      ${item(PROFILE.cv, "download", k.cvSub, k.cv, "download")}
    </div>`;
  $("#phoneBtn").addEventListener("click", () => {
    const btn = $("#phoneBtn");
    if (btn.dataset.shown) { window.location.href = `tel:${PROFILE.phoneHref}`; return; }
    btn.dataset.shown = "1";
    $("#phoneVal").textContent = PROFILE.phone;
    $("#phoneHint").remove();
  });
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach((btn) =>
    btn.addEventListener("click", () => {
      const group = btn.dataset.group;
      document.querySelectorAll(`.tab[data-group="${group}"]`).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      const f = btn.dataset.filter;
      document.querySelectorAll(`#${group} [data-cat]`).forEach((el) => {
        el.hidden = f !== "all" && el.dataset.cat !== f;
        if (!el.hidden) el.classList.add("in");
      });
    })
  );
}

/* ---------- Typing effect ---------- */
let typingRun = 0;
async function typeRoles(roles) {
  const run = ++typingRun;
  const el = $("#typed");
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  if (reduceMotion) { el.textContent = roles[0]; return; }
  for (let i = 0; run === typingRun; i = (i + 1) % roles.length) {
    const word = roles[i];
    for (let n = 1; n <= word.length && run === typingRun; n++) { el.textContent = word.slice(0, n); await wait(70); }
    await wait(1600);
    for (let n = word.length; n >= 0 && run === typingRun; n--) { el.textContent = word.slice(0, n); await wait(35); }
    await wait(300);
  }
}

/* ---------- Scroll reveal + active section ---------- */
let revealObs, navObs;
function observe() {
  revealObs?.disconnect(); navObs?.disconnect();
  revealObs = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  navObs = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    document.querySelectorAll(".rail a").forEach((a) => a.classList.toggle("active", a.dataset.sec === e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  SECTIONS.forEach((id) => navObs.observe(document.getElementById(id)));
}

/* ---------- Theme & language ---------- */
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const btn = $("#themeBtn");
  if (btn) btn.firstElementChild.outerHTML = icon(theme === "dark" ? "sun" : "moon");
}
function toggleTheme() { theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); applyTheme(); }
function toggleLang() { lang = lang === "en" ? "ar" : "en"; store.set("lang", lang); render(); }

function render() {
  const c = CONTENT[lang];
  const html = document.documentElement;
  html.lang = lang; html.dir = c.dir;
  document.title = lang === "ar" ? "عبدالهادي المجالي | معرض الأعمال" : "Abdalhadi Almajali | Portfolio";
  $(".skip").textContent = c.skip;
  renderRail(c); renderHero(c); renderAbout(c); renderSkills(c);
  renderExperience(c); renderProjects(c); renderEducation(c); renderContact(c);
  $("#footer").textContent = c.footer;
  bindTabs(); observe(); typeRoles(c.hero.roles);
}

/* ---------- Background network (blue dots) ---------- */
function startBackground() {
  const cv = $("#bg"), ctx = cv.getContext("2d");
  let w, h, pts = [], mouse = { x: -999, y: -999 };
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    const count = Math.min(80, Math.round((innerWidth * innerHeight) / 17000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr, r: (Math.random() * 1.6 + 0.8) * dpr,
    }));
    cv.dpr = dpr;
  };
  addEventListener("resize", resize);
  addEventListener("pointermove", (e) => { mouse.x = e.clientX * cv.dpr; mouse.y = e.clientY * cv.dpr; });
  resize();
  const frame = () => {
    const color = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#2563eb";
    const dark = document.documentElement.dataset.theme === "dark";
    ctx.clearRect(0, 0, w, h);
    const max = 130 * cv.dpr;
    for (const p of pts) {
      if (!reduceMotion) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    ctx.strokeStyle = color; ctx.fillStyle = color;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < max) { ctx.globalAlpha = (1 - d / max) * (dark ? 0.35 : 0.22); ctx.lineWidth = cv.dpr * 0.8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < max * 1.4) { ctx.globalAlpha = (1 - dm / (max * 1.4)) * 0.6; ctx.lineWidth = cv.dpr; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      ctx.globalAlpha = dark ? 0.8 : 0.55; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(frame);
  };
  frame();
}

applyTheme();
render();
startBackground();
