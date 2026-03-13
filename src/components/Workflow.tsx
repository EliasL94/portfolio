"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layout, Database, Rocket, ClipboardList, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const steps = [
  {
    id: "ideation",
    title: "Idéation & Organisation",
    description: "Je commence par définir l'idée principale et m'inspirer. J'utilise Trello pour organiser chaque étape méticuleusement.",
    details: "Tout commence par l'idée principale. Je m'inspire de l'existant et je pose les bonnes questions pour cerner le besoin. Ensuite, je mets en place un Trello complet, que ce soit pour un projet solo ou en équipe. J'y rédige des 'user stories' détaillées avec tous les critères techniques pour ne rien laisser au hasard dès le premier jour.",
    icon: ClipboardList,
    color: "blue",
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    description: "Je choisis la stack technique et l'architecture globale tout en m'inspirant des meilleurs designs actuels.",
    details: "Je définis l'architecture du projet et les technologies les plus adaptées (Next.js, Laravel, etc.). Je décide comment le projet sera déployé et comment le Front et le Back vont communiquer. Parallèlement, je recherche des templates et des visuels inspirants pour concevoir une interface moderne et intuitive.",
    icon: Database,
    color: "purple",
  },
  {
    id: "dev",
    title: "Développement & Tests",
    description: "C'est l'étape de création pure. Je code le Front-end et le Back-end en assurant une qualité de code irréprochable.",
    details: "Phase de codage intensif. Je développe les fonctionnalités prévues dans le Trello tout en gardant une vision globale du projet. Une fois le code écrit, je lance une phase de tests rigoureux pour vérifier que tout fonctionne parfaitement sur tous les navigateurs avant de valider la mise en production.",
    icon: Code2,
    color: "emerald",
  },
  {
    id: "deploy",
    title: "Lancement & Maintenance",
    description: "Je déploie le projet sur le web et j'assure son suivi sur le long terme pour garantir sa stabilité.",
    details: "Le déploiement n'est que le début. Une fois le site en ligne, je m'assure de sa stabilité et de ses performances. Un bon projet doit être maintenable : je reste disponible pour corriger les bugs, mettre à jour les dépendances et faire évoluer les fonctionnalités selon les nouveaux besoins.",
    icon: Rocket,
    color: "amber",
  },
];

export default function Workflow() {
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null);

  return (
    <section id="workflow" className="relative px-6 py-24 sm:px-8 lg:px-12 bg-black">
      {/* Lueurs ambiantes */}
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
          Cliquez sur chaque étape pour découvrir mon processus détaillé 
          et ma méthode d&apos;organisation.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <WorkflowCard 
            key={index} 
            step={step} 
            index={index} 
            onClick={() => setSelectedStep(step)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedStep && (
          <WorkflowModal 
            step={selectedStep} 
            onClose={() => setSelectedStep(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function WorkflowCard({ step, index, onClick }: { step: typeof steps[0], index: number, onClick: () => void }) {
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
      onClick={onClick}
      className="group relative cursor-pointer h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] active:scale-[0.98]"
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${glowVariants[step.color]}, transparent 65%)`,
          }}
        />
      )}

      <div className="relative z-10 text-left">
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
        
        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40">
          En savoir plus
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>

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

function WorkflowModal({ step, onClose }: { step: typeof steps[0], onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const Icon = step.icon;
  const colorVariants: Record<string, string> = {
    blue: "text-blue-400 border-blue-400/20",
    purple: "text-purple-400 border-purple-400/20",
    emerald: "text-emerald-400 border-emerald-400/20",
    amber: "text-amber-400 border-amber-400/20",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0a] p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/30 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border ${colorVariants[step.color]} bg-white/[0.02]`}>
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          {step.title}
        </h3>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-white/70">
            {step.details}
          </p>
          
          {step.id === "ideation" && (
            <div className="mt-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2 block">Outil clé</span>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#0079BF] flex items-center justify-center">
                  <span className="font-bold text-white text-xs">Tr</span>
                </div>
                <span className="font-medium text-white/60">Trello — Organisation en User Stories</span>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-white py-3 text-sm font-bold text-black transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          Fermer
        </button>
      </motion.div>
    </div>
  );
}
