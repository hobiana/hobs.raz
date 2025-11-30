import React, { useState } from "react";
import {
  Mail,
  Send,
  Download,
  CheckCircle,
  FileText,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import { USER } from "@/constants";
import { SocialLink } from "./Hero";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate network request
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `/hobs.raz/content/${USER.resume}`;
    link.download = USER.resume;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section
        id="contact"
        className="py-32 px-4 bg-blue-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500"
      >
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/20 via-blue-500/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Scale?
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            I'm currently available for high-impact architectural consulting and
            senior engineering roles. Let's build something future-proof.
            {/* Interested in my profile? Feel free to download my resume, or
                get in touch via email or LinkedIn. Whether you have a project,
                a question, or just want to connect, my inbox is always open. */}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold flex items-center justify-center gap-3 overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Download size={20} />
              <span>Download CV</span>
            </button>

            <a
              href={`mailto:${USER.email}`}
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg min-w-[200px]"
            >
              <Mail size={20} />
              <span>{USER.email}</span>
            </a>
          </div>

          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 max-w-lg mx-auto">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-6">
              Connect on Socials
            </h4>
            <div className="flex justify-center gap-8">
              <SocialLink
                href={USER.socials.github}
                icon={<Github size={24} />}
                label="Github"
              />
              <SocialLink
                href={USER.socials.linkedin}
                icon={<Linkedin size={24} />}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
