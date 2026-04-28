import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-1">AM.</div>
            <p className="text-sm text-muted">
              Full-Stack Engineer &mdash; San Francisco, CA
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:hello@alexdev.io"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Alex Morgan. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
