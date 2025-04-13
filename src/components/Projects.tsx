import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <motion.h2
          className="text-4xl font-bold tracking-tight mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark dark:from-accent-dark dark:to-accent"
          variants={itemVariants}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div
                className="relative p-6 rounded-lg border border-border/40 dark:border-border-dark/40 
                          bg-bg/50 dark:bg-bg-dark/50 backdrop-blur-sm
                          group-hover:border-accent/40 dark:group-hover:border-accent-dark/40
                          transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-fg dark:text-fg-dark">
                  {project.title}
                </h3>
                <p className="text-muted dark:text-muted-dark mb-4">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-accent dark:text-accent-dark hover:opacity-70 transition-opacity"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>View Project</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-accent dark:text-accent-dark hover:opacity-70 transition-opacity"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
