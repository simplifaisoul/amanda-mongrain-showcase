import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import StrategicWork from "@/components/StrategicWork";
import Certifications from "@/components/Certifications";
import CreativeExplorations from "@/components/CreativeExplorations";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <StrategicWork />
        <Certifications />
        <CreativeExplorations />
        <Contact />
      </main>

      <motion.footer
        className="py-12 px-6 bg-card text-center relative overflow-hidden border-t border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl z-0"></div>
        <p className="text-muted-foreground relative z-10 text-sm tracking-widest uppercase">
          © 2026 Amanda Mongrain.
        </p>
      </motion.footer>
    </div>
  );
};

export default Index;
