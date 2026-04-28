import { Project, SkillCategory, NavLink } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    slug: "ai-saas-platform",
    title: "AI SaaS Platform",
    description:
      "A full-stack AI-powered SaaS platform with real-time collaboration, GPT-4 integration, and subscription billing via Stripe.",
    longDescription:
      "Built a production-grade SaaS platform that leverages OpenAI's GPT-4 API to provide intelligent content generation, code review, and data analysis tools. Features include real-time collaboration using WebSockets, a Stripe-powered subscription system with three tiers, a custom dashboard with usage analytics, and a REST API for third-party integrations. Deployed on Vercel with a PostgreSQL database on Supabase.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Stripe", "Supabase", "Tailwind"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "design-system",
    title: "Open Source Design System",
    description:
      "A comprehensive React component library with 50+ accessible components, dark mode support, and full TypeScript types.",
    longDescription:
      "Designed and built a fully accessible React component library from scratch, following WAI-ARIA guidelines. Includes 50+ components ranging from primitives (Button, Input, Badge) to complex patterns (DataTable, CommandPalette, DatePicker). Ships with built-in dark mode, CSS custom properties for theming, Storybook documentation, and 95%+ test coverage via Vitest and Testing Library.",
    tags: ["React", "TypeScript", "Storybook", "Vitest", "CSS", "Rollup"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "realtime-dashboard",
    title: "Real-Time Analytics Dashboard",
    description:
      "A live analytics dashboard with WebSocket data streams, interactive charts, and customizable widget layouts.",
    longDescription:
      "Engineered a high-performance analytics dashboard that processes and visualizes over 10,000 events per second using WebSocket streams. Features a drag-and-drop widget system built with dnd-kit, interactive charts powered by Recharts, configurable alert thresholds, and CSV/PDF export functionality. The backend uses Node.js with Redis for pub/sub and TimescaleDB for time-series data storage.",
    tags: ["React", "Node.js", "WebSockets", "Redis", "Recharts", "PostgreSQL"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout tracking, nutrition logging, and progress visualization with offline support.",
    longDescription:
      "Developed a cross-platform fitness application using React Native and Expo. Features include custom workout builder, barcode scanner for food logging, progress photos with body measurement tracking, Apple Health and Google Fit integration, and full offline support with background sync. Achieved 4.8-star rating with 10,000+ downloads on both app stores.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "Redux", "Node.js"],
    category: "Mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "ecommerce-platform",
    title: "Headless E-Commerce Platform",
    description:
      "A blazing-fast headless e-commerce storefront with Shopify backend, edge caching, and 99 Lighthouse score.",
    longDescription:
      "Built a headless e-commerce storefront using Next.js 14 with the Shopify Storefront API. Implemented ISR and edge caching for sub-100ms page loads, a custom cart with optimistic UI updates, advanced product filtering, and a streamlined checkout flow. Achieved a perfect 100 Lighthouse score across all categories and a 40% improvement in conversion rate over the previous platform.",
    tags: ["Next.js", "Shopify", "GraphQL", "Tailwind", "TypeScript", "Vercel"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "devops-cli",
    title: "DevOps CLI Toolkit",
    description:
      "A powerful CLI tool for automating deployment pipelines, environment management, and infrastructure provisioning.",
    longDescription:
      "Created a developer productivity CLI tool that streamlines common DevOps workflows. Features include one-command environment setup, automated CI/CD pipeline generation for GitHub Actions and GitLab CI, Docker Compose orchestration helpers, secret management with encryption, and integration with AWS, GCP, and Azure. Used by 500+ developers across 50+ companies.",
    tags: ["Node.js", "TypeScript", "Docker", "AWS", "GitHub Actions", "CLI"],
    category: "Backend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "React Native", level: 4 },
      { name: "Vue.js", level: 3 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "WebSockets", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "Go", level: 3 },
    ],
  },
  {
    name: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Docker", level: 4 },
      { name: "AWS", level: 4 },
      { name: "Vercel", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "Linux", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Kubernetes", level: 3 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@alexdev.io",
};

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting high-performance web applications. I specialize in React, Next.js, and Node.js, and I'm passionate about developer experience, open source, and building products that make a real difference. When I'm not coding, you'll find me hiking, reading sci-fi, or contributing to open source projects.",
  location: "San Francisco, CA",
  available: true,
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "Open Source Stars", value: "2.4k" },
    { label: "Happy Clients", value: "25+" },
  ],
};
