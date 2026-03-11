import { motion } from "framer-motion";
import { SiteShell } from "@/components/SiteShell";

const THOUGHTS = [
  {
    id: 1,
    title: "AI-native engineering",
    date: "March 2026",
    excerpt: "Building systems from first principles with AI at the core, not as an add-on.",
  },
  {
    id: 2,
    title: "Building production AI systems",
    date: "February 2026",
    excerpt: "Lessons learned scaling AI systems to production: latency, cost, reliability.",
  },
  {
    id: 3,
    title: "LLM orchestration patterns",
    date: "January 2026",
    excerpt: "Effective patterns for managing complex LLM workflows at scale.",
  },
  {
    id: 4,
    title: "Startup lessons",
    date: "December 2025",
    excerpt: "What I learned launching and scaling ChannelCore.",
  },
  {
    id: 5,
    title: "Distributed systems gone wrong",
    date: "November 2025",
    excerpt: "Common pitfalls when building distributed systems and how to avoid them.",
  },
  {
    id: 6,
    title: "The cost of abstraction",
    date: "October 2025",
    excerpt: "When abstractions help and when they hurt, finding the balance.",
  },
];

export default function Thoughts() {
  return (
    <SiteShell activeSection="thoughts">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="section-kicker">thoughts</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            Engineering insights, AI development patterns, and lessons learned building at scale.
          </p>
        </div>

        <div className="space-y-8">
          {THOUGHTS.map((thought, index) => (
            <motion.a
              key={thought.id}
              href={`/thoughts/${thought.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group block border-l border-slate-800 py-2 pl-5 transition-colors duration-200 hover:border-sky-400/60"
            >
              <p className="text-base font-semibold tracking-tight text-slate-100 transition-colors duration-200 group-hover:text-sky-300">
                {thought.title}
              </p>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">{thought.date}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                {thought.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </SiteShell>
  );
}
