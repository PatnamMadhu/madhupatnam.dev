import { motion } from "framer-motion";

export function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="border-t border-border/50 py-6 pb-12 flex justify-between items-center flex-wrap gap-4 text-xs text-muted-foreground/70 font-mono"
    >
      <div className="flex gap-8 flex-wrap">
        <motion.span
          whileHover={{ color: "hsl(220 90% 56%)" }}
          className="transition-colors duration-200"
        >
          base: <span className="text-muted-foreground/50">irvine, ca</span>
        </motion.span>
        <motion.span
          whileHover={{ color: "hsl(220 90% 56%)" }}
          className="transition-colors duration-200"
        >
          focus:{" "}
          <span className="text-muted-foreground/50">
            ai-native systems
          </span>
        </motion.span>
        <motion.a
          href="https://www.linkedin.com/in/patnam-madhu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: "hsl(192 100% 51%)" }}
          className="transition-colors duration-200 cursor-pointer hover:text-blue-400"
        >
          linkedin: <span className="text-muted-foreground/50">in/patnam-madhu</span>
        </motion.a>
      </div>

      <div className="flex items-center gap-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="border border-primary/40 bg-primary/10 rounded-full px-3 py-1.5 text-xs text-primary font-bold cursor-default"
        >
          ⚡ live
        </motion.span>
        <span className="text-muted-foreground/40">main</span>
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative flex h-2 w-2"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </motion.span>
        <span className="text-muted-foreground/40">dark</span>
      </div>
    </motion.div>
  );
}
