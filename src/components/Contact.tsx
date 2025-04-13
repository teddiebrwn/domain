import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { cn } from "../lib/utils";

export function Contact() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { email, message });
  };

  return (
    <section className="py-24" id="contact">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className={cn(
              "text-3xl font-bold mb-4",
              theme === "dark" ? "text-white" : "text-neutral-900"
            )}
          >
            Get in Touch
          </h2>
          <p
            className={cn(
              "text-lg mb-8",
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            )}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className={cn(
              "p-8 rounded-2xl border",
              theme === "dark"
                ? "bg-neutral-900/50 border-neutral-800"
                : "bg-neutral-50 border-neutral-200"
            )}
          >
            <div className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg outline-none transition-colors",
                    theme === "dark"
                      ? "bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-600"
                      : "bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:border-neutral-400",
                    "border"
                  )}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="I'll use this to get back to you."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg outline-none transition-colors resize-none",
                    theme === "dark"
                      ? "bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-neutral-600"
                      : "bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:border-neutral-400",
                    "border"
                  )}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={cn(
                    "w-full px-6 py-3 rounded-lg font-medium transition-colors",
                    theme === "dark"
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-black text-white hover:bg-neutral-800"
                  )}
                >
                  Send Message
                </button>
              </div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
