import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "C",
  "C++",
  "MySQL",
  "REST APIs",
  "Git",
  "Jenkins",
  "Bash",
  "Linux",
  "Okta",
  "Jira",
  "HTML / CSS",
  "Node.js",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="home"
      className="relative bg-[#080808] py-32 px-6 border-t border-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#00d4aa] tracking-[0.3em] uppercase mb-20"
        >
          01 / about
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: photo + bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#1f1f1f] ring-2 ring-offset-2 ring-offset-[#080808] ring-[#00d4aa]/25 shrink-0">
                <Image
                  src="/jaideep_image.jpg"
                  fill
                  className="object-cover"
                  alt="Jaideep Singh"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#ededed] tracking-tight">
                  Jaideep Singh
                </h2>
                <p className="font-mono text-xs text-[#888] mt-1">
                  Vancouver, Canada
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#ededed] tracking-tight leading-tight">
                Building things that<br />
                <span className="text-[#00d4aa]">actually work.</span>
              </h2>
              <p className="text-[#888] leading-relaxed text-sm">
                I&apos;m a recent Computer Science graduate from Simon Fraser
                University. I build full-stack applications, automation
                pipelines, and AI-assisted tools that solve practical problems
                for real users.
              </p>
              <p className="text-[#888] leading-relaxed text-sm">
                My recent work spans Python and Jenkins automation at Hootsuite,
                internal tools connecting Slack, Jira, Confluence, and identity
                platforms through APIs, and a full-stack French language
                learning platform with speech-to-text, text-to-speech, and
                LLM-powered feedback.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
              <span className="font-mono text-xs text-[#888]">
                open to new opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: skills */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6"
            >
              technologies &amp; tools
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2"
            >
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{
                    borderColor: "#00d4aa55",
                    color: "#00d4aa",
                    transition: { duration: 0.15 },
                  }}
                  className="font-mono text-xs border border-[#1f1f1f] text-[#888] px-3 py-1.5 rounded cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
