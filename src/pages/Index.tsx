import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import StrategicWork from "@/components/StrategicWork";
import Certifications from "@/components/Certifications";
import CreativeExplorations from "@/components/CreativeExplorations";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-white noise-overlay">
      <Navigation />

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

      <SectionDivider />

      <motion.footer
        className="py-16 px-6 bg-card relative overflow-hidden border-t border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl z-0" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-4">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            © 2026 Amanda Mongrain
          </p>
          <div className="w-12 h-px bg-primary/40" />
        </div>
      </motion.footer>

      <ScrollToTop />
    </div>
  );
};

export default Index;
