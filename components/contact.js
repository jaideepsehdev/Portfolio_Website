import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative bg-[#080808] py-32 px-6 border-t border-[#1f1f1f]"
    >
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00d4aa]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#00d4aa] tracking-[0.3em] uppercase mb-8"
        >
          04 / contact
        </motion.p>

        {/* Big CTA heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#ededed] tracking-tight leading-[0.95] mb-8"
        >
          Let&apos;s work
          <br />
          <span className="text-[#00d4aa]">together.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[#888] text-sm max-w-md mb-12 leading-relaxed"
        >
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project in mind, or just want to say hi — my inbox is
          always open.
        </motion.p>

        {/* Email CTA + social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-24"
        >
          <a
            href="mailto:jsa361@sfu.ca"
            className="font-mono text-sm text-[#00d4aa] border border-[#00d4aa]/30 px-6 py-3 rounded hover:bg-[#00d4aa]/10 transition-colors tracking-wider"
          >
            jsa361@sfu.ca ↗
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/jaideepsehdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#ededed] transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaideepsehdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#ededed] transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#333]">Vancouver, Canada</p>
          <p className="font-mono text-xs text-[#333]">
            Designed &amp; built by Jaideep Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
