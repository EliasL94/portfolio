"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useRef, useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
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

  return (
    <motion.div
      ref={cardRef}
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Mouse-follow glow effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.08), transparent 60%)`,
          }}
        />
      )}

      {/* Image area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent">
        <motion.div
          layoutId={`image-${project.id}`}
          className={`relative h-full w-full ${
            project.images[0]?.endsWith(".svg") ? "bg-white" : ""
          }`}
        >
          {project.images[0] && !project.images[0].includes("-1.jpg") ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className={`transition-transform duration-500 group-hover:scale-110 ${
                project.images[0].endsWith(".svg") || 
                project.images[0].includes("pharmacie-0.png") ||
                project.images[0].includes("quiz-android-0.png") ||
                project.images[0].includes("reseau-social-0.png")
                  ? "object-contain p-6"
                  : "object-cover"
              } ${project.images[0].includes("image-editor-0.png") ? "scale-105" : ""}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-transparent to-accent/5 p-8">
              <span className="text-4xl font-bold text-white/10">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        {/* Live badge */}
        {project.demoLink && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <motion.h3
          layoutId={`title-${project.id}`}
          className="mb-2 text-lg font-semibold text-white"
        >
          {project.title}
        </motion.h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/40">
          {project.description}
        </p>

        {/* Tags preview */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-0.5 text-xs text-white/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-0.5 text-xs text-white/30">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Hover reveal arrow */}
        <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ExternalLink className="h-3.5 w-3.5 text-white/60" />
        </div>
      </div>
    </motion.div>
  );
}
