import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Junior IT Operations Administrator",
    company: "Hootsuite",
    period: "Jan 2025 – Present",
    bullets: [
      "Automated offboarding workflows with Python and Jenkins, reducing manual work by 90% and cutting execution time from hours to minutes.",
      "Built integrations across Okta, Google Workspace, Slack, Jira, Confluence, and internal systems using REST APIs.",
      "Created DocSync AI, a hackathon-winning internal tool for detecting stale Confluence documentation from resolved Jira tickets.",
      "Supported large-scale IT operations, access governance, and MacBook refresh work for a 1,000+ employee organization.",
    ],
    tech: [
      "Python",
      "Bash",
      "Jenkins",
      "Jira API",
      "Confluence API",
      "Slack SDK",
      "Okta",
      "Google Workspace",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Reign Foundation",
    period: "2025 – Present",
    bullets: [
      "Building a French language learning platform alongside a PhD researcher, owning full-stack development from architecture to deployment.",
      "Integrated speech-to-text, text-to-speech, and GPT-4o mini to provide real-time conversational feedback.",
      "Conducted user interviews to define requirements and shape features around learner needs.",
    ],
    tech: [
      "JavaScript",
      "React",
      "Python",
      "REST APIs",
      "OpenWebUI",
      "GPT-4o mini",
      "STT / TTS",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="work"
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
          02 / experience
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-3 bottom-3 w-px bg-[#1f1f1f] hidden md:block"
          />

          <div className="flex flex-col gap-20">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#080808] border-2 border-[#00d4aa] hidden md:block" />

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-semibold text-[#ededed] tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm text-[#00d4aa] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#888] border border-[#1f1f1f] px-3 py-1.5 rounded self-start shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#888] leading-relaxed">
                      <span className="text-[#00d4aa] mt-[3px] shrink-0 text-xs">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs border border-[#1f1f1f] text-[#555] px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
