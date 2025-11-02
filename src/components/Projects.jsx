import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const projects = [
  {
    title: "Cinematic Landing",
    tech: ["React", "Framer Motion"],
    media: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Interactive 3D Demo",
    tech: ["Three.js", "R3F"],
    media: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Dashboard UI Kit",
    tech: ["Tailwind", "React"],
    media: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProjectCard({ title, tech, media }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (py - 0.5) * -10;
    const rotY = (px - 0.5) * 10;
    rotateX.set(rotX);
    rotateY.set(rotY);
    x.set((px - 0.5) * 20);
    y.set((py - 0.5) * 20);
  };

  const sheen = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 40%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0.5 backdrop-blur will-change-transform"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-[14px]">
        <img src={media} alt={title} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20" />
        <motion.div style={{ backgroundImage: sheen }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 -mt-16 px-5 pb-5">
        <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{tech.join(" • ")}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-semibold md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
