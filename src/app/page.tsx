"use client";

import { ProjectList } from "../components/ProjectList";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navigation } from "../components/Navigation";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <main className="flex flex-col max-w-2xl mx-auto px-6 py-24">
        {/* HERO */}
        <section className="mb-16">
          <motion.h1
            className="text-2xl font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            @tranvu.dev
          </motion.h1>
          <motion.p
            className="text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Building minimal, pragmatic software solutions. Focused on React,
            TypeScript, and modern web technologies.
          </motion.p>
        </section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <ProjectList />
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="mt-24 pt-6 border-t border-neutral-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500">
              © {new Date().getFullYear()} tranvu.dev
            </span>
            <ThemeToggle />
          </div>
        </motion.footer>
      </main>

      <Navigation />
    </PageTransition>
  );
}
