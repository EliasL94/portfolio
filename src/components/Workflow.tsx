"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Zap, Database, Search, Rocket } from "lucide-react";
import { useState, useRef } from "react";

const steps = [
  {
    title: "Analyse & Architecture",
    description: "Définition des besoins, schématisation des bases de données et choix des patterns (ex: Laravel Actions) pour un code robuste et évolutif.",
    icon: Database,
    color: "blue",
  },
  {
    title: "Conception UI/UX",
    description: "Création d'interfaces modernes et intuitives, avec un focus sur l'accessibilité et la cohérence de la charte graphique.",
    icon: Layout,
    color: "purple",
  },
  {
    title: "Développement Full-Stack",
    description: "Implémentation de la logique métier et des composants interactifs avec Next.js, React ou PHP/Laravel, selon les besoins du projet.",
    icon: Code2,
    color: "emerald",
  },
  {
    title: "Optimisation & Déploiement",
    description: "Tests rigoureux, optimisations SEO/Lighthouse et mise en production continue pour garantir rapidité et stabilité.",
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
          Ma Méthode de Travail
        </h2>
        <p className="text-white/40">
          Une approche structurée pour transformer une idée en une application web performante, 
          du premier schéma technique à la mise en ligne.
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
