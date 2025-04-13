import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { siteConfig } from "../config/site";
import { cn } from "../lib/utils";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
          isScrolled
            ? theme === "dark"
              ? "bg-black/90 backdrop-blur-sm border-b border-neutral-800/50"
              : "bg-white/90 backdrop-blur-sm border-b border-neutral-200/50"
            : theme === "dark"
            ? "bg-black"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="/"
              className={cn(
                "text-lg font-bold",
                theme === "dark" ? "text-white" : "text-neutral-900"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteConfig.name}
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {siteConfig.mainNav.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] transition-colors",
                    theme === "dark"
                      ? "text-neutral-400 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900"
                  )}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.title}
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 -mr-2 md:hidden",
                theme === "dark"
                  ? "text-neutral-400 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={cn(
                "absolute inset-0 backdrop-blur-sm",
                theme === "dark" ? "bg-black/90" : "bg-white/90"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className={cn(
                "absolute top-16 inset-x-4 rounded-lg border p-6",
                theme === "dark"
                  ? "bg-neutral-900 border-neutral-800"
                  : "bg-white border-neutral-200"
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <nav className="space-y-6">
                <div className="space-y-4">
                  {siteConfig.mainNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block text-lg transition-colors",
                        theme === "dark"
                          ? "text-neutral-400 hover:text-white"
                          : "text-neutral-600 hover:text-neutral-900"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <div
                  className={cn(
                    "h-px",
                    theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
                  )}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-sm",
                      theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                    )}
                  >
                    Switch theme
                  </span>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      theme === "dark"
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    {theme === "dark" ? (
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
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
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
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
