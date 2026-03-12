"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { labExperiments } from "@/data/labData";
import LabCard from "@/components/lab/LabCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categories = [
  { key: "all", label: "Tous" },
  { key: "math", label: "Maths" },
  { key: "sort", label: "Tri" },
  { key: "simulation", label: "Simulation" },
  { key: "crypto", label: "Crypto" },
] as const;

type CategoryFilter = (typeof categories)[number]["key"];

export default function LabPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filtered =
    activeCategory === "all"
      ? labExperiments
      : labExperiments.filter((e) => e.category === activeCategory);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Overlay de texture de bruit */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />

      {/* Lueurs ambiantes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 px-6 py-12 sm:px-8 lg:px-12">
        {/* Bouton retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-5xl"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
        </motion.div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-md"
          >
            <span>🧪</span>
            Expérimentations
          </motion.div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Lab
          </h1>
          <p className="text-lg text-white/40">
            Un terrain d&apos;expérimentation — algorithmes, fonctions
            mathématiques et simulations, avec du code Python exécutable.
          </p>
        </motion.div>

        {/* Filtre par catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mb-12 flex max-w-5xl flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "border-accent/40 bg-accent/15 text-accent"
                  : "border-white/[0.08] bg-white/[0.03] text-white/40 hover:border-white/[0.15] hover:text-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grille de cartes */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {filtered.map((experiment, index) => (
            <LabCard
              key={experiment.id}
              experiment={experiment}
              index={index}
            />
          ))}
        </div>

        {/* État vide */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-lg text-white/30">
              Aucune expérience dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>

      {/* Pied de page */}
      <footer className="border-t border-white/[0.05] px-6 py-12 text-center">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} — Conçu & développé avec précision.
        </p>
      </footer>
    </main>
  );
}
