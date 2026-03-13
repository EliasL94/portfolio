"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 lg:px-12">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Projets Sélectionnés
        </h2>
        <p className="text-white/40">
          Une sélection de mes projets principaux, reflétant mon approche du
          développement moderne et du design interactif.
        </p>
      </motion.div>

      {/* Grid */}
      <LayoutGroup>
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>

      {/* Transition to Workflow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 flex justify-center"
      >
        <a
          href="#workflow"
          className="group flex flex-col items-center gap-3 text-sm text-white/20 transition-colors hover:text-white/40"
        >
          <span>Découvrir ma méthode de travail</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="rounded-full border border-white/10 p-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
