// src/App.tsx
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./components/ui/Toast";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="relative min-h-screen bg-bg dark:bg-bg-dark text-fg dark:text-fg-dark selection:bg-accent/10 selection:text-accent dark:selection:bg-accent-dark/10 dark:selection:text-accent-dark">
          {/* Background gradient */}
          <div className="fixed inset-0 pointer-events-none bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 dark:from-accent-dark/5 dark:to-accent-dark/5" />

          {/* Content */}
          <div className="relative">
            <Navigation />

            <AnimatePresence mode="wait">
              <motion.main
                className="container px-4 py-8 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.48, 0.15, 0.25, 0.96],
                }}
              >
                <Hero />
                <Projects />
                <Skills />
                <Contact />
              </motion.main>
            </AnimatePresence>

            <footer className="relative py-8 mt-16 border-t border-border/40 dark:border-border-dark/40">
              <div className="container px-4 mx-auto">
                <motion.div
                  className="space-y-2 text-center text-muted dark:text-muted-dark"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm">
                    Built with{" "}
                    <a
                      href="https://react.dev"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity text-accent dark:text-accent-dark hover:opacity-70"
                    >
                      React
                    </a>
                    ,{" "}
                    <a
                      href="https://www.typescriptlang.org"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity text-accent dark:text-accent-dark hover:opacity-70"
                    >
                      TypeScript
                    </a>
                    , and{" "}
                    <a
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity text-accent dark:text-accent-dark hover:opacity-70"
                    >
                      Tailwind CSS
                    </a>
                  </p>
                  <p className="flex items-center justify-center space-x-2 text-sm">
                    <span>Deployed on</span>
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 transition-opacity text-accent dark:text-accent-dark hover:opacity-70"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 76 65"
                        fill="currentColor"
                      >
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                      </svg>
                      <span>Vercel</span>
                    </a>
                  </p>
                </motion.div>
              </div>
            </footer>
          </div>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
