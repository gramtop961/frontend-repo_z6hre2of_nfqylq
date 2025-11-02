import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradients that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-heading text-4xl font-semibold leading-tight md:text-6xl"
          >
            Hi, I’m <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Nirvik Roy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg"
          >
            Frontend Developer crafting immersive, cinematic web experiences with React, Three.js, and motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotateX: -2, rotateY: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white shadow-[0_0_30px_-10px_rgba(168,85,247,0.7)] backdrop-blur transition-colors hover:bg-white/15"
            >
              <span className="relative z-10 font-medium">Explore</span>
              <span className="absolute inset-0 -z-[0] rounded-xl bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-cyan-400/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-fuchsia-500/40 to-cyan-400/40 opacity-60 mix-blend-overlay" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
