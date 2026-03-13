"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Zap, Database, Search, Rocket } from "lucide-react";
import { useState, useRef } from "react";

const steps = [
  {
    title: "Comprendre & Organiser",
    description: "Avant de coder, je prends le temps de bien imaginer le projet pour construire une base solide et bien structurée.",
    icon: Database,
    color: "blue",
  },
  {
    title: "Design & Visuel",
    description: "J'imagine une interface jolie, moderne et surtout très simple à utiliser pour tout le monde.",
    icon: Layout,
    color: "purple",
  },
  {
    title: "Le Code",
    description: "Je donne vie au projet en écrivant un code soigné, que ce soit pour ce qu'on voit à l'écran ou pour les coulisses.",
    icon: Code2,
    color: "emerald",
  },
  {
    title: "Mise en Ligne",
    description: "Je vérifie que chaque détail fonctionne parfaitement avant de lancer officiellement le site sur le web.",
    icon: Rocket,
    color: "amber",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative px-6 py-24 sm:px-8 lg:px-12 bg-black">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Comment je travaille
        </h2>
        <p className="text-white/40">
          De la première idée jusqu&apos;à la mise en ligne, voici les étapes 
          que je suis pour créer des projets de qualité.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <WorkflowCard key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

function WorkflowCard({ step, index }: { step: typeof steps[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = step.icon;

  const colorVariants: Record<string, string> = {
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  };

  const glowVariants: Record<string, string> = {
    blue: "rgba(59,130,246,0.1)",
    purple: "rgba(168,85,247,0.1)",
    emerald: "rgba(16,185,129,0.1)",
    amber: "rgba(245,158,11,0.1)",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
    >
      {/* Mouse-follow glow effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${glowVariants[step.color]}, transparent 65%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorVariants[step.color]}`}>
          <Icon className="h-6 w-6" />
        </div>

        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs font-bold text-white/20">0{index + 1}</span>
          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/50 transition-colors duration-300">
          {step.description}
        </p>
      </div>

      {/* Decorative arrow logic for desktop */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-white/5">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M5 12h14" />
             <path d="m12 5 7 7-7 7" />
           </svg>
        </div>
      )}
    </motion.div>
  );
}
