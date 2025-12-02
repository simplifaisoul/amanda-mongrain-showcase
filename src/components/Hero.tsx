import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import amandaPhoto from "@/assets/amanda-photo.jpg";
import { Button } from "@/components/ui/button";
import { Scene3DContent } from './Scene3D';
import { ParticleField } from './ParticleField';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Scene3DContent />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Amanda Mongrain
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Marketing Strategist & Digital Storyteller
          </motion.p>
          <motion.p 
            className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming brands through strategic marketing campaigns and innovative digital solutions. 
            Specialized in IMC planning and client acquisition.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium backdrop-blur-sm hover:scale-105 transition-all"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-6 bg-gradient-to-r from-accent/40 to-accent/20 rounded-3xl blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.img 
              src={amandaPhoto} 
              alt="Amanda Mongrain" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4] border-4 border-primary-foreground/10 group-hover:border-accent/50 transition-all duration-500"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
