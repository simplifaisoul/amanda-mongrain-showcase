import { motion } from "framer-motion";
import { Hero3DBackground } from "./Hero3DBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-background">
      {/* 3D Background */}
      <Hero3DBackground />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Name & Tagline */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary/80 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Marketing Strategist & Creative Storyteller
            </motion.p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
              Amanda
              <br />
              <span className="text-primary">
                Mongrain
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
            Building brand strategies from the ground up to connect people with purpose.
          </p>

          {/* My Philosophy */}
          <motion.div
            className="border-l-2 border-primary/40 pl-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary/70 font-medium mb-2">
              My Philosophy
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "I believe that the most successful brands are the ones that listen first. My goal is to uncover the 'why' behind the audience and build strategies that feel like a conversation, not an advertisement."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Quote & Image */}
        <div className="flex flex-col gap-6">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg"
              alt="Amanda Mongrain"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Testimonial Quote */}
          <motion.figure
            className="bg-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-foreground mt-4 font-medium flex items-center gap-3">
              <span className="w-6 h-px bg-primary"></span>
              Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;