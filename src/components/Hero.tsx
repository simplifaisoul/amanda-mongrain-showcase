import { motion } from "framer-motion";
import { Hero3DBackground } from "./Hero3DBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center px-6 py-24 overflow-hidden bg-background">
      {/* 3D Background */}
      <Hero3DBackground />

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Name & Tagline */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <motion.p
              className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight leading-[0.9]">
              AMANDA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d680b8] to-[#a855c7]">
                MONGRAIN
              </span>
            </h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 tracking-wide">
              Creative Strategist
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg font-light">
              Building brand strategies from the ground up to connect people with purpose.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#work"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-foreground font-semibold rounded-full hover:bg-white/5 transition-all duration-300 hover:border-primary/50"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Quote & Image */}
        <div className="flex flex-col gap-8">
          {/* Portrait Image - Full View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-3xl opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl z-10"></div>
            <img
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg"
              alt="Amanda Mongrain"
              className="relative w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Testimonial Quote */}
          <motion.figure
            className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <blockquote className="text-base md:text-lg italic text-foreground/90 leading-relaxed">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-primary mt-4 font-semibold tracking-wide flex items-center gap-2">
              <span className="w-8 h-px bg-primary/50"></span>
              Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;