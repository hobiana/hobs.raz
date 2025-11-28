import { Project, Experience, Service } from "./types";
import {
  Code,
  Layers,
  Cpu,
  Database,
  Terminal,
  Zap,
  Server,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Fullstack Developer",
    company: "Novity",
    period: "May 2021 - Present",
    description: [
      "Led development of data analysis platforms (Clarity, PCX) for opportunity discovery and customer insight.",
      "Engineered a logistics management application to streamline business operations from the ground up.",
      "Drove major tech upgrades, including migrations to React 19 and Vite.js, and built a 20+ component library.",
    ],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Proximity BBDO Mauritius",
    period: "Sept 2019 – Apr 2021",
    description: [
      "Contributed to website redesign with pixel-perfect Figma integration.",
      "Developed e-commerce websites and led a junior frontend developer.",
      "Focused on feature development, performance optimization, and SEO.",
    ],
  },
  {
    id: "3",
    role: "Fullstack Developer",
    company: "BICI",
    period: "December 2017 – August 2019",
    description: [
      "Developed an integrated information system for payroll, stock, HR, and activity management.",
      "Led junior developers and worked on advanced SQL optimization.",
      "Built a back-office application for a mobile tourist app.",
    ],
  },
];

export const TECH_STACK = [
  {
    name: "Languages & Frameworks",
    icon: Code,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "React.js",
      "Next.js",
      "NestJS",
      "Django",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "SQL Server"],
  },
  {
    name: "Tools & Technologies",
    icon: Terminal,
    skills: [
      "Git",
      "VS Code",
      "Vite.js",
      "Redux",
      "Jest",
      "Vitest",
      "React Testing Library",
      "Azure DevOps",
    ],
  },
  {
    name: "APIs & Other",
    icon: Zap,
    skills: [
      "REST APIs",
      "GraphQL",
      "TypeORM",
      "Hibernate",
      "Storybook",
      "Highcharts",
      "Contentful",
      "Strapi",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "System Architecture",
    description:
      "Designing fault-tolerant, scalable distributed systems that handle millions of requests. I turn complex requirements into robust technical blueprints.",
    features: [
      "Microservices Strategy",
      "Cloud Infrastructure (AWS/GCP)",
      "Database Design",
      "System Security",
    ],
    icon: Server,
  },
  {
    id: "2",
    title: "Full-Stack Development",
    description:
      "End-to-end application development with a focus on performance and user experience. From database to pixel-perfect UI.",
    features: [
      "React & Next.js Ecosystem",
      "Node.js/Go API Development",
      "Real-time Systems",
      "Performance Optimization",
    ],
    icon: Layers,
  },
  {
    id: "3",
    title: "AI & LLM Integration",
    description:
      "Bridging the gap between traditional software and generative AI. Integrating Gemini/OpenAI models into production workflows.",
    features: [
      "RAG Implementation",
      "AI Agents & Assistants",
      "Vector Databases",
      "Prompt Engineering",
    ],
    icon: Cpu,
  },
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for a Senior Software Engineer's portfolio named 'Hobiana'.
Your goal is to answer questions about Hobiana's experience, skills, and projects based on the provided context.
- Be professional but witty and futuristic in your tone.
- Keep answers concise (under 3 sentences unless asked for detail).
- If asked about tech stack, mention React, NestJS, and Python.
- If asked about contact, suggest the contact form or email hobianarazakanaivo@gmail.com.
- Do not make up facts not in the context.
`;
