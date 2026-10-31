// Shivraj Jadhav Portfolio Data - Auto-curated from GitHub analysis
export const profile = {
  name: "Shivraj Jadhav",
  role: "Full-Stack Developer",
  location: "Maharashtra, India",
  intro:
    "Full-stack developer building robust web applications, distributed backend systems, and AI-enabled developer tools with React, Node.js, JavaScript, and Python.",
  email: "shivraj25@navgurukul.org",
  github: "https://github.com/shv21",
  linkedin: "https://www.linkedin.com/in/shivraj/",
  twitter: "https://x.com/shvraj21",
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
    intro:
      "Scheduling background tasks like email notifications may look deceptively simple with standard timers or cron jobs. However, in production environments, server restarts, worker crashes, third-party mail provider limits, and network hiccups can easily trigger duplicate sends or dropped jobs. Here is how I architected a distributed email scheduler using Redis, BullMQ, and PostgreSQL.",
    sections: [
      {
        heading: "1. The Pitfalls of In-Memory Timers",
        paragraphs: [
          "When starting out, it is tempting to reach for setTimeout or node-cron. The fundamental issue with in-memory scheduling is lack of durability: whenever your container restarts, spins down, or scales to multiple instances, all queued timers evaporate into thin air.",
          "By shifting state to Redis sorted sets (ZSET), jobs are indexed by their future execution timestamp (Unix epoch in milliseconds). Workers constantly poll for jobs whose score is less than or equal to current time, ensuring durability across server restarts.",
        ],
        note: "Redis sorted sets enable zero-loss delayed job scheduling even during rolling container deployments.",
      },
      {
        heading: "2. Setting Up BullMQ Delayed Queues",
        paragraphs: [
          "BullMQ builds upon Redis with robust primitives for delayed execution, job retry policies, and parent-child dependencies. Below is the core dispatch configuration implemented in the backend:",
        ],
        code: `import { Queue, Worker } from 'bullmq';

const connection = { host: process.env.REDIS_HOST, port: 6379 };

// Producer: Adding delayed emails
export const emailQueue = new Queue('email-queue', { connection });

export async function scheduleEmail(payload, delayMs) {
  return await emailQueue.add('send-email', payload, {
    delay: delayMs,
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
    removeOnComplete: true,
  });
}`,
        language: "typescript",
      },
      {
        heading: "3. Per-Sender Token Bucket Rate Limiting",
        paragraphs: [
          "Third-party SMTP relays (like SendGrid or AWS SES) enforce strict sending limits per second. If a user schedules 5,000 marketing emails for 9:00 AM, firing them all simultaneously guarantees IP blacklisting or 429 Too Many Requests errors.",
          "We integrated Redis-based rate limiting on a per-sender basis, metering throughput smoothly across available worker threads and returning deterministic progress to the user dashboard.",
        ],
      },
      {
        heading: "4. Database Sync with Prisma & Bull Board",
        paragraphs: [
          "While Redis handles transient queue states, PostgreSQL acts as the immutable source of truth. Every job state transition (Scheduled, In-Flight, Sent, Failed) updates a corresponding database record via Prisma ORM.",
          "For observability, we mounted Bull Board on an authenticated administrative route, providing real-time metrics on throughput, error backtraces, and manual retry controls.",
        ],
      },
    ],
    takeaways: [
      "Never rely on in-memory timers for mission-critical jobs; use Redis sorted sets.",
      "Always configure exponential backoff retries to handle transient SMTP hiccups.",
      "Enforce sender-level rate limiting to safeguard IP reputation and SMTP quotas.",
      "Maintain PostgreSQL as the source of truth for delivery audit logs and metrics.",
    ],
  },
  {
    id: "haqsetu-voice-accessibility",
    title: "Building HaqSetu: Voice-First & Multilingual Welfare Access",
    date: "Sep 2024",
    readTime: "4 min read",
    description:
      "Lessons in speech accessibility and Web Speech API integration to help rural citizens navigate government welfare schemes in Hindi, Marathi, and English.",
    tags: ["React", "Web Speech API", "Accessibility", "Tailwind CSS"],
    intro:
      "Over 70% of rural and informal workers in India qualify for essential government welfare programs, yet millions never receive benefits due to language barriers, complex bureaucratic portals, and low digital literacy. HaqSetu was created to make scheme discovery effortless through voice-first, multilingual guidance in Hindi, Marathi, and English.",
    sections: [
      {
        heading: "1. Designing for Digital Inclusion",
        paragraphs: [
          "Users in rural communities often navigate the web entirely on low-end smartphones with intermittent connectivity. Traditional dashboards packed with small text, nested menus, and PDF forms create immediate friction.",
          "In HaqSetu, we stripped away bureaucratic jargon in favor of large, readable cards, step-by-step visual indicators, and native voice search that accepts colloquial phrasing.",
        ],
      },
      {
        heading: "2. Speech Recognition in Regional Dialects",
        paragraphs: [
          "Using the browser-native Web Speech API, we implemented continuous speech recognition configured to regional language codes (mr-IN for Marathi, hi-IN for Hindi, and en-IN for English):",
        ],
        code: `const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function initializeVoiceListener(languageCode, onResult, onError) {
  if (!SpeechRecognition) {
    onError("Speech recognition not supported in this browser.");
    return null;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = languageCode; // 'hi-IN' | 'mr-IN' | 'en-IN'
  recognition.interimResults = false;
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };
  return recognition;
}`,
        language: "javascript",
      },
      {
        heading: "3. Rule-Based Eligibility Engine vs LLMs",
        paragraphs: [
          "While LLMs are versatile, welfare eligibility requires strict accuracy: a single hallucinated income threshold or age limit could mislead a citizen. We chose a deterministic, rule-based matching engine that evaluates age, occupation, gender, and income criteria against verified government criteria.",
        ],
        note: "For legal and welfare requirements, deterministic rule engines eliminate hallucination risks completely.",
      },
      {
        heading: "4. Fraud Safety & Document Checklists",
        paragraphs: [
          "Scams targeting informal workers with fake application fees are rampant. HaqSetu highlights explicit fraud advisories for every scheme and generates a printable, color-coded document checklist (Aadhaar, income certificate, bank passbook) so applicants arrive prepared.",
        ],
      },
    ],
    takeaways: [
      "Voice interfaces remove literacy barriers and bridge the digital divide.",
      "Deterministic rule engines guarantee accuracy for critical eligibility assessments.",
      "Actionable document checklists prevent repeated visits to administrative offices.",
      "Explicit fraud safety alerts protect vulnerable applicants from opportunistic scams.",
    ],
  },
  {
    id: "vanilla-js-window-manager",
    title: "Designing a Window Manager from Scratch in Vanilla JavaScript",
    date: "Aug 2024",
    readTime: "6 min read",
    description:
      "How I built Arachne-OS: managing window state, draggable frames, desktop icons, and interactive terminal apps without external UI frameworks.",
    tags: ["JavaScript", "DOM Manipulation", "CSS Architecture"],
    intro:
      "Modern web development relies heavily on hefty UI frameworks and modal packages for everyday interactions. For Arachne-OS, I wanted to dive deep into browser fundamentals and build an entire operating system desktop interface inside the browser using nothing but pure HTML5, CSS3, and Vanilla JavaScript.",
    sections: [
      {
        heading: "1. The Stacking Context & Window State",
        paragraphs: [
          "In a desktop environment, multiple windows can be open, dragged, focused, minimized, or maximized simultaneously. Managing this requires a centralized window manager that tracks highest z-index layers and focus coordinates.",
          "Each window is instantiated with clean data attributes for coordinates, initial dimensions, and an active focus state that promotes it to the foreground on mousedown.",
        ],
      },
      {
        heading: "2. Zero-Lag Dragging via Pointer Events",
        paragraphs: [
          "Early implementations with basic mouse events suffered from cursor slipping when dragging rapidly. Switching to bound event listeners on the document during active drag operations ensured butter-smooth motion:",
        ],
        code: `export function makeDraggable(win, header) {
  let startX = 0, startY = 0, initialX = 0, initialY = 0;

  header.addEventListener('mousedown', (e) => {
    e.preventDefault();
    bringToFront(win);
    startX = e.clientX;
    startY = e.clientY;
    initialX = win.offsetLeft;
    initialY = win.offsetTop;

    function onMouseMove(moveEvent) {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      win.style.left = \`\${initialX + dx}px\`;
      win.style.top = \`\${initialY + dy}px\`;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}`,
        language: "javascript",
      },
      {
        heading: "3. Modular Built-in Applications",
        paragraphs: [
          "An OS is only as interesting as its software. Arachne-OS features a fully interactive Terminal emulator with custom commands (help, cat, clear, theme, matrix), a retro audio synthesizer, system monitor, and customizable desktop icons.",
          "Every app runs in an isolated container conforming to lifecycle hooks (open, close, minimize, resize), demonstrating structured software design without framework crutches.",
        ],
      },
    ],
    takeaways: [
      "Mastering DOM event listeners and CSS stacking contexts builds confidence in core JavaScript.",
      "Cleaning up global event listeners on mouseup prevents memory leaks and unintended behavior.",
      "Decoupled window management logic allows adding new apps effortlessly.",
    ],
  },
  {
    id: "gemini-ai-developer-workspace",
    title: "Integrating Google Gemini AI into Developer Workspaces",
    date: "Jul 2024",
    readTime: "4 min read",
    description:
      "Practical strategies for automated code review, context chunking, and technical documentation generation in CollabSphere.",
    tags: ["Gemini AI", "Developer Tools", "Full-Stack"],
    intro:
      "Engineering teams frequently struggle with fragmented context spread across disjointed GitHub pull requests, scattered README files, and Slack chats. In CollabSphere, I integrated Google Gemini AI directly into our developer collaboration workspace to automate code analysis and generate structured architectural documentation on the fly.",
    sections: [
      {
        heading: "1. Structuring Repository Context for AI Models",
        paragraphs: [
          "Feeding raw code dumps into LLMs often leads to token truncation or generic explanations. We designed a context-preparation pipeline that scans file trees, extracts function signatures and docstrings, and feeds structured JSON schemas into Google Gemini.",
        ],
      },
      {
        heading: "2. Automated Architecture & Code Analysis",
        paragraphs: [
          "Using the official Google Generative AI SDK, we configured Gemini 1.5 to perform multi-stage evaluations: detecting security vulnerabilities, highlighting anti-patterns, and summarizing system architecture:",
        ],
        code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { temperature: 0.2 },
});

export async function analyzeCode(fileContent, fileName) {
  const prompt = \`You are an expert software architect. Analyze the following source file (\${fileName}) for:
1. Architectural patterns
2. Potential security or performance bottlenecks
3. Concise documentation overview:

\${fileContent}\`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}`,
        language: "javascript",
      },
      {
        heading: "3. Streaming Responses for Fast Developer UX",
        paragraphs: [
          "Because analyzing comprehensive files can take several seconds, streaming chunks back to the client via Server-Sent Events (SSE) ensures developers see insights appearing instantly in their editor panel rather than staring at a static loading spinner.",
        ],
      },
    ],
    takeaways: [
      "Lower model temperature (0.2) delivers consistent, analytical code reviews.",
      "Pre-filtering comments and AST tokens preserves context window efficiency.",
      "Streaming responses significantly enhances developer perception of speed.",
    ],
  },
];