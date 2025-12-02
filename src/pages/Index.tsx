import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      <motion.footer 
        className="py-8 px-6 bg-primary text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(45deg, hsl(var(--accent)) 25%, transparent 25%, transparent 75%, hsl(var(--accent)) 75%, hsl(var(--accent)))",
            backgroundSize: "20px 20px",
          }}
        />
        <p className="text-primary-foreground/70 relative z-10">
          © 2024 Amanda Mongrain. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Index;
