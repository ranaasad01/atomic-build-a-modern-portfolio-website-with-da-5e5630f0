"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "glass shadow-lg shadow-black/10 dark:shadow-black/30"
            : "bg-transparent")
        }
      >
        <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-lg font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"AM"}
            <span className="text-foreground">{"."}</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={"nav-link" + (isActive ? " active" : "")}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex btn-primary py-2 px-4 text-sm"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface border border-border hover:bg-surface-hover transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-border shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={
                      "px-4 py-3 rounded-lg text-sm font-medium transition-colors " +
                      (isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground hover:bg-surface-hover")
                    }
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="pt-2 border-t border-border mt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn-primary w-full justify-center py-2.5 text-sm"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
