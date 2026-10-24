export const siteConfig = {
  name: "Erick Brown",
  title: "AI Automation Expert | Software Engineer",
  tagline:
    "Senior Software Engineer with 8+ years supporting, debugging, and optimizing production SaaS and enterprise systems, including HRIS, payroll, and attendance integrations.",
  email: "erickib0211@gmail.com",
  phone: "+63 935 981 3980",
  location: "206 BRIARMEADOW LN VICTORIA, TX",
  availability: "I am Erick Brown",
  avatar: "/my/my_avatar.png",
  resume: "/doc/JUSTIN_PASION_Full_Stack_1_4.pdf",
  logo: "/logo/image.png",
  initials: "MV",
  heroStats: [
    { label: "Projects Done", value: 120, suffix: "+" },
    { label: "Years Exp.", value: 8, suffix: "+" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/erick-ivan-brown-2a72b33a5/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years engineering" },
  { value: 40, suffix: "+", label: "Enterprise clients" },
  { value: 2, prefix: "$", suffix: "B+", label: "Transaction volume" },
  { value: 99.9, suffix: "%", label: "Production uptime" },
];

export interface ProjectImage {
  src: string;
  caption?: string;
  description?: string;
}

export interface ProjectOverviewStat {
  value: string;
  label: string;
  icon: "zap" | "users" | "shield" | "trending";
  color: "purple" | "green" | "blue" | "orange";
}

export interface ProjectOverviewFeature {
  title: string;
  description: string;
  icon: "user" | "package" | "cart" | "payment" | "tracking" | "dashboard";
}

export interface ProjectOverview {
  summary: string;
  stats: ProjectOverviewStat[];
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    points: string[];
  };
  keyFeatures: ProjectOverviewFeature[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string[];
  year: string;
  featured: boolean;
  image: string;
  images?: ProjectImage[];
  url?: string;
  recentlyCompleted?: boolean;
  overview?: ProjectOverview;
}

export const projects: Project[] = [
  {
    id: "SpotterFitness-Platform",
    title: "CrewAI",
    subtitle: "Enterprise AI Agent Build & Runtime Platform",
    description:
      "An enterprise platform for building, governing, and optimizing multi-agent AI workflows. Features include AI-driven automation discovery, a no-code visual agent builder exportable to Python, a code-first API, real-time tracing of every LLM and tool call, RBAC and audit trails, human-in-the-loop approvals, and multi-LLM testing.",
    tags: ["Python", "React", "TypeScript", "LLM Orchestration", "Multi-Agent Systems", "AI Automation", "Observability"],
    metrics: [],
    year: "2026",
    featured: true,
    recentlyCompleted: true,
    url: "https://crewai.com",
    overview: {
      summary: "CrewAI is an enterprise agent build and runtime platform, used by 65% of the Fortune 500, that lets business and technical teams build AI agents while giving platform teams the control to govern them. CrewAI Discovery ranks automation opportunities by effort, value, and readiness using patterns from billions of agent runs. The builder supports both a no-code, canvas-style visual editor exportable to Python and a code-first API with role-based agents and deterministic workflows. The Control Plane provides real-time tracing of every LLM call, tool call, and memory read with full cost accounting, RBAC and immutable audit trails, human-in-the-loop approval gates, and runtime hooks for PII redaction and policy checks, while the optimization layer turns production runs into training data and supports multi-LLM testing and evaluation. I worked on multi-agent workflow orchestration, the visual builder and dashboards, tracing and observability views, governance and approval flows, and LLM integrations, focusing on reliable, scalable AI automation for enterprise teams.",
      stats: [
        {
          value: "25%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "60%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image:
      "/product4/main.png",
    images: [
      {
        src: "/product4/1.png",
        caption: "Discovery engine",
        description:
          "Customer logo strip and the Discover section, where teams pick their tools and get automation opportunities ranked by impact and readiness.",
      },
      {
        src: "/product4/2.png",
        caption: "Automated multi-agent builder",
        description:
          "Prompt- and canvas-style builder for long-horizon operational agents, guided by agent workflow patterns from production runs.",
      },
      {
        src: "/product4/3.png",
        caption: "Agent control plane",
        description:
          "Governance dashboard with automation health, executions, and consumption, plus tracing, RBAC, audit trails, and human-in-the-loop approvals.",
      },
      {
        src: "/product4/4.png",
        caption: "Continuous optimization loop",
        description:
          "Run, trace, evaluate, and train cycle that turns production runs into training data, with multi-LLM testing and evaluation integrations.",
      },
      {
        src: "/product4/5.png",
        caption: "Proven results",
        description:
          "Stats section highlighting 450M+ monthly agentic workflows, 4,000+ weekly sign-ups, and adoption by 65% of the Fortune 500.",
      },
      {
        src: "/product4/6.png",
        caption: "Agentic journey and footer",
        description:
          "Starting out, scaling up, and at-scale cards with calls to action, followed by the newsletter signup and resource links footer.",
      },
    ],
  },
  {
    id: "Lotz-Outdoors-eCommerce-Website",
    title: "WaterfortFronts",
    subtitle: "Short-Term Rental & Airbnb Investment Platform",
    description: "A short-term rental platform for an Airbnb arbitrage and multi-platform property management company. Built property showcase pages, an owner partnership section, an upcoming courses area for Airbnb education, and contact flows, with a clean, modern design optimized for desktop and mobile.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO"],
    metrics: [],
    year: "2025",
    featured: true,
    recentlyCompleted: true,
    url: "https://www.waterfortfront.com",
    overview: {
      summary:
        "WaterfortFronts transforms rental properties into high-performing short-term stays through Airbnb arbitrage and multi-platform management, focused on five-star guest experiences and strong returns for property partners. The website presents modern short-term rentals in prime locations, a property showcase, a dedicated section for property owners interested in hands-off management, an upcoming educational platform with courses on Airbnb arbitrage and short-term rental management, and an about and contact area. I worked on the responsive frontend, hero and property listing sections, owner and course pages, navigation, calls to action, and contact flows, focusing on an elegant, minimal design that builds trust with both guests and investors across desktop and mobile.",
      stats: [
        {
          value: "21%",
          label: "Faster Load Time",
          icon: "zap",
          color: "purple",
        },
        {
          value: "14K+",
          label: "Monthly Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "15%",
          label: "Increase in Sales",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The client had an outdated online store with poor performance and high cart abandonment.",
        points: [
          "Slow page load time",
          "Poor user experience",
          "No secure payment integration",
          "Difficult product management",
        ],
      },
      solution: {
        description:
          "We built a modern, fast, and secure eCommerce platform with optimized checkout and admin tools.",
        points: [
          "Optimized performance and SEO",
          "Secure payments with Stripe",
          "Streamlined checkout process",
          "Advanced product & order management",
          "Responsive design for all devices",
        ],
      },
      keyFeatures: [
        {
          title: "User Authentication",
          description: "Secure login, registration, and profile management.",
          icon: "user",
        },
        {
          title: "Product Management",
          description: "Add, edit, delete and organize products.",
          icon: "package",
        },
        {
          title: "Shopping Cart",
          description: "Add to cart, update quantity, and save for later.",
          icon: "cart",
        },
        {
          title: "Order Tracking",
          description: "Real-time order status and tracking.",
          icon: "tracking",
        },
        {
          title: "Admin Dashboard",
          description: "Manage users, orders, products, and sales.",
          icon: "dashboard",
        },
      ],
    },
    image:
      "/product3/main.png",
    images: [
      {
        src: "/product3/1.png",
        caption: "About us section",
        description:
          "Split image-and-text layout introducing WaterfortFronts, its mission, and its upcoming educational platform, with a clear learn-more call to action.",
      },
      {
        src: "/product3/2.png",
        caption: "Book a stay listings",
        description:
          "Property cards showcasing short-term rentals with location, guest ratings, nightly pricing, and direct booking buttons.",
      },
      {
        src: "/product3/3.png",
        caption: "Airbnb courses section",
        description:
          "Course cards for the Airbnb education program, covering free guides and cash or credit strategies, with ratings and links to more courses.",
      },
      {
        src: "/product3/4.png",
        caption: "About page and brand story",
        description:
          "Full-width hero with site navigation and a Who We Are section explaining the Airbnb investment business and its hands-on approach.",
      },
    ],
  },
  {
    id: "crypto-gaming-platform",
    title: "dentalia",
    subtitle: "Dental Clinic Network & Appointment Booking Platform",
    description:
      "A patient-facing platform for Mexico's dentalia network of 60+ dental clinics. Features include free online appointment booking, a clinic locator by city or postal code, treatment and promotion pages, dental membership plans, insurance plan lookup, invoice generation, Google reviews, and WhatsApp contact.",
    tags: ["React", "Next.js", "TypeScript", "Webflow", "REST APIs", "Google Maps API", "Booking Integration", "SEO"],
    metrics: [],
    year: "2023",
    featured: true,
    url: "https://www.dentalia.com",
    overview: {
      summary: "dentalia is one of Mexico's largest dental clinic networks, with more than 60 clinics and over 1,300 specialized dentists, offering treatments for the whole family in one place. The platform lets patients book a free 360° diagnosis online, find the nearest clinic by city, postal code, or neighborhood, explore clinical, cosmetic, and pediatric treatments, compare individual and family membership plans, check whether their insurer or employer offers a dental plan, generate invoices, and contact the team through WhatsApp or the contact center. I worked on the responsive frontend, mega-menu navigation, clinic search and locator, treatment and promotion pages, membership and insurance plan lookup flows, Google review carousels, FAQs, the blog, and booking integrations, focusing on a friendly, accessible experience that makes it easy for patients to schedule care on desktop and mobile.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image:
      "/product2/main.png",
    images: [
      {
        src: "/product2/1.png",
        caption: "Why choose dentalia and clinic locator",
        description:
          "Value highlights for nearby clinics, payment options, advanced technology, and certified dentists, plus a map-based search to find a clinic by city or postal code.",
      },
      {
        src: "/product2/2.png",
        caption: "Promotions and Google reviews",
        description:
          "Seasonal promotional banner with treatment discounts, followed by a review section showcasing patient Google ratings across clinics.",
      },
      {
        src: "/product2/3.png",
        caption: "Treatments and free diagnosis booking",
        description:
          "Scrollable treatment categories for every stage of life and a call to action to book a free AI-backed 360° diagnosis.",
      },
      {
        src: "/product2/4.png",
        caption: "Dental plan lookup for insurers and companies",
        description:
          "Search by insurer or employer to check dental plan coverage, with a trusted-partners logo strip of major Mexican companies.",
      },
      {
        src: "/product2/5.png",
        caption: "Dentists and patient testimonials",
        description:
          "Masonry layout pairing dentist profiles with verified Google testimonials from patients at different clinic locations.",
      },
      {
        src: "/product2/6.png",
        caption: "Booking CTA, newsletter, and footer",
        description:
          "Closing call to action with key benefits, a newsletter signup, and a footer with visit planning, treatments, company, and contact links.",
      },
    ],
  },

  {
    id: "Solmar-eal-state-ebsite",
    title: "Skill.Ed",
    subtitle: "Learning Center & Online Education Platform",
    description:
      "A website for a Brazilian learning center offering English and professional development courses based on a lifelong learning concept. Built course catalog pages for English, practical computing, systems development, YouTube, and digital marketing, along with a school locator, solutions pages, e-books, and a blog.",
    tags: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "Responsive Design", "SEO"],
    metrics: [],
    year: "2026",
    featured: true,
    url: "https://skilled.com.br",
    overview: {
      summary:
        "Skill.Ed is a Brazilian learning center, partnered with Pearson, that offers English and personal and professional development courses built around a lifelong learning concept. The website presents a full-screen hero, a course catalog covering English, practical computing, systems development, YouTube, and digital marketing, a locator to find the nearest school, solution pages for Skill Box, Skillstation, and Skill GO, plus e-books and a blog. I worked on the responsive frontend, course and solution pages, navigation, school locator, content sections, and SEO, focusing on a vibrant, engaging experience that guides students to the right course across desktop and mobile.",
      stats: [
        {
          value: "25%",
          label: "Faster Load Time",
          icon: "zap",
          color: "purple",
        },
        {
          value: "23K+",
          label: "Monthly Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "55%",
          label: "Increase in Sales",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The client had an outdated online store with poor performance and high cart abandonment.",
        points: [
          "Slow page load time",
          "Poor user experience",
          "No secure payment integration",
          "Difficult product management",
        ],
      },
      solution: {
        description:
          "We built a modern, fast, and secure eCommerce platform with optimized checkout and admin tools.",
        points: [
          "Optimized performance and SEO",
          "Secure payments with Stripe",
          "Streamlined checkout process",
          "Advanced product & order management",
          "Responsive design for all devices",
        ],
      },
      keyFeatures: [
        {
          title: "User Authentication",
          description: "Secure login, registration, and profile management.",
          icon: "user",
        },
        {
          title: "Secure Payments",
          description: "Stripe integration for secure transactions.",
          icon: "payment",
        },
        {
          title: "Order Tracking",
          description: "Real-time order status and tracking.",
          icon: "tracking",
        },
        {
          title: "Admin Dashboard",
          description: "Manage users, orders, products, and sales.",
          icon: "dashboard",
        },
      ],
    },
    image:
      "/product1/main.png",
    images: [
      {
        src: "/product1/1.png",
        caption: "Lifelong learning hero",
        description:
          "Brand-led hero introducing the lifelong learning concept with a bold headline and a photo collage of students.",
      },
      {
        src: "/product1/2.png",
        caption: "Course catalog grid",
        description:
          "Mosaic of course tiles for English, practical computing, systems development, YouTube, and digital marketing, each linking to its course page.",
      },
      {
        src: "/product1/3.png",
        caption: "Student journey steps",
        description:
          "Five-step illustrated flow from choosing a learning center to graduating, followed by a featured courses row.",
      },
    ],
  },
  /* second section */
  {
    id: "sabal-luxury-builder",
    title: "Propli",
    subtitle: "Hybrid AI MLS & Real Estate CRM Platform",
  
    description:
      "An AI-driven multiple listing system for real estate agents and property developers in Spain and Portugal, combining MLS, CRM, calendar, and tasks in one platform. Features include AI property search, map search, AI-generated listing descriptions, property matching, lead management, tours, and an agent network.",
  
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Google Gemini API",
      "AI Search",
      "CRM",
      "Map Search",
      "Tailwind CSS"
    ],
  
    metrics: [],
  
    year: "2026",
  
    featured: true,
  
    url: "https://www.propli.co",
  
    image: "/product6/main.png",
    overview: {
      summary: "Propli is a hybrid AI multiple listing system (MLS) for the real estate market in Spain and Portugal, bringing MLS, CRM, calendar, and tasks together in one platform for agents, agencies, and property developers. Agents can search, list, and sell resales, rentals, and new developments, generate window cards, and tap into a network of agents, while the public can browse up-to-date properties across the Costa del Sol and Costa Blanca. The platform includes AI search, map search, AI-generated property descriptions, property insights and matching, tours, agency and personal lead management with status tracking, segments, and export, email integration, and a built-in trained AI assistant. I worked on the property search and listing dashboards, AI search and description features, the CRM and lead workflows, calendar and tour scheduling, pricing and plan pages, and the early-access onboarding flow, focusing on a fast, intuitive experience that helps agents match properties with clients quickly.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    images: [
      {
        src: "/product6/1.png",
        caption: "Property search dashboard",
        description:
          "Laptop mockup of the agent dashboard with filterable property cards showing price, agency, type, and development status.",
      },
      {
        src: "/product6/2.png",
        caption: "Property developers and AI tools",
        description:
          "Gradient banner inviting property developers to list on the AI MLS, followed by a section introducing the platform's integrated AI tools.",
      },
      {
        src: "/product6/3.png",
        caption: "Complete property portfolio",
        description:
          "Portfolio section for searching, listing, and selling properties, with category cards for developments, resales, and rentals.",
      },
      {
        src: "/product6/4.png",
        caption: "Mission, vision, and offerings",
        description:
          "Brand section outlining the AI MLS mission and vision, with what the platform offers to agents and to the public.",
      },
      {
        src: "/product6/5.png",
        caption: "Early access signup and footer",
        description:
          "Agent and developer toggle with an email signup for early access, followed by the footer with discover, services, and company links.",
      },
    ],
  },
  {
    id: "ghost-bed",
    title: "Sephora",
    subtitle: "Beauty Retail eCommerce Platform",
    description:
      "A large-scale beauty retail eCommerce platform for makeup, skincare, fragrance, hair, and bath and body products. Features include promotional carousels, category mega-menus, store pickup and delivery selection, Beauty Insider loyalty perks, an AI beauty chat assistant, wishlists, and a fast, secure checkout across web and mobile.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AI Chat Integration", "Performance Optimization"],
    metrics: [],
    year: "2023",
    featured: true,
    overview: {
      summary: "Sephora is a global beauty retailer whose eCommerce platform serves millions of shoppers across makeup, skincare, fragrance, hair, bath and body, mini sizes, gift sets, and gift cards. The storefront combines a search-first header, an AI Beauty Chat assistant, store and same-day delivery selection, services and events booking, and Beauty Insider sign-in for free shipping and loyalty rewards. I worked on responsive frontend components, promotional hero carousels, category navigation and mega-menus, product listing and detail experiences, wishlist and basket interactions, and performance optimization for high-traffic seasonal campaigns, focusing on a fast, polished shopping experience across desktop and mobile.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    url: "https://www.sephora.com",
    image:
      "/product5/main.png",
    images: [
      {
        src: "/product6/A.webp",
        caption: "Real-time observability dashboard",
        description:
          "Live KPI panels streaming from ClickHouse with sub-second refresh for production health monitoring.",
      },
      {
        src: "/product6/B.webp",
        caption: "Anomaly detection alerts",
        description:
          "Threshold and ML-based alerts with severity tiers, on-call routing, and incident timeline context.",
      },
      {
        src: "/product6/C.webp",
        caption: "Anomaly detection alerts",
        description:
          "Threshold and ML-based alerts with severity tiers, on-call routing, and incident timeline context.",
      },
      {
        src: "/product6/D.webp",
        caption: "Custom metrics explorer",
        description:
          "Ad-hoc query builder for product and engineering teams to define and visualize custom event metrics.",
      },
      {
        src: "/product6/E.webp",
        caption: "Custom metrics explorer",
        description:
          "Ad-hoc query builder for product and engineering teams to define and visualize custom event metrics.",
      }
    ],
  },
  {
    id: "StatKing-AI",
    title: "StatKing AI",
    subtitle: "AI-Powered Sports Analytics Platform",
  
    description:
      "Developed a modern sports analytics platform that helps users research player props, betting trends, and game statistics through AI-powered insights. Built responsive dashboards, advanced filtering tools, real-time data visualizations, and intuitive user interfaces to deliver a fast and engaging analytics experience across desktop and mobile devices.",
  
    tags: [
      "AI",
      "Dashboard",
      "Data Visualization",
      "Responsive Design",
      "Performance"
    ],
  
    metrics: [],
  
    year: "2025",
  
    featured: false,
  
    url: "https://statking.ai",
  
    image: "/product18/A.webp",
  
    images: [
      {
        src: "/product18/A.webp",
        caption: "Analytics Dashboard",
        description:
          "Interactive dashboard presenting player statistics, betting trends, hit rates, and AI-powered insights."
      },
      {
        src: "/product18/B.webp",
        caption: "Player Props Explorer",
        description:
          "Advanced filtering interface allowing users to compare player props, historical performance, and matchup statistics."
      },
      {
        src: "/product18/C.webp",
        caption: "Live Game Tracking",
        description:
          "Real-time game tracking with live player performance updates, betting progress, and detailed statistical summaries."
      },
      {
        src: "/product18/D.webp",
        caption: "AI Insights & Predictions",
        description:
          "AI-assisted analytics highlighting trends, positive expected value opportunities, and customizable research tools for sports analysis."
      }
    ]
  },
  {
    id: "Vehicle-Leasing-Management-Platform",
    title: "Car Rental Management Platform",
    subtitle: "",
    description:
      "Quick Lease is a vehicle rental and leasing platform that provides short-term rentals, long-term leasing, chauffeur services, and luxury vehicle rentals across Dubai and the UAE. The platform allows customers to browse available vehicles, compare rental options, submit booking requests, and manage leasing requirements through a user-friendly online system.",
    tags: ["PHP", "WordPress", "WhatsApp Integration", "SSL", "Tailwind", "Cloud Hosting"],
    metrics: [],
    year: "2024",
    featured: false,

    url: "https://quicklease.ae/our-fleet",
    overview: {
      summary: "Quick Lease is a web-based vehicle rental and leasing platform that streamlines fleet management, vehicle reservations, customer onboarding, and rental operations. The system supports short-term rentals, long-term leasing, chauffeur services, and corporate fleet solutions. Key functionalities include vehicle inventory management, online booking, customer management, maintenance tracking, payment integration, and responsive user experiences optimized for both desktop and mobile devices.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image: "/product7/A.webp",
    images: [
      {
        src: "/product7/A.webp",
        caption: "KPI widgets and reporting",
        description:
          "Configurable dashboard widgets with real-time data feeds and exportable PDF report generation.",
      },
      {
        src: "/product7/B.webp",
        caption: "Role-based access controls",
        description:
          "Granular permission matrix for admin, analyst, and viewer roles across multi-tenant organizations.",
      },
      {
        src: "/product7/C.webp",
        caption: "White-label theming panel",
        description:
          "Brand customization tools for B2B clients to apply logos, colors, and custom domains to their instance.",
      },
      {
        src: "/product7/D.webp",
        caption: "Tenant analytics overview",
        description:
          "Cross-tenant usage analytics with drill-down into feature adoption and engagement trends.",
      },
    ],
  },


  /* 222 */
  {
    id: "Seven-Yachts",
    title: "Brow Code",
    subtitle: "Brow Cosmetics eCommerce Store",
  
    description:
      "Developed a multi-region eCommerce storefront for an Australian brow cosmetics brand selling at-home brow kits, cosmetics, brow care, and gift sets. Built region and currency switching, mega-menu navigation, product carousels with ratings and reviews, and cart and checkout flows supporting Afterpay, Apple Pay, PayPal, and Shop Pay.",
  
    tags: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "Multi-Currency",
      "Payment Integration",
      "SEO"
    ],
  
    metrics: [],
  
    year: "2025",
  
    featured: false,
  
    url: "https://browcode.au",
    overview: {
      summary: "Brow Code is an Australian brow cosmetics brand with a multi-region online store serving Australia, the United States, Canada, the United Kingdom, New Zealand, and international customers, alongside a separate store for beauty professionals. The storefront sells at-home brow tint, henna, lamination, lightening, and wax kits, as well as brow gels, pencils, growth serums, accessories, gift sets, and gift cards. I worked on the responsive theme, region and currency selectors, mega-menu navigation, featured gift set and best-seller carousels with star ratings and reviews, add-to-cart and cart drawer interactions, terms acceptance before checkout, and payment options including Afterpay, Apple Pay, Google Pay, PayPal, and Shop Pay. I also supported the loyalty program, partner pages, and blog content, focusing on a fast, polished shopping experience across desktop and mobile.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image: "/product22/browcode.png",
  
    images: [
      {
        src: "/product17/A.webp",
        caption: "Luxury Homepage",
        description:
          "Modern landing page showcasing luxury yacht charters, featured yachts, destinations, and premium customer experiences."
      },
      {
        src: "/product17/B.webp",
        caption: "Yacht Collection",
        description:
          "Interactive fleet catalog with yacht specifications, pricing, image galleries, guest capacity, and booking details."
      },
      {
        src: "/product17/C.webp",
        caption: "Destination Explorer",
        description:
          "Destination pages highlighting Dubai's iconic landmarks, yacht routes, travel experiences, and personalized itineraries."
      },
      {
        src: "/product17/D.webp",
        caption: "Booking Experience",
        description:
          "Responsive booking workflow allowing customers to explore yacht packages, submit inquiries, and reserve luxury charter experiences."
      },
      {
        src: "/product17/E.webp",
        caption: "Booking Experience",
        description:
          "Responsive booking workflow allowing customers to explore yacht packages, submit inquiries, and reserve luxury charter experiences."
      }
    ]
  },
  

  {
    id: "ecommerce-platform-development",
    title: "Promotional Products & Branded Merchandise E-Commerce Platform",
    subtitle: "",
    description:
      "Xpromo is an Australian promotional products platform that helps businesses source, customize, and order branded merchandise for marketing campaigns, corporate events, trade shows, employee gifts, and promotional activities.",
    tags: ["Vue.js", "PHP", "Python", "Payment Gateway Integration", "Responsive Design", "Stripe API", "Google Map API"],
    metrics: [],
    year: "2026",
    featured: false,
    url: "https://xpromo.com.au",
    overview: {
      summary:
        "Xpromo is a B2B promotional merchandise and branded products platform that enables businesses to source, customize, and order marketing materials through a streamlined online system. The platform includes product catalog management, quote generation, bulk ordering, logo uploads, supplier sourcing, inventory management, and customer relationship workflows. Designed for scalability and corporate procurement, it supports both local inventory and factory-direct manufacturing while emphasizing sustainability and ethical sourcing practices.",
      stats: [
        {
          value: "40%",
          label: "Faster Load Time",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Monthly Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "25%",
          label: "Increase in Sales",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The client had an outdated online store with poor performance and high cart abandonment.",
        points: [
          "Slow page load time",
          "Poor user experience",
          "No secure payment integration",
          "Difficult product management",
        ],
      },
      solution: {
        description:
          "We built a modern, fast, and secure eCommerce platform with optimized checkout and admin tools.",
        points: [
          "Optimized performance and SEO",
          "Secure payments with Stripe",
          "Streamlined checkout process",
          "Advanced product & order management",
          "Responsive design for all devices",
        ],
      },
      keyFeatures: [
        {
          title: "User Authentication",
          description: "Secure login, registration, and profile management.",
          icon: "user",
        },
        {
          title: "Product Management",
          description: "Add, edit, delete and organize products.",
          icon: "package",
        },
        {
          title: "Shopping Cart",
          description: "Add to cart, update quantity, and save for later.",
          icon: "cart",
        },
        {
          title: "Secure Payments",
          description: "Stripe integration for secure transactions.",
          icon: "payment",
        },
        {
          title: "Order Tracking",
          description: "Real-time order status and tracking.",
          icon: "tracking",
        },
        {
          title: "Admin Dashboard",
          description: "Manage users, orders, products, and sales.",
          icon: "dashboard",
        },
      ],
    },
    image:
      "/product13/A.webp",
    images: [
      {
        src: "/product13/B.webp",
        caption: "Document ingestion pipeline",
        description:
          "Batch and streaming upload flows with OCR preprocessing and metadata extraction before AI analysis.",
      },
      {
        src: "/product13/C.webp",
        caption: "AI contract review workspace",
        description:
          "Side-by-side contract view with AI-highlighted clauses, risk flags, and suggested revisions for attorneys.",
      },
      {
        src: "/product13/D.webp",
        caption: "Human-in-the-loop validation",
        description:
          "Review queue where legal reviewers approve, reject, or correct AI outputs before final processing.",
      },
      {
        src: "/product13/E.webp",
        caption: "Human-in-the-loop validation",
        description:
          "Review queue where legal reviewers approve, reject, or correct AI outputs before final processing.",
      }
    ],
  },



  {
    id: "crowdfunding-event-management-platform",
    title: "Crowdfunding & Event Management Platform",
    subtitle: "",
    description:
      "A modern crowdfunding and event management platform designed for fundraising campaigns, event ticketing, peer-to-peer donations, memberships, and community engagement.",
    tags: ["Vue.js", "Django", "Python", "HTML", "CSS", "Stripe API", "Google Map API"],
    metrics: [],
    year: "2026",
    featured: false,
    url: "https://givingpilot.com",
    overview: {
      summary:
        "GivingPilot is a crowdfunding and event management platform designed for fundraising campaigns, peer-to-peer donations, event ticketing, memberships, and community-driven fundraising experiences. The platform included campaign management dashboards, fundraising analytics, event pages, ticket purchasing workflows, raffle systems, donation interfaces, and organizer management tools. I worked on frontend UI/UX development, responsive layouts, event-related interfaces, dashboard components, forms, and user experience improvements throughout the platform. My work focused on building clean and scalable frontend experiences while supporting complex workflows related to fundraising, ticketing, event management, and community engagement. The project required strong attention to responsive design, usability, frontend architecture, and smooth multi-step user interactions across different devices and screen sizes.",
      stats: [
        {
          value: "40%",
          label: "Faster Load Time",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Monthly Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "25%",
          label: "Increase in Sales",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The client had an outdated online store with poor performance and high cart abandonment.",
        points: [
          "Slow page load time",
          "Poor user experience",
          "No secure payment integration",
          "Difficult product management",
        ],
      },
      solution: {
        description:
          "We built a modern, fast, and secure eCommerce platform with optimized checkout and admin tools.",
        points: [
          "Optimized performance and SEO",
          "Secure payments with Stripe",
          "Streamlined checkout process",
          "Advanced product & order management",
          "Responsive design for all devices",
        ],
      },
      keyFeatures: [
        {
          title: "User Authentication",
          description: "Secure login, registration, and profile management.",
          icon: "user",
        },
        {
          title: "Product Management",
          description: "Add, edit, delete and organize products.",
          icon: "package",
        },
        {
          title: "Shopping Cart",
          description: "Add to cart, update quantity, and save for later.",
          icon: "cart",
        },
        {
          title: "Secure Payments",
          description: "Stripe integration for secure transactions.",
          icon: "payment",
        },
        {
          title: "Order Tracking",
          description: "Real-time order status and tracking.",
          icon: "tracking",
        },
        {
          title: "Admin Dashboard",
          description: "Manage users, orders, products, and sales.",
          icon: "dashboard",
        },
      ],
    },
    image:
      "/product10/A.webp",
    images: [
      {
        src: "/product10/B.webp",
        caption: "Document ingestion pipeline",
        description:
          "Batch and streaming upload flows with OCR preprocessing and metadata extraction before AI analysis.",
      },
      {
        src: "/product10/C.webp",
        caption: "AI contract review workspace",
        description:
          "Side-by-side contract view with AI-highlighted clauses, risk flags, and suggested revisions for attorneys.",
      },
      {
        src: "/product10/D.webp",
        caption: "Human-in-the-loop validation",
        description:
          "Review queue where legal reviewers approve, reject, or correct AI outputs before final processing.",
      },
      {
        src: "/product10/E.webp",
        caption: "Human-in-the-loop validation",
        description:
          "Review queue where legal reviewers approve, reject, or correct AI outputs before final processing.",
      }
    ],
  },


  {
    id: "business-analytics-dashboard",
    title: "Business Analytics Dashboard",
    subtitle: "Photo discovery platform",
    description:
      "Designed modern web and mobile application interfaces using Figma with a strong focus on clean UI, responsive layouts, usability, and user experience. Worked on dashboards, landing pages, mobile app screens, and business platforms while creating scalable and developer-friendly design systems.",
    tags: ["React", "Next.js", "CDN", "Performance", "Design Systems"],
    metrics: [],
    year: "2023",
    featured: false,
    url: "https://givingpilot.com",
    image:
      "/product9/A.webp",
    images: [
      {
        src: "/product9/B.webp",
        caption: "Photo discovery homepage",
        description:
          "Curated editorial grids and trending collections optimized for fast image delivery at global scale.",
      },
      {
        src: "/product9/C.webp",
        caption: "Search and browse experience",
        description:
          "Faceted search with instant previews, color filters, and responsive masonry layouts across devices.",
      },
      {
        src: "/product9/D.webp",
        caption: "Creator profile layout",
        description:
          "Photographer portfolios with collections, download stats, and licensing options for commercial use.",
      }, {
        src: "/product9/E.webp",
        caption: "Creator profile layout",
        description:
          "Photographer portfolios with collections, download stats, and licensing options for commercial use.",
      },
    ],
  },

  /* next part */
  {
    id: "carelink",
    title: "Proprietary Trading Evaluation & Funded Trader Platform",
    subtitle: "",
    description:
      "Lark Funding is a proprietary trading (prop trading) platform that allows traders to demonstrate their skills through simulated trading evaluations and earn payouts based on their performance. Traders can participate in one-step, multi-step, or instant funding programs, manage virtual funded accounts, track performance, and receive profit-sharing rewards after meeting risk-management requirements.",
    tags: ["React", "FHIR", "WebRTC", "Node.js", "Payment Gateway Integration","SSL Security"],
    metrics: [],
    year: "2022",
    featured: false,
    url: "https://larkfunding.com",
    overview: {
      summary: "Lark Funding is a fintech proprietary trading platform that provides trader evaluation programs, funded account simulations, performance tracking, and payout management services. The system includes risk management controls, real-time trading analytics, trader dashboards, account scaling programs, payment processing, and integrations with professional trading platforms such as DXtrade, cTrader, MT4, and MT5. The platform is designed to support scalable trader onboarding, evaluation workflows, and performance-based reward distribution",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image: "/product4/A.webp",
    images: [
      {
        src: "/product4/B.webp",
        caption: "Patient portal dashboard",
        description:
          "Personal health summary with upcoming visits, lab results, and medication reminders in one view.",
      },
      {
        src: "/product4/C.webp",
        caption: "Appointment scheduling",
        description:
          "Self-service booking with provider availability, insurance verification, and calendar sync.",
      },
      {
        src: "/product4/D.webp",
        caption: "Secure messaging and telehealth",
        description:
          "HIPAA-compliant chat and video visits with encrypted records and provider handoff workflows.",
      },
      {
        src: "/product4/E.webp",
        caption: "Secure messaging and telehealth",
        description:
          "HIPAA-compliant chat and video visits with encrypted records and provider handoff workflows.",
      },
    ],
  },
  /* next part */
  {
    id: "givingpilot",
    title: "GivingPilot",
    subtitle: "Business Management Platform",
    description:
      "Developed a modern web application focused on business management and operational workflows. Built responsive user interfaces with React and Next.js, emphasizing performance, accessibility, reusable components, and an intuitive user experience. Collaborated on scalable frontend architecture and integrated REST APIs to support business operations.",
  
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "REST API",
      "Responsive Design"
    ],
  
    metrics: [],
  
    year: "2023",
  
    featured: false,
  
    url: "https://www.asaplogic.com/",
  
    image: "/product14/B.webp",
    overview: {
      summary: "SpotterFitness is a fitness and wellness platform focused on workout tracking, user engagement, and performance analytics. The system included responsive frontend interfaces, workout management features, progress tracking, reporting dashboards, and API-connected functionality designed to improve the user fitness experience. I worked on frontend UI implementation, responsive layouts, API integrations, dashboard interfaces, and user experience improvements across different devices. My role also included improving visual consistency, mobile responsiveness, and frontend usability while working closely with modern web technologies and scalable UI components. The project focused on creating an engaging and easy-to-use platform for fitness users while maintaining clean performance-focused frontend architecture.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    images: [
      {
        src: "/product9/B.webp",
        caption: "Dashboard Overview",
        description:
          "Business dashboard displaying key performance indicators, analytics, and operational summaries."
      },
      {
        src: "/product14/C.webp",
        caption: "User Management",
        description:
          "Administrative interface for managing users, permissions, and business accounts."
      },
      {
        src: "/product14/D.webp",
        caption: "Reporting & Analytics",
        description:
          "Interactive charts, reports, and business insights with responsive data visualization."
      },
      {
        src: "/product14/E.webp",
        caption: "Settings & Configuration",
        description:
          "Application settings, profile management, and configurable business preferences."
      }
    ]
  },
  {
    id: "Exotic-Car-Rental-Platform",
    title: "Exotic Car Rental Platform",
    subtitle: "",
    description:
      "MK Rent A Car is a premium vehicle rental platform specializing in luxury, sports, exotic, and SUV rentals in Dubai. The platform enables customers to browse a wide selection of high-end vehicles, compare rental options, and book cars online with a seamless user experience.",
    tags: ["woocommerce", "elementor", "Next", "PHP", "third-party API integrations", "open AI", "MySQL"],
    metrics: [],
    year: "2023",
    featured: false,
    url: "https://mkrentacar.com",
    overview: {
      summary: "SpotterFitness is a fitness and wellness platform focused on workout tracking, user engagement, and performance analytics. The system included responsive frontend interfaces, workout management features, progress tracking, reporting dashboards, and API-connected functionality designed to improve the user fitness experience. I worked on frontend UI implementation, responsive layouts, API integrations, dashboard interfaces, and user experience improvements across different devices. My role also included improving visual consistency, mobile responsiveness, and frontend usability while working closely with modern web technologies and scalable UI components. The project focused on creating an engaging and easy-to-use platform for fitness users while maintaining clean performance-focused frontend architecture.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image:
      "/product5/A.webp",
    images: [
      {
        src: "/product5/A.webp",
        caption: "Real-time observability dashboard",
        description:
          "Live KPI panels streaming from ClickHouse with sub-second refresh for production health monitoring.",
      },
      {
        src: "/product5/B.webp",
        caption: "Anomaly detection alerts",
        description:
          "Threshold and ML-based alerts with severity tiers, on-call routing, and incident timeline context.",
      },
      {
        src: "/product5/C.webp",
        caption: "Anomaly detection alerts",
        description:
          "Threshold and ML-based alerts with severity tiers, on-call routing, and incident timeline context.",
      },
      {
        src: "/product5/D.webp",
        caption: "Custom metrics explorer",
        description:
          "Ad-hoc query builder for product and engineering teams to define and visualize custom event metrics.",
      },
      {
        src: "/product5/E.webp",
        caption: "Custom metrics explorer",
        description:
          "Ad-hoc query builder for product and engineering teams to define and visualize custom event metrics.",
      }
    ],
  },
  {
    id: "anthony-skincare",
    title: "Anthony Skincare",
    subtitle: "E-commerce Skincare Platform",
  
    description:
      "Developed a modern e-commerce experience for a premium men's skincare brand. Built responsive product pages, shopping workflows, and marketing-focused landing pages while optimizing performance, accessibility, SEO, and mobile usability. Integrated reusable UI components and streamlined customer shopping experiences across desktop and mobile devices.",
  
    tags: [
      "React",
      "Next.js",
      "Shopify",
      "TypeScript",
      "Responsive Design",
      "SEO",
      "Performance"
    ],
  
    metrics: [],
  
    year: "2025",
  
    featured: false,
  
    url: "https://anthony.com",
    overview: {
      summary: "SpotterFitness is a fitness and wellness platform focused on workout tracking, user engagement, and performance analytics. The system included responsive frontend interfaces, workout management features, progress tracking, reporting dashboards, and API-connected functionality designed to improve the user fitness experience. I worked on frontend UI implementation, responsive layouts, API integrations, dashboard interfaces, and user experience improvements across different devices. My role also included improving visual consistency, mobile responsiveness, and frontend usability while working closely with modern web technologies and scalable UI components. The project focused on creating an engaging and easy-to-use platform for fitness users while maintaining clean performance-focused frontend architecture.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "10K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image: "/product16/A.webp",
  
    images: [
      {
        src: "/product16/A.webp",
        caption: "Homepage",
        description:
          "Hero landing page introducing premium skincare products with promotional campaigns and featured collections."
      },
      {
        src: "/product16/B.webp",
        caption: "Product Collection",
        description:
          "Responsive product catalog with category filtering, product cards, pricing, and promotional offers."
      },
      {
        src: "/product16/C.webp",
        caption: "Product Details",
        description:
          "Detailed product pages featuring descriptions, ingredients, customer reviews, and purchasing options."
      },
      {
        src: "/product16/D.webp",
        caption: "Shopping Cart & Checkout",
        description:
          "Streamlined shopping cart and secure checkout experience optimized for desktop and mobile users."
      },
      {
        src: "/product16/D.webp",
        caption: "Shopping Cart & Checkout",
        description:
          "Streamlined shopping cart and secure checkout experience optimized for desktop and mobile users."
      }
    ]
  },
  {
    id: "Photography-Competition",
    title: "Photography Competition & Social Gaming Platform",
    subtitle: "",
    description: "GuruShots is an online photography platform that transforms photo sharing into a competitive game. Users participate in themed photography challenges, upload photos, receive votes from the community, earn achievements, level up through rankings, and compete for prizes, exhibitions, and recognition.",
    tags: ["JavaScript", "React.js", "Node.js", "Real-Time Voting System", "Mobile Apps"],
    metrics: [],
    year: "2024",
    featured: false,
    url: "https://gurushots.com",
    overview: {
      summary:
        "GuruShots is a photography competition and social gaming platform that enables photographers to participate in real-time challenges, upload images, receive community votes, earn achievements, and compete on global leaderboards. The platform incorporates gamification mechanics, social networking features, real-time ranking systems, mobile applications, and cloud-based infrastructure to create an engaging photography community for millions of users worldwide.",
      stats: [
        {
          value: "35%",
          label: "Faster UI Load",
          icon: "zap",
          color: "purple",
        },
        {
          value: "50K+",
          label: "Active Users",
          icon: "users",
          color: "green",
        },
        {
          value: "99.9%",
          label: "Platform Uptime",
          icon: "shield",
          color: "blue",
        },
        {
          value: "40%",
          label: "Engagement Lift",
          icon: "trending",
          color: "orange",
        },
      ],
      challenge: {
        description:
          "The platform needed a modern frontend that could scale across web and mobile while keeping users engaged with real-time fitness data.",
        points: [
          "Inconsistent UI across devices",
          "Slow dashboard performance",
          "Fragmented API integrations",
          "Low mobile engagement",
        ],
      },
      solution: {
        description:
          "We rebuilt the frontend with React and Ionic, connected API-driven dashboards, and optimized responsive layouts for a seamless cross-device experience.",
        points: [
          "Responsive React and Ionic interfaces",
          "Unified API integration layer",
          "Performance-focused dashboard UI",
          "Mobile-first workout tracking flows",
          "Scalable component architecture",
        ],
      },
      keyFeatures: [
        {
          title: "Workout Tracking",
          description: "Track workouts, sets, and progress in real time.",
          icon: "tracking",
        },
        {
          title: "User Dashboards",
          description: "Analytics dashboards for performance and engagement.",
          icon: "dashboard",
        },
        {
          title: "Mobile Experience",
          description: "Cross-platform Ionic app with responsive layouts.",
          icon: "user",
        },
        {
          title: "API Integrations",
          description: "Connected backend services for live fitness data.",
          icon: "package",
        },
        {
          title: "Progress Reports",
          description: "Visual reporting for users and coaches.",
          icon: "payment",
        },
        {
          title: "Secure Accounts",
          description: "Authentication and profile management.",
          icon: "cart",
        },
      ],
    },
    image: "/product8/A.webp",
    images: [
      {
        src: "/product8/B.webp",
        caption: "Funnel exploration views",
        description:
          "Interactive funnel builder with step-level drop-off analysis and segment comparison overlays.",
      },
      {
        src: "/product8/C.webp",
        caption: "Cohort retention charts",
        description:
          "Retention curves by signup cohort with configurable time windows and behavioral breakdowns.",
      },
      {
        src: "/product8/D.webp",
        caption: "Exportable report builder",
        description:
          "Self-serve report templates that product teams can schedule and share with stakeholders.",
      },
      {
        src: "/product8/E.webp",
        caption: "Exportable report builder",
        description:
          "Self-serve report templates that product teams can schedule and share with stakeholders.",
      },
    ],
  },


];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

const overviewStatIcons = ["zap", "users", "shield", "trending"] as const;
const overviewStatColors = ["purple", "green", "blue", "orange"] as const;
const overviewFeatureIcons = [
  "user",
  "package",
  "cart",
  "payment",
  "tracking",
  "dashboard",
] as const;

function parseMetric(metric: string): { value: string; label: string } {
  const match = metric.match(/^(\S+)\s+(.+)$/);
  if (match) {
    return { value: match[1], label: match[2] };
  }

  return { value: metric, label: "Impact" };
}

export function getProjectOverview(project: Project): ProjectOverview {
  if (project.overview) {
    return project.overview;
  }

  const firstSentence =
    project.description.match(/^[^.!?]+[.!?]/)?.[0] ?? project.description;

  const stats = project.metrics.slice(0, 4).map((metric, index) => {
    const parsed = parseMetric(metric);

    return {
      value: parsed.value,
      label: parsed.label,
      icon: overviewStatIcons[index % overviewStatIcons.length],
      color: overviewStatColors[index % overviewStatColors.length],
    };
  });

  const techList =
    project.tags.slice(0, 3).join(", ") || "modern web technologies";

  return {
    summary: project.subtitle
      ? `${project.subtitle}. ${firstSentence}`
      : firstSentence,
    stats,
    challenge: {
      description: `The client needed a reliable, scalable solution with strong performance and a polished user experience.`,
      points: [
        "Legacy workflows limiting growth",
        "Inconsistent experience across devices",
        "Difficulty scaling with user demand",
        "Limited visibility into key metrics",
      ],
    },
    solution: {
      description: `We delivered a production-ready platform using ${techList}, focused on performance, usability, and maintainability.`,
      points: [
        ...project.tags.slice(0, 5).map((tag) => `${tag} implementation and optimization`),
        "Responsive design for all screen sizes",
      ],
    },
    keyFeatures: project.tags.slice(0, 6).map((tag, index) => ({
      title: tag,
      description: `Built and integrated ${tag} for production use.`,
      icon: overviewFeatureIcons[index % overviewFeatureIcons.length],
    })),
  };
}

export const showcasePanelIds = {
  top: [
    "SpotterFitness-Platform",
    "Lotz-Outdoors-eCommerce-Website",
    "ghost-bed",
    "sabal-luxury-builder",
    "crypto-gaming-platform",
  ],
  bottom: [
    "StatKing-AI",
    "Vehicle-Leasing-Management-Platform",
    "carelink",
    "ecommerce-platform-development",
    "Seven-Yachts",
  ],
} as const;

export function getShowcasePanels(row: keyof typeof showcasePanelIds): Project[] {
  return showcasePanelIds[row]
    .map((id) => getProjectById(id))
    .filter((project): project is Project => project !== undefined);
}

export function getProjectGalleryImages(project: Project): ProjectImage[] {
  if (!project.images?.length) {
    return [];
  }

  return project.images.filter((image) => image.src !== project.image);
}

export function getRelatedProjects(currentId: string, count = 3): Project[] {
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  const related: Project[] = [];

  for (let i = 1; related.length < count && i < projects.length; i++) {
    const project = projects[(currentIndex + i) % projects.length];
    if (project.id !== currentId) {
      related.push(project);
    }
  }

  return related;
}

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 98 },
      { name: "TypeScript", level: 97 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 96 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 94 },
      { name: "GraphQL / REST", level: 95 },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      { name: "AWS / GCP", level: 92 },
      { name: "Docker / K8s", level: 90 },
      { name: "Terraform", level: 87 },
      { name: "CI/CD Pipelines", level: 94 },
    ],
  },
  {
    name: "Architecture",
    skills: [
      { name: "System Design", level: 96 },
      { name: "Event-Driven Systems", level: 93 },
      { name: "Performance Optimization", level: 94 },
      { name: "Security & Compliance", level: 91 },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep-dive into your product, team, and constraints. I map technical debt, bottlenecks, and opportunities before writing a single line of code.",
    duration: "1–2 weeks",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Design systems that scale. Clear documentation, ADRs, and a pragmatic roadmap aligned with business outcomes—not vanity metrics.",
    duration: "1–2 weeks",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Ship incrementally with tight feedback loops. Production-grade code, comprehensive testing, and zero-surprise deployments.",
    duration: "4–12 weeks",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Hand off with runbooks, monitoring, and team enablement. I stay engaged through launch and the first critical growth phase.",
    duration: "Ongoing",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Erick Brown  was a great experience. He quickly understood our requirements and delivered a high-quality web application using modern technologies.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Meridian Health",
    rating: 5,
    avatar:
      "/slide/userA.png",
  },
  {
    quote:
      "transformed our UI ideas into a clean, responsive, and user-friendly interface. He paid attention to details, improved performance",
    author: "James Okonkwo",
    role: "Client",
    company: "Vault Financial",
    rating: 5,
    avatar:
      "/slide/userB.png",
  },
  {
    quote:
      "Erick Brown is a skilled full stack engineer who helped us improve our application architecture, APIs, and overall performance.",
    author: "Elena Vasquez",
    role: "Client",
    company: "Atlas Corp",
    rating: 5,
    avatar:
      "/slide/userC.png",
  },
  {
    quote:
      "Erick Brown is a talented full stack developer who combines strong technical skills with excellent communication. He delivers clean, maintainable solutions and always focuses on the client's goals.",
    author: "Marcus Webb",
    role: "Client",
    company: "RetroSoft",
    rating: 5,
    avatar:
      "/slide/userD.png",
  },
];

export const aboutContent = {
  headline: "Engineering partner for ambitious teams",
  intro:
    "Senior Software Engineer with 8+ years of experience supporting, debugging, and optimizing production SaaS and enterprise systems, including HRIS-adjacent data-processing platforms.",
  paragraphs: [
    "Senior Software Engineer with 8+ years of experience supporting, debugging, and optimizing production SaaS and enterprise systems, including HRIS-adjacent data-processing platforms. Expert in React, Node.js, Express, REST APIs, SQL, and cross-module data flow troubleshooting, with a strong record of Tier 2/3 issue resolution and SLA compliance. Skilled at leveraging AI tools such as Claude and ChatGPT for log analysis, root-cause investigation, and knowledge-base documentation.",
    "Proven ability to own complex integrations with third-party systems, biometric devices, and payroll/attendance workflows while mentoring junior engineers. Committed to data privacy, validation accuracy, and clear client-facing communication in remote, multi-tenant environments.",
  ],
  image:
    "/my/code_avatar.webp",
  highlights: [
    "Ex-Stripe, Ex-Vercel",
    "YC & Series B advisor",
    "Open source contributor",
    "Conference speaker",
  ],
};

export const aboutServices = [
  { title: "Web Development", icon: "code" },
  { title: "App Development", icon: "smartphone" },
  { title: "Backend & APIs", icon: "server" },
  { title: "Database Design", icon: "database" },
  { title: "UI/UX Design", icon: "layout" },
  { title: "Cloud & DevOps", icon: "cloud" },
];

export const aboutStats = [
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 8, suffix: "+", label: "Years of Experience" },
];

export const servicesContent = {
  label: "What I Do",
  title: "Services I Offer",
  description:
    "",
  orbitLabel: "My skills",
  items: [
    {
      title: "AI Automation & AI-Powered Solutions",
      description:
        "Building LLM-based applications, RAG pipelines, multi-agent workflows, and intelligent chatbots that automate business processes, cut manual work, and improve response accuracy.",
      icon: "ai",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Developing modern web applications end to end—from responsive interfaces to robust backends—built to be reliable, scalable, and cost-effective for startups and growing businesses.",
      icon: "code",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, cross-browser interfaces with React, Next.js, Vue, Angular, TypeScript, and Tailwind CSS—optimized with code splitting and lazy loading for fast load times.",
      icon: "frontend",
    },
    {
      title: "Backend & API Development",
      description:
        "Engineering secure, scalable services with Node.js, Python, PHP, Java, and C#/.NET—exposing RESTful, GraphQL, and WebSocket APIs and integrating third-party services.",
      icon: "server",
    },
    {
      title: "Database Development",
      description:
        "Designing and optimizing data layers with PostgreSQL, MySQL, MongoDB, Supabase, and Firebase—focused on clean schemas, query performance, and data reliability.",
      icon: "database",
    },
    {
      title: "SaaS & Software Architecture",
      description:
        "Planning system design, microservices, and scalable architectures for SaaS platforms—applying design patterns and OOP to keep codebases maintainable as products grow.",
      icon: "dashboard",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Shipping and scaling applications on AWS with Docker, Git, and CI/CD pipelines via GitHub Actions—streamlining deployments and reducing production issues.",
      icon: "cloud",
    },
    {
      title: "E-Commerce Development",
      description:
        "Building online stores with product listings, search, filtering, shopping carts, and API-driven management of products, customer accounts, and orders.",
      icon: "wordpress",
    },
  ],
};

export const contactContent = {
  label: "Get in touch",
  title: "Have a project?",
  titleAccent: "Let's talk!",
  description:
    "I'm currently available for freelance work and consulting. If you have a project that needs some creative touch or want to discuss an opportunity, my inbox is always open.",
  socialCards: [
    {
      platform: "LinkedIn",
      handle: "erick-ivan-brown",
      url: siteConfig.social.linkedin,
    },
  ],
};

export const chatConfig = {
  enabled: false,
  status: "online" as const,
  responseTime: "Usually replies within an hour",
  welcomeMessage:
    "Hi there! 👋 I'm Alex. Ask me about projects, availability, or how I can help your team.",
  defaultReply:
    "Thanks for your message! I'll get back to you personally within a few hours. For urgent inquiries, email me directly.",
  quickReplies: [
    { label: "Project inquiry", message: "I'd like to discuss a project" },
    { label: "Availability", message: "Are you available for new work?" },
    { label: "Rates & timeline", message: "What are your typical rates and timelines?" },
  ],
};
