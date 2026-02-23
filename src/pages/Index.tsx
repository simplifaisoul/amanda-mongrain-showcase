import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import StrategicWork from "@/components/StrategicWork";
import Certifications from "@/components/Certifications";
import CreativeExplorations from "@/components/CreativeExplorations";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      <ScrollToTop />

      <main>
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <StrategicWork />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <CreativeExplorations />
        <SectionDivider />
        <Contact />
      </main>

      <motion.footer
        className="py-16 px-6 bg-card text-center relative overflow-hidden border-t border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 space-y-3">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            © 2026 Amanda Mongrain
          </p>
          <p className="text-muted-foreground/50 text-xs tracking-wider">
            Built with strategy & intention
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
