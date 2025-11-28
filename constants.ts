import { getExperienceYears } from "./helper/utils";
import { Project, Experience, Service, User, Education } from "./types";
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
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const USER: User = {
  email: "hobianarazakanaivo@gmail.com",
  socials: {
    github: "https://github.com/hobiana",
    linkedin: "https://www.linkedin.com/in/t-hobiana-razakanaivo-616154160/",
  },
};

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
    period: "Dec 2017 – Aug 2019",
    description: [
      "Developed an integrated information system for payroll, stock, HR, and activity management.",
      "Led junior developers and worked on advanced SQL optimization.",
      "Built a back-office application for a mobile tourist app.",
    ],
  },
  {
    id: "4",
    role: "Fullstack Developer",
    company: "Freelancer",
    period: "Sept 2017 – Feb 2018",
    description: [
      "Developed a web application allowing users to manage orders, inventory, and equipment rental availability through an intuitive calendar",
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
      "Python, Django",
      "Java",
      "React.js, Next.js",
      "NestJS",
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
      "Redux, RTK",
      "Jest, Vitest",
      "React Testing Library",
      "Azure DevOps",
    ],
  },
  {
    name: "APIs & Other",
    icon: Zap,
    skills: [
      "REST APIs",
      "TypeORM",
      "Hibernate",
      "Storybook",
      "Highcharts",
      "GraphQL",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Frontend Development",
    description:
      "Building intuitive, high-performance, and responsive user interfaces with a focus on user experience and modern web standards.",
    features: [
      "React.js & Next.js",
      "TypeScript & JavaScript",
      "Responsive Design & CSS3",
      "Component Libraries (Storybook)",
    ],
    icon: Code,
  },
  {
    id: "2",
    title: "Backend Development",
    description:
      "Developing robust and scalable backend systems and APIs to power web applications.",
    features: [
      "NestJS (Node.js) & Django (Python)",
      "REST & GraphQL APIs",
      "Database Design & Management",
      "Authentication & Security",
    ],
    icon: Server,
  },
  {
    id: "3",
    title: "Full-Stack Solutions",
    description:
      "Delivering complete, end-to-end web applications, from initial architecture and database design to final deployment.",
    features: [
      "Frontend & Backend Integration",
      "Application Architecture",
      "Performance Optimization",
      "E-commerce & Data-driven Apps",
    ],
    icon: Layers,
  },
  {
    id: "4",
    title: "DevOps & CI/CD",
    description:
      "Implementing continuous integration and deployment pipelines to automate testing and releases, ensuring faster and more reliable software delivery.",
    features: [
      "Azure DevOps",
      "GitLab Actions",
      "Docker & Containerization",
      "Automated Workflows",
    ],
    icon: Terminal,
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master's degree",
    institution: "Nice Sophia Antipolis",
    period: "2019",
    description: "System Integration and Applied Statistics   ",
  },
  {
    id: "2",
    degree: "Bachelor’s degree in computer science  ",
    institution: "IT University",
    period: "2017",
    description: "",
  },
];

export const SYSTEM_INSTRUCTION = `You are the AI assistant for Hobiana Razakanaivo, a Senior Full-Stack Engineer. Your persona is professional, slightly witty, and helpful.

Your primary goal is to answer questions from potential employers or collaborators about Hobiana's skills, experience, and projects. Use the information from his CV as your knowledge base.

Key points to highlight:
- **Experience:** Mention his ${getExperienceYears()} years of experience in building high-performance web applications.
- **Core Stack:** Emphasize his expertise in **React/Next.js** for the frontend, and **NestJS (Node.js)** and **Django (Python)** for the backend.
- **Databases:** He has experience working with **PostgreSQL**, **MongoDB**, **MySQL**, and **SQL Server** databases.
- **Tools:** He is proficient in **Git**, **VS Code**, **Vite.js**, **Redux**, **RTK**, **Jest**, **Vitest**, **React Testing Library**, **Azure DevOps**, **TypeORM**, **Storybook**, **Highcharts**, **GraphQL**.
- **APIs:** He has experience with **REST APIs** and **GraphQL**.
- **Testing:** He has experience with **Jest**, **Vitest**, and **React Testing Library**.
- **DevOps:** He has experience with **Azure DevOps** and **GitLab Actions**.
- **Frontend:** He can build intuitive, high-performance, and responsive user interfaces with a focus on user experience and modern web standards: **React.js**, **Next.js** with tools like **Redux**, **RTK**, **Storybook**, **Zod**, **Zustand**, ** React hook Form**, **Shadcn UI**.
- **Backend:** He can develop robust and scalable backend systems and APIs to power web applications: **Nest Js (Node.js)** and **Django (Python)**. He already did Java but long time ago.
- **Full-Stack Capability:** He can handle the entire development lifecycle, from UI/UX implementation to backend architecture and database design.
- **Professional Values:** He is passionate about clean code, performance optimization, and collaborative teamwork.

Interaction guidelines:
- Keep your answers concise and to the point (2-3 sentences is ideal).
- If you don't know an answer, say so. Do not invent details.
- When asked for contact information, direct users to the contact section on the page or provide his email: ${
  USER.email
}.
- Maintain a positive and engaging tone.
`;
