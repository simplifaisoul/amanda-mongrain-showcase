import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";
const strengths = [{
  icon: Target,
  title: "Strategic Planning",
  description: "Developing comprehensive marketing strategies that align with business objectives"
}, {
  icon: TrendingUp,
  title: "Growth Focus",
  description: "Driving measurable results through data-driven campaign optimization"
}, {
  icon: Users,
  title: "Client Success",
  description: "Building lasting relationships and delivering exceptional value to clients"
}];
const About = () => {
  return <section id="about" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      {/* Animated background elements */}
      <motion.div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl border-secondary" animate={{
      x: [0, 100, 0],
      y: [0, 50, 0]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
      x: [0, -100, 0],
      y: [0, -50, 0]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-16 space-y-4" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            I'm a results-driven marketing professional passionate about creating impactful 
            campaigns that bridge creativity and strategy. With proven success in IMC planning 
            and client acquisition, I transform business challenges into opportunities for growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {strengths.map((strength, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50,
          rotateY: -20
        }} whileInView={{
          opacity: 1,
          y: 0,
          rotateY: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} whileHover={{
          y: -10,
          rotateY: 5
        }}>
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 relative overflow-hidden group">
                {/* Background glow effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <motion.div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" whileHover={{
                scale: 1.1,
                rotate: 360
              }} transition={{
                type: "spring",
                stiffness: 200
              }}>
                    <strength.icon className="h-8 w-8 text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)"
            }} />
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default About;