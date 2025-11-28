import React from "react";
import { EDUCATION } from "../constants";
import { GraduationCap, Award } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 bg-white dark:bg-[#0b101b] relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative p-8 rounded-2xl bg-blue-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} className="text-cyan-600 dark:text-cyan-400" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 mb-4 border border-slate-100 dark:border-slate-700">
                  {edu.period}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 pr-8">
                  {edu.degree}
                </h3>

                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm uppercase tracking-wide">
                  {edu.institution}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
