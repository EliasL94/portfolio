"use client";

import { motion } from "framer-motion";

interface ConsoleOutputProps {
  lines: string[];
}

export default function ConsoleOutput({ lines }: ConsoleOutputProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60 backdrop-blur-md"
    >
      {/* En-tête du terminal */}
      <div className="flex items-center gap-2 border-b border-emerald-500/10 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
        <span className="text-[11px] font-medium tracking-wide text-emerald-400/60">
          TERMINAL
        </span>
      </div>

      {/* Lignes de sortie */}
      <div className="p-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.3,
              ease: "easeOut",
            }}
            className={`${
              i === 0
                ? "text-white/40"
                : line.startsWith("✓")
                ? "text-emerald-400"
                : "text-white/70"
            }`}
          >
            {i === 0 ? (
              <span>
                <span className="text-emerald-400/80">$</span> {line.replace(">>> ", "")}
              </span>
            ) : (
              line
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
