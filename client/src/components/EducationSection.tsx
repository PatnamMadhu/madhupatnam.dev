import { motion } from "framer-motion";

const EDUCATION = [
  {
    university: "Trine University",
    degree: "Master's degree",
    field: "Computer and Information Sciences",
    grade: "3.9/4.0",
    icon: "🏆",
    location: "Indiana, USA",
    duration: "Aug 2024 - May 2026",
    featured: true,
  },
  {
    university: "Lovely Professional University",
    degree: "Bachelor's degree",
    field: "Computer Science",
    grade: "8.16/10",
    icon: "🎓",
    location: "Punjab, India",
    duration: "Aug 2016 - May 2020",
    featured: false,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label mb-10">{"// education [ trine, lpu ]"}</p>
      </motion.div>

      <div className="space-y-4">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.university}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`border rounded p-6 transition-all duration-300 font-mono ${
              edu.featured
                ? "bg-card border-primary shadow-lg shadow-primary/20"
                : "hover:bg-card/80 border-primary/20 hover:border-primary/50"
            }`}
          >
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="text-4xl flex-shrink-0"
              >
                {edu.icon}
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-lg font-bold text-foreground gradient-text">
                    {edu.university}
                  </h3>
                  {edu.featured && (
                    <span className="text-[10px] uppercase tracking-widest text-primary bg-primary/20 border border-primary/40 px-2.5 py-1 rounded-full font-bold">
                      current
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-base font-semibold text-primary">
                      {edu.degree}
                    </p>
                    <span className="text-sm text-muted-foreground/70">
                      in {edu.field}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground/60">
                    📍 {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground/50 font-mono">
                    ⏰ {edu.duration}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2"
                >
                  <span className="text-sm font-bold text-primary">
                    Grade: {edu.grade}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
