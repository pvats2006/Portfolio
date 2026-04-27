import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrap pt-14">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
          <pre className="font-mono text-xs md:text-sm text-slate-300 whitespace-pre-wrap">{`POST /api/hire_me HTTP/1.1
Content-Type: application/json

{
  "role": "your_opportunity_here",
  "message": "your_message_here",
  "response_time": "< 24 hours"
}`}</pre>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #EC4899" }} href="mailto:priyanshuvats8806@gmail.com" className="px-4 py-2 rounded-lg border border-white/15">
              Email
            </motion.a>
            <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #06B6D4" }} href="https://www.linkedin.com/in/priyanshu-bbb2b8292/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/15">
              LinkedIn
            </motion.a>
            <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #7C3AED" }} href="https://github.com/pvats2006" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/15">
              GitHub
            </motion.a>
          </div>
          <p className="mt-8 text-xs text-slate-400 font-mono">// built by Priyanshu · 2026 · powered by caffeine & curiosity</p>
          <p className="mt-2 text-slate-400 text-sm">Contact: +91 8859264362</p>
        </div>
      </motion.div>
    </section>
  );
}
