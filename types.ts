export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: any; // Using 'any' for Lucide icon components to avoid complex type imports here
}

export interface User {
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: number;
}
