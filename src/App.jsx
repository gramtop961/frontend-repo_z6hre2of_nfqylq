import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState(typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Sticky Navbar */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Nirvik</span>
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#skills" className="text-sm text-white/80 transition hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-white/80 transition hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
          >
            <AnimatePresence initial={false} mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Nirvik Roy. Built with love and motion.
        </footer>
      </main>
    </div>
  );
}
