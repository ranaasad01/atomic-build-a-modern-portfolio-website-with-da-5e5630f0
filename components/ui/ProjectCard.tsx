"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group glass-card p-6 flex flex-col gap-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="tag-badge">{project.category}</span>
            {project.featured && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-yellow-400/10 text-yellow-500 border border-yellow-400/20">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-hover hover:bg-accent/20 hover:text-accent transition-all duration-200"
              aria-label={"GitHub: " + project.title}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-hover hover:bg-accent/20 hover:text-accent transition-all duration-200"
              aria-label={"Live demo: " + project.title}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="skill-badge text-xs py-1 px-2">
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="skill-badge text-xs py-1 px-2 text-muted">
            +{project.tags.length - 5}
          </span>
        )}
      </div>

      {/* Footer link */}
      <Link
        href={"/projects/" + project.slug}
        className="flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all duration-200 mt-auto pt-2 border-t border-border"
      >
        View Details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
