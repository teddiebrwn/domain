"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const Navigation = () => {
  const [copied, setCopied] = useState(false);

  const links: NavLink[] = [
    { label: "Projects", href: "#projects" },
    {
      label: "GitHub",
      href: "https://github.com/teddiebrwn",
      isExternal: true,
    },
    { label: "X", href: "https://x.com/tranvu_dev?s=21", isExternal: true },
    {
      label: "Facebook",
      href: "https://www.facebook.com/teddievux/",
      isExternal: true,
    },
  ];

  const email = "contact@tranvu.dev";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      className="fixed flex items-center gap-1 p-1 -translate-x-1/2 border rounded-full bottom-8 left-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-neutral-200 dark:border-neutral-800"
    >
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          className="px-4 py-2 font-mono text-sm transition-colors text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.a>
      ))}
      <motion.button
        onClick={copyEmail}
        className="px-4 py-2 font-mono text-sm transition-colors text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={copied ? "copied" : "email"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {copied ? "Copied!" : email}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  );
};
