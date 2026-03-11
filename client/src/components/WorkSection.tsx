import { useState } from "react";
import { motion } from "framer-motion";

const CAREER = [
  {
    date: "May 2025–Present",
    company: "ChannelCore",
    role: "Founding Engineer",
    location: "Remote / Irvine, CA",
    description:
      "Architecting PitchPilot end-to-end — an AI-native sales orchestration platform. Leveraging LLM-paired development to ship features 10x faster across the full stack.",
    tags: ["Next.js", "AI Orchestration", "LangChain", "Product Strategy"],
    featured: true,
    links: [{ label: "./pitchpilot.md", href: "#" }],
  },
  {
    date: "Aug 2023–Jul 2024",
    company: "R360 Group (HDFC SmartBuy)",
    role: "Software Engineer II",
    location: "Bengaluru, India",
    description:
      "Led a team of 6 to modernize e-commerce rewards. Migrated monoliths to Spring Boot microservices and automated infra with Terraform.",
    tags: ["Java", "AWS/GCP", "Terraform", "Microservices"],
    featured: false,
    links: [],
  },
  {
    date: "Apr 2022–Aug 2023",
    company: "Brillio (Verizon 5G)",
    role: "Software Engineer I",
    location: "Bengaluru, India",
    description:
      "Engineered high-throughput Go microservices for 5G network management. Achieved 90%+ test coverage with non-blocking architectures.",
    tags: ["Go", "Kubernetes", "Kafka", "Spring WebFlux"],
    featured: false,
    links: [],
  },
  {
    date: "Aug 2020–Apr 2022",
    company: "Capgemini",
    role: "Senior Software Engineer",
    location: "Hyderabad/Bengaluru, India",
    description:
      "Scaled enterprise Spring Boot applications and migrated legacy systems to microservices. Enhanced security with JWT and automated CI/CD.",
    tags: ["Core Java", "Spring Cloud", "Jenkins", "Elasticsearch"],
    featured: false,
    links: [],
  },
];

interface WorkCardProps {
  item: (typeof CAREER)[number];
  index: number;
}

function WorkCard({ item, index }: WorkCardProps) {
  const [open, setOpen] = useState(item.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`border rounded p-5 transition-all duration-300 font-mono ${
        open
          ? "bg-card border-primary shadow-lg shadow-primary/20"
          : "hover:bg-card/80 border-primary/20 hover:border-primary/50"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between text-left bg-transparent border-none cursor-pointer p-0"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <span className="text-primary/60 text-lg w-8 flex-shrink-0 pt-0.5">
            {open ? "▼" : "▶"}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-bold text-foreground gradient-text">
                {item.company}
              </h3>
              {item.featured && (
                <span className="text-[10px] uppercase tracking-widest text-primary bg-primary/20 border border-primary/40 px-2.5 py-1 rounded-full font-bold">
                  current
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1.5">
              {item.role}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-0.5">
              {item.location}
            </p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground/50 whitespace-nowrap ml-4 pt-1 hidden sm:block font-semibold">
          {item.date}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pl-12 pt-4 border-t border-primary/20 mt-4">
          {/* Date on mobile */}
          <span className="text-xs text-muted-foreground/50 sm:hidden block mb-3 font-semibold">
            {item.date}
          </span>

          <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-[600px] mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs text-primary bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full font-medium hover:bg-primary/25 transition-colors duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {item.links.length > 0 && (
            <div className="flex gap-4">
              {item.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary no-underline hover:text-primary/80 font-semibold transition-colors duration-300"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label mb-8">// career_history []</p>
      </motion.div>

      <div className="space-y-3">
        {CAREER.map((item, i) => (
          <WorkCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
