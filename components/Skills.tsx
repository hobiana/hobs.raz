import React, { useEffect, useRef } from "react";
import { TECH_STACK } from "../constants";

export const Skills: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".skill-card");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="stack"
      className="py-32 px-4 bg-blue-50 dark:bg-[#0b101b] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-blue-200/40 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((category, idx) => (
            <div
              key={category.name}
              className="skill-card opacity-0 translate-y-10 group relative p-8 rounded-2xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm border border-white/50 dark:border-white/5 hover:border-cyan-500/50 transition-colors duration-300 shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-lg shadow-cyan-500/10 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <category.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {category.name}
                </h3>

                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-slate-700 dark:text-slate-400 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
