import { ReactNode, useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleNavigate = (href: string) => {
    navigate(href);
    setMobileOpen(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative z-10 min-h-screen px-2 py-2 md:px-4 md:py-4"
    >
      <div className="mx-auto flex min-h-screen max-w-[1160px] items-start justify-center py-6 md:py-12">
        <div className="terminal-shell w-full overflow-hidden rounded-[14px]">
          <div className="terminal-titlebar flex h-[42px] items-center justify-between gap-3 px-4 md:px-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="traffic-dot bg-[#ff5f57]" />
              <span className="traffic-dot bg-[#febc2e]" />
              <span className="traffic-dot bg-[#28c840]" />
              <span className="pl-3 text-[0.72rem] font-medium tracking-[0.04em] text-slate-400 md:pl-4 md:text-[0.82rem]">
                ~/madhupatnam.dev_
              </span>
            </div>

            <span className="text-[0.72rem] tracking-[0.12em] text-slate-500 md:text-[0.82rem] md:tracking-[0.16em]">
              zsh
            </span>
          </div>

          <div className="terminal-grid relative px-5 py-8 md:px-12 md:py-12">
            <div className="mx-auto max-w-[1260px]">
              <div className="mb-10 md:mb-12">
                <div className="flex items-start justify-between gap-6">
                  <div className="pt-[2px] text-[1.02rem] font-semibold tracking-[0.02em] text-sky-400">
                    madhu patnam
                  </div>

                  <button
                    onClick={() => setMobileOpen((open) => !open)}
                    className="text-[1.05rem] font-semibold tracking-[0.08em] text-slate-300 transition-colors hover:text-sky-300 md:hidden"
                    aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                  >
                    [{mobileOpen ? "x" : ">"}_]
                  </button>

                  <div className="hidden flex-wrap items-center gap-5 md:flex md:gap-6">
                    {NAV_ITEMS.map((item) => {
                      const active = activeSection === item.label;

                      return (
                        <button
                          key={item.label}
                          onClick={() => handleNavigate(item.href)}
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
                      onClick={() => handleNavigate("/connect")}
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

                {mobileOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="mt-7 border-t border-slate-900/80 pt-5 md:hidden"
                  >
                    <div className="flex flex-col gap-5 pl-1">
                      {NAV_ITEMS.map((item) => {
                        const active = activeSection === item.label;

                        return (
                          <button
                            key={item.label}
                            onClick={() => handleNavigate(item.href)}
                            className={`flex items-center gap-3 bg-transparent text-left text-[0.98rem] font-semibold transition-colors ${
                              active ? "text-slate-100" : "text-slate-500"
                            }`}
                          >
                            <span className={active ? "text-sky-400" : "text-transparent"}>
                              &gt;
                            </span>
                            <span>{item.label}</span>
                          </button>
                        );
                      })}

                      <button
                        onClick={() => handleNavigate("/connect")}
                        className="mt-1 flex w-fit items-center gap-3 rounded-[6px] border border-sky-800/80 px-4 py-[7px] text-[0.82rem] font-semibold tracking-[0.24em] text-sky-400 transition-all hover:border-sky-400/70 hover:bg-sky-400/5"
                      >
                        CONNECT
                      </button>
                    </div>
                  </motion.div>
                ) : null}
              </div>

              <div className="max-w-[860px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
