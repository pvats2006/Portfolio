import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1], staggerChildren: 0.12 }
  }
};

export default function App() {
  return (
    <AnimatePresence>
      <div className="bg-neural-dark text-white min-h-screen relative overflow-x-hidden selection:bg-neon-violet/30">
        <div className="scanline-overlay pointer-events-none fixed inset-0 z-[1]" />
        <div className="pointer-events-none fixed inset-0 z-[1] bg-neural-grid bg-[size:40px_40px] opacity-[0.11]" />
        <Navbar />
        <motion.main initial="hidden" animate="show" variants={fadeInUp} className="relative z-[2]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </motion.main>
      </div>
    </AnimatePresence>
  );
}
