import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["about", "skills", "projects", "experience", "achievements", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.42 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        isScrolled ? "bg-neural-surface/70 border-b border-white/10 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-neon-green text-sm md:text-base">
          {"<Priyanshu />"}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`font-mono text-sm transition ${
                active === item ? "text-neon-violet" : "text-neon-cyan hover:text-neon-violet"
              }`}
            >
              {`// ${item}`}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mb-4 p-4 glass-card bg-neural-card/90"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="block py-2 font-mono text-neon-cyan">
              {`// ${item}`}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
