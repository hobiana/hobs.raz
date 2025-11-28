import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Services } from "./components/Service";
import { Experience } from "./components/Experience";
import { AIChat } from "./components/AIChat";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorHover(true);
      } else {
        setCursorHover(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Cursor */}
      <div
        className="custom-cursor fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            cursorHover ? "w-8 h-8 opacity-50" : "w-3 h-3 opacity-100"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-all duration-500 ease-out ${
            cursorHover ? "w-12 h-12 opacity-100" : "w-8 h-8 opacity-30"
          }`}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Integrated Gemini Chat Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
