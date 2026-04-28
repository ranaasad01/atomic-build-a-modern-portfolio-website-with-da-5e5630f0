"use client";

import { motion } from "framer-motion";
import { MapPin, Download, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              About Me
            </span>
            <h2 className="section-title mt-2">
              Crafting digital experiences
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Passionate about building products that are fast, accessible, and
              delightful to use.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto lg:mx-0 w-72 h-72 sm:w-80 sm:h-80">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-light/20 blur-xl" />
              <div className="absolute -inset-2 rounded-2xl border border-accent/20" />
              <div className="absolute -inset-4 rounded-2xl border border-accent/10" />

              {/* Avatar placeholder */}
              <div className="relative w-full h-full rounded-2xl glass-card overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 via-surface to-accent-light/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-light mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-accent/30">
                      AM
                    </div>
                    <p className="text-sm text-muted">Alex Morgan</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium">Open to work</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Bio Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{personalInfo.location}</span>
              </div>

              <p className="text-foreground/80 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>

              {/* Key points */}
              <ul className="space-y-3">
                {[
                  "Specialized in React, Next.js, and TypeScript",
                  "Strong focus on performance and accessibility",
                  "Experience with both startups and enterprise teams",
                  "Open source contributor and technical writer",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  className="btn-primary"
                  download
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-secondary"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
          {personalInfo.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center hover:border-accent/30 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
