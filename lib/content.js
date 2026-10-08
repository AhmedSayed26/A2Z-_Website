// Every user-facing string is { en, ar }. Render with <T v={...} />.
const b = (en, ar) => ({ en, ar });

export const SITE = {
  name: b("A2Z Integrated Social Solutions", "A2Z للحلول الاجتماعية المتكاملة"),
  short: "A2Z",
  email: "hello@a2z.example",
  phone: "+000 000 000 000",
  office: b("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"),
  hours: b("Sun–Thu, 9:00–17:00", "الأحد–الخميس، من 9:00 صباحًا إلى 5:00 مساءً"),
  replyWindow: b("two working days", "يومي عمل"),
};

export const UI = {
  cta: b("Let's create impact", "لنصنع أثرًا معًا"),
  startProject: b("Start a project with us", "ابدأ مشروعك معنا"),
  seeWork: b("See our work", "شاهد أعمالنا"),
  menuOpen: b("Open menu", "فتح القائمة"),
  menuClose: b("Close menu", "إغلاق القائمة"),
  explore: b("Explore", "استكشف"),
  contact: b("Contact", "تواصل معنا"),
  stay: b("Stay in touch", "ابقَ على اتصال"),
  stayText: b(
    "One email a quarter with new projects and what we learned from them.",
    "رسالة واحدة كل ربع سنة عن مشاريعنا الجديدة وما تعلمناه منها.",
  ),
  emailAddress: b("Email address", "البريد الإلكتروني"),
  subscribe: b("Subscribe", "اشترك"),
  rights: b("All rights reserved.", "جميع الحقوق محفوظة."),
  privacy: b("Privacy", "الخصوصية"),
  terms: b("Terms", "الشروط"),
  footerAbout: b(
    "An integrated social solutions company. We plan, deliver and measure programs that change people's lives, from the first question to lasting results.",
    "شركة حلول اجتماعية متكاملة. نخطط للبرامج التي تغيّر حياة الناس وننفذها ونقيس أثرها، من السؤال الأول إلى النتائج الدائمة.",
  ),
};

export const NAV = [
  { href: "/", label: b("Home", "الرئيسية") },
  { href: "/about", label: b("About Us", "من نحن") },
  { href: "/vision", label: b("Our Vision", "رؤيتنا") },
  { href: "/#projects", label: b("Projects", "المشاريع") },
  { href: "/contact", label: b("Contact", "تواصل معنا") },
];

export const HERO = {
  title: b("Economic Media Solutions", "حلول إعلامية اقتصادية"),
  text: b(
    "We provide integrated media and economic solutions that help organizations and individuals achieve their communication goals with the highest level of professionalism.",
    "نقدّم حلولًا إعلامية واقتصادية متكاملة تساعد المؤسسات والأفراد على تحقيق أهدافهم الاتصالية بأعلى مستوى من الاحترافية.",
  ),
  alt: b(
    "A man looking over the Riyadh skyline with media analytics dashboards and widening signal rings",
    "رجل يطل على أفق الرياض مع لوحات تحليلات إعلامية وحلقات إشارة متسعة",
  ),
};

export const STATS = [
  { value: "+120", label: b("clients who came back", "عميل عاد إلينا") },
  { value: "+340", label: b("projects delivered", "مشروع منفّذ") },
  { value: "+12", label: b("countries", "دولة") },
];

export const METHOD = {
  title: b("How we create an impact", "كيف نصنع الأثر"),
  text: b(
    "Six moves, in order, on every project. Select one to see what it means in practice.",
    "ست خطوات بالترتيب في كل مشروع. اختر إحداها لتعرف معناها عمليًا.",
  ),
  ask: b("The question we ask", "السؤال الذي نطرحه"),
  group: b("Our method", "منهجنا"),
  prev: b("Previous step", "الخطوة السابقة"),
  next: b("Next step", "الخطوة التالية"),
};

export const METHOD_STEPS = [
  {
    name: b("Understand", "نفهم"),
    text: b(
      "We start with people, not the brief. Field visits, listening sessions and data show us what is really happening and why.",
      "نبدأ بالناس لا بالطلب المكتوب. الزيارات الميدانية وجلسات الاستماع والبيانات تكشف لنا ما يحدث فعلًا ولماذا.",
    ),
    q: b(
      "Who is affected, and what do they say they need?",
      "من المتأثر، وماذا يقول إنه يحتاج؟",
    ),
  },
  {
    name: b("Strategize", "نخطط"),
    text: b(
      "We turn what we learned into a clear plan for change: who benefits, how, and how we will know.",
      "نحوّل ما تعلمناه إلى خطة واضحة للتغيير: من المستفيد، وكيف، وكيف سنعرف.",
    ),
    q: b(
      "What has to change, and what is the shortest credible path there?",
      "ما الذي يجب أن يتغير، وما أقصر طريق موثوق لذلك؟",
    ),
  },
  {
    name: b("Build", "نبني"),
    text: b(
      "We design the program, the partnerships and the tools needed to deliver it well.",
      "نصمم البرنامج والشراكات والأدوات اللازمة لتنفيذه بإتقان.",
    ),
    q: b(
      "Who needs to be involved, and what do they need from us?",
      "من يجب أن يشارك، وماذا يحتاج منا؟",
    ),
  },
  {
    name: b("Activate", "نُفعّل"),
    text: b(
      "We launch with communities, partners and media, on the ground and online.",
      "نطلق العمل مع المجتمعات والشركاء والإعلام، على الأرض وعبر الإنترنت.",
    ),
    q: b(
      "How will people hear about this, and why would they take part?",
      "كيف سيعرف الناس بهذا، ولماذا سيشاركون؟",
    ),
  },
  {
    name: b("Measure", "نقيس"),
    text: b(
      "We track outcomes against the baseline, not just activities, and report what we find honestly.",
      "نتابع النتائج مقارنةً بخط الأساس لا الأنشطة فقط، ونعرض ما نجده بصدق.",
    ),
    q: b(
      "What changed that would not have changed without us?",
      "ما الذي تغيّر ولم يكن ليتغيّر بدوننا؟",
    ),
  },
  {
    name: b("Scale", "نُوسّع"),
    text: b(
      "What works is documented, funded again and carried to new places.",
      "ما ينجح نوثّقه ونموّله مجددًا وننقله إلى أماكن جديدة.",
    ),
    q: b(
      "Where else could this work, and who will carry it forward?",
      "أين يمكن أن ينجح أيضًا، ومن سيحمله إلى الأمام؟",
    ),
  },
];

export const SKILLS_COPY = {
  title: b("Our skills", "مهاراتنا"),
  text: b(
    "Ten capabilities under one roof, so a project never stalls between agencies. Open any of them to see what it covers.",
    "عشر قدرات تحت سقف واحد، فلا يتعثر مشروعك بين الجهات. افتح أيًّا منها لتعرف ما تشمله.",
  ),
  ask: b("Ask about a capability", "اسأل عن قدرة معينة"),
};

export const SKILLS = [
  {
    name: b("Strategy", "الاستراتيجية"),
    text: b(
      "We help you decide where to focus, what success looks like and how the pieces fit together.",
      "نساعدك على تحديد أين تركّز، وكيف يبدو النجاح، وكيف تتكامل الأجزاء.",
    ),
    tags: [
      b("Theory of change", "نظرية التغيير"),
      b("Program strategy", "استراتيجية البرامج"),
      b("Roadmaps", "خرائط الطريق"),
    ],
  },
  {
    name: b("Social Impact", "الأثر الاجتماعي"),
    text: b(
      "We design social investment and responsibility programs that serve real needs, not just reports.",
      "نصمم برامج الاستثمار الاجتماعي والمسؤولية المجتمعية التي تخدم احتياجات حقيقية لا التقارير فقط.",
    ),
    tags: [
      b("Program design", "تصميم البرامج"),
      b("Social investment", "الاستثمار الاجتماعي"),
      b("CSR programs", "برامج المسؤولية المجتمعية"),
    ],
  },
  {
    name: b("Research", "البحث"),
    text: b(
      "We find out what is true on the ground before anything is built.",
      "نكتشف الحقيقة على أرض الواقع قبل بناء أي شيء.",
    ),
    tags: [
      b("Needs assessments", "تقييم الاحتياجات"),
      b("Baseline studies", "دراسات خط الأساس"),
      b("Surveys", "الاستبيانات"),
      b("Focus groups", "مجموعات النقاش"),
    ],
  },
  {
    name: b("Community Engagement", "إشراك المجتمع"),
    text: b(
      "We bring communities into the work as partners, from consultation to delivery.",
      "نُدخل المجتمعات في العمل كشركاء، من الاستشارة حتى التنفيذ.",
    ),
    tags: [
      b("Consultations", "الاستشارات"),
      b("Volunteer programs", "برامج التطوع"),
      b("Community events", "الفعاليات المجتمعية"),
    ],
  },
  {
    name: b("Communication", "الاتصال"),
    text: b(
      "We tell the story of the work clearly, in the language your audiences use.",
      "نروي قصة العمل بوضوح وبلغة جمهورك.",
    ),
    tags: [
      b("Messaging", "الرسائل"),
      b("Storytelling", "سرد القصص"),
      b("Media relations", "العلاقات الإعلامية"),
      b("Content", "المحتوى"),
    ],
  },
  {
    name: b("Digital Solutions", "الحلول الرقمية"),
    text: b(
      "We build the platforms and tools that let programs reach more people and track results.",
      "نبني المنصات والأدوات التي تتيح للبرامج الوصول إلى أكبر عدد من الناس وتتبّع النتائج.",
    ),
    tags: [
      b("Platforms", "المنصات"),
      b("Dashboards", "لوحات المتابعة"),
      b("Digital campaigns", "الحملات الرقمية"),
    ],
  },
  {
    name: b("Project Management", "إدارة المشاريع"),
    text: b(
      "We keep complex, multi-partner projects on time, on budget and accountable.",
      "نبقي المشاريع المعقدة متعددة الشركاء في وقتها وميزانيتها وخاضعة للمساءلة.",
    ),
    tags: [
      b("Planning", "التخطيط"),
      b("Delivery", "التنفيذ"),
      b("Reporting", "التقارير"),
      b("Risk", "المخاطر"),
    ],
  },
  {
    name: b("Partnerships", "الشراكات"),
    text: b(
      "We connect the institutions that need each other and give every partner a clear role.",
      "نربط المؤسسات التي تحتاج إلى بعضها ونمنح كل شريك دورًا واضحًا.",
    ),
    tags: [
      b("Partner mapping", "تحديد الشركاء"),
      b("Agreements", "الاتفاقيات"),
      b("Coalitions", "التحالفات"),
    ],
  },
  {
    name: b("Campaigns", "الحملات"),
    text: b(
      "We run awareness and behavior-change campaigns that move people to act.",
      "ننفذ حملات التوعية وتغيير السلوك التي تدفع الناس إلى الفعل.",
    ),
    tags: [
      b("Awareness", "التوعية"),
      b("Behavior change", "تغيير السلوك"),
      b("Events", "الفعاليات"),
      b("Social media", "وسائل التواصل"),
    ],
  },
  {
    name: b("Impact Measurement", "قياس الأثر"),
    text: b(
      "We define what to measure, collect the data and show what really changed.",
      "نحدد ما يجب قياسه ونجمع البيانات ونُظهر ما تغيّر فعلًا.",
    ),
    tags: [
      b("M&E frameworks", "أطر المتابعة والتقييم"),
      b("Indicators", "المؤشرات"),
      b("Impact reports", "تقارير الأثر"),
    ],
  },
];

export const BUILD_COPY = {
  title: b("How we build impact", "كيف نبني الأثر"),
  text: b(
    "From the first conversation to the next phase. You always know where the project stands and what you will receive.",
    "من أول حوار حتى المرحلة التالية. تعرف دائمًا أين وصل المشروع وماذا ستستلم.",
  ),
  get: b("You get", "ما تحصل عليه"),
};

export const BUILD_STEPS = [
  {
    num: "01",
    title: b("Discover", "نكتشف"),
    text: b(
      "We map the issue, the people affected and who is already working on it.",
      "نرسم خريطة القضية والمتأثرين بها ومن يعمل عليها بالفعل.",
    ),
    get: b("a discovery report", "تقرير استكشافي"),
  },
  {
    num: "02",
    title: b("Define", "نحدد"),
    text: b(
      "We agree on the change we are aiming for and how we will know it happened.",
      "نتفق على التغيير الذي نستهدفه وكيف سنعرف أنه حدث.",
    ),
    get: b("goals, indicators and a baseline", "أهداف ومؤشرات وخط أساس"),
  },
  {
    num: "03",
    title: b("Design", "نصمم"),
    text: b(
      "We shape the program, bring in the partners and write the message.",
      "نصوغ البرنامج ونضم الشركاء ونكتب الرسالة.",
    ),
    get: b("a program blueprint and plan", "مخطط البرنامج وخطته"),
  },
  {
    num: "04",
    title: b("Deliver", "ننفذ"),
    text: b(
      "Our team runs it on the ground alongside yours, week by week.",
      "يديره فريقنا على الأرض إلى جانب فريقك، أسبوعًا بعد أسبوع.",
    ),
    get: b("regular progress updates", "تحديثات دورية للتقدم"),
  },
  {
    num: "05",
    title: b("Measure", "نقيس"),
    text: b(
      "We compare results with the baseline and listen to the people who took part.",
      "نقارن النتائج بخط الأساس ونستمع إلى من شاركوا.",
    ),
    get: b("an impact report", "تقرير أثر"),
  },
  {
    num: "06",
    title: b("Grow", "ننمّي"),
    text: b(
      "We keep what worked, fix what didn't, and plan the next phase or location.",
      "نُبقي ما نجح ونصلح ما لم ينجح ونخطط للمرحلة أو الموقع التالي.",
    ),
    get: b("a scale-up plan", "خطة توسّع"),
  },
];

export const DIFF_COPY = {
  title: b("What makes our impact different?", "ما الذي يميّز أثرنا؟"),
  text: b(
    "Most social programs fail in familiar ways. We built our practice around avoiding them.",
    "تفشل معظم البرامج الاجتماعية بطرق معروفة. بنينا عملنا على تجنّبها.",
  ),
  usual: b("What usually happens", "ما يحدث عادةً"),
  instead: b("What we do instead", "ما نفعله نحن"),
};

export const DIFFERENCES = [
  {
    focus: b("Human-centered thinking", "التفكير المتمحور حول الإنسان"),
    usual: b(
      "Programs designed around a funder's template.",
      "برامج تُصمَّم على قالب الجهة الممولة.",
    ),
    instead: b(
      "Programs designed with the people they are meant to serve, before a single activity is planned.",
      "برامج تُصمَّم مع من تخدمهم، قبل تخطيط أي نشاط.",
    ),
  },
  {
    focus: b("Strategic execution", "التنفيذ الاستراتيجي"),
    usual: b("Good intentions, loose plans.", "نوايا طيبة وخطط فضفاضة."),
    instead: b(
      "Every activity tied to an outcome, an owner and a budget line.",
      "كل نشاط مرتبط بنتيجة ومسؤول وبند في الميزانية.",
    ),
  },
  {
    focus: b("Local understanding", "الفهم المحلي"),
    usual: b("One model exported everywhere.", "نموذج واحد يُصدَّر إلى كل مكان."),
    instead: b(
      "Local teams, local language and local partners who know how things really work.",
      "فرق محلية ولغة محلية وشركاء محليون يعرفون كيف تسير الأمور فعلًا.",
    ),
  },
  {
    focus: b("Scalable solutions", "حلول قابلة للتوسع"),
    usual: b(
      "Pilots that end when the grant does.",
      "تجارب تجريبية تنتهي بانتهاء المنحة.",
    ),
    instead: b(
      "Built from day one to be handed over, funded again and repeated elsewhere.",
      "مبنية من اليوم الأول لتُسلَّم وتُموَّل مجددًا وتتكرر في أماكن أخرى.",
    ),
  },
  {
    focus: b("Measurable outcomes", "نتائج قابلة للقياس"),
    usual: b("Reports that count activities.", "تقارير تعدّ الأنشطة."),
    instead: b(
      "Baselines, clear indicators and honest results, including what didn't work.",
      "خطوط أساس ومؤشرات واضحة ونتائج صادقة، بما فيها ما لم ينجح.",
    ),
  },
  {
    focus: b("Long-term impact", "أثر طويل المدى"),
    usual: b("Campaigns that peak and fade.", "حملات تبلغ ذروتها ثم تخفت."),
    instead: b(
      "Relationships and systems that keep working after we leave.",
      "علاقات ومنظومات تستمر في العمل بعد رحيلنا.",
    ),
  },
];

export const PRESENCE = {
  word: b("Presence", "الحضور"),
  end: b("Impact.", "الأثر."),
  above: b("Above the surface", "فوق السطح"),
  below: b("Below it, the work", "وتحته، العمل"),
  kicker: b("What people see", "ما يراه الناس"),
};

export const LAYERS = [
  {
    name: b("Research", "البحث"),
    text: b(
      "Knowing the community before speaking to it.",
      "معرفة المجتمع قبل مخاطبته.",
    ),
  },
  {
    name: b("Strategy", "الاستراتيجية"),
    text: b(
      "A reason behind every message and every activity.",
      "سبب وراء كل رسالة وكل نشاط.",
    ),
  },
  {
    name: b("Partnerships", "الشراكات"),
    text: b(
      "The right institutions in the room, with clear roles.",
      "المؤسسات المناسبة حول الطاولة، بأدوار واضحة.",
    ),
  },
  {
    name: b("Storytelling", "سرد القصص"),
    text: b(
      "Stories told with people, not about them.",
      "قصص تُروى مع الناس لا عنهم.",
    ),
  },
  {
    name: b("Trust", "الثقة"),
    text: b("Earned by showing up, again and again.", "تُكتسب بالحضور مرة بعد مرة."),
  },
  {
    name: b("Measurement", "القياس"),
    text: b(
      "Proof that it worked, and where it didn't.",
      "دليل على ما نجح، وعلى ما لم ينجح.",
    ),
  },
];

export const CLIENTS_COPY = {
  title: b("Our clients", "عملاؤنا"),
  text: b(
    "Most of our clients start with one project and stay for the next. That says more than any logo wall.",
    "يبدأ معظم عملائنا بمشروع واحد ثم يبقون للتالي. وهذا يقول أكثر من أي جدار شعارات.",
  ),
};

export const PROJECTS_COPY = {
  title: b("Our projects", "مشاريعنا"),
  text: b(
    "Each one started with a question about people's lives and ended with a number we could stand behind.",
    "بدأ كل مشروع بسؤال عن حياة الناس وانتهى برقم يمكننا الوقوف خلفه.",
  ),
  read: b("Read the case study", "اقرأ دراسة الحالة"),
  more: b("More case studies", "المزيد من دراسات الحالة"),
  scroll: b("Scroll sideways", "مرّر جانبيًا"),
};

export const PROJECTS = [
  {
    featured: true,
    title: b(
      "Social media presence that moves people",
      "حضور على وسائل التواصل يحرّك الناس",
    ),
    category: b("Campaigns", "الحملات"),
    country: b("Saudi Arabia", "السعودية"),
    summary: b(
      "Organizations needed more than posts. We built narrative systems that connect audiences to action across platforms.",
      "احتاجت المؤسسات أكثر من منشورات. بنينا منظومات سردية تربط الجمهور بالفعل عبر المنصات.",
    ),
    impact: "2.4M",
    impactLabel: b("people reached across campaigns", "شخص وصلت إليهم الحملات"),
    image: "/OurProjects/socialmedia1.png",
  },
  {
    title: b("Always-on brand storytelling", "سرد علامة تجارية متواصل"),
    category: b("Communication", "الاتصال"),
    country: b("GCC", "دول الخليج"),
    summary: b(
      "A sustained content engine that kept the message clear and the audience engaged.",
      "محرّك محتوى مستمر أبقى الرسالة واضحة والجمهور متفاعلًا.",
    ),
    image: "/OurProjects/socialmedia2.png",
  },
  {
    title: b("Community-first digital outreach", "تواصل رقمي يبدأ من المجتمع"),
    category: b("Digital Solutions", "الحلول الرقمية"),
    country: b("Middle East", "الشرق الأوسط"),
    summary: b(
      "Platforms and campaigns designed around how communities actually listen and share.",
      "منصات وحملات صُممت حول الطريقة التي يستمع بها المجتمع ويشارك فعلًا.",
    ),
    image: "/OurProjects/socialmedia1.png",
  },
];

export const CLIENT_LOGOS = Array.from({ length: 31 }, (_, i) => ({
  src: `/OurClients/client${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

export const VISION = {
  hero: b(
    "A future where good ideas reach the people they're for.",
    "مستقبل تصل فيه الأفكار الجيدة إلى من وُجدت لأجلهم.",
  ),
  label: b("Our vision", "رؤيتنا"),
  statement: b(
    "To be the most trusted partner in the region for turning social ambition into change that can be seen, measured and sustained.",
    "أن نكون الشريك الأكثر ثقة في المنطقة في تحويل الطموح الاجتماعي إلى تغيير يُرى ويُقاس ويدوم.",
  ),
  imagine: b(
    "We imagine a time when every program funded in the name of a community is shaped by that community, delivered with care, and judged by what it changed in people's lives.",
    "نتخيل زمنًا يتشكّل فيه كل برنامج يُموَّل باسم مجتمع ما بيد هذا المجتمع، ويُنفَّذ بعناية، ويُحكم عليه بما غيّره في حياة الناس.",
  ),
  shiftsTitle: b("The future we believe in", "المستقبل الذي نؤمن به"),
  compare: b("Compare today and the future", "قارن بين اليوم والمستقبل"),
  today: b("Today", "اليوم"),
  future: b("The future", "المستقبل"),
};

export const VISION_SHIFTS = [
  {
    area: b("How we give", "كيف نعطي"),
    from: b("Charity that ends with the donation.", "صدقة تنتهي بالتبرع."),
    to: b("Shared value that keeps paying back.", "قيمة مشتركة تستمر في العطاء."),
  },
  {
    area: b("How long it lasts", "كم تدوم"),
    from: b("Campaigns that peak and fade.", "حملات تبلغ ذروتها ثم تخفت."),
    to: b("Systems that keep working for years.", "منظومات تعمل لسنوات."),
  },
  {
    area: b("How we judge success", "كيف نحكم على النجاح"),
    from: b(
      "Counting activities and attendees.",
      "عدّ الأنشطة والحاضرين.",
    ),
    to: b(
      "Measuring lives that actually changed.",
      "قياس الأرواح التي تغيّرت فعلًا.",
    ),
  },
  {
    area: b("Who decides", "من يقرر"),
    from: b(
      "Decisions made far from the people affected.",
      "قرارات تُتخذ بعيدًا عن المتأثرين بها.",
    ),
    to: b(
      "Decisions made with the people affected.",
      "قرارات تُتخذ مع المتأثرين بها.",
    ),
  },
  {
    area: b("Who does the work", "من يقوم بالعمل"),
    from: b("Organizations working alone.", "مؤسسات تعمل منفردة."),
    to: b(
      "Government, business and communities working as one.",
      "الحكومة والأعمال والمجتمعات تعمل كجسد واحد.",
    ),
  },
];

export const ABOUT = {
  heroLine1: b("We work on what", "نعمل على ما"),
  heroLine2: b("matters to people.", "يهمّ الناس."),
  heroText: b(
    "A2Z is an integrated social solutions company. We take social ambitions from the first question all the way to results people can feel.",
    "A2Z شركة حلول اجتماعية متكاملة. نأخذ الطموحات الاجتماعية من السؤال الأول حتى نتائج يشعر بها الناس.",
  ),
  whoTitle: b("One team, every step.", "فريق واحد في كل خطوة."),
  whoLead: b(
    "We are researchers, strategists, community builders and storytellers who would rather fix a problem than write about it.",
    "نحن باحثون ومخططون استراتيجيون وبناة مجتمع وراوو قصص، نفضّل حل المشكلة على الكتابة عنها.",
  ),
  whoText: b(
    "Organizations come to us when they want their social work to actually change something. We bring research, strategy, partnerships, communication and measurement together, so nothing gets lost between agencies and every activity serves the same goal.",
    "تأتي إلينا المؤسسات حين تريد لعملها الاجتماعي أن يغيّر شيئًا فعلًا. نجمع البحث والاستراتيجية والشراكات والاتصال والقياس معًا، فلا يضيع شيء بين الجهات ويخدم كل نشاط الهدف نفسه.",
  ),
  storyTitle: b("Our story", "قصتنا"),
  storyLead: b(
    "A2Z was founded with the vision of becoming one of the leading media services companies specializing in economic communications across the Kingdom, the Gulf region, and the Middle East.",
    "تأسست A2Z برؤية أن تصبح من الشركات الرائدة في الخدمات الإعلامية المتخصصة في الاتصال الاقتصادي في المملكة ومنطقة الخليج والشرق الأوسط.",
  ),
  quote: b(
    "Public relations and social media platforms are not defined solely by the message you put out, but by the perception and narrative that others share about you.",
    "لا تُعرَّف العلاقات العامة ومنصات التواصل بالرسالة التي تنشرها وحدها، بل بالانطباع والسرد الذي يتشاركه الآخرون عنك.",
  ),
  story: [
    b(
      "We provide a comprehensive range of media and communication services, including corporate identity management, strategic media content creation and management, with a particular focus on economic content. We also offer media solutions designed to enhance the public image and reputation of government organizations and private-sector entities, manage social media platforms, develop forward-looking media strategies, and provide media crisis management solutions.",
      "نقدّم مجموعة شاملة من الخدمات الإعلامية والاتصالية، تشمل إدارة الهوية المؤسسية، وصناعة المحتوى الإعلامي الاستراتيجي وإدارته، مع تركيز خاص على المحتوى الاقتصادي. كما نقدّم حلولًا إعلامية لتعزيز الصورة الذهنية وسمعة الجهات الحكومية وشركات القطاع الخاص، وإدارة منصات التواصل الاجتماعي، ووضع استراتيجيات إعلامية استشرافية، وحلول إدارة الأزمات الإعلامية.",
    ),
    b(
      "We are also committed to developing and empowering teams to become more efficient, agile, and adaptable to the rapidly evolving media landscape.",
      "ونلتزم كذلك بتطوير الفرق وتمكينها لتصبح أكثر كفاءة ومرونة وقدرة على التكيّف مع المشهد الإعلامي المتسارع.",
    ),
    b(
      "What sets us apart is our ability to select the most appropriate strategies and methodologies to shape and strengthen our clients' corporate image and brand, positioning them at the forefront of the media landscape. We carefully identify the right timing to deliver the most effective message from the perspective of the target audience.",
      "ما يميزنا قدرتنا على اختيار أنسب الاستراتيجيات والمنهجيات لصياغة صورة عملائنا وعلامتهم التجارية وتعزيزها، ووضعهم في طليعة المشهد الإعلامي. ونحدد بعناية التوقيت المناسب لإيصال الرسالة الأكثر تأثيرًا من منظور الجمهور المستهدف.",
    ),
    b(
      "After all, public relations and social media platforms are not defined solely by the message you put out, but by the perception and narrative that others share about you. Therefore, choosing the right media partner is a critical factor in the success of any organization.",
      "فالعلاقات العامة ومنصات التواصل لا تُعرَّف بالرسالة التي تنشرها وحدها، بل بالانطباع والسرد الذي يتشاركه الآخرون عنك. لذلك فإن اختيار الشريك الإعلامي المناسب عامل حاسم في نجاح أي مؤسسة.",
    ),
  ],
  storyHighlight: b(
    "Founded with a vision to bridge the gap between media and economics, A2Z has built a strong reputation for innovation, quality, and client success.",
    "تأسست A2Z برؤية سدّ الفجوة بين الإعلام والاقتصاد، وبنت سمعة قوية في الابتكار والجودة ونجاح العملاء.",
  ),
  storyEnd: b(
    "Our team of experts brings together diverse skills, experiences, and perspectives to create outstanding work. We collaborate with leading brands, startups, and organizations across various industries, helping them build a strong presence, engage their audiences, and achieve their objectives through integrated media and communication solutions.",
    "يجمع فريق خبرائنا مهارات وخبرات ووجهات نظر متنوعة لصناعة أعمال متميزة. نتعاون مع علامات رائدة وشركات ناشئة ومؤسسات في قطاعات مختلفة، لنساعدها على بناء حضور قوي والتفاعل مع جمهورها وتحقيق أهدافها عبر حلول إعلامية واتصالية متكاملة.",
  ),
  beliefsTitle: b("What we believe", "ما نؤمن به"),
  beliefsText: b(
    "Five ideas we come back to whenever a decision gets hard.",
    "خمس أفكار نعود إليها كلما صعب القرار.",
  ),
  impactTitle: b("Our impact so far", "أثرنا حتى الآن"),
  impactText: b(
    "Numbers we can show the evidence for.",
    "أرقام يمكننا إثبات أدلتها.",
  ),
  ctaTitle: b(
    "Working on something that matters? Let's talk.",
    "تعمل على شيء مهم؟ لنتحدث.",
  ),
  ctaText: b(
    "Bring us the problem. We'll bring the team that knows how to solve it.",
    "أحضر لنا المشكلة، ونحضر لك الفريق الذي يعرف كيف يحلها.",
  ),
};

export const BELIEFS = [
  {
    title: b(
      "People are the experts on their own lives.",
      "الناس هم الخبراء في حياتهم.",
    ),
    text: b(
      "So we ask before we plan, and we keep asking while we deliver.",
      "لذلك نسأل قبل أن نخطط، ونواصل السؤال أثناء التنفيذ.",
    ),
  },
  {
    title: b(
      "Impact you can't measure is a hope.",
      "الأثر الذي لا تستطيع قياسه مجرد أمل.",
    ),
    text: b(
      "Every project starts with a baseline and ends with evidence, good or bad.",
      "يبدأ كل مشروع بخط أساس وينتهي بدليل، جيدًا كان أم سيئًا.",
    ),
  },
  {
    title: b("Local first.", "المحلي أولًا."),
    text: b(
      "Context decides what works. We hire, partner and design close to the people we serve.",
      "السياق يحدد ما ينجح. نوظّف ونشارك ونصمم قريبًا ممن نخدمهم.",
    ),
  },
  {
    title: b("Together beats alone.", "معًا أقوى من منفردين."),
    text: b(
      "Lasting change needs government, business and civil society at the same table.",
      "التغيير الدائم يحتاج الحكومة والأعمال والمجتمع المدني على الطاولة نفسها.",
    ),
  },
  {
    title: b("We stay until it works.", "نبقى حتى ينجح."),
    text: b(
      "Success is a program that keeps running after the launch photos are forgotten.",
      "النجاح هو برنامج يستمر بعد أن تُنسى صور الإطلاق.",
    ),
  },
];

export const CONTACT = {
  heroLine1: b("Have an idea?", "لديك فكرة؟"),
  heroLine2: b("Let's create an impact together.", "لنصنع أثرًا معًا."),
  heroText: b(
    "Tell us what you are trying to change and who it is for. We reply with first thoughts, not a sales pitch.",
    "أخبرنا بما تريد تغييره ولمن. نرد عليك بأفكار أولية لا بعرض مبيعات.",
  ),
  replyWithin: b("We reply within", "نرد خلال"),
  email: b("Email", "البريد الإلكتروني"),
  phone: b("Phone", "الهاتف"),
  whatsapp: b("WhatsApp", "واتساب"),
  office: b("Office", "المكتب"),
  hours: b("Hours", "ساعات العمل"),
  officeLabel: b("Office location", "موقع المكتب"),
  nextTitle: b("What happens after you write", "ماذا يحدث بعد أن تكتب لنا"),
  next: [
    {
      title: b("We read and reply", "نقرأ ونرد"),
      text: b(
        "A real person on our team answers within two working days.",
        "يرد عليك شخص حقيقي من فريقنا خلال يومي عمل.",
      ),
    },
    {
      title: b("A first conversation", "حوار أول"),
      text: b(
        "A short call to understand the problem, the people and what you hope will change.",
        "مكالمة قصيرة لفهم المشكلة والناس وما تأمل أن يتغير.",
      ),
    },
    {
      title: b("A clear proposal", "عرض واضح"),
      text: b(
        "Our suggested approach, team, timeline and budget, so you can decide with confidence.",
        "منهجنا المقترح وفريقنا وجدولنا وميزانيتنا، لتقرر بثقة.",
      ),
    },
  ],
};

export const FORM = {
  label: b("Contact form", "نموذج التواصل"),
  name: b("Your name", "اسمك"),
  org: b("Organization", "المؤسسة"),
  email: b("Email", "البريد الإلكتروني"),
  phone: b("Phone (optional)", "الهاتف (اختياري)"),
  help: b("What would you like help with?", "بماذا تريد أن نساعدك؟"),
  place: b(
    "Where will the project take place?",
    "أين سيُنفَّذ المشروع؟",
  ),
  placeHint: b("Country or city", "الدولة أو المدينة"),
  when: b("When do you hope to start?", "متى تأمل أن تبدأ؟"),
  idea: b("Tell us about your idea", "حدّثنا عن فكرتك"),
  ideaHint: b(
    "The problem, the people affected, and what success would look like to you.",
    "المشكلة، والمتأثرون بها، وما يبدو عليه النجاح بالنسبة لك.",
  ),
  send: b("Send message", "إرسال الرسالة"),
  sent: b("Message sent. We'll reply within", "تم إرسال الرسالة. سنرد خلال"),
  timelines: [
    b("Not sure yet", "لست متأكدًا بعد"),
    b("Within a month", "خلال شهر"),
    b("In 1–3 months", "خلال 1–3 أشهر"),
    b("In 3–6 months", "خلال 3–6 أشهر"),
    b("Later this year", "في وقت لاحق من هذا العام"),
  ],
};

export const CONTACT_TOPICS = [
  b("A new program", "برنامج جديد"),
  b("Research", "بحث"),
  b("A campaign", "حملة"),
  b("Partnerships", "شراكات"),
  b("Impact measurement", "قياس الأثر"),
  b("Something else", "شيء آخر"),
];
