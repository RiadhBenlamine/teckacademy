export interface NavItem {
  id: string;
  href: string;
  label: {
    ar: string;
    en: string;
  };
}

export interface StatItem {
  id: string;
  value: {
    ar: string;
    en: string;
  };
  label: {
    ar: string;
    en: string;
  };
  iconName: string;
}

export interface AchievementCard {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  technologies: string[];
  icon: string;
  accent: string;
}

export interface LearningPath {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  technologies: string[];
  ageGroup: {
    ar: string;
    en: string;
  };
  badge: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface JourneyStep {
  step: number;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface ProjectItem {
  id: string;
  category: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  technologies: string[];
  imageType: string;
}

export interface WhyUsCard {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface AgeGroupItem {
  id: string;
  age: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  technologies: string[];
  indicatorColor: string;
}

export const navigationLinks: NavItem[] = [
  { id: "home", href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { id: "about", href: "/about", label: { ar: "عن الأكاديمية", en: "About" } },
  { id: "programs", href: "/programs", label: { ar: "المسارات", en: "Programs" } },
  { id: "journey", href: "/#journey", label: { ar: "كيف نعمل", en: "How It Works" } },
  { id: "projects", href: "/projects", label: { ar: "المشاريع", en: "Projects" } },
  { id: "contact", href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export const statisticsData: StatItem[] = [
  {
    id: "ages",
    value: { ar: "3–17 سنة", en: "Ages 3–17" },
    label: { ar: "الفئات العمرية المشمولة", en: "Target Age Range" },
    iconName: "users",
  },
  {
    id: "paths",
    value: { ar: "6 مسارات تعليمية", en: "6 Learning Paths" },
    label: { ar: "مسارات تخصصية متكاملة", en: "Specialized Programs" },
    iconName: "compass",
  },
  {
    id: "practical",
    value: { ar: "100% تطبيق عملي", en: "100% Practical Learning" },
    label: { ar: "تعلّم قائم على التجربة والتطبيق", en: "Hands-on Methodology" },
    iconName: "code",
  },
  {
    id: "projects",
    value: { ar: "مشاريع حقيقية", en: "Real Projects" },
    label: { ar: "يبني كل طالب مشروعه الخاص", en: "Tangible Student Outputs" },
    iconName: "trophy",
  },
];

export const achievementCards: AchievementCard[] = [
  {
    id: "programming",
    title: { ar: "البرمجة", en: "Programming" },
    description: {
      ar: "بناء التفكير المنطقي وحل المشكلات من خلال كتابة أوامر برمجية وإنشاء حلول رقمية مبتكرة.",
      en: "Developing logical thinking and problem-solving skills through algorithmic code and interactive solutions.",
    },
    technologies: ["Python", "Scratch", "Logic"],
    icon: "code",
    accent: "blue",
  },
  {
    id: "web-dev",
    title: { ar: "تصميم المواقع", en: "Web Development" },
    description: {
      ar: "تصميم وبناء مواقع تفاعلية حقيقية ونشرها على الويب ليتعلم الطفل هندسة صفحات الإنترنت.",
      en: "Designing and building interactive, responsive websites deployed on the web.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Next.js"],
    icon: "globe",
    accent: "cyan",
  },
  {
    id: "game-dev",
    title: { ar: "تطوير الألعاب", en: "Game Development" },
    description: {
      ar: "تحويل حب الألعاب إلى شغف بصناعتها من خلال تصميم العوالم والشخصيات وقواعد اللعب.",
      en: "Transforming enthusiasm for gaming into creation through 2D/3D physics, storylines, and game mechanics.",
    },
    technologies: ["Scratch", "Game Design", "Unity"],
    icon: "gamepad",
    accent: "purple",
  },
  {
    id: "ai",
    title: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
    description: {
      ar: "فهم أسس الذكاء الاصطناعي وتدريب النماذج الذكية والتعرف على الصور والأصوات.",
      en: "Exploring core AI principles, training machine learning models, and computer vision recognition.",
    },
    technologies: ["AI", "Machine Learning", "Computer Vision"],
    icon: "bot",
    accent: "indigo",
  },
  {
    id: "robotics",
    title: { ar: "الروبوتات", en: "Robotics" },
    description: {
      ar: "دمج البرمجة مع الدوائر الإلكترونية والحساسات لبناء روبوتات حقيقية تتفاعل مع العالم الخارجي.",
      en: "Integrating code with sensors, motors, and microcontrollers to build responsive autonomous robots.",
    },
    technologies: ["Arduino", "Sensors", "Robotics"],
    icon: "cpu",
    accent: "teal",
  },
  {
    id: "digital-design",
    title: { ar: "التصميم الرقمي", en: "Digital Design" },
    description: {
      ar: "ابتكار واجهات مستخدم جذابة وتصاميم إبداعية تجمع بين الفن وسهولة الاستخدام.",
      en: "Creating clean user interfaces, creative graphic assets, and digital prototypes combining aesthetics with usability.",
    },
    technologies: ["UI/UX", "Graphic Design", "Creative Tools"],
    icon: "palette",
    accent: "amber",
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "programming",
    title: { ar: "البرمجة", en: "Programming" },
    description: {
      ar: "تعلم أساسيات البرمجة وبناء التفكير المنطقي من خلال مشاريع ممتعة.",
      en: "Learn programming fundamentals and logical thinking through engaging projects.",
    },
    technologies: ["Python", "Scratch", "JavaScript"],
    ageGroup: { ar: "7–14 سنة", en: "Ages 7–14" },
    badge: { ar: "مسار أساسي", en: "Core Track" },
    icon: "code",
  },
  {
    id: "web-dev",
    title: { ar: "تصميم المواقع", en: "Web Development" },
    description: {
      ar: "بناء صفحات وتطبيقات ويب عصرية وتفاعلية باستخدام أحدث أدوات الويب والتقنيات.",
      en: "Build modern, responsive, and interactive websites using up-to-date web technologies.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Next.js"],
    ageGroup: { ar: "10–17 سنة", en: "Ages 10–17" },
    badge: { ar: "مسار متقدم", en: "Advanced Track" },
    icon: "globe",
  },
  {
    id: "game-dev",
    title: { ar: "تطوير الألعاب", en: "Game Development" },
    description: {
      ar: "تصميم ألعاب تفاعلية ثنائية وثلاثية الأبعاد وتطبيق مفاهيم الحركة والفيزياء الرقمية.",
      en: "Design interactive 2D and 3D games while applying motion mechanics and digital game physics.",
    },
    technologies: ["Scratch", "Game Design", "Unity"],
    ageGroup: { ar: "8–16 سنة", en: "Ages 8–16" },
    badge: { ar: "مسار إبداعي", en: "Creative Track" },
    icon: "gamepad",
  },
  {
    id: "ai",
    title: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
    description: {
      ar: "استكشاف تقنيات الذكاء الاصطناعي وبناء نماذج ذكية تعالج البيانات وتتفاعل مع المستخدم.",
      en: "Explore AI technologies and train intelligent models that process visual data and interact smartly.",
    },
    technologies: ["AI", "Machine Learning", "Computer Vision"],
    ageGroup: { ar: "11–17 سنة", en: "Ages 11–17" },
    badge: { ar: "مسار مستقبلي", en: "Future Tech" },
    icon: "bot",
  },
  {
    id: "robotics",
    title: { ar: "الروبوتات", en: "Robotics" },
    description: {
      ar: "بناء روبوتات ذكية وربط الحساسات والمحركات بالأنظمة البرمجية لحل تحديات واقعية.",
      en: "Build smart robots, connecting sensors and motors with software to solve real-world challenges.",
    },
    technologies: ["Arduino", "Sensors", "Robotics"],
    ageGroup: { ar: "8–16 سنة", en: "Ages 8–16" },
    badge: { ar: "مسار هندسي", en: "Engineering Track" },
    icon: "cpu",
  },
  {
    id: "digital-design",
    title: { ar: "التصميم الرقمي", en: "Digital Design" },
    description: {
      ar: "تعلم مبادئ التصميم وتجربة المستخدم وصناعة هويات بصرية وواجهات تطبيقات حديثة.",
      en: "Master UI/UX visual design principles and prototype interactive application interfaces.",
    },
    technologies: ["UI/UX", "Graphic Design", "Creative Tools"],
    ageGroup: { ar: "9–17 سنة", en: "Ages 9–17" },
    badge: { ar: "مسار الفنون الرقمية", en: "Digital Arts" },
    icon: "palette",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: { ar: "التقييم", en: "Assessment" },
    description: {
      ar: "جلسة تفاعلية للتعرف على الطفل واستكشاف شغفه واهتماماته في التكنولوجيا.",
      en: "An interactive exploratory session to understand the child's tech curiosity and interests.",
    },
    icon: "clipboard-check",
  },
  {
    step: 2,
    title: { ar: "تحديد المستوى والميول", en: "Identify Level & Interests" },
    description: {
      ar: "تحليل مهارات التفكير المنطقي والقدرات الرقمية لتحديد نقطة الانطلاق الملائمة.",
      en: "Analyzing logical aptitude and digital comfort to pinpoint the ideal starting point.",
    },
    icon: "target",
  },
  {
    step: 3,
    title: { ar: "اختيار المسار المناسب", en: "Choose the Right Path" },
    description: {
      ar: "توجيه الطفل نحو المسار التعليمي الأنسب لعمره وأهدافه التعليمية.",
      en: "Guiding the student to the learning path tailored for their age and developmental stage.",
    },
    icon: "compass",
  },
  {
    step: 4,
    title: { ar: "التعلم والتطبيق", en: "Learn & Practice" },
    description: {
      ar: "ورش عملية تفاعلية تجمع بين شرح المفاهيم والتطبيق البرمجي المباشر.",
      en: "Interactive hands-on workshops that combine core concepts with direct coding practice.",
    },
    icon: "laptop",
  },
  {
    step: 5,
    title: { ar: "بناء المشاريع", en: "Build Projects" },
    description: {
      ar: "توظيف كل ما تعلمه الطفل في تصميم وبرمجة مشروع حقيقي وملموس من صنعه.",
      en: "Applying acquired knowledge to design and code a tangible, fully functioning personal project.",
    },
    icon: "layers",
  },
  {
    step: 6,
    title: { ar: "المتابعة وإعادة التقييم", en: "Progress Tracking & Reassessment" },
    description: {
      ar: "قياس التقدم المستمر وتقديم تقارير للأهل وتحديد المرحلة المتقدمة التالية.",
      en: "Measuring ongoing growth, sharing reports with parents, and planning the next advanced milestone.",
    },
    icon: "trending-up",
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "project-app",
    category: { ar: "البرمجة", en: "Programming" },
    title: { ar: "تطبيق بسيط", en: "Simple Application" },
    description: {
      ar: "تطبيق تفاعلي للمهام اليومية وبرمجة المنطق الحسابي مع واجهة مستخدم واضحة.",
      en: "An interactive daily task application with computational logic and a clear interface.",
    },
    technologies: ["Python", "Tkinter", "Logic"],
    imageType: "app",
  },
  {
    id: "project-web",
    category: { ar: "تصميم المواقع", en: "Web Development" },
    title: { ar: "موقع إلكتروني", en: "Website" },
    description: {
      ar: "موقع تعليمي تفاعلي يستعرض عجائب الفضاء والكواكب بتنسيقات عصرية واستجابة كاملة للشاشات.",
      en: "An interactive educational website showcasing space exploration with modern responsive layouts.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    imageType: "web",
  },
  {
    id: "project-game",
    category: { ar: "تطوير الألعاب", en: "Game Development" },
    title: { ar: "لعبة تعليمية", en: "Educational Game" },
    description: {
      ar: "لعبة منصات ثنائية الأبعاد تتحدى اللاعب في حل ألغاز بيئية وجمع النقاط وتجاوز العقبات.",
      en: "A 2D platformer challenging players to solve environmental puzzles and overcome obstacles.",
    },
    technologies: ["Scratch", "Game Physics"],
    imageType: "game",
  },
  {
    id: "project-ai",
    category: { ar: "الذكاء الاصطناعي", en: "AI Project" },
    title: { ar: "مشروع ذكاء اصطناعي", en: "AI Project" },
    description: {
      ar: "نموذج رؤية حاسوبية يتعرف على إيماءات اليد ويتحكم في الرسوم المتحركة على الشاشة.",
      en: "A computer vision model recognizing hand gestures to control screen animations.",
    },
    technologies: ["AI", "Machine Learning", "Vision"],
    imageType: "ai",
  },
  {
    id: "project-robot",
    category: { ar: "الروبوتات", en: "Smart Robot" },
    title: { ar: "روبوت ذكي", en: "Smart Robot" },
    description: {
      ar: "روبوت أرضي ذاتي الحركة يتفادى الحواجز ويتتبع المسارات باستخدام حساسات المسافة الرقمية.",
      en: "An autonomous wheeled robot that dodges obstacles and tracks lines using ultrasonic sensors.",
    },
    technologies: ["Arduino", "Sensors", "Robotics"],
    imageType: "robot",
  },
  {
    id: "project-design",
    category: { ar: "التصميم الرقمي", en: "Digital Design" },
    title: { ar: "تصميم رقمي", en: "Digital Design" },
    description: {
      ar: "نموذج واجهة تفاعلية لتطبيق تعليمي مخصص للأطفال بتدرجات لونية وشخصيات رقمية محبوبة.",
      en: "An interactive prototype for a children's learning application featuring child-friendly UI/UX.",
    },
    technologies: ["UI/UX", "Graphic Design", "Creative Tools"],
    imageType: "design",
  },
];

export const whyUsCards: WhyUsCard[] = [
  {
    id: "practical",
    title: { ar: "تعلم عملي", en: "Practical Learning" },
    description: {
      ar: "لا نكتفي بالشرح، بل نحول المعرفة إلى تطبيق.",
      en: "We don't just explain; we turn knowledge into practice.",
    },
    icon: "hammer",
  },
  {
    id: "real-projects",
    title: { ar: "مشاريع حقيقية", en: "Real Projects" },
    description: {
      ar: "كل مرحلة تعليمية تنتهي بإنجاز ملموس.",
      en: "Every learning stage concludes with a tangible achievement.",
    },
    icon: "award",
  },
  {
    id: "personalized",
    title: { ar: "مسار شخصي", en: "Personalized Path" },
    description: {
      ar: "نراعي عمر الطفل ومستواه واهتماماته.",
      en: "We consider the child's age, level, and interests.",
    },
    icon: "user-check",
  },
  {
    id: "continuous",
    title: { ar: "متابعة مستمرة", en: "Continuous Follow-up" },
    description: {
      ar: "نقيس التطور ونساعد الطفل على التقدم.",
      en: "We track development and help the child progress.",
    },
    icon: "activity",
  },
];

export const ageGroupsData: AgeGroupItem[] = [
  {
    id: "group-3-6",
    age: "3–6",
    title: { ar: "التكنولوجيا المبكرة", en: "Early Technology" },
    description: {
      ar: "مقدمة ممتعة لمفاهيم المنطق والتسلسل والأشكال الرقمية عبر ألعاب تفاعلية موجهة ومناسبة للطفولة المبكرة.",
      en: "A playful introduction to sequencing, logic, and digital patterns through guided interactive activities.",
    },
    technologies: ["Block Puzzles", "Visual Logic", "Playful Coding"],
    indicatorColor: "bg-amber-400",
  },
  {
    id: "group-7-10",
    age: "7–10",
    title: { ar: "البرمجة الإبداعية", en: "Creative Coding" },
    description: {
      ar: "بناء قصص تفاعلية، برمجة ألعاب كتلية، وتطوير التفكير الإجرائي مع بناء حلول ممتعة ومحفزة للخيال.",
      en: "Creating interactive stories, block-based game logic, and algorithmic thinking that sparks imagination.",
    },
    technologies: ["Scratch", "Game Mechanics", "Robotics Basics"],
    indicatorColor: "bg-blue-500",
  },
  {
    id: "group-11-14",
    age: "11–14",
    title: { ar: "البرمجة والمشاريع", en: "Programming & Projects" },
    description: {
      ar: "الانتقال إلى لغات البرمجة النصية، تصميم صفحات الويب، والتعامل مع الدوائر الإلكترونية والحساسات الذكية.",
      en: "Transitioning to text coding, building responsive web pages, and programming electronic sensor circuits.",
    },
    technologies: ["Python", "HTML/CSS", "Arduino Sensors"],
    indicatorColor: "bg-cyan-500",
  },
  {
    id: "group-15-17",
    age: "15–17",
    title: { ar: "التكنولوجيا المتقدمة", en: "Advanced Technology" },
    description: {
      ar: "هندسة البرمجيات المتكاملة، استكشاف أسس الذكاء الاصطناعي وتعلم الآلة، وبناء مشاريع تقنية احترافية.",
      en: "Full software engineering, foundational AI/Machine Learning, and building advanced technology portfolios.",
    },
    technologies: ["Python & AI", "Full-Stack Web", "Advanced Robotics"],
    indicatorColor: "bg-purple-600",
  },
];

export const siteMeta = {
  ar: {
    title: "TechKids Academy | أكاديمية التكنولوجيا للأطفال",
    description: "أكاديمية متخصصة في تعليم الأطفال البرمجة والتكنولوجيا والذكاء الاصطناعي من خلال التعلم العملي والمشاريع.",
    heroEyebrow: "مستقبل طفلك يبدأ من هنا",
    heroHeadline: "نكتشف قدراتكم، نطور مهاراتكم، ونصنع مستقبلكم",
    heroParagraph: "أكاديمية تعليمية متخصصة تمكّن الجيل الصاعد من اكتساب مهارات البرمجة والذكاء الاصطناعي والتكنولوجيا عبر تجربة تعليمية ممتعة وقائمة على المشاريع الحقيقية.",
    heroPrimaryCTA: "اكتشف المسارات",
    heroSecondaryCTA: "كيف نعمل؟",
    achievementsTitle: "ماذا يمكن أن ينجز أطفالنا؟",
    achievementsSubtitle: "من أول فكرة إلى مشروع حقيقي، نساعد الأطفال على تحويل الفضول إلى مهارات ومهاراتهم إلى إنجازات.",
    pathsTitle: "مسارات تعليمية تصنع المستقبل",
    pathsSubtitle: "مسارات متدرجة ومدروسة تأخذ الطفل من الأساسيات وصولاً إلى الاحتراف.",
    journeyTitle: "المسار التكنولوجي الشخصي للطفل",
    journeySubtitle: "منهجية دقيقة ترافق طفلك خطوة بخطوة لبناء رحلة تعليمية فريدة ومخصصة.",
    projectsTitle: "من المعرفة إلى الإنجاز",
    projectsSubtitle: "نماذج من المشاريع العملية التي يصنعها أطفالنا أثناء رحلتهم التعليمية.",
    whyUsTitle: "لماذا أكاديمية تيك كيدز؟",
    whyUsSubtitle: "نهجنا التعليمي يركز على التطبيق العملي وتمكين الطفل ليصبح صانعاً للتكنولوجيا لا مجرد مستهلك لها.",
    ageGroupsTitle: "الفئات العمرية",
    ageGroupsSubtitle: "برامج مصممة بدقة لتناسب كل مرحلة عمرية وتواكب تطور تفكير الطفل.",
    ctaTitle: "جاهز لاكتشاف إمكانيات طفلك؟",
    ctaSubtitle: "ابدأ اليوم واكتشف المسار التكنولوجي المناسب لطفلك.",
    ctaButton: "ابدأ الآن",
    ctaSecondary: "تواصل معنا للاستشارة",
    primaryNavCTA: "ابدأ رحلة طفلك",
    footerDescription: "أكاديمية متخصصة في تعليم الأطفال البرمجة والتكنولوجيا والذكاء الاصطناعي من خلال التعلم العملي والمشاريع الحقيقية.",
    rights: "© 2026 TechKids Academy. جميع الحقوق محفوظة.",
  },
  en: {
    title: "TechKids Academy | Technology Education for Kids",
    description: "Learn programming, technology and artificial intelligence through practical, project-based learning.",
    heroEyebrow: "Your child's future starts here",
    heroHeadline: "We discover potential, develop skills, and build the future.",
    heroParagraph: "A specialized educational academy empowering the next generation to master coding, artificial intelligence, and technology through engaging, real project-based learning.",
    heroPrimaryCTA: "Explore Programs",
    heroSecondaryCTA: "How It Works",
    achievementsTitle: "What Can Our Children Achieve?",
    achievementsSubtitle: "From their first idea to a real project, we help children turn curiosity into skills and skills into achievements.",
    pathsTitle: "Learning Paths That Build the Future",
    pathsSubtitle: "Structured progressive pathways guiding children from fundamentals to mastery.",
    journeyTitle: "Your Child's Personalized Technology Journey",
    journeySubtitle: "A meticulous roadmap accompanying your child step-by-step to build a customized learning journey.",
    projectsTitle: "From Knowledge to Achievement",
    projectsSubtitle: "Hands-on projects created by children throughout their learning journey.",
    whyUsTitle: "Why TechKids Academy?",
    whyUsSubtitle: "Our educational approach focuses on practical application, empowering children to become technology creators.",
    ageGroupsTitle: "Age Groups",
    ageGroupsSubtitle: "Carefully tailored programs matching every developmental stage.",
    ctaTitle: "Ready to Discover Your Child's Potential?",
    ctaSubtitle: "Start today and discover the right technology path for your child.",
    ctaButton: "Get Started",
    ctaSecondary: "Book Free Consultation",
    primaryNavCTA: "Start Your Child's Journey",
    footerDescription: "A specialized academy teaching children coding, technology, and artificial intelligence through practical, real project-based learning.",
    rights: "© 2026 TechKids Academy. All rights reserved.",
  },
};
