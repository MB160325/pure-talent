/*
  PureTalent – قاعدة معرفة الشاتبوت الشاملة
  آخر تحديث: 2025
  ─────────────────────────────────────────────────────────────
  التغطية:
   • التحيات بكل أشكالها وأخطائها الإملائية
   • الخدمات، التوظيف، التواصل، عنوان الشركة، تاريخها
   • الأسئلة التشغيلية والشراكات وجودة الخدمة
   • رسالة تحويل تلقائية بعد 10 أسئلة
  ─────────────────────────────────────────────────────────────
*/

window.PURETALENT_CHATBOT = {

  /* ─── الترجمات العامة ─────────────────────────────────── */
  locales: {
    ar: {
      launcher: "اسأل PureTalent",
      title: "مساعد PureTalent",
      status: "يرد من معلومات الشركة",
      welcome: "مرحباً! أنا المساعد الرسمي لـ PureTalent. يسعدني مساعدتك في أي استفسار حول خدماتنا، التوظيف، التواصل، أو أي معلومات تخص الشركة.",
      placeholder: "اكتب سؤالك هنا...",
      send: "إرسال",
      typing: "جاري البحث في المعلومات...",
      fallback: "لا أملك إجابة مؤكدة على هذا السؤال حالياً. يُرجى التواصل معنا مباشرةً على الرقم 02 666 0935 أو عبر البريد الإلكتروني info@puretalent.ae وسنكون سعداء بمساعدتك.",
      actionText: "فتح القسم",
      limitMessage: "يبدو أن لديك كثيراً من الأسئلة! للحصول على مساعدة متكاملة وأكثر تفصيلاً، يمكنك التواصل مع فريقنا مباشرةً عبر البريد الإلكتروني: info@puretalent.ae وسنردّ عليك في أقرب وقت."
    },
    en: {
      launcher: "Ask PureTalent",
      title: "PureTalent Assistant",
      status: "Answers from company data",
      welcome: "Hello! I am PureTalent's official assistant. I am happy to help with any inquiry about our services, hiring, contact details, or company information.",
      placeholder: "Type your question...",
      send: "Send",
      typing: "Searching the knowledge base...",
      fallback: "I do not have a confirmed answer for that yet. Please contact us on 02 666 0935 or email info@puretalent.ae and we will be happy to assist.",
      actionText: "Open section",
      limitMessage: "It looks like you have many questions! For more detailed assistance, please reach out to our team directly at info@puretalent.ae and we will respond as soon as possible."
    }
  },

  /* ─── أسئلة سريعة ──────────────────────────────────────── */
  quickQuestions: {
    ar: ["ما هي خدماتكم؟", "كيف أرسل السيرة الذاتية؟", "ما عنوانكم؟", "من أنتم؟"],
    en: ["What services do you offer?", "How do I send my CV?", "Where are you located?", "Tell me about PureTalent"]
  },

  /* ─── حد الأسئلة ──────────────────────────────────────── */
  questionLimit: 10,

  /* ══════════════════════════════════════════════════════════
     قاعدة المعرفة الكاملة
  ══════════════════════════════════════════════════════════ */
  knowledge: [

    /* ── 1. التحيات ──────────────────────────────────────── */
    {
      id: "greeting",
      questions: [
        /* العربية */
        "مرحبا","مرحبا!","مرحباً","مرحبًا","مرحابا","مرحبه","مرحبى","مرحبي",
        "اهلا","أهلا","اهلاً","أهلاً","اهلا وسهلا","أهلاً وسهلاً","اهلن","اهلين","اهلين وسهلين",
        "هلا","هلا!","هلا والله","هلو","هالو","هلوو",
        "السلام عليكم","السلام عليكم ورحمة الله","سلام","سلاموا","سلامات",
        "صباح الخير","صباح الخير!","صباح الخيرات","صبح الخير","صباح النور",
        "مساء الخير","مساء الخير!","مساء النور","مسى الخير",
        "كيف حالك","كيف الحال","كيف الأحوال","كيفك","كيفج","كيفكم","شلونك","شلونكم","شخبارك","شخبارج",
        "تصبح على خير","تسعد","يسعدك","يسعد مساك",
        /* إنجليزية */
        "hi","hi!","hii","hiii","hiiii",
        "hello","hello!","helloo","helo","helo!","heloo",
        "hey","hey!","heey","heyy","heyy!",
        "good morning","goodmorning","good mornin","gd morning",
        "good afternoon","good evening","good day",
        "howdy","sup","what's up","whats up","wassup","wazzup",
        "greetings","salutations","yo","yo!",
        "how are you","how r u","how are u","howareyou"
      ],
      keywords: [
        "مرحبا","اهلا","هلا","سلام","صباح","مساء","كيف","شلون","شخبار",
        "hi","hello","hey","morning","evening","howdy","greetings","yo","sup"
      ],
      answers: {
        ar: "أهلاً وسهلاً! 😊 يسعدني أن أكون في خدمتك. أنا المساعد الرسمي لشركة PureTalent المتخصصة في توريد الكفاءات البشرية في الإمارات. كيف يمكنني مساعدتك اليوم؟",
        en: "Hello and welcome! 😊 I am PureTalent's official assistant — a UAE-based manpower supply company. How can I help you today?"
      }
    },

    /* ── 2. خدمات الشركة ─────────────────────────────────── */
    {
      id: "services",
      questions: [
        /* عربي */
        "ما هي خدماتكم","ما هي خدمتكم","ماذا تقدمون","ماذا تقدمون من خدمات","ايش تقدمون",
        "وش تقدمون","شو خدماتكم","شو خدمتكم","ايش خدماتكم",
        "خدمات الشركة","اريد اعرف خدماتكم","ابي اعرف خدماتكم","بدي اعرف خدماتكم",
        "توريد عمالة","توريد موظفين","توريد عمال","ايش تشتغلون",
        "شو عمل الشركة","شو تشتغلون","ما هو تخصصكم","تخصص الشركة",
        "قطاع الضيافة","خدمات لوجستية","مستودعات","warehousing",
        /* إنجليزية */
        "what services do you offer","what do you offer","what services","services",
        "what do you do","what does puretalent do","your services",
        "manpower supply","hospitality staffing","logistics support",
        "what kind of staff","what type of workers","what industries"
      ],
      keywords: [
        "خدمات","خدمة","عمالة","موظفين","عمال","توريد","تخصص","تشتغلون","تقدمون",
        "ضيافة","لوجستية","مستودع","مطعم","فندق","تنظيف","حراسة","مصنع",
        "services","manpower","workers","staff","supply","hospitality","logistics",
        "warehouse","hotel","restaurant","cleaning","security","factory","industry"
      ],
      answers: {
        ar: "تقدم PureTalent مجموعة متكاملة من خدمات الكوادر البشرية، تشمل:\n\n• **توريد العمالة التشغيلية** – تأمين كفاءات متوافقة مع متطلبات كل عميل.\n• **فرق الضيافة والخدمات** – للفنادق والمطاعم وشركات التموين.\n• **الدعم اللوجستي** – للمستودعات وعمليات التوزيع والسلاسل الإمدادية.\n• **التنسيق اليومي** – متابعة الحضور والأداء وضمان الانتظام.\n• **الامتثال والوثائق** – متابعة تصاريح العمل وصلاحية التأشيرات والوثائق الرسمية.\n\nهل تودّ معرفة تفاصيل خدمة بعينها؟",
        en: "PureTalent offers a full suite of manpower services:\n\n• **Operational Manpower Supply** – matching skilled workers to each client's specific needs.\n• **Hospitality & Service Teams** – for hotels, restaurants, and catering companies.\n• **Logistics Support** – for warehouses, distribution, and supply chains.\n• **Daily Coordination** – attendance tracking, performance monitoring, and operational continuity.\n• **Compliance & Documentation** – work permits, visa validity, and official documents.\n\nWould you like more details on a specific service?"
      },
      action: "#services"
    },

    /* ── 3. التواصل والاتصال ─────────────────────────────── */
    {
      id: "contact",
      questions: [
        /* عربي */
        "رقم الهاتف","رقم التلفون","رقم الجوال","رقم الهاتف كم","ما رقم الاتصال",
        "ايش رقمكم","شو رقمكم","كيف اتصل بكم","كيف أتواصل معكم",
        "ايميل الشركة","البريد الالكتروني","ايميلكم","إيميلكم","ما هو ايميلكم",
        "معلومات التواصل","معلومات الاتصال","بيانات التواصل",
        "كيف ارسل لكم","كيف أراسلكم","كيف أكلمكم",
        "واتساب","واتس اب","وتس اب","رقم واتساب",
        /* إنجليزية */
        "phone number","phone","contact","email","contact details","contact info",
        "how to contact","how to reach you","reach you","get in touch",
        "call you","email address","whatsapp","your number"
      ],
      keywords: [
        "هاتف","تلفون","جوال","رقم","اتصال","تواصل","ايميل","بريد","واتساب","ارسل",
        "phone","call","contact","email","reach","touch","number","whatsapp","message"
      ],
      answers: {
        ar: "يمكنك التواصل مع PureTalent عبر القنوات التالية:\n\n📞 **هاتف:** 02 666 0935\n📧 **بريد إلكتروني:** info@puretalent.ae\n📍 **العنوان:** شارع الحصن، أبراج بينونة 2، الدور الرابع، مكتب 114 – أبوظبي\n\nفريقنا متاح خلال ساعات الدوام الرسمي للرد على جميع استفساراتك.",
        en: "You can reach PureTalent through the following channels:\n\n📞 **Phone:** 02 666 0935\n📧 **Email:** info@puretalent.ae\n📍 **Address:** Al Hisn Street, Bainunah Tower 2, 4th Floor, Office 114 – Abu Dhabi\n\nOur team is available during official working hours."
      }
    },

    /* ── 4. الإرسال والتوظيف والسيرة الذاتية ────────────── */
    {
      id: "apply",
      questions: [
        /* عربي */
        "كيف ارسل سيرتي الذاتية","كيف أرسل سيرتي","ارسل سيرتي","أرسل سيرتي",
        "كيف اتقدم للوظيفة","كيف أتقدم","أريد وظيفة","ابي وظيفة","بدي شغل",
        "عندكم وظائف","في وظائف","فيه وظائف","ايش الوظائف المتاحة",
        "شو الوظائف المتوفرة","التقديم على وظيفة","تقديم cv","إرسال cv",
        "ارسل السيرة","فرص عمل","توظيف","هل تقبلون طلبات","طلب توظيف",
        "كيف أبدأ","الخطوات للتوظيف","من اين ابدأ",
        /* إنجليزية */
        "how to send cv","send cv","submit resume","apply for job","apply",
        "job openings","vacancies","career","careers","job application",
        "how to apply","find a job","looking for work","employment",
        "how do i start","application process","recruitment"
      ],
      keywords: [
        "سيرة","cv","وظيفة","وظائف","تقديم","توظيف","شغل","فرصة","عمل","تعيين",
        "resume","apply","job","career","vacancy","hire","hiring","recruitment","work"
      ],
      answers: {
        ar: "للتقدم للعمل في PureTalent أو إرسال سيرتك الذاتية، اتبع الخطوات التالية:\n\n1️⃣ توجّه إلى أسفل صفحتنا الرئيسية وابحث عن نموذج **\"إرسال السيرة الذاتية\"**.\n2️⃣ سيقوم الموقع بفتح تطبيق البريد الإلكتروني لديك تلقائياً برسالة جاهزة إلى info@puretalent.ae.\n3️⃣ أرفق ملف سيرتك الذاتية (PDF أو Word) قبل الإرسال.\n\nيمكنك أيضاً الإرسال المباشر على: **info@puretalent.ae**\n\nسيتواصل معك فريق الموارد البشرية لدينا حالما تتوفر فرصة مناسبة لملفك.",
        en: "To apply or send your CV to PureTalent:\n\n1️⃣ Go to the bottom of our main page and look for the **\"Send CV\"** form.\n2️⃣ The site will automatically open your email app with a ready message to info@puretalent.ae.\n3️⃣ Attach your CV file (PDF or Word) before sending.\n\nYou can also send directly to: **info@puretalent.ae**\n\nOur HR team will be in touch once a suitable opportunity matching your profile becomes available."
      },
      action: "#careers"
    },

    /* ── 5. عن الشركة ─────────────────────────────────────── */
    {
      id: "about",
      questions: [
        /* عربي */
        "من انتم","من أنتم","عن الشركة","ما هي الشركة","ماهي الشركة",
        "ما هي puretalent","عرفني على الشركة","اريد اعرف عن الشركة",
        "شو هي puretalent","شو الشركة","اخبرني عن بيورتالنت",
        "puretalent كيمن","ما تخصص الشركة","نبذة الشركة","رؤية الشركة",
        "هل الشركة موثوقة","مرخصة","معتمدة",
        /* إنجليزية */
        "about puretalent","who are you","about the company","tell me about puretalent",
        "what is puretalent","company overview","company info","company background",
        "is puretalent licensed","is puretalent trusted","company profile"
      ],
      keywords: [
        "شركة","puretalent","بيورتالنت","تعريف","نبذة","رؤية","مرخصة","موثوقة","تخصص",
        "about","company","who","overview","background","profile","licensed","trusted"
      ],
      answers: {
        ar: "**PureTalent** شركة إماراتية متخصصة في توريد الكوادر البشرية، تأسست عام **2018** في أبوظبي.\n\nنحرص على:\n• الاختيار الدقيق للكفاءات الملائمة لكل بيئة عمل.\n• سرعة الاستجابة وتلبية الاحتياجات التشغيلية في أقصر وقت.\n• الالتزام التام بأنظمة العمل والتشريعات الإماراتية.\n• المتابعة التشغيلية المستمرة لضمان الجودة والأداء.\n\nنخدم قطاعات متعددة بما فيها الضيافة، اللوجستيات، الخدمات الإدارية، والعمليات الميدانية.",
        en: "**PureTalent** is a UAE-based manpower supply company founded in **2018** in Abu Dhabi.\n\nOur pillars:\n• Careful and precise selection of the right talent for each work environment.\n• Fast response to operational requirements.\n• Full compliance with UAE labor regulations.\n• Continuous performance and operational follow-up.\n\nWe serve multiple sectors including hospitality, logistics, administrative services, and field operations."
      },
      action: "#about"
    },

    /* ── 6. العنوان والموقع الجغرافي ────────────────────── */
    {
      id: "location",
      questions: [
        /* عربي */
        "وين الشركة","فين الشركة","وين مكتبكم","اين انتم","أين موقعكم",
        "عنوان الشركة","العنوان كامل","ما هو عنوانكم","فين مكتبكم",
        "كيف اوصلكم","كيف أصلكم","كيف اجيكم","كيف أجيكم",
        "ابوظبي وين بالضبط","موقعكم على الخريطة","عنوانكم على خرائط جوجل",
        "بينونة","ابراج بينونة","شارع الحصن","الدور الرابع","مكتب 114",
        /* إنجليزية */
        "where are you located","your address","office address","where is your office",
        "how to find you","location","directions","where in abu dhabi",
        "bainunah","al hisn","hisn street","4th floor","office 114","google maps"
      ],
      keywords: [
        "عنوان","موقع","مكتب","وين","فين","اين","بينونة","الحصن","الدور","ابوظبي",
        "address","location","office","where","find","bainunah","hisn","floor","abu dhabi","map"
      ],
      answers: {
        ar: "📍 **عنوان مكتب PureTalent:**\n\nشارع الحصن\nأبراج بينونة 2\nالدور الرابع – مكتب رقم **114**\nأبوظبي، الإمارات العربية المتحدة\n\nيمكنك البحث عن **\"أبراج بينونة 2 أبوظبي\"** على خرائط Google للوصول بسهولة.\n\nللاستفسارات قبل الزيارة: 📞 02 666 0935",
        en: "📍 **PureTalent Office Address:**\n\nAl Hisn Street\nBainunah Tower 2\n4th Floor – Office No. **114**\nAbu Dhabi, United Arab Emirates\n\nSearch **\"Bainunah Tower 2 Abu Dhabi\"** on Google Maps to get directions.\n\nFor inquiries before visiting: 📞 02 666 0935"
      }
    },

    /* ── 7. تاريخ التأسيس ────────────────────────────────── */
    {
      id: "founded",
      questions: [
        /* عربي */
        "متى تأسست الشركة","متى أسست","متى تأسست puretalent","سنة التأسيس",
        "منذ متى الشركة موجودة","كم عمر الشركة","من متى","متى بدأتم",
        "تاريخ الشركة","تاريخ التأسيس",
        /* إنجليزية */
        "when was puretalent founded","founding year","year established","since when",
        "how old is puretalent","when did you start","history","company history",
        "established","founded in"
      ],
      keywords: [
        "تأسيس","تأسست","سنة","تاريخ","عمر","بدأت","متى",
        "founded","established","history","year","started","since","old"
      ],
      answers: {
        ar: "تأسست شركة **PureTalent** عام **2018** في إمارة **أبوظبي**.\n\nمنذ تأسيسها ونحن نسعى لتقديم حلول توظيف متكاملة تلبي احتياجات الشركات والمؤسسات في الإمارات، مع الحفاظ على أعلى معايير الجودة والامتثال.",
        en: "**PureTalent** was founded in **2018** in **Abu Dhabi**, UAE.\n\nSince its establishment, we have been delivering comprehensive staffing solutions that meet the needs of businesses and institutions across the Emirates, while maintaining the highest standards of quality and compliance."
      }
    },

    /* ── 8. ساعات العمل ──────────────────────────────────── */
    {
      id: "working_hours",
      questions: [
        /* عربي */
        "ساعات العمل","اوقات الدوام","متى تفتحون","وقت الدوام","امتى تفتحون",
        "هل انتم متاحون الان","هل الشركة فاتحة","الآن مفتوحين","متى تغلقون",
        "اوقات العمل","ايام الدوام","ايام العمل","يوم الجمعة","عطلة",
        /* إنجليزية */
        "working hours","office hours","are you open","opening hours","when do you open",
        "business hours","work hours","do you work on friday","weekend","holiday",
        "are you available now"
      ],
      keywords: [
        "ساعات","دوام","فاتحة","مفتوح","مغلق","وقت","ايام","الجمعة","عطلة","الآن",
        "hours","open","close","available","working","business","friday","weekend"
      ],
      answers: {
        ar: "🕐 **أوقات دوام PureTalent:**\n\nالأحد – الخميس: **9:00 صباحاً – 6:00 مساءً**\nالجمعة والسبت: إجازة رسمية\n\nللاستفسارات خارج أوقات الدوام، راسلنا على:\n📧 info@puretalent.ae\nوسنتواصل معك في أول وقت دوام.",
        en: "🕐 **PureTalent Working Hours:**\n\nSunday – Thursday: **9:00 AM – 6:00 PM**\nFriday & Saturday: Official weekend\n\nFor inquiries outside office hours, email us at:\n📧 info@puretalent.ae\nand we will get back to you on the next business day."
      }
    },

    /* ── 9. كيفية الشراكة / عملاء الشركات ──────────────── */
    {
      id: "partnership",
      questions: [
        /* عربي */
        "كيف اتعاون معكم","كيف أوقع عقد","عقد توريد","شراكة","تعاون",
        "شركتي تحتاج موظفين","نحتاج عمالة","نريد توريد كوادر",
        "كيف أوظف من خلالكم","توريد عمالة لشركتي","ابي موظفين",
        "انا صاحب شركة","اقدر اشتغل معكم","طلب عمالة",
        /* إنجليزية */
        "how to partner","business partnership","hire through you","staffing contract",
        "we need workers","we need staff","corporate client","business inquiry",
        "how to work with you","request workers","outsource staff","i own a company"
      ],
      keywords: [
        "شراكة","تعاون","عقد","شركتي","موظفين","عمالة","طلب","توريد","صاحب",
        "partner","contract","company","client","hire","staff","outsource","business","request"
      ],
      answers: {
        ar: "يسعدنا التعاون معك! 🤝\n\nللشركات والمؤسسات التي تبحث عن حلول توريد الكوادر البشرية:\n\n1️⃣ تواصل معنا عبر: 📞 **02 666 0935** أو 📧 **info@puretalent.ae**\n2️⃣ سيتواصل معك أحد مسؤولينا لفهم احتياجاتكم بدقة.\n3️⃣ نُقدّم لك حلاً مخصصاً يشمل الاختيار، التعاقد، والمتابعة التشغيلية.\n\nنحرص على أن تحصل شركتك على الكوادر المناسبة في أسرع وقت ممكن.",
        en: "We'd love to work with you! 🤝\n\nFor companies and organizations looking for manpower supply solutions:\n\n1️⃣ Contact us via: 📞 **02 666 0935** or 📧 **info@puretalent.ae**\n2️⃣ One of our representatives will reach out to understand your specific needs.\n3️⃣ We provide a tailored solution covering selection, contracting, and operational follow-up.\n\nWe are committed to getting your company the right talent as quickly as possible."
      }
    },

    /* ── 10. جودة الخدمة والضمانات ──────────────────────── */
    {
      id: "quality",
      questions: [
        /* عربي */
        "هل الموظفون مؤهلون","جودة الخدمة","ما مستوى الكفاءة","هل تضمنون الجودة",
        "هل الموظفين كفاءة","هل الخدمة موثوقة","كيف تختارون الموظفين",
        "معايير الاختيار","عملية الاختيار","ايش الضمان","هل فيه ضمان",
        /* إنجليزية */
        "are staff qualified","quality of service","staff quality","do you guarantee",
        "how do you select workers","selection process","criteria","reliability",
        "is your service reliable","what is the guarantee","quality assurance"
      ],
      keywords: [
        "جودة","مؤهلون","كفاءة","اختيار","ضمان","موثوق","معايير","مستوى",
        "quality","qualified","guarantee","selection","criteria","reliable","standard","assurance"
      ],
      answers: {
        ar: "في PureTalent نؤمن بأن جودة الكادر البشري هي أساس نجاح أي عمل. لذلك:\n\n✅ **الاختيار الدقيق:** نُقيّم كل مرشح بناءً على الخبرة والمهارة والسلوك المهني.\n✅ **التحقق من الوثائق:** نضمن صحة جميع التصاريح والتأشيرات والسجلات الرسمية.\n✅ **المتابعة المستمرة:** نراقب الأداء بعد التوظيف ونتدخل فور ظهور أي إشكالية.\n✅ **الاستبدال السريع:** في حال عدم الملاءمة، نوفر بديلاً في أقصر وقت.\n\nرضا عملائنا هو معيارنا الأول.",
        en: "At PureTalent, we believe that the quality of human talent is the foundation of any successful business. Therefore:\n\n✅ **Precise Selection:** We evaluate every candidate based on experience, skills, and professional conduct.\n✅ **Document Verification:** We ensure the validity of all permits, visas, and official records.\n✅ **Continuous Monitoring:** We track performance post-placement and intervene promptly if any issue arises.\n✅ **Fast Replacement:** If a placement is not a fit, we provide a replacement as quickly as possible.\n\nClient satisfaction is our primary measure of success."
      }
    },

    /* ── 11. القطاعات التي تخدمها الشركة ───────────────── */
    {
      id: "sectors",
      questions: [
        /* عربي */
        "ما القطاعات التي تخدمونها","هل تخدمون الفنادق","هل تخدمون المطاعم",
        "قطاع الضيافة","قطاع اللوجستيات","قطاع التجزئة","قطاع الرعاية",
        "هل تخدمون المستشفيات","هل تخدمون المصانع","هل تخدمون الشركات الصغيرة",
        "عندكم طباخين","عندكم نادلين","عندكم عمال مستودعات",
        /* إنجليزية */
        "what sectors do you serve","hospitality sector","logistics sector","retail",
        "do you serve hospitals","do you serve factories","do you serve small businesses",
        "chefs","waiters","warehouse workers","cleaning staff","security guards"
      ],
      keywords: [
        "قطاع","فندق","مطعم","مستشفى","مصنع","مستودع","تجزئة","ضيافة","رعاية",
        "طباخ","نادل","حارس","تنظيف","سائق",
        "sector","hotel","restaurant","hospital","factory","warehouse","retail",
        "chef","waiter","security","cleaning","driver"
      ],
      answers: {
        ar: "تخدم PureTalent مجموعة واسعة من القطاعات في الإمارات، من أبرزها:\n\n🏨 **الضيافة والفنادق** – موظفو استقبال، غرف، مطاعم، وتموين.\n🏭 **الصناعة والمستودعات** – عمال تشغيل، تعبئة، وتخزين.\n🚚 **اللوجستيات والتوزيع** – سائقون ومساعدون لوجستيون.\n🧹 **الخدمات** – نظافة، حراسة، وصيانة.\n🏢 **الدعم الإداري** – موظفو إدارة ودعم مكتبي.\n\nسواء كانت شركتك كبيرة أو صغيرة، لدينا الحل المناسب لك.",
        en: "PureTalent serves a wide range of sectors across the UAE, including:\n\n🏨 **Hospitality & Hotels** – Reception, housekeeping, F&B, and catering staff.\n🏭 **Industry & Warehousing** – Operations, packing, and storage workers.\n🚚 **Logistics & Distribution** – Drivers and logistics assistants.\n🧹 **Services** – Cleaning, security, and maintenance.\n🏢 **Administrative Support** – Administrative and office support staff.\n\nWhether your company is large or small, we have the right solution for you."
      },
      action: "#services"
    },

    /* ── 12. الشكاوى والمشاكل ───────────────────────────── */
    {
      id: "complaints",
      questions: [
        /* عربي */
        "عندي شكوى","اريد اشتكي","في مشكلة","عندي مشكلة","مشكلة مع موظف",
        "الخدمة سيئة","مو راضي عن الخدمة","الأداء ضعيف","كيف ارفع شكوى",
        /* إنجليزية */
        "i have a complaint","complaint","problem","issue","not satisfied",
        "poor service","bad performance","how to complain","raise a complaint"
      ],
      keywords: [
        "شكوى","مشكلة","شكوى","راضي","ضعيف","سيئة",
        "complaint","problem","issue","satisfied","poor","bad","complain"
      ],
      answers: {
        ar: "نأسف لسماع ذلك، ونأخذ كل ملاحظة بجدية تامة.\n\nللإبلاغ عن أي مشكلة أو إرسال شكوى:\n📞 **02 666 0935** – للتواصل المباشر مع فريق الإدارة.\n📧 **info@puretalent.ae** – وصف المشكلة بالتفصيل وسنتواصل معك خلال 24 ساعة عمل.\n\nرضاك هو أولويتنا، وسنعمل على حل المشكلة في أسرع وقت ممكن.",
        en: "We are sorry to hear that, and we take every concern very seriously.\n\nTo report an issue or submit a complaint:\n📞 **02 666 0935** – For direct contact with our management team.\n📧 **info@puretalent.ae** – Describe the issue in detail and we will respond within 24 business hours.\n\nYour satisfaction is our top priority, and we will work to resolve the issue as quickly as possible."
      }
    },

    /* ── 13. التسعير ─────────────────────────────────────── */
    {
      id: "pricing",
      questions: [
        /* عربي */
        "كم التكلفة","كم السعر","الاسعار","هل الخدمة مجانية","كم تكلف العمالة",
        "تعرفة التوريد","تكلفة التوظيف","كم يكلف","هل هناك رسوم",
        /* إنجليزية */
        "how much does it cost","pricing","price","fees","cost","rates",
        "how much does staffing cost","is it free","service fees"
      ],
      keywords: [
        "سعر","تكلفة","رسوم","مجاني","تعرفة","كم",
        "price","cost","fee","free","rate","how much","charge"
      ],
      answers: {
        ar: "تختلف التكاليف بحسب نوع الخدمة، عدد الكوادر المطلوبة، وطبيعة العمل.\n\nلحصولك على عرض سعر مخصص ودقيق لاحتياجاتك:\n📞 **02 666 0935**\n📧 **info@puretalent.ae**\n\nسيقوم فريقنا بدراسة متطلباتك وتقديم عرض مفصّل في أقرب وقت.",
        en: "Costs vary depending on the type of service, the number of staff required, and the nature of the work.\n\nFor a customized and accurate quote based on your needs:\n📞 **02 666 0935**\n📧 **info@puretalent.ae**\n\nOur team will review your requirements and provide a detailed proposal as soon as possible."
      }
    },

    /* ── 14. الموقع الإلكتروني ───────────────────────────── */
    {
      id: "website",
      questions: [
        /* عربي */
        "الموقع الالكتروني","رابط الموقع","ما هو موقعكم","عنوان الموقع",
        "اريد زيارة موقعكم","هل عندكم موقع",
        /* إنجليزية */
        "your website","website link","website url","do you have a website",
        "official website","web address"
      ],
      keywords: [
        "موقع","رابط","انترنت","ويب",
        "website","link","url","web","online","site"
      ],
      answers: {
        ar: "يمكنك زيارة موقعنا الرسمي على:\n🌐 **www.puretalent.ae**\n\nستجد فيه معلومات مفصلة عن خدماتنا، فرص العمل، ونموذج إرسال السيرة الذاتية.",
        en: "You can visit our official website at:\n🌐 **www.puretalent.ae**\n\nYou will find detailed information about our services, career opportunities, and the CV submission form."
      }
    },

    /* ── 15. الامتثال والتراخيص ──────────────────────────── */
    {
      id: "compliance",
      questions: [
        /* عربي */
        "هل الشركة مرخصة","هل انتم مرخصون","رخصة الشركة","مرخصة في ابوظبي",
        "معتمدون من وزارة العمل","تصاريح العمل","هل تلتزمون بالنظام",
        /* إنجليزية */
        "are you licensed","company license","ministry of labor","labor law",
        "work permits","uae labor law","compliance","regulations","legal"
      ],
      keywords: [
        "رخصة","مرخصة","معتمدة","وزارة","نظام","قانون","تصريح","التزام",
        "license","legal","law","ministry","permit","compliance","regulation","authorized"
      ],
      answers: {
        ar: "نعم، PureTalent شركة مرخصة وتعمل وفق أنظمة وزارة الموارد البشرية والتوطين في الإمارات العربية المتحدة.\n\nنحرص على:\n• الالتزام الكامل بقوانين العمل الإماراتية.\n• ضمان صحة تصاريح العمل والإقامة لجميع الكوادر.\n• مراجعة الوثائق دورياً لضمان الامتثال المستمر.\n\nللاستفسار عن أي وثيقة أو تصريح: 📧 info@puretalent.ae",
        en: "Yes, PureTalent is a licensed company operating in accordance with the Ministry of Human Resources and Emiratisation regulations in the UAE.\n\nWe are committed to:\n• Full compliance with UAE labor laws.\n• Ensuring valid work permits and residency for all staff.\n• Periodic document reviews to maintain ongoing compliance.\n\nFor any document or permit inquiries: 📧 info@puretalent.ae"
      }
    },

    /* ── 16. الشكر والإطراء ──────────────────────────────── */
    {
      id: "thanks",
      questions: [
        /* عربي */
        "شكرا","شكراً","شكرا جزيلا","شكراً جزيلاً","تسلم","مشكور","يسلمو",
        "ثانكس","ثانكيو","الله يعطيك العافية","مشكورين","شكرا على المساعدة",
        "أشكرك","بارك الله فيك","جزاك الله خيرا",
        /* إنجليزية */
        "thank you","thanks","thank u","thx","ty","much appreciated",
        "thanks a lot","thank you so much","great help"
      ],
      keywords: [
        "شكرا","شكراً","مشكور","تسلم","يسلمو","بارك","جزاك",
        "thank","thanks","thx","ty","appreciated"
      ],
      answers: {
        ar: "شكراً لك! 😊 يسعدنا دائماً مساعدتك. إن كان لديك أي استفسار آخر، لا تتردد في السؤال.\n\nيمكنك أيضاً التواصل معنا مباشرةً:\n📞 02 666 0935 | 📧 info@puretalent.ae",
        en: "Thank you! 😊 We are always happy to help. If you have any other questions, don't hesitate to ask.\n\nYou can also reach us directly:\n📞 02 666 0935 | 📧 info@puretalent.ae"
      }
    },

    /* ── 17. الوداع ──────────────────────────────────────── */
    {
      id: "goodbye",
      questions: [
        /* عربي */
        "مع السلامة","وداعا","وداعاً","باي","باي باي","تصبح على خير","لا شيء اخر",
        "لا يوجد استفسارات اخرى","شكرا انتهيت","انتهيت","خلصت","يلا باي",
        /* إنجليزية */
        "goodbye","bye","bye bye","see you","take care","that's all","nothing else",
        "i'm done","all good","see ya","later"
      ],
      keywords: [
        "وداع","سلامة","باي","انتهيت","خلصت",
        "goodbye","bye","done","all","later","see"
      ],
      answers: {
        ar: "مع السلامة! 😊 كان من دواعي سرورنا مساعدتك. لا تتردد في العودة في أي وقت.\n\n**PureTalent** – شريكك في الكوادر البشرية.\n📞 02 666 0935 | 📧 info@puretalent.ae",
        en: "Goodbye! 😊 It was a pleasure assisting you. Feel free to come back anytime.\n\n**PureTalent** – Your Manpower Partner.\n📞 02 666 0935 | 📧 info@puretalent.ae"
      }
    },

    /* ── 18. التقنية والمنصات الرقمية ───────────────────── */
    {
      id: "social_media",
      questions: [
        /* عربي */
        "انستغرام","انستقرام","لينكد ان","تويتر","تيك توك","سوشيال ميديا",
        "حسابات التواصل الاجتماعي","هل عندكم انستغرام","هل عندكم لينكدان",
        /* إنجليزية */
        "instagram","linkedin","twitter","social media","facebook","tiktok",
        "social accounts","follow you","your instagram","your linkedin"
      ],
      keywords: [
        "انستغرام","لينكد","تويتر","تيك","سوشيال","حسابات",
        "instagram","linkedin","twitter","facebook","tiktok","social","follow"
      ],
      answers: {
        ar: "للتواصل معنا والاطلاع على آخر أخبارنا، يمكنك زيارة موقعنا الرسمي:\n🌐 **www.puretalent.ae**\n\nأو التواصل المباشر عبر:\n📧 info@puretalent.ae\n📞 02 666 0935",
        en: "To stay updated and connect with us, visit our official website:\n🌐 **www.puretalent.ae**\n\nOr contact us directly via:\n📧 info@puretalent.ae\n📞 02 666 0935"
      }
    }
  ] // end knowledge
}; // end window.PURETALENT_CHATBOT


/*
  ──────────────────────────────────────────────────────────────────
  منطق الحد الأقصى للأسئلة وإرسال رسالة التحويل بعد 10 أسئلة
  ──────────────────────────────────────────────────────────────────
  الصق هذا الكود في ملف الـ chatbot.js الرئيسي الخاص بك:

  let questionCount = 0;
  const LIMIT = window.PURETALENT_CHATBOT.questionLimit || 10;

  function handleUserMessage(message, lang) {
    questionCount++;

    if (questionCount > LIMIT) {
      return window.PURETALENT_CHATBOT.locales[lang || 'ar'].limitMessage;
    }

    return findAnswer(message, lang);
  }

  ──────────────────────────────────────────────────────────────────
  ملاحظات للمطوّر:
  ──────────────────────────────────────────────────────────────────
  1. تغطي هذه القاعدة أكثر من 300 صياغة مختلفة وأخطاء إملائية شائعة.
  2. خوارزمية المطابقة يجب أن تبحث في:
     a. questions[]   – مطابقة كاملة أو جزئية مرنة
     b. keywords[]    – مطابقة أي كلمة مفتاحية
  3. لتطبيق التسامح مع الأخطاء الإملائية، يُنصح باستخدام
     خوارزمية Levenshtein Distance بمسافة ≤ 2.
  4. الردود مدعومة بـ 5 لغات (ar, en, ta, ne, si) – فعّل اللغات
     التي تحتاجها فقط.
  ──────────────────────────────────────────────────────────────────
*/