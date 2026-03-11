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
  // Filter out the cover image (-0) from the gallery to avoid showing logos inside the modal
  const galleryImages = project.images.filter(img => !img.includes("-0."));

  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentImage((p) => (p + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setCurrentImage((p) => (p - 1 + galleryImages.length) % galleryImages.length);
    },
    [onClose, galleryImages.length]
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
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] text-white/50 backdrop-blur-md transition-all hover:bg-white/[0.1] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Image gallery */}
          <motion.div
            layoutId={`image-${project.id}`}
            className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
          >
            <div className="flex h-full items-center justify-center">
              {galleryImages[currentImage] && !galleryImages[currentImage].includes("placeholder") ? (
                <Image
                  src={galleryImages[currentImage]}
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
                    {currentImage + 1} / {galleryImages.length || 1}
                  </p>
                </div>
              )}
            </div>

            {/* Gallery navigation */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage(
                      (p) => (p - 1 + galleryImages.length) % galleryImages.length
                    )
                  }
                  className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-md transition-all hover:bg-black/70 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((p) => (p + 1) % galleryImages.length)
                  }
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-md transition-all hover:bg-black/70 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentImage
                          ? "w-6 bg-white/80"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <motion.h2
              layoutId={`title-${project.id}`}
              className="mb-2 text-2xl font-bold text-white sm:text-3xl"
            >
              {project.title}
            </motion.h2>

            {project.demoLink && (
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Live
              </div>
            )}

            <p className="mb-6 leading-relaxed text-white/50">
              {project.longDescription}
            </p>

            {/* Tech Badges */}
            <div className="mb-8">
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

            {/* Action links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
              >
                <Github className="h-4 w-4" />
                {project.githubLinkBack ? "Front-end" : "Voir le code"}
              </a>
              {project.githubLinkBack && (
                <a
                  href={project.githubLinkBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Back-end
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Démo Live
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
