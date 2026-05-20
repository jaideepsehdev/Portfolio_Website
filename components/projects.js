import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    name: "Pandemic Board Game",
    category: "Game Dev",
    description:
      "A collaborative digital version of the Pandemic board game with an AI player that adapts to configurable difficulty levels. Built with design patterns for clean, extensible architecture.",
    tech: ["Java", "OOP", "Design Patterns", "AI Player", "JUnit"],
    github: "https://github.com/jaideepsehdev",
    featured: true,
  },
  {
    name: "Blackfoot Helper",
    category: "Language Tech",
    description:
      "A Python application designed to assist with learning the Blackfoot language, incorporating vocabulary and pronunciation tools to support Indigenous language revitalization.",
    tech: ["Python", "NLP", "Language Learning"],
    github: "https://github.com/jaideepsehdev",
    featured: false,
  },
  {
    name: "Python Interpreter",
    category: "Systems",
    description:
      "A custom Python interpreter built in C++, implementing core language features including expression evaluation, variable binding, and control flow parsing.",
    tech: ["C++", "AST", "Lexer", "Parser", "Interpreter"],
    github: "https://github.com/jaideepsehdev",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="Projects"
      className="relative bg-[#080808] py-32 px-6 border-t border-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#00d4aa] tracking-[0.3em] uppercase mb-6"
        >
          03 / projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold text-[#ededed] tracking-tight mb-16"
        >
          Things I&apos;ve Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={i}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative border border-[#1f1f1f] rounded-xl p-6 bg-[#0a0a0a] hover:border-[#00d4aa]/25 hover:bg-[#0d0d0d] transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-[#00d4aa]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-[10px] text-[#00d4aa] border border-[#00d4aa]/20 bg-[#00d4aa]/5 px-2.5 py-1 rounded-full tracking-wider">
                  {project.category}
                </span>
                <span className="text-[#555] group-hover:text-[#ededed] transition-colors text-base leading-none mt-0.5">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#ededed] mb-3 tracking-tight group-hover:text-[#00d4aa] transition-colors duration-200">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] border border-[#1a1a1a] text-[#555] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/jaideepsehdev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#888] hover:text-[#00d4aa] transition-colors tracking-wider"
          >
            more on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
