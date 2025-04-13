"use client";

import { ProjectList } from "../components/ProjectList";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navigation } from "../components/Navigation";
import { CommandPalette } from "../components/CommandPalette";
import { ScrollProgress } from "../components/ScrollProgress";
import { motion, useInView } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";

export default function HomePage() {
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <PageTransition>
      <ScrollProgress />
      <CommandPalette />

      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:from-black dark:via-black dark:to-black -z-10" />

      <main className="flex flex-col max-w-2xl mx-auto px-6 py-24">
        {/* HERO */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"
              animate={{
                opacity: [0.2, 0.15, 0.2],
                scale: [1, 0.98, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="glass-card relative rounded-2xl p-6 mb-8">
              <h1 className="text-3xl font-mono mb-2">
                <span className="text-slate-600 dark:text-neutral-400">
                  Hi, I'm{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 text-transparent bg-clip-text">
                  @tranvu.dev
                </span>
              </h1>
              <motion.p
                className="text-slate-600 dark:text-neutral-400 min-h-[60px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typewriter
                  words={[
                    "Building minimal, pragmatic software solutions.",
                    "Focused on React and TypeScript.",
                    "Creating modern web experiences.",
                    "Exploring new technologies.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <motion.section
          ref={projectsRef}
          id="projects"
          style={{
            transform: isProjectsInView ? "none" : "translateY(20px)",
            opacity: isProjectsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <ProjectList />
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="mt-24 pt-6 border-t border-slate-200/50 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
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
