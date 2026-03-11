import { motion } from "framer-motion";
import { SiteShell } from "@/components/SiteShell";

const CAREER = [
  {
    date: "May 2025-Present",
    company: "ChannelCore",
    role: "Founding Engineer",
    description:
      "Architecting AI-native platform for creator-brand collaboration. Building full-stack, AI-paired development.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    date: "Nov 2024-Feb 2025",
    company: "AI Republic",
    role: "Software Engineer (AI Systems)",
    description:
      "Contributed to AI-driven application development by integrating backend APIs, machine learning workflows, and scalable backend components for production AI services.",
    tags: ["AI Systems", "Backend APIs", "ML Workflows", "Testing"],
  },
  {
    date: "Aug 2023-Jul 2024",
    company: "R360 Group (HDFC SmartBuy)",
    role: "Software Engineer II",
    description:
      "Led team of 6 to modernize e-commerce rewards. Migrated monoliths to Spring Boot microservices.",
    tags: ["Java", "Spring Boot", "AWS", "Microservices"],
  },
  {
    date: "Apr 2022-Aug 2023",
    company: "Brillio (Verizon 5G)",
    role: "Software Engineer",
    description:
      "Engineered high-throughput systems for 5G network management. 90%+ test coverage.",
    tags: ["Go", "Kubernetes", "Kafka"],
  },
  {
    date: "Aug 2020-Apr 2022",
    company: "Capgemini",
    role: "Senior Software Engineer",
    description:
      "Scaled enterprise applications and migrated legacy systems to microservices.",
    tags: ["Java", "Spring Cloud", "AWS"],
  },
];

export default function Work() {
  return (
    <SiteShell activeSection="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="section-kicker">work</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            AI-native full-stack engineer with 5+ years of experience building production systems, shipping end-to-end features, and using AI-paired workflows to move from idea to delivery faster.
          </p>
        </div>

        <div className="space-y-12">
          {CAREER.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-l border-slate-800 pl-5 transition-colors duration-200 hover:border-sky-400/60"
            >
              <p className="mb-1 text-xs text-slate-500 md:text-sm">{job.date}</p>
              <p className="text-base font-semibold tracking-tight text-slate-100">
                {job.company}
              </p>
              <p className="mt-1 text-sm text-slate-300 md:text-base">{job.role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                {job.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 px-3 py-1 text-xs text-slate-500 transition-colors hover:border-slate-600 hover:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SiteShell>
  );
}
