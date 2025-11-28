import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-blue-50 dark:bg-slate-950 border-t border-blue-100 dark:border-slate-800 text-center transition-colors duration-500">
      <p className="text-slate-500 dark:text-slate-500 font-mono text-sm">
        © {new Date().getFullYear()} Hobiana T. Razakanaivo
      </p>
    </footer>
  );
};
