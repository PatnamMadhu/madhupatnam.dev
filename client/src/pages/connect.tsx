import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

const CONTACTS = [
  {
    label: "email",
    href: "mailto:patnammadhu1999@gmail.com",
    text: "patnammadhu1999@gmail.com",
    icon: Mail,
  },
  {
    label: "github",
    href: "https://github.com/patnammadhu",
    text: "github.com/patnammadhu",
    icon: Github,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/patnam-madhu",
    text: "linkedin.com/in/patnam-madhu",
    icon: Linkedin,
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/_patnam.madhu_/",
    text: "instagram.com/_patnam.madhu_/",
    icon: Instagram,
  },
];

export default function Connect() {
  return (
    <SiteShell activeSection="connect">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="section-kicker">connect</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            Whether you want to discuss AI architectures, collaborate on projects, or just chat, let's connect.
          </p>
        </div>

        <div className="space-y-6 pt-8">
          {CONTACTS.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="border-l border-slate-800 pl-5 transition-colors hover:border-sky-400/60"
              >
                <p className="mb-2 flex items-center gap-2 text-xs text-slate-500 md:text-sm">
                  <Icon className="h-4 w-4 text-sky-400" />
                  <span>{contact.label}</span>
                </p>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-base text-slate-100 underline underline-offset-2 transition-colors hover:text-sky-300"
                >
                  {contact.text}
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SiteShell>
  );
}
