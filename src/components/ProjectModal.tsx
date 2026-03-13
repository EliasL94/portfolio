"use client";

import { motion } from "framer-motion";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useEffect, useState, useCallback } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Filter out the cover image (-0) and placeholders from the gallery
  const galleryImages = project.images.filter(
    (img) => !img.includes("-0.") && img !== "placeholder"
  );

  // If no images left (e.g. only one image exists and it's a -0), use the first one available
  const displayImages = galleryImages.length > 0 ? galleryImages : [project.images[0]];

  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCurrentImage((p) => (p + 1) % displayImages.length);
      if (e.key === "ArrowLeft")
        setCurrentImage((p) => (p - 1 + displayImages.length) % displayImages.length);
    },
    [onClose, displayImages.length]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          layoutId={`card-${project.id}`}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-xl transition-all hover:bg-black/60 hover:scale-110 active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image gallery */}
          <motion.div
            layoutId={`image-${project.id}`}
            className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
          >
            <div className="flex h-full items-center justify-center">
              {displayImages[currentImage] && displayImages[currentImage] !== "placeholder" ? (
                <Image
                  src={displayImages[currentImage]}
                  alt={`${project.title} - ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              ) : (
                <div className="text-center">
                  <span className="text-6xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </span>
                  <p className="mt-2 text-xs text-white/20">
                    {currentImage + 1} / {displayImages.length || 1}
                  </p>
                </div>
              )}
            </div>

            {/* Gallery navigation */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage(
                      (p) => (p - 1 + displayImages.length) % displayImages.length
                    )
                  }
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-xl transition-all hover:bg-black/60 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((p) => (p + 1) % displayImages.length)
                  }
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-xl transition-all hover:bg-black/60 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-2.5 py-1.5 shadow-lg backdrop-blur-xl">
                  {displayImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentImage
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <motion.h2
                layoutId={`title-${project.id}`}
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                {project.title}
              </motion.h2>

              {project.demoLink && (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </div>
              )}
            </div>

            {/* Action links - Moved to top for immediate visibility */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/demo inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Démo Live
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                {project.githubLinkBack ? "Code Front" : "Voir le code"}
              </a>
              {project.githubLinkBack && (
                <a
                  href={project.githubLinkBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Code Back
                </a>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                  À propos du projet
                </h4>
                <p className="leading-relaxed text-white/50">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Badges */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-sm text-white/60 transition-colors hover:border-white/[0.15] hover:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
