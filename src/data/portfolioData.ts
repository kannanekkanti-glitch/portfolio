export interface Project {
  id: string;
  name: string;
  category: "Web Development" | "Artificial Intelligence" | "Automation" | "UI/UX Design" | "Creative Projects";
  categories?: string[];
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    challenges: string;
    impact: string[];
  };
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend & APIs" | "AI & Automation";
  level: number; // 0 - 100
  experience: string;
  description: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  deliverables: string[];
  ctaText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}


export const personalInfo = {
  name: "Tanush Nekkanti",
  title: "Full-Stack Developer, UI/UX Designer & AI Specialist",
  tagline: "Building intelligent web platforms, autonomous workflows, and refined digital experiences.",
  availability: "Available for new projects & opportunities",
  location: "Available Worldwide / Remote",
  email: "tanushnekkanti24@gmail.com",
  phone: "+91 96065 19997",
  whatsapp: "https://wa.me/919606519997?text=Hi%20Tanush,%20I'd%20like%20to%20discuss%20a%20project",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
  },
};

export const featuredProjects: Project[] = [
  {
    id: "senro-ai",
    name: "Senro.AI",
    category: "Artificial Intelligence",
    categories: ["Artificial Intelligence", "Automation", "Web Development"],
    tagline: "Competitive Intelligence & Market Signal Tracking Engine",
    description: "An autonomous competitive intelligence platform that monitors competitor website footprints, detects pricing adjustments and feature shifts in real time, and turns market signals into strategic execution.",
    image: "/projects/senro.jpg",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "OpenAI API", "Tailwind CSS", "Resend"],
    keyFeatures: [
      "Automated public footprint scraping and continuous competitor baseline tracking",
      "Real-time detection of pricing changes ($49/mo → $79/mo) and enterprise feature pivots",
      "Automated Hindsight intelligence reports and executive email digests via Resend",
      "Interactive benchmark radar charts and market sentiment comparison analytics",
    ],
    liveUrl: "https://senroai.vercel.app/login",
    githubUrl: "https://github.com/example/senro-ai",
    caseStudy: {
      overview: "Senro.AI was built to give growth teams, product strategists, and founders an autonomous advantage by tracking every move competitors make without tedious manual auditing.",
      problem: "Companies frequently lose prospective enterprise deals when competitors stealthily adjust pricing, restructure tiers, or launch new capabilities. Manual weekly audits consume hours and miss critical subtle shifts.",
      solution: "Engineered an autonomous scraping and AI synthesis pipeline that establishes a company baseline, detects diffs across competitor public footprints, and produces structured strategic reports.",
      architecture: [
        "Vite + React single-page application with responsive glassmorphic Tailwind UI",
        "Supabase backend with PostgreSQL for competitor historical snapshot storage",
        "OpenAI LLM reasoning engine for diff classification and strategic implications analysis",
        "Resend API integration for automated intelligence summaries delivered to inboxes",
      ],
      challenges: "Differentiating minor stylistic/DOM adjustments from true strategic pricing and feature pivots required custom prompt heuristics and HTML normalization.",
      impact: [
        "Enabled teams to detect competitor price shifts within minutes instead of weeks",
        "Saved over 20+ hours of manual competitive research weekly per team",
        "Processed thousands of market signals with zero false positive alert fatigue",
      ],
    },
  },
  {
    id: "vyuha-ai",
    name: "Vyuha",
    category: "Artificial Intelligence",
    categories: ["Artificial Intelligence", "Web Development", "Automation"],
    tagline: "The AI That Grows With You — Multi-Agent & Chatbot Platform",
    description: "An end-to-end autonomous agent and conversational chatbot orchestration platform enabling teams to architect custom agent networks, ingest knowledge bases, and deploy embeddable AI widgets in one click.",
    image: "/projects/vyuha.jpg",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Edge Functions", "WebAuthn", "Tailwind CSS"],
    keyFeatures: [
      "Visual multi-agent network canvas connecting Support, Code Review, and Lead Gen bots",
      "1-line embeddable widget snippet (<script data-agent-id='...' src='...' />)",
      "Dynamic knowledge base ingestion with RAG vector search and custom prompt strategies",
      "Enterprise authentication powered by Supabase, Edge Functions, and WebAuthn",
    ],
    liveUrl: "https://vyuha-delta.vercel.app/#/home",
    githubUrl: "https://github.com/example/vyuha-ai",
    caseStudy: {
      overview: "Vyuha was engineered to democratize multi-agent orchestration, empowering businesses to create, customize, and embed specialized AI agents in minutes.",
      problem: "Deploying conversational AI bots across websites typically requires disjointed platforms, slow widget load times, complex vector infrastructure, and high engineering friction.",
      solution: "Engineered a unified visual dashboard for agent creation, knowledge base indexing, and instant 1-script widget embedding with sub-second streaming answers.",
      architecture: [
        "Vite + React application with responsive routing and interactive agent canvas",
        "Supabase Auth with WebAuthn biometrics and Edge Function serverless execution",
        "Dynamic RAG retrieval engine indexing documentation and product FAQs",
        "Lightweight standalone CDN widget script (cdn.vyuha.ai/widget.v1.js)",
      ],
      challenges: "Keeping the embeddable script under 15KB while supporting markdown streaming, citations, and custom themes across third-party websites.",
      impact: [
        "Empowered client teams to launch customized AI support agents in under 5 minutes",
        "Achieved 98.6% answer satisfaction across customer query benchmarks",
        "Zero-friction integration into any HTML website or web app",
      ],
    },
  },
];

export const skillsData: Skill[] = [
  // Required skills explicitly listed in prompt:
  {
    name: "HTML",
    category: "Frontend",
    level: 98,
    experience: "4+ years",
    description: "Semantic HTML5, microdata, accessibility ARIA landmarks, SEO structure.",
    iconName: "Code2",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: 96,
    experience: "4+ years",
    description: "Modern CSS, Flexbox, Grid, custom properties, responsive layouts, animations.",
    iconName: "Layers",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 95,
    experience: "4+ years",
    description: "ES6+, asynchronous programming, event loop, closures, TypeScript types.",
    iconName: "FileCode2",
  },
  {
    name: "React",
    category: "Frontend",
    level: 94,
    experience: "3+ years",
    description: "Functional components, custom hooks, context, Concurrent React, Suspense.",
    iconName: "Atom",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 92,
    experience: "3+ years",
    description: "App Router, Server Components, SSR/SSG/ISR, Turbopack, route handlers.",
    iconName: "Sparkles",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 96,
    experience: "3+ years",
    description: "Utility-first design, dark mode, responsive variants, Tailwind v4 configuration.",
    iconName: "Palette",
  },
  {
    name: "Python",
    category: "Backend & APIs",
    level: 90,
    experience: "3+ years",
    description: "FastAPI, script automation, data pipelines, PyTorch, NumPy, web scraping.",
    iconName: "Terminal",
  },
  {
    name: "Node.js",
    category: "Backend & APIs",
    level: 91,
    experience: "3+ years",
    description: "Express, RESTful APIs, WebSockets, streaming architectures, middleware.",
    iconName: "Server",
  },
  {
    name: "API Integration",
    category: "Backend & APIs",
    level: 94,
    experience: "4+ years",
    description: "REST, GraphQL, WebSockets, rate limiting, authentication, error resilience.",
    iconName: "Network",
  },
  {
    name: "Git & GitHub",
    category: "Backend & APIs",
    level: 93,
    experience: "4+ years",
    description: "Version control, feature branching, CI/CD GitHub Actions, PR code reviews.",
    iconName: "GitBranch",
  },
  {
    name: "AI Tools",
    category: "AI & Automation",
    level: 93,
    experience: "2+ years",
    description: "OpenAI API, Claude API, LangChain, RAG architecture, vector databases, prompt engineering.",
    iconName: "Cpu",
  },
  {
    name: "Automation Tools",
    category: "AI & Automation",
    level: 92,
    experience: "3+ years",
    description: "Custom Python/Node bots, Webhook triggers, Zapier, Make, n8n, automated testing.",
    iconName: "Zap",
  },
];

export const servicesData: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    category: "Full-Stack Development",
    description: "End-to-end modern website development engineered for blazingly fast load times, rock-solid security, and scalable infrastructure.",
    iconName: "Globe",
    deliverables: [
      "Custom full-stack architecture tailored to business goals",
      "Optimized Core Web Vitals with 95+ PageSpeed scores",
      "Dynamic CMS & scalable database integration",
      "Zero-downtime deployment on modern edge cloud platforms",
    ],
    ctaText: "Build Your Website",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    category: "Interactive Engineering",
    description: "Pixel-perfect, interactive, and responsive web user interfaces crafted with modern React, Next.js, and TypeScript.",
    iconName: "Layout",
    deliverables: [
      "Component-driven modular architecture",
      "Fluid micro-interactions and Framer Motion transitions",
      "Strict WCAG 2.1 AAA accessibility compliance",
      "Robust state management and real-time UI synchronization",
    ],
    ctaText: "Start Frontend Project",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Creative Direction",
    description: "Human-centered digital design combining aesthetic elegance, user research, wireframing, and interactive prototypes in Figma.",
    iconName: "Palette",
    deliverables: [
      "Comprehensive design systems and scalable token libraries",
      "High-fidelity clickable Figma prototypes",
      "User journey mapping & information architecture",
      "Seamless design-to-code component handoff",
    ],
    ctaText: "Design Your Product",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    category: "Intelligent Systems",
    description: "Empower your web applications with state-of-the-art Large Language Models, custom AI agents, and intelligent automated workflows.",
    iconName: "Cpu",
    deliverables: [
      "Custom LLM integration (OpenAI, Anthropic Claude)",
      "Retrieval-Augmented Generation (RAG) with vector search",
      "Autonomous agent workflows and dynamic tool calling",
      "Production prompt optimization, safety guardrails & monitoring",
    ],
    ctaText: "Discuss AI Integration",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    category: "Efficiency & Ops",
    description: "Eliminate repetitive manual tasks through customized bots, API pipelines, data syncs, and intelligent automated integrations.",
    iconName: "Zap",
    deliverables: [
      "Custom Python & Node.js automation scripts",
      "Multi-application webhook integrations (Slack, CRM, Sheets)",
      "Automated web scraping and ETL data pipelines",
      "Proactive error logging and automatic failover alerts",
    ],
    ctaText: "Automate Your Workflows",
  },
  {
    id: "responsive-website-design",
    title: "Responsive Website Design",
    category: "Adaptive Systems",
    description: "Flawless cross-device experiences designed to look and perform exceptionally on smartphones, tablets, laptops, and ultra-wide screens.",
    iconName: "Smartphone",
    deliverables: [
      "Mobile-first responsive layout architecture",
      "Smooth touch gesture interactions and fluid viewports",
      "High-DPI Retina image and media optimization",
      "Cross-browser compatibility testing across Chrome, Safari, Firefox",
    ],
    ctaText: "Make It Responsive",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand requirements & objectives",
    description: "We begin with a deep exploration of your product vision, target audience, technical constraints, and strategic business goals to establish a bulletproof roadmap.",
    deliverables: [
      "Technical requirements specification",
      "Audience persona & user journey outline",
      "Competitive analysis & benchmark audit",
      "Project milestone schedule",
    ],
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Plan structure, interface & UX",
    description: "Translating strategic objectives into intuitive user flows, elegant wireframes, design token systems, and high-fidelity interactive prototypes.",
    deliverables: [
      "Information architecture & sitemap",
      "Interactive Figma prototype",
      "Design token library (typography, colors, components)",
      "User feedback iterations",
    ],
    duration: "Week 2 - 3",
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Build using modern technologies",
    description: "Writing clean, type-safe, and modular code utilizing Next.js, React, Tailwind CSS, and Python to create scalable, performant web applications.",
    deliverables: [
      "Type-safe component frontend",
      "Scalable backend APIs & database schemas",
      "Integrated AI & third-party services",
      "Continuous CI/CD pipeline integration",
    ],
    duration: "Week 4 - 6",
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Test, optimize & deploy final product",
    description: "Rigorous QA testing across all screen sizes and browsers, Core Web Vitals optimization, automated monitoring setup, and seamless public release.",
    deliverables: [
      "Cross-browser QA & accessibility check",
      "Core Web Vitals & SEO optimization",
      "Production deployment with zero downtime",
      "Post-launch documentation & support",
    ],
    duration: "Week 7",
  },
];


export const aboutContent = {
  headline: "Turning visionary concepts into scalable, elegant software.",
  introduction: "I'm Tanush, a full-stack developer, UI/UX designer, and AI enthusiast passionate about the art of digital craftsmanship. I bridge the gap between aesthetic design and robust systems engineering.",
  background: "My fascination with technology began with tweaking open-source web scripts and building creative digital tools. Over the years, that curiosity has evolved into architecting production web platforms, integrating generative AI workflows, and crafting silky-smooth user interfaces that feel alive.",
  journey: "From mastering fundamental web protocols and building interactive frontends to designing distributed backend systems and orchestrating autonomous AI agent graphs, I have consistently pursued the frontier where technology creates tangible human impact.",
  problemSolving: "I approach engineering through first-principles reasoning: dissecting the core problem before writing a line of code, prioritizing user empathy, and iterating rapidly with robust architectural standards. I believe software should be as delightful to use as it is reliable to run.",
  careerGoals: "My mission is to lead technical innovation at the crossroads of artificial intelligence and web software, shipping products that empower people and push the boundaries of creative technology.",
  technicalInterests: [
    "Agentic AI Workflows & Multi-Model Systems",
    "High-Performance React 19 & Next.js Architectures",
    "Design Systems, Typography & Micro-Interactions",
    "Event-Driven Microservices & Distributed Queues",
    "Edge Computing & Real-Time WebSockets",
  ],
};
