"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="section-title mt-2">Featured Projects</h2>
            <p className="section-subtitle mx-auto mt-3">
              A selection of projects I&apos;ve built — from SaaS platforms to
              open source tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                  (activeFilter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "glass text-muted hover:text-foreground hover:border-accent/30")
                }
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            No projects in this category yet.
          </div>
        )}

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <p className="text-muted mb-4">
              Want to see more? Check out my GitHub for all projects.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              View All on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
