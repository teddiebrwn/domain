import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteConfig.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-accent/5 dark:bg-accent-dark/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
