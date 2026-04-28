"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max section-padding relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Available badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-sm font-medium text-accent">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xl sm:text-2xl font-semibold text-muted">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 text-balance"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="btn-primary text-base px-8 py-3.5"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-secondary text-base px-8 py-3.5"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:border-accent/50 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:border-accent/50 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:border-accent/50 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <div className="w-px h-6 bg-border mx-1" />
            <a
              href={"mailto:" + socialLinks.email}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {socialLinks.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted cursor-pointer"
            onClick={() => handleScroll("#about")}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
