"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/lib/data";

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];
const levelColors = [
  "",
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-blue-400",
  "bg-green-400",
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Tech Stack
            </span>
            <h2 className="section-title mt-2">Skills &amp; Technologies</h2>
            <p className="section-subtitle mx-auto mt-3">
              A curated set of tools and technologies I use to build modern web
              applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.15}>
              <div className="glass-card p-6 h-full hover:border-accent/30 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted">
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <div className="h-1.5 bg-surface-hover rounded-full overflow-hidden">
                        <motion.div
                          className={"h-full rounded-full " + levelColors[skill.level]}
                          initial={{ width: 0 }}
                          whileInView={{ width: (skill.level / 5) * 100 + "%" }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech badges cloud */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted mb-6 uppercase tracking-widest font-medium">
              Also familiar with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Prisma",
                "tRPC",
                "Zustand",
                "React Query",
                "Zod",
                "Jest",
                "Playwright",
                "Storybook",
                "Turborepo",
                "Nx",
                "Terraform",
                "GitHub Actions",
                "Stripe",
                "Supabase",
                "PlanetScale",
                "Cloudflare",
              ].map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
