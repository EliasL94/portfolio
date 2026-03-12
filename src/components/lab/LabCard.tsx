"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./CodeBlock";
import ConsoleOutput from "./ConsoleOutput";
import type { LabExperiment } from "@/data/labData";

interface LabCardProps {
  experiment: LabExperiment;
  index: number;
}

export default function LabCard({ experiment, index }: LabCardProps) {
  const [runState, setRunState] = useState<"idle" | "running" | "done">("idle");
  const [showOutput, setShowOutput] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleRun = () => {
    if (runState === "running") return;

    setRunState("running");
    setShowOutput(false);

    // Simulation d'un délai d'exécution
    setTimeout(() => {
      setShowOutput(true);
      setRunState("done");

      // Réinitialisation après 4s
      setTimeout(() => {
        setRunState("idle");
      }, 4000);
    }, 800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const categoryColors: Record<string, string> = {
    math: "text-blue-400 border-blue-400/20 bg-blue-400/10",
    sort: "text-amber-400 border-amber-400/20 bg-amber-400/10",
    simulation: "text-purple-400 border-purple-400/20 bg-purple-400/10",
    crypto: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
    >
      {/* Lueur de suivi de souris */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.06), transparent 60%)`,
          }}
        />
      )}

      {/* En-tête */}
      <div className="relative z-10 p-5 pb-0">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{experiment.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {experiment.title}
              </h3>
              <p className="mt-0.5 text-sm text-white/40">
                {experiment.description}
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-4 flex items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
              categoryColors[experiment.category]
            }`}
          >
            {experiment.category}
          </span>
          <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-white/30">
            {experiment.complexity}
          </span>
        </div>
      </div>

      {/* Bloc de code */}
      <div className="relative z-10 px-5">
        <CodeBlock
          code={experiment.code}
          filename={`${experiment.id}.py`}
        />
      </div>

      {/* Sortie console */}
      <div className="relative z-10 px-5">
        <AnimatePresence>
          {showOutput && (
            <div className="mt-3">
              <ConsoleOutput lines={experiment.simulatedOutput} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Bouton de lancement */}
      <div className="relative z-10 p-5">
        <button
          onClick={handleRun}
          disabled={runState === "running"}
          className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
            runState === "running"
              ? "cursor-wait border-accent/30 bg-accent/10 text-accent"
              : runState === "done"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border-white/[0.08] bg-white/[0.04] text-white/60 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
          }`}
        >
          {runState === "running" ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block"
              >
                ⟳
              </motion.span>
              Exécution...
            </>
          ) : runState === "done" ? (
            <>
              <span>✓</span>
              Terminé
            </>
          ) : (
            <>
              <span className="transition-transform duration-200 group-hover/btn:scale-110">
                ▶
              </span>
              Lancer
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
