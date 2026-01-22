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
            <motion.span className="absolute -top-8 -left-8 text-6xl opacity-20 text-primary rotate-[-10deg] font-script" initial={{
            opacity: 0
          }} animate={{
            opacity: 0.2
          }} transition={{
            delay: 1
          }}>
              hello
            </motion.span>
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

        {/* Right Column: Quotes & Image */}
        <div className="flex flex-col gap-8">
          {/* Quotes Section */}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
            <figure className="bg-card/50 backdrop-blur-sm p-4 rounded-r-2xl border-l-4 border-secondary border-y border-r border-white/5">
              <blockquote className="text-lg italic text-foreground/80">"Amanda has a calmness, maturity and authority that not many students have. Her commitment to the quality of the work and her teammates is evident, and she is someone who will truly make a career for herself."</blockquote>
              <figcaption className="text-sm text-primary mt-2 font-bold uppercase">- JAKE VOLT, PROF, ALGONQUIN</figcaption>
            </figure>
            <figure className="bg-card/50 backdrop-blur-sm p-4 rounded-r-2xl border-l-4 border-secondary border-y border-r border-white/5">
              <blockquote className="text-lg italic text-foreground/80">
                "Consistently delivers high-quality creative solutions."
              </blockquote>
              <figcaption className="text-sm text-primary mt-2 font-bold uppercase">
                - Prof, Algonquin
              </figcaption>
            </figure>
          </motion.div>

          {/* Image Section */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.6
        }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
            <img src="/lovable-uploads/7021278e-973d-4000-9250-907a352662b0.jpg" alt="Amanda Mongrain" className="relative w-full h-80 object-cover rounded-2xl border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-background border border-white/10 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
              <span className="text-xs font-bold text-center text-primary leading-tight">MY<br />PORTFOLIO</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;