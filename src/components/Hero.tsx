import { motion } from "framer-motion";
import { Hero3DBackground } from "./Hero3DBackground";

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-background">
      {/* 3D Background */}
      <Hero3DBackground />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Name & Tagline */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary/80 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Marketing Strategist & Creative Storyteller
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
              variants={wordReveal}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={wordChild} className="inline-block">Amanda</motion.span>
              <br />
              <motion.span variants={wordChild} className="inline-block text-primary">
                Mongrain
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Building brand strategies from the ground up to connect people with purpose.
          </motion.p>

          {/* My Philosophy */}
          <motion.div
            className="border-l-2 border-primary/40 pl-4"
            initial={{ opacity: 0, x: -20, scaleY: 0.8 }}
            animate={{ opacity: 1, x: 0, scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ originY: 0 }}
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 relative overflow-hidden group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">View Work</span>
              <motion.span
                className="absolute inset-0 bg-secondary/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border-2 border-secondary text-foreground font-medium rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Quote & Image */}
        <div className="flex flex-col gap-6">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <img
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg"
              alt="Amanda Mongrain"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
            {/* Subtle glow behind image */}
            <motion.div
              className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </motion.div>

          {/* Testimonial Quote */}
          <motion.figure
            className="bg-card p-6 rounded-xl border border-border/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ borderColor: "hsl(330 65% 55% / 0.3)", transition: { duration: 0.3 } }}
          >
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-foreground mt-4 font-medium flex items-center gap-3">
              <motion.span
                className="w-6 h-px bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ originX: 0 }}
              />
              Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
