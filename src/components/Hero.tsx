import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero3DBackground } from "./Hero3DBackground";
import { ArrowDown } from "lucide-react";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.04, duration: 0.5, ease: "easeOut" },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-background noise-overlay">
      <Hero3DBackground />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "hsl(330 65% 55% / 0.08)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "hsl(260 45% 30% / 0.1)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary/80 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Marketing Strategist & Creative Storyteller
            </motion.p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
              <AnimatedText text="Amanda" />
              <br />
              <span className="gradient-text-animated">
                <AnimatedText text="Mongrain" />
              </span>
            </h1>
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Building brand strategies from the ground up to connect people with purpose.
          </motion.p>

          {/* My Philosophy */}
          <motion.div
            className="border-l-2 border-primary/40 pl-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
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
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg shadow-lg shadow-primary/25 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px hsl(330 65% 55% / 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-7 py-3.5 border-2 border-muted-foreground/20 text-foreground font-medium rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05, borderColor: "hsl(330 65% 55% / 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg"
              alt="Amanda Mongrain - Marketing Strategist"
              className="relative w-full h-auto object-contain rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Testimonial */}
          <motion.figure
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              "Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."
            </blockquote>
            <figcaption className="text-sm text-foreground mt-4 font-medium flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent"></span>
              Jake Volt, Professor, Algonquin College
            </figcaption>
          </motion.figure>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
