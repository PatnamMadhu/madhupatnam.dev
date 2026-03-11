import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "index", href: "/" },
  { label: "work", href: "/work" },
  { label: "thoughts", href: "/thoughts" },
  { label: "stack", href: "/stack" },
  { label: "education", href: "/education" },
];

interface SiteShellProps {
  activeSection: string;
  children: ReactNode;
}

export function SiteShell({ activeSection, children }: SiteShellProps) {
  const [, navigate] = useLocation();

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative z-10 min-h-screen px-2 py-2 md:px-4 md:py-4"
    >
      <div className="mx-auto flex min-h-screen max-w-[1160px] py-12 items-start justify-center">
        <div className="terminal-shell w-full overflow-hidden rounded-[14px]">
          <div className="terminal-titlebar flex h-[42px] items-center justify-between gap-4 px-5 md:px-6">
            <div className="flex items-center gap-3">
              <span className="traffic-dot bg-[#ff5f57]" />
              <span className="traffic-dot bg-[#febc2e]" />
              <span className="traffic-dot bg-[#28c840]" />
              <span className="hidden pl-4 text-[0.82rem] font-medium tracking-[0.04em] text-slate-400 md:inline">
                madhu@portfolio:~/madhupatnam.dev_
              </span>
            </div>

            <span className="text-[0.82rem] tracking-[0.16em] text-slate-500">
              zsh • v3.0.1
            </span>
          </div>

          <div className="terminal-grid relative px-5 py-10 md:px-12 md:py-12">
            <div className="mx-auto max-w-[1260px]">
              <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="pt-[2px] text-[1.02rem] font-semibold tracking-[0.02em] text-sky-400">
                  madhu patnam
                </div>

                <div className="flex flex-wrap items-center gap-5 md:gap-6">
                  {NAV_ITEMS.map((item) => {
                    const active = activeSection === item.label;

                    return (
                      <button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                        className={`border-b bg-transparent pb-[2px] text-[0.94rem] font-semibold tracking-[0.02em] transition-colors ${
                          active
                            ? "border-sky-300 text-slate-100"
                            : "border-transparent text-slate-500 hover:text-slate-200"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => navigate("/connect")}
                    className={`rounded-[6px] border px-5 py-[7px] text-[0.82rem] font-semibold tracking-[0.24em] transition-all ${
                      activeSection === "connect"
                        ? "border-sky-400/80 bg-transparent text-sky-300"
                        : "border-sky-800/80 text-sky-400 hover:border-sky-400/70 hover:bg-sky-400/5"
                    }`}
                  >
                    CONNECT
                  </button>
                </div>
              </div>

              <div className="max-w-[860px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
