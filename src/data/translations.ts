import { Language } from "./teachers";

export interface Translations {
  nav: {
    home: string;
    about: string;
    library: string;
    admission: string;
    gallery: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroBtn: string;
    admissionBtn: string;
    statsStudents: string;
    statsTeachers: string;
    statsYears: string;
    statsGrades: string;
    welcomeTitle: string;
    welcomeText: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    missionTitle: string;
    missionText: string;
    teachersTitle: string;
    teachersSubtitle: string;
    born: string;
    phone: string;
    viewProfile: string;
  };
  library: {
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    available: string;
    unavailable: string;
    booksCount: string;
    author: string;
    category: string;
    status: string;
  };
  admission: {
    pageTitle: string;
    pageSubtitle: string;
    studentName: string;
    studentAge: string;
    grade: string;
    parentPhone: string;
    message: string;
    submit: string;
    successTitle: string;
    successText: string;
    required: string;
    namePlaceholder: string;
    agePlaceholder: string;
    gradePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
  };
  gallery: {
    pageTitle: string;
    pageSubtitle: string;
    all: string;
    events: string;
    sports: string;
    celebrations: string;
    science: string;
    arts: string;
  };
  chat: { title: string; placeholder: string; send: string; welcome: string };
  footer: { address: string; phone: string; email: string; rights: string };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      library: "Library",
      admission: "Admission",
      gallery: "Gallery",
    },
    home: {
      heroTitle: "Excellence in Education",
      heroSubtitle:
        "Nurturing young minds for a brighter future through quality education, innovative teaching, and holistic development.",
      heroBtn: "Discover More",
      admissionBtn: "Apply Now",
      statsStudents: "Students",
      statsTeachers: "Teachers",
      statsYears: "Years of Excellence",
      statsGrades: "Grade Levels",
      welcomeTitle: "Welcome to Our School",
      welcomeText:
        "We are committed to providing world-class education that prepares students for success in the 21st century.",
      featuresTitle: "Why Choose Us",
      feature1Title: "Modern Curriculum",
      feature1Desc:
        "Up-to-date educational programs aligned with international standards.",
      feature2Title: "Expert Teachers",
      feature2Desc:
        "Highly qualified educators with years of professional experience.",
      feature3Title: "Digital Library",
      feature3Desc:
        "Extensive collection of books and digital resources for students.",
      feature4Title: "Safe Environment",
      feature4Desc:
        "A nurturing and secure environment where every child thrives.",
    },
    about: {
      pageTitle: "About Our School",
      pageSubtitle:
        "Learn about our mission, values, and the dedicated team behind our success.",
      missionTitle: "Our Mission",
      missionText:
        "Our school is dedicated to cultivating academic excellence, moral integrity, and social responsibility. We believe every student has unique potential.",
      teachersTitle: "Our Teaching Staff",
      teachersSubtitle:
        "Meet the dedicated professionals who inspire and guide our students every day.",
      born: "Born",
      phone: "Phone",
      viewProfile: "View Profile",
    },
    library: {
      pageTitle: "School Library",
      pageSubtitle:
        "Explore our extensive collection of books across all subjects and categories.",
      searchPlaceholder: "Search books, authors...",
      allCategories: "All Categories",
      available: "Available",
      unavailable: "Checked Out",
      booksCount: "books found",
      author: "Author",
      category: "Category",
      status: "Status",
    },
    admission: {
      pageTitle: "Online Admission",
      pageSubtitle: "Start your child's educational journey with us.",
      studentName: "Student Full Name",
      studentAge: "Student Age",
      grade: "Applying for Grade",
      parentPhone: "Parent Phone Number",
      message: "Additional Message",
      submit: "Submit Application",
      successTitle: "Application Submitted!",
      successText: "Thank you! We will contact you within 2-3 business days.",
      required: "This field is required",
      namePlaceholder: "Enter student's full name",
      agePlaceholder: "Enter student's age",
      gradePlaceholder: "Select grade",
      phonePlaceholder: "+998 XX XXX XX XX",
      messagePlaceholder: "Any additional information or questions...",
    },
    gallery: {
      pageTitle: "School Gallery",
      pageSubtitle: "Memorable moments from our vibrant school life.",
      all: "All",
      events: "Events",
      sports: "Sports",
      celebrations: "Celebrations",
      science: "Science",
      arts: "Arts",
    },
    chat: {
      title: "School Assistant",
      placeholder: "Ask me anything...",
      send: "Send",
      welcome: "Hello! I'm the school assistant. How can I help you today?",
    },
    footer: {
      address: "Sokh Street 59, Fergana, Uzbekistan",
      phone: "+998 99-616-44-56",
      email: "info@school.edu.uz",
      rights: "All rights reserved.",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Maktab haqida",
      library: "Kutubxona",
      admission: "Qabul",
      gallery: "Galereya",
    },
    home: {
      heroTitle: "Ta'limda Mukammallik",
      heroSubtitle:
        "Sifatli ta'lim, innovatsion o'qitish va har tomonlama rivojlantirish orqali yoshlarni yorqin kelajakka tayyorlaymiz.",
      heroBtn: "Ko'proq bilish",
      admissionBtn: "Hozir ariza topshirish",
      statsStudents: "O'quvchi",
      statsTeachers: "O'qituvchi",
      statsYears: "Yillik tajriba",
      statsGrades: "Sinf darajasi",
      welcomeTitle: "Maktabimizga xush kelibsiz",
      welcomeText:
        "Biz 21-asr talablariga javob beradigan ta'limni ta'minlashga intilmoqdamiz.",
      featuresTitle: "Nima uchun bizni tanlash kerak",
      feature1Title: "Zamonaviy o'quv dasturi",
      feature1Desc: "Xalqaro standartlarga mos yangilangan ta'lim dasturlari.",
      feature2Title: "Mutaxassis o'qituvchilar",
      feature2Desc:
        "Ko'p yillik kasbiy tajribaga ega yuqori malakali pedagoglar.",
      feature3Title: "Raqamli kutubxona",
      feature3Desc:
        "O'quvchilar uchun keng kitoblar va raqamli resurslar to'plami.",
      feature4Title: "Xavfsiz muhit",
      feature4Desc: "Har bir bola rivojlanadigan g'amxo'rlik va xavfsiz muhit.",
    },
    about: {
      pageTitle: "Maktab haqida",
      pageSubtitle:
        "Bizning missiyamiz, qadriyatlarimiz va jamoamiz haqida bilib oling.",
      missionTitle: "Bizning missiyamiz",
      missionText:
        "Maktabimiz akademik mukammallik, axloqiy yaxlitlik va ijtimoiy mas'uliyatni shakllantrishga bag'ishlangan.",
      teachersTitle: "O'qituvchilarimiz",
      teachersSubtitle:
        "Har kuni o'quvchilarimizni ilhomlantiruvchi fidoiy mutaxassislar bilan tanishing.",
      born: "Tug'ilgan sana",
      phone: "Telefon",
      viewProfile: "Profilni ko'rish",
    },
    library: {
      pageTitle: "Maktab kutubxonasi",
      pageSubtitle:
        "Barcha fanlar bo'yicha keng kitoblar to'plamimizni o'rganing.",
      searchPlaceholder: "Kitob, muallif qidirish...",
      allCategories: "Barcha toifalar",
      available: "Mavjud",
      unavailable: "Berilgan",
      booksCount: "ta kitob topildi",
      author: "Muallif",
      category: "Toifa",
      status: "Holat",
    },
    admission: {
      pageTitle: "Online qabul",
      pageSubtitle: "Farzandingizning ta'lim safarini biz bilan boshlang.",
      studentName: "O'quvchining to'liq ismi",
      studentAge: "O'quvchi yoshi",
      grade: "Qaysi sinfga ariza",
      parentPhone: "Ota-ona telefon raqami",
      message: "Qo'shimcha xabar",
      submit: "Ariza topshirish",
      successTitle: "Ariza qabul qilindi!",
      successText: "Rahmat! 2-3 ish kuni ichida siz bilan bog'lanamiz.",
      required: "Bu maydon talab qilinadi",
      namePlaceholder: "O'quvchining to'liq ismini kiriting",
      agePlaceholder: "O'quvchi yoshini kiriting",
      gradePlaceholder: "Sinfni tanlang",
      phonePlaceholder: "+998 XX XXX XX XX",
      messagePlaceholder: "Qo'shimcha ma'lumot yoki savollar...",
    },
    gallery: {
      pageTitle: "Maktab galereyasi",
      pageSubtitle: "Jonli maktab hayotimizdan esda qolarli lahzalar.",
      all: "Barchasi",
      events: "Tadbirlar",
      sports: "Sport",
      celebrations: "Bayramlar",
      science: "Fan",
      arts: "San'at",
    },
    chat: {
      title: "Maktab yordamchisi",
      placeholder: "Savol bering...",
      send: "Yuborish",
      welcome: "Salom! Men maktab yordamchisiman. Qanday yordam bera olaman?",
    },
    footer: {
      address: "So'x ko'chasi 59-uy, Fergana, O'zbekiston",
      phone: "+998 99-616-44-56",
      email: "info@school.edu.uz",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О школе",
      library: "Библиотека",
      admission: "Приём",
      gallery: "Галерея",
    },
    home: {
      heroTitle: "Совершенство в Образовании",
      heroSubtitle:
        "Развиваем молодые умы для светлого будущего через качественное образование и инновационное обучение.",
      heroBtn: "Узнать больше",
      admissionBtn: "Подать заявку",
      statsStudents: "Учеников",
      statsTeachers: "Учителей",
      statsYears: "Лет работы",
      statsGrades: "Классов",
      welcomeTitle: "Добро пожаловать в нашу школу",
      welcomeText:
        "Мы стремимся обеспечить образование мирового уровня, которое готовит учеников к успеху в 21 веке.",
      featuresTitle: "Почему выбирают нас",
      feature1Title: "Современная программа",
      feature1Desc:
        "Актуальные образовательные программы, соответствующие международным стандартам.",
      feature2Title: "Опытные учителя",
      feature2Desc: "Высококвалифицированные педагоги с многолетним опытом.",
      feature3Title: "Цифровая библиотека",
      feature3Desc: "Обширная коллекция книг и цифровых ресурсов.",
      feature4Title: "Безопасная среда",
      feature4Desc: "Заботливая и безопасная обстановка для каждого ребёнка.",
    },
    about: {
      pageTitle: "О нашей школе",
      pageSubtitle: "Узнайте о нашей миссии, ценностях и команде.",
      missionTitle: "Наша миссия",
      missionText:
        "Наша школа посвящена развитию академических достижений, нравственной целостности и социальной ответственности.",
      teachersTitle: "Наш педагогический состав",
      teachersSubtitle: "Познакомьтесь с нашими преданными специалистами.",
      born: "Дата рождения",
      phone: "Телефон",
      viewProfile: "Просмотр профиля",
    },
    library: {
      pageTitle: "Школьная библиотека",
      pageSubtitle: "Изучите нашу обширную коллекцию книг.",
      searchPlaceholder: "Поиск книг, авторов...",
      allCategories: "Все категории",
      available: "Доступна",
      unavailable: "Выдана",
      booksCount: "книг найдено",
      author: "Автор",
      category: "Категория",
      status: "Статус",
    },
    admission: {
      pageTitle: "Онлайн приём",
      pageSubtitle: "Начните образовательный путь вашего ребёнка с нами.",
      studentName: "ФИО ученика",
      studentAge: "Возраст ученика",
      grade: "Поступление в класс",
      parentPhone: "Телефон родителя",
      message: "Дополнительное сообщение",
      submit: "Подать заявку",
      successTitle: "Заявка подана!",
      successText: "Спасибо! Мы свяжемся с вами в течение 2-3 рабочих дней.",
      required: "Это поле обязательно",
      namePlaceholder: "Введите полное имя ученика",
      agePlaceholder: "Введите возраст ученика",
      gradePlaceholder: "Выберите класс",
      phonePlaceholder: "+998 XX XXX XX XX",
      messagePlaceholder: "Дополнительная информация...",
    },
    gallery: {
      pageTitle: "Школьная галерея",
      pageSubtitle: "Незабываемые моменты из нашей школьной жизни.",
      all: "Все",
      events: "Мероприятия",
      sports: "Спорт",
      celebrations: "Праздники",
      science: "Наука",
      arts: "Искусство",
    },
    chat: {
      title: "Помощник школы",
      placeholder: "Задайте вопрос...",
      send: "Отправить",
      welcome: "Здравствуйте! Я школьный помощник. Чем могу помочь?",
    },
    footer: {
      address: "ул. Сох 59, Фергана, Узбекистан",
      phone: "+998 99-616-44-56",
      email: "info@school.edu.uz",
      rights: "Все права защищены.",
    },
  },
  tj: {
    nav: {
      home: "Саҳифаи асосӣ",
      about: "Дар бораи мактаб",
      library: "Китобхона",
      admission: "Қабул",
      gallery: "Галерея",
    },
    home: {
      heroTitle: "Комилият дар Таҳсил",
      heroSubtitle:
        "Тавассути таҳсилоти сифатноки зеҳни ҷавононро барои оянда омода мекунем.",
      heroBtn: "Бештар огаҳ шавед",
      admissionBtn: "Ҳоло дархост диҳед",
      statsStudents: "Хонанда",
      statsTeachers: "Муаллим",
      statsYears: "Соли таҷриба",
      statsGrades: "Синфҳо",
      welcomeTitle: "Хуш омадед ба мактаби мо",
      welcomeText: "Мо ба таъмини таҳсилоти сатҳи ҷаҳонӣ вазифадор ҳастем.",
      featuresTitle: "Чаро моро интихоб кунед",
      feature1Title: "Барномаи муосир",
      feature1Desc:
        "Барномаҳои таҳсилотии навшуда мутобиқ ба стандартҳои байналмилалӣ.",
      feature2Title: "Муаллимони мутахассис",
      feature2Desc:
        "Педагогҳои баландихтисос бо таҷрибаи касбии солҳои тӯлонӣ.",
      feature3Title: "Китобхонаи рақамӣ",
      feature3Desc: "Маҷмӯаи васеи китобҳо ва захираҳои рақамӣ.",
      feature4Title: "Муҳити бехатар",
      feature4Desc: "Муҳити ғамхорона ва бехатаре барои ҳар кӯдак.",
    },
    about: {
      pageTitle: "Дар бораи мактаби мо",
      pageSubtitle: "Дар бораи рисолат ва арзишҳо бештар бидонед.",
      missionTitle: "Рисолати мо",
      missionText:
        "Мактаби мо ба парвариши дастовардҳои илмӣ ва масъулияти иҷтимоӣ бахшида шудааст.",
      teachersTitle: "Кадрҳои таълимии мо",
      teachersSubtitle:
        "Мутахассисони фидокоре, ки ҳар рӯз хонандагонро илҳом мебахшанд.",
      born: "Таваллуд",
      phone: "Телефон",
      viewProfile: "Профилро бубинед",
    },
    library: {
      pageTitle: "Китобхонаи мактаб",
      pageSubtitle: "Маҷмӯаи васеи китобҳоро омӯзед.",
      searchPlaceholder: "Китоб, муаллиф ҷустуҷӯ кунед...",
      allCategories: "Ҳамаи категорияҳо",
      available: "Мавҷуд",
      unavailable: "Дода шудааст",
      booksCount: "китоб ёфт шуд",
      author: "Муаллиф",
      category: "Категория",
      status: "Ҳолат",
    },
    admission: {
      pageTitle: "Қабули онлайн",
      pageSubtitle: "Сафари таҳсилии фарзандатонро бо мо оғоз кунед.",
      studentName: "Номи пурраи хонанда",
      studentAge: "Синни хонанда",
      grade: "Дархост барои синф",
      parentPhone: "Рақами телефони волидайн",
      message: "Паёми иловагӣ",
      submit: "Ирсоли дархост",
      successTitle: "Дархост ирсол шуд!",
      successText:
        "Ташаккур! Дар давоми 2-3 рӯзи корӣ бо шумо тамос хоҳем гирифт.",
      required: "Ин майдон талаб карда мешавад",
      namePlaceholder: "Номи пурраи хонандаро ворид кунед",
      agePlaceholder: "Синни хонандаро ворид кунед",
      gradePlaceholder: "Синфро интихоб кунед",
      phonePlaceholder: "+998 XX XXX XX XX",
      messagePlaceholder: "Маълумоти иловагӣ...",
    },
    gallery: {
      pageTitle: "Галереяи мактаб",
      pageSubtitle: "Лаҳзаҳои фаромӯшнашаванда аз ҳаёти мактабӣ.",
      all: "Ҳама",
      events: "Чорабиниҳо",
      sports: "Варзиш",
      celebrations: "Ҷашнҳо",
      science: "Илм",
      arts: "Санъат",
    },
    chat: {
      title: "Ёрдамчии мактаб",
      placeholder: "Савол диҳед...",
      send: "Фиристодан",
      welcome:
        "Салом! Ман ёрдамчии мактаб ҳастам. Чӣ тавр метавонам кӯмак кунам?",
    },
    footer: {
      address: "Кӯчаи Сӯх 59, Фергана, Ӯзбекистон",
      phone: "+998 99-616-44-56",
      email: "info@school.edu.uz",
      rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    },
  },
};
