import { motion } from "framer-motion";
import { Code, Cpu, Infinity as InfinityIcon, Layers, Palette, Rocket } from "lucide-react";

const skills = [
  { name: "HTML5", color: "from-orange-400 to-rose-400", icon: Code },
  { name: "CSS3", color: "from-sky-400 to-cyan-400", icon: Palette },
  { name: "JavaScript", color: "from-yellow-300 to-amber-500", icon: Rocket },
  { name: "React", color: "from-cyan-400 to-blue-500", icon: Layers },
  { name: "Redux", color: "from-violet-400 to-fuchsia-500", icon: InfinityIcon },
  { name: "Node.js", color: "from-emerald-400 to-lime-400", icon: Cpu },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-black via-black to-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-semibold md:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {skills.map(({ name, color, icon: Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square cursor-pointer select-none overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
              <div className="absolute -inset-10 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Icon className="h-7 w-7 text-white/90 drop-shadow-md" />
                <span className="text-sm font-medium text-white/80">{name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
