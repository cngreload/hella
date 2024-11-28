import
{
  benefitIcon1,
  Dgrid,
  robot,
  benefitIcon2,
  card2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  nioclogo,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  irmap,


} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [ homeSmile, file02, searchMd, plusSquare ];

export const notificationImages = [ notification4, notification3, notification2 ];

export const companyLogos = [ nioclogo, yourlogo, yourlogo, yourlogo ];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "ارتقا ایمنی با شناسای خودرو های نا ایمن",
    text: collabText,
  },
  {
    id: "1",
    title: "پرداخت بر خط",
  },
  {
    id: "2",
    title: "نظارت دقیق و جلوگیری از کلاهبرداری",
  },
  {
    id: "3",
    title: "شفافیت داده",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// export conts animatedModel = [
//   {

//   }
// ]

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "فراهم آوری دسترسی هر لحظه هر کجا",
    text: "با ورود به عصر دیجیتال، سامانه هوشمندساز ویت، تحولی چشمگیر را در عرصه کنترل و دسترسی به کسب و کار رقم می‌زند. این سامانه، مفهوم کنترل از راه دور را به سطحی جدید ارتقا داده و صاحبان کسب و کار را قادر می‌سازد تا با دسترسی بلادرنگ، قلب تپنده تجارت خود را در هر زمان و مکانی مدیریت کنند.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: irmap,
  },
  {
    id: "1",
    title: "سامانه ای برای همه با پیچیدگی زدایی دانش",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: card2,
    light: true,
  },
  {
    id: "2",
    title: "اعتمادی هوشمند، روابط کاری شفاف",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "جهش کارایی با رهای از خطا های انسانی",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "به بانک اطلاعاتی خود خوش آمدید",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "سامانه ای امروز برای فردا",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
export const gridItems = [
  {
    id: 1,
    title:
      "اکنون زمان بیداری و بازنگری است، زمان آن رسیده که نگاهی عمیق و آینده‌نگرانه به صنعت انرژی داشته باشیم. تاریخ گواهی می‌دهد که صنعت انرژی همواره یکی از قدرتمندترین عوامل تحولات اجتماعی بوده و اکنون نیز باید از آن به‌عنوان یک اهرم قدرتمند برای غلبه بر چالش‌های پیش رو استفاده کنیم. بنزین به‌عنوان سوخت اصلی بخش حمل‌ونقل، روزگاری پرونده خود را بسته و دیگر نمی‌توان بر آن پافشاری کرد. گازهای فشرده طبیعی، پتانسیلی عظیم و نادیده‌انگاشته شده توسط عصر معاصر هستند. سیاست‌های بی‌توجه به آینده، چشم‌اندازی بی‌تفاوت نسبت به این منبع ارزشمند انرژی ایجاد کرده‌اند. اما چالش‌های امروز، بار دیگر توجه بشر را به سوی گازهای طبیعی جلب کرده است. چالش‌هایی که اگر راهکاری برای آنها اندیشیده نشود، فاجعه‌هایی کوچک و بزرگ را در جامعه رقم خواهند زد. ما همراه شما هستیم، مبلغ فناوری و عمل، تا با ارائه راهکارهای منطقی و مفید، دست پیشگیری جامعه در برابر خطرات تلخ این حوزه باشیم. سی‌ان‌جی (گاز طبیعی فشرده)، آینده روشن صنعت انرژی ایران است.",
    description: "چشم‌اندازی کارزار",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "md:w-full sm:w-[80vm] absolute opacity-35 w-full h-full ",
    descriptionClassName: "",
    titleClassName: "font-sans justify-start w-full lg:justify-center",
    img: { Dgrid },
    spareImg: "",
  },
  {
    id: 2,
    title:
      "ترکیبی قدرتمند و پرشور از سوخت‌های تجدیدپذیر، یک قهرمان واقعی در عرصه انرژی است. این ترکیب درخشان، با ادغام زیست‌سوخت‌های پاک و سی‌ان‌جی، قلب تپنده وسایل نقلیه و فراتر از آن می‌شود. بایو سی‌ان‌جی، با قدرت طبیعت و فناوری، آینده‌ای پایدار و درخشان را نوید می‌دهد و با کاهش انتشار کربن، گامی بزرگ به سوی آسمان آبی برمی‌دارد.",
    description: "بایو سی ان جی",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    descriptionClassName: "lg:text-center justify-center ",
    titleClassName: "justify-top text-center",

    img: "/grid1.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "سامانه هوشمند بومی",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-left font-sans text-red",
    img: "./grid1",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "خودروسازان در قبال تولید خودروهای سی‌ان‌جی، مسؤولیتی سنگین بر عهده دارند که متاسفانه در سال‌های اخیر، شاهد کوتاهی آنها در ایفای این مسؤولیت بوده‌ایم. خودروسازان نه تنها به سیاست‌های کلان راهبردی کشور توجهی نشان نداده‌اند، بلکه در توسعه‌ی خودروهای سی‌ان‌جی نیز کوتاهی کرده‌اند. این کوتاهی، منجر به عدم حمایت از مشتریان و جامعه‌ی مصرف‌کننده شده است. خودروسازان باید درک کنند که تولید خودروهای سی‌ان‌جی تنها یک مسؤولیت تجاری نیست، بلکه مسؤولیتی اجتماعی نیز هست.",
    description: "مسؤولیت خودروسازان",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-top text-center font-sans",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "h-full",
    titleClassName:
      "justify-end text-left direction-rtl md:justify-center lg:justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-100 text-center",
    img: "",
    spareImg: "",
  },
];

export const articles = [
  {
    id: 1,
    title: "خیزش دو ابرقدرت بسوی سی ان جی",
    des: "افزایش سه برابری جایگاه ها و تنوع خودرو های",
    img: "/artcar.svg",
    iconLists: [ "/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg" ],
    pintext: "همسایگان",
    link: "https://cngsite-cngreloads-projects.vercel.app/arthome",
  },
  {
    id: 2,
    title: "مقایسه راهکار سی ان جی و برق",
    des: "وجود زیرساخت ها منابع عظیم فناوری تثبیت شده و در دسترس",
    img: "/cngvsev1.svg",
    pintext: "واقعیت",
    link: "https://cngsite-cngreloads-projects.vercel.app/arthome/art2",
  },
  {
    id: 3,
    title: "انقلاب در سوخت پاک با زیست سوخت ها",
    des: "تاثیر تصاعدی ادغام زیست سوخت ها با سی ان جی در پاکیزگی هوا",
    img: "/biofuel.svg",
    pintext: "طبیعت",
    link: "https://cngsite-cngreloads-projects.vercel.app/arthome/art3",
  },

  /*
    id: 4,
    title: "سی ان جی پلی به آینده",
    des: "سی ان جی راهکاری واقعی برای حذف بنزین و فراهم آورنده شرایط برای رشد خودروهای برقی می باشد",
    img: "/bridge.svg",
    pintext: "راهکار",
    link: "https://cngsite-cngreloads-projects.vercel.app/arthome/art4",
  */
];
