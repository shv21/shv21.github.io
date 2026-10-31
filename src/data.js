// Shivraj Jadhav Portfolio Data - Auto-curated from GitHub analysis
export const profile = {
  name: "Shivraj Jadhav",
  role: "Full-Stack Developer",
  location: "Maharashtra, India",
  intro:
    "Full-stack developer building robust web applications, distributed backend systems, and AI-enabled developer tools with React, Node.js, TypeScript, and Python.",
  email: "shivrajjadhav2123@gmail.com",
  github: "https://github.com/shv21",
  linkedin: "", // Add your LinkedIn profile URL if desired
};

export const projects = [
  {
    name: "CollabSphere",
    type: "Full-Stack & AI Platform",
    description:
      "AI-powered developer collaboration platform featuring team workspaces, code sharing, architecture documentation, and Google Gemini AI integration for automated code analysis.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini AI", "Tailwind CSS"],
    status: "Production",
    github: "https://github.com/shv21/collabsphere",
    demo: "https://collabsphere-beta.vercel.app",
  },
  {
    name: "Email Scheduler & Queue Engine",
    type: "Distributed Systems & Backend",
    description:
      "A scalable background email scheduling platform built with BullMQ delayed queues, Redis per-sender rate limiting, Google OAuth 2.0, PostgreSQL with Prisma ORM, and Bull Board queue monitoring.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ", "React"],
    status: "Production",
    github: "https://github.com/shv21/email-scheduler",
    demo: "",
  },
  {
    name: "HaqSetu",
    type: "AI & Social Impact Web App",
    description:
      "A voice-first, multilingual platform (Hindi, Marathi, English) helping rural women and informal workers discover eligible government schemes with verified rule-based eligibility checks and document checklists.",
    stack: ["React", "Vite", "Tailwind CSS", "Web Speech API", "React Router"],
    status: "Live",
    github: "https://github.com/shv21/HaqSetu",
    demo: "https://haq-setu.vercel.app",
  },
  {
    name: "Arachne-OS",
    type: "Web Desktop Operating System",
    description:
      "A web-based desktop environment featuring a distinctive spider-web aesthetic, custom window manager, draggable windows, desktop apps, interactive terminal, games, and audio player.",
    stack: ["JavaScript", "HTML5", "CSS3", "DOM APIs"],
    status: "Live",
    github: "https://github.com/shv21/Arachne-OS",
    demo: "https://arachne-os.vercel.app/",
  },
  {
    name: "News Pulse",
    type: "Full-Stack Python & Data Pipeline",
    description:
      "Automated news aggregation engine that gathers articles from global publishers (BBC, TechCrunch, Verge) via RSS pipelines, featuring hash-based deduplication, full-text search, and regional feeds.",
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "BeautifulSoup4", "Bootstrap 5"],
    status: "Live",
    github: "https://github.com/shv21/news-dashboard",
    demo: "https://news-dashboard-psi-taupe.vercel.app",
  },
  {
    name: "Two-Hand AR Portal",
    type: "Computer Vision & AR",
    description:
      "A high-performance real-time Augmented Reality portal application using dual-hand gesture recognition to summon, manipulate, and smoothly blend video feeds into virtual environments.",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy", "CustomTkinter"],
    status: "Completed",
    github: "https://github.com/shv21/vc-effects",
    demo: "",
  },
  {
    name: "Student Feedback Manager",
    type: "Full-Stack Web Application",
    description:
      "Real-time course and instructor evaluation platform for educational institutions and bootcamps, featuring interactive feedback forms and administrative review panels.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    status: "Live",
    github: "https://github.com/shv21/Student-Feedback-Manager",
    demo: "https://students-feedback-six.vercel.app",
  },
  {
    name: "Prasad Kirana & CSP Banking",
    type: "Hyperlocal Commerce",
    description:
      "Mobile-first digital storefront and banking services portal for a local neighborhood store in Pachod Kh., featuring catalog browsing and seamless WhatsApp direct ordering.",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    status: "Live",
    github: "https://github.com/shv21/Prasad-kirana",
    demo: "https://Prasad-kirana.vercel.app",
  },
  {
    name: "Sky-Nest-Drive",
    type: "Collaborative Cloud Storage",
    description:
      "Cloud storage drive platform developed as a collaborative open-source team project; contributed the user authentication flow, registration validation, and session handling.",
    stack: ["React", "Node.js", "Express", "JWT", "REST API"],
    status: "Collaborative",
    github: "https://github.com/aftabalam999/Sky-Nest-Drive",
    demo: "",
  },
];

export const experience = [
  {
    title: "Web Development Learner & Peer Mentor",
    organization: "NavGurukul — Dharamshala campus",
    period: "Current learning",
    description:
      "Building full-stack web applications, studying distributed systems, and mastering modern JavaScript, React, Node.js, and database engineering.",
  },
  {
    title: "English Facilitator",
    organization: "NavGurukul",
    period: "Experience",
    description:
      "Mentored peers in technical communication and English language fluency to support software engineering teamwork and project presentations.",
  },
];

export const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "MongoDB",
  "Redis & BullMQ",
  "Tailwind CSS",
  "Flask & SQLAlchemy",
  "Google Gemini AI",
  "OpenCV & MediaPipe",
  "Git & GitHub",
  "Vercel Deployment",
];

export const blogs = [
  {
    id: "bullmq-redis-scheduler",
    title: "Architecting a Resilient Email Scheduler with BullMQ & Redis",
    date: "Oct 2024",
    readTime: "5 min read",
    description:
      "Deep dive into delayed job processing, per-sender rate limiting, and PostgreSQL persistence with Prisma ORM for high-throughput distributed systems.",
    tags: ["Redis", "BullMQ", "PostgreSQL", "Node.js", "TypeScript"],
  },
  {
    id: "haqsetu-voice-accessibility",
    title: "Building HaqSetu: Voice-First & Multilingual Welfare Access",
    date: "Sep 2024",
    readTime: "4 min read",
    description:
      "Lessons in speech accessibility and Web Speech API integration to help rural citizens navigate government welfare schemes in Hindi, Marathi, and English.",
    tags: ["React", "Web Speech API", "Accessibility", "Tailwind CSS"],
  },
  {
    id: "vanilla-js-window-manager",
    title: "Designing a Window Manager from Scratch in Vanilla JavaScript",
    date: "Aug 2024",
    readTime: "6 min read",
    description:
      "How I built Arachne-OS: managing window state, draggable frames, desktop icons, and interactive terminal apps without external UI frameworks.",
    tags: ["JavaScript", "DOM Manipulation", "CSS Architecture"],
  },
  {
    id: "gemini-ai-developer-workspace",
    title: "Integrating Google Gemini AI into Developer Workspaces",
    date: "Jul 2024",
    readTime: "4 min read",
    description:
      "Practical strategies for automated code review, context chunking, and technical documentation generation in CollabSphere.",
    tags: ["Gemini AI", "Developer Tools", "Full-Stack"],
  },
];