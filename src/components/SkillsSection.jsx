import { motion } from "framer-motion";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

const data = [
  { skill: "ML/AI", value: 90 },
  { skill: "Frontend", value: 82 },
  { skill: "Backend", value: 85 },
  { skill: "Data", value: 88 },
  { skill: "SQL/DB", value: 80 },
  { skill: "NLP", value: 84 }
];

const groups = [
  {
    title: "ML/AI",
    color: "hover:shadow-neon",
    items: [
      { label: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
      { label: "AutoML", icon: "https://cdn.simpleicons.org/tensorflow" },
      { label: "LLMs", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { label: "NLP", icon: "https://cdn.simpleicons.org/spacy" },
      { label: "Groq API", icon: "https://img.icons8.com/color/48/api-settings.png" },
      { label: "Claude API", icon: "https://cdn.simpleicons.org/anthropic" }
    ]
  },
  {
    title: "Backend",
    color: "hover:shadow-cyan",
    items: [
      { label: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { label: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative" },
      { label: "Python", icon: "https://cdn.simpleicons.org/python" },
      { label: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
      { label: "MySQL", icon: "https://cdn.simpleicons.org/mysql" }
    ]
  },
  {
    title: "Frontend",
    color: "hover:shadow-pink",
    items: [
      { label: "React", icon: "https://cdn.simpleicons.org/react" },
      { label: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { label: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { label: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit" }
    ]
  },
  {
    title: "Data",
    color: "hover:shadow-yellow-400/40",
    items: [
      { label: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
      { label: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
      { label: "Matplotlib", icon: "https://cdn.simpleicons.org/plotly" },
      { label: "Seaborn", icon: "https://cdn.simpleicons.org/python" },
      { label: "EDA", icon: "https://cdn.simpleicons.org/databricks" }
    ]
  },
  {
    title: "Tools",
    color: "hover:shadow-green",
    items: [
      { label: "Git", icon: "https://cdn.simpleicons.org/git" },
      { label: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
      { label: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
      { label: "Kaggle", icon: "https://cdn.simpleicons.org/kaggle" },
      { label: "OpenAI", icon: "https://img.icons8.com/fluency/48/chatgpt.png" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">model.skills_report()</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-5 h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data}>
                <PolarGrid stroke="rgba(255,255,255,.2)" />
                <PolarAngleAxis dataKey="skill" stroke="#e5e7eb" />
                <PolarRadiusAxis stroke="rgba(255,255,255,.2)" />
                <Radar dataKey="value" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.45} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={group.title} className="glass-card p-4">
                <h3 className="font-heading text-neon-cyan mb-2">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span key={item.label} whileHover={{ y: -2 }} className={`px-3 py-1.5 rounded-full border border-white/10 bg-neural-card/90 text-sm inline-flex items-center gap-2 ${group.color}`}>
                      <img
                        src={item.icon}
                        alt={`${item.label} logo`}
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                      {item.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
