import React, { useState } from "react";
import {
  Mail,
  Send,
  Download,
  CheckCircle,
  FileText,
  ArrowRight,
} from "lucide-react";

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
    link.href = "/content/Hobiana_Razakanaivo_CV_English.pdf";
    link.download = "Hobiana_Razakanaivo_CV_English.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="py-32 px-4 bg-blue-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Info & CV */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Let's{" "}
                <span className="text-cyan-600 dark:text-cyan-400">
                  Connect
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                I'm currently available for freelance projects and full-time
                opportunities. Whether you have a question or just want to say
                hi, my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadCV}
                className="group relative px-4 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold flex items-center justify-center gap-3 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Download size={20} />
                <span>Download CV</span>
              </button>

              <a
                href="mailto:hobianarazakanaivo@gmail.com"
                className="px-4 py-4 border border-slate-300 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail size={20} />
                <span>hobianarazakanaivo@gmail.com</span>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-4">
                Connect on Socials
              </h4>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium flex items-center gap-1 transition-colors group"
                  >
                    {social}
                    <ArrowRight
                      size={14}
                      className="-rotate-45 group-hover:rotate-0 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/60 dark:border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  formState === "success"
                    ? "bg-green-500 text-white"
                    : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25"
                }`}
              >
                {formState === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
                {formState === "submitting" && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {formState === "success" && (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
