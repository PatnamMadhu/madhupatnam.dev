import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalFrameProps {
  children: ReactNode;
  path?: string;
  version?: string;
}

export function TerminalFrame({
  children,
  path = "~/infrastructure/madhu_patnam",
  version = "sys.ai_v2.0",
}: TerminalFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen w-full flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-[900px]">
        {/* Modern AI Engineering Frame (Code Brutalism) */}
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/5 bg-[#050505]/60 backdrop-blur-xl">
          
          {/* Technical Command Bar */}
          <div className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center justify-between px-4">
            {/* Status Indicator (Left) */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-4 h-4 rounded-sm bg-primary/20 border border-primary/30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase">
                {version}
              </span>
            </div>

            {/* Path (Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <span className="text-[12px] font-mono text-zinc-400">
                {path}
              </span>
            </div>

            {/* Metrics/Network (Right) */}
            <div className="flex items-center gap-4">
               <span className="text-[11px] font-mono text-zinc-500">
                ms_ping: 12
              </span>
               <span className="text-[11px] font-mono text-green-500/80">
                STATUS: OK
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative scrollbar-hide overflow-y-auto">
            <div className="max-w-[740px] mx-auto px-6 py-12 md:py-16">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}