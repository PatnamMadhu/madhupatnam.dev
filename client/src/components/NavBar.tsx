import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "index", href: "/" },
  { label: "work", href: "/work" },
  { label: "thoughts", href: "/thoughts" },
  { label: "stack", href: "/stack" },
  { label: "education", href: "/education" },
  { label: "connect", href: "/connect" },
];

interface NavBarProps {
  activeSection?: string;
}

export function NavBar({ activeSection }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileOpen(false);
  };

  // Map paths to nav labels
  const getActiveLabel = (path: string) => {
    if (path === "/") return "index";
    return path.substring(1);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 pt-4"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center justify-between pb-4">
          <motion.button
            onClick={() => handleNavClick("/")}
            whileHover={{ opacity: 0.7 }}
            className="font-mono text-base text-blue-400 bg-transparent border-none cursor-pointer hover:text-blue-300 transition-colors"
          >
            madhu patnam
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ opacity: 0.7 }}
                className={`font-mono text-sm bg-transparent border-none cursor-pointer transition-all duration-200 pb-1 border-b-2 ${
                  activeSection === item.label || getActiveLabel(activeSection || "/") === item.label
                    ? "text-white border-white"
                    : "text-gray-400 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 font-mono text-sm bg-transparent border-none cursor-pointer hover:text-white transition-colors"
          >
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-800 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-2 font-mono text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 ${
                  activeSection === item.label
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
