import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
  status: "live" | "beta" | "archived";
  gradient?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const ProjectList = () => {
  const projects: Project[] = [
    {
      name: "PlanVault",
      description: "Smart bookmarking + planning app.",
      link: "https://planvault.tranvu.dev",
      tags: ["React", "TypeScript", "Supabase"],
      status: "live",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dynamic Island Todo",
      description: "Todo app inspired by iOS dynamic island.",
      link: "https://todo.tranvu.dev",
      tags: ["React", "Framer Motion", "TailwindCSS"],
      status: "beta",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <motion.div
      className="grid gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project) => (
        <motion.a
          key={project.name}
          href={project.link}
          className="group relative p-6 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${project.gradient}`}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-mono text-base mb-1 font-medium text-zinc-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
              <motion.span
                className={`badge ${
                  project.status === "live"
                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                    : "bg-zinc-100 dark:bg-neutral-800 border-zinc-200 dark:border-neutral-700"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {project.status}
              </motion.span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="text-xs text-zinc-500 dark:text-neutral-400 font-mono"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
