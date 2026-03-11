import { motion } from "framer-motion";
import { SiteShell } from "@/components/SiteShell";

const EDUCATION = [
  {
    university: "Trine University",
    degree: "Master's degree",
    field: "Computer and Information Sciences",
    grade: "3.9/4.0",
    location: "Indiana, USA",
    duration: "Aug 2024 - May 2026",
    current: true,
  },
  {
    university: "Lovely Professional University",
    degree: "Bachelor's degree",
    field: "Computer Science",
    grade: "8.16/10",
    location: "Punjab, India",
    duration: "Aug 2016 - May 2020",
    current: false,
  },
];

export default function Education() {
  return (
    <SiteShell activeSection="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="section-kicker">education</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            My academic journey from India to the USA, building strong foundations in computer science and systems design.
          </p>
        </div>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border-l py-2 pl-5 transition-colors duration-200 ${
                edu.current
                  ? "border-slate-200"
                  : "border-slate-800 hover:border-sky-400/60"
              }`}
            >
              <div className="mb-1 flex items-baseline gap-2">
                <p className="text-base font-semibold text-slate-100">{edu.university}</p>
                {edu.current && <span className="text-xs text-slate-400">(current)</span>}
              </div>
              <p className="mb-2 text-sm text-slate-300">
                {edu.degree} in {edu.field}
              </p>
              <p className="mb-1 text-xs text-slate-500 md:text-sm">
                {edu.location} . {edu.duration}
              </p>
              <p className="text-xs text-slate-500 md:text-sm">GPA: {edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SiteShell>
  );
}
