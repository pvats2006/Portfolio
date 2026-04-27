import { motion } from "framer-motion";

const profileImage = "/profile.png";

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <style>{`
        @keyframes aboutBlink {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: .35; }
        }
        @keyframes orbitPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(124,58,237,.5), 0 0 48px rgba(124,58,237,.25); }
          50% { box-shadow: 0 0 32px rgba(124,58,237,.8), 0 0 62px rgba(124,58,237,.4); }
        }
        @keyframes cardPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(124,58,237,.22); }
          50% { box-shadow: 0 0 34px rgba(124,58,237,.42); }
        }
      `}</style>
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8 inline-flex items-center gap-2">
          whoami.exe
          <span className="inline-block w-2 h-4 bg-neon-cyan" style={{ animation: "aboutBlink 1s steps(1, end) infinite" }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="glass-card p-6">
            <div className="relative w-52 h-52 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border border-neon-cyan/30" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-neon-violet/70"
                style={{ animation: "orbitPulse 4s ease-in-out infinite" }}
              />
              <div className="absolute inset-[23%] rounded-full bg-gradient-to-br from-neon-violet/40 via-neural-card to-neon-cyan/35 border border-white/20 shadow-neon overflow-hidden">
                <img
                  src={profileImage}
                  alt="Priyanshu portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="glass-card px-3 py-2 text-slate-200"><span className="text-neon-green">🟢</span> status: open_to_internships</p>
              <p className="glass-card px-3 py-2 text-slate-200"><span className="text-neon-cyan">🔵</span> location: Ghaziabad, India</p>
              <p className="glass-card px-3 py-2 text-slate-200"><span className="text-data-yellow">🟡</span> batch: CSE_2023-2027</p>
            </div>
          </div>

          <div className="glass-card p-6 border-t-2 border-t-neon-violet" style={{ animation: "cardPulse 5s ease-in-out infinite" }}>
            <div className="font-mono text-xs md:text-sm space-y-4">
              <div>
                <h3 className="text-neon-cyan uppercase tracking-wider text-[11px] mb-2">## Abstract</h3>
                <pre className="whitespace-pre-wrap text-slate-300">{`I am a Computer Science undergraduate passionate about turning
messy, complex data into tools that actually matter.

My work sits at the intersection of machine learning, full-stack
development, and AI - building systems that do not just run in
notebooks, but ship as real products people use.`}</pre>
              </div>

              <div>
                <h3 className="text-neon-cyan uppercase tracking-wider text-[11px] mb-2">## What I Build</h3>
                <pre className="whitespace-pre-wrap text-slate-300">{`From surgical risk dashboards powered by XGBoost to AI-driven
career matching platforms using LLMs, I enjoy tackling
problems end-to-end - designing the architecture, training the
model, and wiring up the API.`}</pre>
              </div>

              <div>
                <h3 className="text-neon-cyan uppercase tracking-wider text-[11px] mb-2">## End-to-End Ownership</h3>
                <pre className="whitespace-pre-wrap text-slate-300">{`I am equally comfortable writing Python pipelines and building
React UIs, which means I can own a feature from idea to
deployment.`}</pre>
              </div>

              <div>
                <h3 className="text-neon-cyan uppercase tracking-wider text-[11px] mb-2">## Philosophy</h3>
                <p className="text-slate-300 italic">
                  "I believe the best ML systems are not just accurate - they are explainable, scalable, and built to solve something real."
                </p>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
