import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
  status: "live" | "beta" | "archived";
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
    },
    {
      name: "Dynamic Island Todo",
      description: "Todo app inspired by iOS dynamic island.",
      link: "https://todo.tranvu.dev",
      tags: ["React", "Framer Motion", "TailwindCSS"],
      status: "beta",
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
          className="card group"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-mono text-base mb-1">{project.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
            <motion.span className="badge" whileHover={{ scale: 1.05 }}>
              {project.status}
            </motion.span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="text-xs text-neutral-500 dark:text-neutral-400 font-mono"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
