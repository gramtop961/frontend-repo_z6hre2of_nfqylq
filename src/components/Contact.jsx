import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const bgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  return (
    <section
      id="contact"
      ref={bgRef}
      onMouseMove={handleMove}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] to-black py-24 text-white"
      style={{
        backgroundImage: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(168,85,247,0.15), transparent 40%)`,
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-semibold md:text-4xl"
        >
          Get in touch
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.4, ease: "easeInOut" }}
              className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10"
            >
              <Mail className="h-16 w-16 text-fuchsia-400" />
            </motion.div>
            <p className="mt-6 text-balance text-center text-white/80 md:text-left">
              Have a project in mind or want to collaborate? Let’s build something futuristic together.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 font-medium text-white transition hover:bg-white/15"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
