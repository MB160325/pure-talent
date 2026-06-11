/*
  PureTalent local chatbot knowledge base.

  No API is used. To feed the chatbot, add or edit entries in "knowledge".
  Each entry can include:
  - id: unique name
  - questions: possible visitor questions
  - keywords: important words to match
  - answers: response text per language
  - action: optional button shown under the answer
*/

window.PURETALENT_CHATBOT = {
  locales: {
    ar: {
      launcher: "اسأل PureTalent",
      title: "مساعد PureTalent",
      status: "يرد من معلومات الشركة",
      welcome: "مرحباً، أنا مساعد PureTalent. اسألني عن الخدمات، التقديم، التواصل، أو معلومات الشركة.",
      placeholder: "اكتب سؤالك هنا...",
      send: "إرسال",
      typing: "جاري البحث في المعلومات...",
      fallback: "لا أملك إجابة مؤكدة على هذا السؤال حالياً. يمكنك إضافة إجابة له داخل ملف js/chatbot-knowledge.js، أو التواصل معنا على 02 666 0935.",
      actionText: "فتح القسم"
    },
    en: {
      launcher: "Ask PureTalent",
      title: "PureTalent Assistant",
      status: "Answers from company data",
      welcome: "Hello, I am the PureTalent assistant. Ask me about services, applications, contact details, or company information.",
      placeholder: "Type your question...",
      send: "Send",
      typing: "Searching the local knowledge base...",
      fallback: "I do not have a confirmed answer for that yet. You can add it in js/chatbot-knowledge.js, or contact us on 02 666 0935.",
      actionText: "Open section"
    },
    ta: {
      launcher: "PureTalent கேள்",
      title: "PureTalent Assistant",
      status: "நிறுவன தகவல்களில் இருந்து பதில்",
      welcome: "வணக்கம். சேவைகள், விண்ணப்பம், தொடர்பு அல்லது நிறுவன தகவல்கள் பற்றி கேளுங்கள்.",
      placeholder: "உங்கள் கேள்வியை எழுதுங்கள்...",
      send: "அனுப்பு",
      typing: "உள்ளூர் தகவல்களில் தேடுகிறது...",
      fallback: "இந்த கேள்விக்கு உறுதியான பதில் இன்னும் இல்லை. js/chatbot-knowledge.js கோப்பில் பதிலை சேர்க்கலாம் அல்லது 02 666 0935 எண்ணில் தொடர்பு கொள்ளலாம்.",
      actionText: "பகுதியை திற"
    },
    ne: {
      launcher: "PureTalent सोध्नुहोस्",
      title: "PureTalent Assistant",
      status: "कम्पनी जानकारीबाट जवाफ",
      welcome: "नमस्ते। सेवा, आवेदन, सम्पर्क वा कम्पनी जानकारीबारे सोध्नुहोस्।",
      placeholder: "आफ्नो प्रश्न लेख्नुहोस्...",
      send: "पठाउनुहोस्",
      typing: "स्थानीय जानकारी खोज्दै...",
      fallback: "यो प्रश्नको पुष्टि भएको जवाफ अहिले छैन। js/chatbot-knowledge.js मा थप्न सक्नुहुन्छ वा 02 666 0935 मा सम्पर्क गर्नुहोस्।",
      actionText: "सेक्सन खोल्नुहोस्"
    },
    si: {
      launcher: "PureTalent අසන්න",
      title: "PureTalent Assistant",
      status: "සමාගම් තොරතුරු වලින් පිළිතුරු",
      welcome: "ආයුබෝවන්. සේවා, අයදුම් කිරීම, සම්බන්ධතා හෝ සමාගම් තොරතුරු ගැන අසන්න.",
      placeholder: "ඔබගේ ප්‍රශ්නය ලියන්න...",
      send: "යවන්න",
      typing: "දේශීය දැනුම සොයමින්...",
      fallback: "මෙම ප්‍රශ්නයට තහවුරු පිළිතුරක් තවම නැත. js/chatbot-knowledge.js තුළ එය එක් කළ හැකිය, නැතහොත් 02 666 0935 අමතන්න.",
      actionText: "කොටස විවෘත කරන්න"
    }
  },

  quickQuestions: {
    ar: ["ما هي خدماتكم؟", "كيف أرسل السيرة الذاتية؟", "ما رقم الهاتف؟"],
    en: ["What services do you offer?", "How can I send my CV?", "What is your phone number?"],
    ta: ["என்ன சேவைகள்?", "CV எப்படி அனுப்புவது?", "தொலைபேசி எண்?"],
    ne: ["के सेवा दिनुहुन्छ?", "CV कसरी पठाउने?", "फोन नम्बर?"],
    si: ["සේවා මොනවාද?", "CV යවන්නේ කොහොමද?", "දුරකථන අංකය?"]
  },

  knowledge: [
    {
      id: "services",
      questions: ["what services do you offer", "ما هي خدماتكم", "ماذا تقدمون", "services", "manpower supply"],
      keywords: ["services", "manpower", "workers", "staff", "عمالة", "خدمات", "توريد", "موظفين", "warehouse", "hospitality", "logistics"],
      answers: {
        ar: "نقدم حلول توريد عمالة تشغيلية، فرق ضيافة وخدمات، دعم لوجستي، تنسيق يومي، ومتابعة امتثال للوثائق والحضور والأداء.",
        en: "We provide operational manpower supply, hospitality and service teams, logistics support, daily coordination, and compliance follow-up for documents, attendance, and performance.",
        ta: "நாங்கள் செயல்பாட்டு பணியாளர்கள், விருந்தோம்பல் மற்றும் சேவை குழுக்கள், லாஜிஸ்டிக்ஸ் ஆதரவு, தினசரி ஒருங்கிணைப்பு மற்றும் ஆவண/வருகை கண்காணிப்பு வழங்குகிறோம்.",
        ne: "हामी सञ्चालन जनशक्ति, सेवा टोली, लजिस्टिक्स सहयोग, दैनिक समन्वय र कागजात, हाजिरी तथा प्रदर्शन फलोअप दिन्छौं।",
        si: "අපි මෙහෙයුම් කාර්ය මණ්ඩලය, සේවා කණ්ඩායම්, ලොජිස්ටික් සහාය, දෛනික සම්බන්ධීකරණය සහ ලේඛන/පැමිණීම/කාර්ය සාධන පසු විපරම ලබාදෙමු."
      },
      action: "#services"
    },
    {
      id: "apply",
      questions: ["how can i send my cv", "send cv", "apply", "كيف ارسل السيرة", "التقديم", "وظيفة"],
      keywords: ["cv", "resume", "apply", "career", "job", "سيرة", "التقديم", "وظيفة", "عمل"],
      answers: {
        ar: "يمكنك تعبئة نموذج إرسال السيرة في أسفل الصفحة. سيقوم الموقع بفتح برنامج البريد برسالة جاهزة إلى ifo@puretalent.ae، وبعدها أرفق ملف السيرة قبل الإرسال.",
        en: "Use the CV form at the bottom of the page. The site opens your email app with a prepared message to ifo@puretalent.ae, then you attach your CV before sending.",
        ta: "பக்கத்தின் கீழே உள்ள CV படிவத்தை நிரப்புங்கள். தளம் ifo@puretalent.ae க்கு தயார் மின்னஞ்சலை திறக்கும்; அனுப்புவதற்கு முன் CV-ஐ இணைக்கவும்.",
        ne: "पेजको तल रहेको CV फारम प्रयोग गर्नुहोस्। साइटले ifo@puretalent.ae मा तयार इमेल खोल्छ; पठाउनु अघि CV संलग्न गर्नुहोस्।",
        si: "පිටුවේ පහළ CV form එක භාවිත කරන්න. වෙබ් අඩවිය ifo@puretalent.ae වෙත සූදානම් email එකක් විවෘත කරයි; යැවීමට පෙර CV එක attach කරන්න."
      },
      action: "#careers"
    },
    {
      id: "contact",
      questions: ["phone number", "contact", "email", "رقم الهاتف", "الايميل", "التواصل"],
      keywords: ["phone", "contact", "email", "call", "هاتف", "رقم", "ايميل", "تواصل", "ifo", "puretalent"],
      answers: {
        ar: "يمكنك التواصل مع PureTalent عبر الهاتف: 02 666 0935 أو البريد الإلكتروني: ifo@puretalent.ae.",
        en: "You can contact PureTalent by phone on 02 666 0935 or by email at ifo@puretalent.ae.",
        ta: "PureTalent தொடர்பு: தொலைபேசி 02 666 0935 அல்லது மின்னஞ்சல் ifo@puretalent.ae.",
        ne: "PureTalent लाई फोन 02 666 0935 वा इमेल ifo@puretalent.ae मार्फत सम्पर्क गर्न सक्नुहुन्छ।",
        si: "PureTalent සම්බන්ධ කරගැනීම: දුරකථන 02 666 0935 හෝ email ifo@puretalent.ae."
      }
    },
    {
      id: "about",
      questions: ["about puretalent", "who are you", "من نحن", "عن الشركة"],
      keywords: ["about", "company", "puretalent", "من", "الشركة", "بيورتالينت"],
      answers: {
        ar: "PureTalent شركة متخصصة في توريد العمالة داخل الإمارات، تركز على الاختيار الدقيق، سرعة الاستجابة، الالتزام، والمتابعة التشغيلية المستمرة.",
        en: "PureTalent is a manpower supply company in the UAE focused on careful selection, fast response, compliance, and continuous operational follow-up.",
        ta: "PureTalent என்பது UAE-யில் மனிதவள வழங்கல் நிறுவனம். தேர்வு, விரைவு பதில், ஒழுங்கு மற்றும் தொடர்ந்த கண்காணிப்பு முக்கியம்.",
        ne: "PureTalent UAE मा जनशक्ति आपूर्ति गर्ने कम्पनी हो, जसले छनोट, छिटो प्रतिक्रिया, अनुपालन र निरन्तर फलोअपमा ध्यान दिन्छ।",
        si: "PureTalent යනු UAE තුළ සේවක සැපයුම් සමාගමකි. තෝරාගැනීම, ඉක්මන් ප්‍රතිචාර, අනුකූලතාව සහ පසු විපරම මත අවධානය යොමු කරයි."
      },
      action: "#about"
    }
  ]
};
