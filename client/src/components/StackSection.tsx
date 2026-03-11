import { motion } from "framer-motion";

const CORE_TECH = [
  { name: "Java", icon: "☕" },
  { name: "Go", icon: "🐹" },
  { name: "Spring Boot", icon: "🚀" },
  { name: "PostgreSQL", icon: "🗄️" },
  { name: "Kafka", icon: "📨" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
];

const EDGE_TECH = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "LangChain", icon: "🔗" },
  { name: "LLM Orchestration", icon: "🧠" },
  { name: "Vector DBs", icon: "📊" },
  { name: "Vercel", icon: "🌐" },
];

function TechColumn({
  title,
  comment,
  items,
  accentColor,
  delay,
}: {
  title: string;
  comment: string;
  items: { name: string; icon: string }[];
  accentColor: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-effect rounded-lg p-6 glow-border"
    >
      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-border/40">
        <span className="text-lg" style={{ color: accentColor }}>
          ◆
        </span>
        <span className="text-sm font-bold text-foreground">
          {title}
        </span>
        <span className="text-xs text-muted-foreground/50 ml-auto">
          {"// " + comment}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.05 }}
            className="flex items-center gap-3 py-2.5 px-3 rounded hover:bg-white/5 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              {tech.icon}
            </span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function StackSection() {
  return (
    <section id="stack" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label mb-10">{"// tech_stack [ backend, frontend, ai ]"}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TechColumn
          title="the core"
          comment="enterprise scale"
          items={CORE_TECH}
          accentColor="#0080FF"
          delay={0.1}
        />
        <TechColumn
          title="the edge"
          comment="ai-native"
          items={EDGE_TECH}
          accentColor="#0080FF"
          delay={0.3}
        />
      </div>
    </section>
  );
}
