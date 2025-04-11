import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.main
      className="min-h-screen w-full flex items-center justify-center text-center px-[max(env(safe-area-inset-left),1rem)] pb-[max(env(safe-area-inset-bottom),2rem)] pt-[max(env(safe-area-inset-top),2rem)] font-sans"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-base font-medium sm:text-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          fullstack dev <span className="mx-1">|</span>
          <span className="font-medium text-muted-foreground">@tranvu.dev</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-sm text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Things that work. Nothing more.
        </motion.p>

        {/* <motion.p
          className="mt-6 text-sm text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Find my{" "}
          <a href="/projects" className="link-clean">
            Projects
          </a>{" "}
          or check out the{" "}
          <a href="/blog" className="link-clean">
            Blog
          </a>
          .
        </motion.p> */}

        <motion.p
          className="mt-2 text-sm text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          ✉️{" "}
          <a href="mailto:hi@tranvu.dev" className="link-clean">
            hi@tranvu.dev
          </a>{" "}
          /{" "}
          <a href="mailto:contact@tranvu.dev" className="link-clean">
            contact@tranvu.dev
          </a>
        </motion.p>

        <motion.p
          className="mt-4 text-sm text-zinc-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          powered by{" "}
          <Typewriter
            words={["TypeScript", "Vercel", "V0", "clean code ✨", "coffee ☕"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </motion.p>
      </div>
    </motion.main>
  );
}
