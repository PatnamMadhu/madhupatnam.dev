import { motion } from "framer-motion";

export function TerminalHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 }}
      className="mb-8"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-700">
        {/* Traffic light dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal path */}
        <span className="text-gray-400 font-mono text-sm ml-2">
          madhu@portfolio:~/madhupatnam.dev_
        </span>

        {/* Shell info on right */}
        <div className="flex-1" />
        <span className="text-gray-600 font-mono text-xs">zsh • v1.0</span>
      </div>
    </motion.div>
  );
}
