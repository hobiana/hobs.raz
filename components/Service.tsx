import React from "react";
import { SERVICES } from "../constants";
import { CheckCircle, ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-32 px-4 bg-blue-50 dark:bg-[#0b101b] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-200/40 via-blue-100/20 to-transparent dark:from-cyan-900/10 dark:via-transparent dark:to-transparent opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-slate-200/40 via-blue-100/20 to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                Do
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              I help companies solve complex engineering challenges. From
              architectural design to production-ready AI integration.
            </p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-slate-300 dark:bg-slate-800 relative after:absolute after:right-0 after:-top-1 after:w-2 after:h-2 after:bg-cyan-500 after:rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href="#contact"
              className="group relative block p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed h-24">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle
                        size={16}
                        className="text-cyan-500 shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
