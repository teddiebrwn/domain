"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
  id: string;
  name: string;
  shortcut?: string[];
  action: () => void;
  icon?: string;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands: Command[] = [
    {
      id: "theme",
      name: "Toggle theme",
      shortcut: ["⌘", "T"],
      action: () => document.documentElement.classList.toggle("dark"),
      icon: "🎨",
    },
    {
      id: "projects",
      name: "View projects",
      shortcut: ["⌘", "P"],
      action: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
      icon: "📂",
    },
    {
      id: "github",
      name: "Visit GitHub",
      shortcut: ["⌘", "G"],
      action: () => window.open("https://github.com/teddiebrwn", "_blank"),
      icon: "🐱",
    },
    {
      id: "email",
      name: "Copy email",
      shortcut: ["⌘", "E"],
      action: () => {
        navigator.clipboard.writeText("contact@tranvu.dev");
      },
      icon: "📧",
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <input
                  type="text"
                  placeholder="Search commands..."
                  className="w-full bg-transparent border-none outline-none placeholder:text-zinc-500 text-zinc-900 dark:text-white"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="max-h-[60vh] overflow-auto">
                {filteredCommands.map((command) => (
                  <button
                    key={command.id}
                    onClick={() => {
                      command.action();
                      setIsOpen(false);
                    }}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{command.icon}</span>
                      <span className="text-zinc-900 dark:text-white">
                        {command.name}
                      </span>
                    </span>
                    {command.shortcut && (
                      <span className="flex items-center gap-1">
                        {command.shortcut.map((key, i) => (
                          <kbd
                            key={i}
                            className="px-2 py-1 text-xs rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-mono"
                          >
                            {key}
                          </kbd>
                        ))}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
