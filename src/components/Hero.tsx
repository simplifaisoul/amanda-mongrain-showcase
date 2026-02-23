import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero3DBackground } from "./Hero3DBackground";

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.4 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const firstName = "Amanda".split("");
  const lastName = "Mongrain".split("");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-background"
    >
      {/* 3D Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Hero3DBackground />
      </motion.div>

      {/* Cinematic vignette overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, hsl(240 15% 6% / 0.6) 100%)",
        }}
      />

      {/* Floating ambient glow orbs */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none z-[1]"
        style={{ background: "hsl(330 65% 55% / 0.08)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full blur-[100px] pointer-events-none z-[1]"
        style={{ background: "hsl(260 45% 30% / 0.1)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        style={{ y: contentY, opacity: opacityOut }}
      >
        {/* Left Column */}
        <div className="space-y-10">
          {/* Tagline */}
          <motion.p
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary/80 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Marketing Strategist & Creative Storyteller
          </motion.p>

          {/* Name with per-letter animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]" style={{ perspective: "600px" }}>
            <span className="block overflow-hidden">
              {firstName.map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  className="inline-block"
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden text-primary">
              {lastName.map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  className="inline-block"
                  custom={i + firstName.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Animated underline accent */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="h-[2px] bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Tagline paragraph */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Building brand strategies from the ground up to connect people with purpose.
          </motion.p>

          {/* My Philosophy */}
          <motion.div
            className="border-l-2 border-primary/40 pl-5"
            initial={{ opacity: 0, x: -16, height: 0 }}
            animate={{ opacity: 1, x: 0, height: "auto" }}
            transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#projects"
              className="group relative px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-7 py-3.5 border-2 border-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/10 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col gap-6"
          style={{ y: imageY }}
        >
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            <img
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg"
              alt="Amanda Mongrain"
              className="relative w-full h-auto object-contain rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Testimonial Quote */}
          <motion.figure
            className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-8 h-[2px] bg-primary/60 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{ originX: 0 }}
            />
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-foreground mt-4 font-medium flex items-center gap-3">
              <motion.span
                className="w-6 h-px bg-primary"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
              Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
