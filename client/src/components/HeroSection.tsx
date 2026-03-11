import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="index" className="space-y-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <p className="section-kicker">index</p>
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.05em] text-slate-50 md:text-6xl">
            hi, i'm madhu.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-lg">
            Founding engineer building AI-native systems that turn ideas into production software.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="space-y-5"
      >
        <h2 className="section-kicker">about</h2>
        <div className="max-w-4xl space-y-5 text-base leading-[1.9] text-slate-300 md:text-lg md:leading-[1.8]">
          <p>
            At ChannelCore, I'm building the platform that helps creators and brands move faster with AI-native workflows and product systems.
          </p>
          <p>
            Previously I worked across investment research, telecom infrastructure, and enterprise platforms, shipping backend services, frontend experiences, and the glue between them.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="space-y-5"
      >
        <h2 className="section-kicker">selected work</h2>
        <a
          href="/work"
          className="inline-flex items-center border-b border-slate-400 pb-1 text-lg text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-300"
        >
          View full work experience
          <span className="ml-3 text-sky-400">{mounted ? "_" : ""}</span>
        </a>
      </motion.div>
    </section>
  );
}
