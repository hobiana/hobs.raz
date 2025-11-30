import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileUser } from "lucide-react";
import { USER } from "../constants";
import { getExperienceYears } from "@/helper/utils";

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("Hobiana T. Razakanaivo");
  const [experience, setExperience] = useState("");
  const finalText = "Hobiana T. Razakanaivo";

  useEffect(() => {
    setExperience(getExperienceYears());
  }, [getExperienceYears]);

  // Hacker Text Decode Effect
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"[
              Math.floor(Math.random() * 36)
            ];
          })
          .join("")
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Animated Gradient Background */}
      {/* Changed Light mode from purple/teal to Slate/Cyan/Blue (Tech/Ice look) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-[#0a0a0a] bg-[length:400%_400%] animate-gradient-slow opacity-80" />

      {/* Floating Blobs - Replaced Purples with Blues/Slates */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-300 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 animate-blob animation-delay-4000" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-white/20 dark:bg-cyan-500/5 backdrop-blur-md animate-slide-up opacity-0 shadow-lg"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-pulse" />
          <span className="text-cyan-800 dark:text-cyan-500 font-mono text-xs tracking-widest uppercase">
            Welcome to my profile
          </span>
        </div>

        <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-500 drop-shadow-sm">
            {displayText}
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-slate-700 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-slide-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Senior Software Engineer with {experience} years of experience,
          shaping high-performance applications with clean and{" "}
          <span className="text-cyan-700 dark:text-cyan-400 font-medium relative inline-block group">
            <span className="relative z-10">thoughtful engineering</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500/30 -skew-x-12 group-hover:h-full transition-all duration-300 ease-out -z-0"></span>
          </span>
          .
        </p>

        <div
          className="flex justify-center gap-6 animate-slide-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <SocialLink
            href={USER.socials.github}
            icon={<Github size={20} />}
            label="GitHub"
            delay={0}
          />
          <SocialLink
            href={USER.socials.linkedin}
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            delay={100}
          />
          <SocialLink
            href={`mailto:${USER.email}`}
            icon={<Mail size={20} />}
            label="Email"
            delay={200}
          />
          <SocialLink
            href="#contact"
            icon={<FileUser size={20} />}
            label="Resume"
            delay={300}
            target="_self"
          />
        </div>
      </div>

      <div className="absolute bottom-10 -translate-x-1/2 animate-bounce opacity-60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Scroll to explore
          </span>
          <ArrowDown className="text-slate-600 dark:text-slate-400" size={20} />
        </div>
      </div>
    </section>
  );
};

export const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
  download?: boolean;
  target?: string;
}> = ({ href, icon, label, delay, download, target = "_blank" }) => (
  <a
    href={href}
    download={download}
    className="relative group p-4"
    aria-label={label}
    style={{ transitionDelay: `${delay}ms` }}
    target={target}
    rel="noopener noreferrer"
  >
    <div className="absolute inset-0 bg-white/50 dark:bg-slate-800 rounded-xl rotate-0 group-hover:rotate-12 transition-transform duration-300 border border-slate-200 dark:border-white/5 shadow-sm" />
    <div className="absolute inset-0 bg-cyan-500/20 rounded-xl rotate-0 group-hover:-rotate-12 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
    <div className="relative z-10 text-slate-700 dark:text-slate-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
      {icon}
    </div>
  </a>
);
