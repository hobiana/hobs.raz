import React, { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "../constants";
import { Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start animating when section top reaches middle of screen
        const start = windowHeight / 2;
        const progress = Math.min(
          Math.max((start - rect.top) / rect.height, 0),
          1
        );
        setLineHeight(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 px-4 bg-blue-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500 relative"
    >
      {/* Subtle Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent dark:from-cyan-900/10 dark:via-transparent dark:to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-center text-slate-900 dark:text-white">
          Career Timeline
        </h2>

        <div className="relative space-y-12">
          {/* Animated Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0">
            <div
              className="w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-100"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {EXPERIENCE.map((job, index) => (
            <div
              key={job.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-50 dark:border-[#050505] bg-slate-200 dark:bg-slate-800 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 ${
                  (index / EXPERIENCE.length) * 100 < lineHeight
                    ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                    : "text-slate-400"
                }`}
              >
                <Briefcase size={16} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-white/80 dark:bg-slate-900 backdrop-blur-md border border-white/50 dark:border-white/5 shadow-xl shadow-blue-100/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 mt-2 sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-medium mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  {job.company}
                </div>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                      {desc}
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
