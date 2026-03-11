import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaDocker,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiApachekafka,
  SiDotnet,
  SiFramer,
  SiGo,
  SiGooglecloud,
  SiKubernetes,
  SiLangchain,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp, TbBrain, TbBracketsAngle, TbDatabaseSearch, TbPrompt, TbTopologyStar3 } from "react-icons/tb";
import { SiteShell } from "@/components/SiteShell";

type StackItem = {
  name: string;
  icon: IconType;
};

const BACKEND: StackItem[] = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNodeJs },
  { name: "C#", icon: TbBrandCSharp },
  { name: ".NET", icon: SiDotnet },
  { name: "Go", icon: SiGo },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "GCP", icon: SiGooglecloud },
];

const FRONTEND: StackItem[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
];

const AI_SYSTEMS: StackItem[] = [
  { name: "LLM Orchestration", icon: TbTopologyStar3 },
  { name: "LangChain", icon: SiLangchain },
  { name: "Vector Databases", icon: TbDatabaseSearch },
  { name: "Prompt Engineering", icon: TbPrompt },
  { name: "RAG Systems", icon: TbBrain },
  { name: "Agent Frameworks", icon: TbBracketsAngle },
];

function StackGrid({
  items,
  delay,
}: {
  items: StackItem[];
  delay: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.02 }}
            className="flex items-center gap-3 rounded-md border border-slate-800 px-3 py-2 text-xs text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-100 md:text-sm"
          >
            <Icon className="h-4 w-4 shrink-0 text-sky-400" />
            <span>{item.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Stack() {
  return (
    <SiteShell activeSection="stack">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="section-kicker">stack</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            Technologies and tools I use to build scalable systems and AI-native platforms.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="mb-4 text-sm font-semibold tracking-tight text-slate-100">
            backend & infrastructure
          </h3>
          <StackGrid items={BACKEND} delay={0.1} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h3 className="mb-4 text-sm font-semibold tracking-tight text-slate-100">
            frontend & design
          </h3>
          <StackGrid items={FRONTEND} delay={0.15} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="mb-4 text-sm font-semibold tracking-tight text-slate-100">
            ai & llm systems
          </h3>
          <StackGrid items={AI_SYSTEMS} delay={0.2} />
        </motion.div>
      </motion.div>
    </SiteShell>
  );
}
