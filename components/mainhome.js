import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const MainHome = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "IT Ops Engineer",
      "Full Stack Builder",
      "Hackathon Winner",
    ],
    loop: true,
    typeSpeed: 65,
    deleteSpeed: 40,
    delaySpeed: 2200,
  });

  return (
    <section
      id="mainhome"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-[0.35] pointer-events-none" />

      {/* Radial glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00d4aa]/[0.04] blur-[100px] pointer-events-none" />

      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4aa]/[0.03] blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-[#00d4aa] text-xs tracking-[0.3em] uppercase mb-6"
        >
          hello, i&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-[#ededed] tracking-tight leading-[0.95] mb-8"
        >
          Jaideep Singh
        </motion.h1>

        <motion.div
          {...fadeUp(0.3)}
          className="h-10 flex items-center justify-center gap-2 mb-12"
        >
          <span className="text-lg sm:text-xl text-[#888]">I&apos;m a </span>
          <span className="text-lg sm:text-xl text-[#ededed] font-medium min-w-[14ch] text-left">
            {text}
            <Cursor cursorStyle="|" cursorColor="#00d4aa" />
          </span>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <ScrollLink
            to="Projects"
            smooth={true}
            duration={700}
            offset={-64}
            className="cursor-pointer inline-flex items-center gap-2 bg-[#00d4aa] text-[#080808] font-semibold font-mono text-sm px-8 py-3 rounded hover:bg-[#00b898] transition-colors select-none"
          >
            view my work
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-64}
            className="cursor-pointer inline-flex items-center gap-2 border border-[#1f1f1f] text-[#888] font-mono text-sm px-8 py-3 rounded hover:border-[#444] hover:text-[#ededed] transition-colors select-none"
          >
            get in touch
          </ScrollLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/jaideepsehdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#ededed] transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <div className="w-px h-4 bg-[#1f1f1f]" />
          <a
            href="https://www.linkedin.com/in/jaideepsehdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#ededed] transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] text-[#333] tracking-[0.3em] uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent" />
      </motion.div>
    </section>
  );
};

export default MainHome;
