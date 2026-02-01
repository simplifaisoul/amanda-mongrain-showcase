import { motion } from "framer-motion";
import { Hero3DBackground } from "./Hero3DBackground";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-background/50">
      {/* 3D Background */}
      <Hero3DBackground />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Name & Subtitle */}
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }}>
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
              AMANDA
              <br />
              <span className="text-[#d680b8]">MONGRAIN</span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest border-l-4 border-[#d680b8] pl-4 text-muted">
            Marketing Strategist
          </h2>
        </motion.div>

        {/* Right Column: Quote & Image */}
        <div className="flex flex-col gap-6">
          {/* Single Quote */}
          <motion.figure 
            className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <blockquote className="text-lg italic text-foreground/90 leading-relaxed">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-primary mt-4 font-semibold tracking-wide">
              — Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>

          {/* Portrait Image - Full View */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-2xl blur-2xl opacity-50"></div>
            <img 
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg" 
              alt="Amanda Mongrain" 
              className="relative w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;