import { motion } from "framer-motion";

const cards = [
  {
    title: "SkillSync AI",
    accent: "from-neon-violet to-neon-cyan",
    github: "https://github.com/pvats2006/SkillSync-AI",
    desc: "AI-powered platform that aggregates resume, LinkedIn, and GitHub signals into unified candidate insights with LLM-driven matching and recommendations.",
    tags: ["React", "FastAPI", "Supabase", "LLMs"],
    metrics: [
      "Built semantic skill extraction pipeline",
      "Personalized career recommendations",
      "REST backend services with FastAPI + Supabase"
    ]
  },
  {
    title: "DecentraLens",
    accent: "from-neon-cyan to-neon-green",
    github: "https://github.com/pvats2006",
    desc: "Serverless static analysis system that evaluates decentralization and resilience using deterministic heuristics over dependencies, configs, and network behavior.",
    tags: ["Static Analysis", "JavaScript", "Heuristics Engine", "Serverless"],
    metrics: [
      "Detects centralized services and failure points",
      "Evidence-based audit trail for explainability",
      "Rule-driven resilience scoring"
    ]
  },
  {
    title: "Aetheris",
    accent: "from-neon-violet to-neon-pink",
    github: "https://github.com/pvats2006",
    desc: "Real-time surgical intelligence dashboard combining ML risk prediction, anomaly detection, and clinical decision support for perioperative workflows.",
    tags: ["React", "FastAPI", "XGBoost", "LLMs"],
    metrics: [
      "Live vitals monitoring with alerting",
      "LLM report generation for clinicians",
      "OpenFDA-integrated support signals"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">git log --oneline --projects</h2>
        <div className="space-y-6">
          {cards.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4, transformPerspective: 1200 }}
              className="glass-card overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 bg-[radial-gradient(circle_at_10%_10%,rgba(124,58,237,.14),transparent_40%)]">
                <h3 className="font-heading text-2xl">{project.title}</h3>
                <p className="text-slate-300 mt-3">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/15 bg-white/5">{tag}</span>
                  ))}
                </div>
                {project.metrics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 rounded-lg text-xs bg-neon-violet/20 border border-neon-violet/40">{m}</span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex gap-3">
                  <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #7C3AED" }} href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/15 font-mono">
                    [GitHub]
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
