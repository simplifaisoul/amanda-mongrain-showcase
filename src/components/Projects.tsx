import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";
const projects = [{
  title: "SimplifAI-1 IMC Plan",
  description: "A comprehensive Integrated Marketing Communications plan that successfully launched SimplifAI-1, resulting in 7+ website clients and establishing market presence.",
  status: "Completed",
  impact: "7+ Clients Acquired",
  skills: ["Strategic Planning", "Marketing", "Client Acquisition", "IMC"],
  color: "from-accent/20 to-accent/5",
  gradient: "from-accent via-accent/80 to-accent/60"
}, {
  title: "Project Coming Soon",
  description: "An exciting new project currently in development. Check back soon for updates on this innovative marketing campaign.",
  status: "In Development",
  impact: "TBA",
  skills: ["Marketing", "Strategy", "Innovation"],
  color: "from-primary/20 to-primary/5",
  gradient: "from-primary via-primary/80 to-primary/60"
}, {
  title: "Project Coming Soon",
  description: "Another groundbreaking project in the pipeline. Stay tuned for more details on this strategic initiative.",
  status: "Planning",
  impact: "TBA",
  skills: ["Strategy", "Planning", "Digital Marketing"],
  color: "from-muted/40 to-muted/10",
  gradient: "from-muted via-muted/80 to-muted/60"
}];
const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return <section id="projects" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Animated background gradient */}
      <motion.div className="absolute inset-0 opacity-30 border-secondary" animate={{
      background: ["radial-gradient(circle at 20% 50%, hsl(340 75% 65% / 0.1) 0%, transparent 50%)", "radial-gradient(circle at 80% 50%, hsl(340 75% 65% / 0.1) 0%, transparent 50%)", "radial-gradient(circle at 20% 50%, hsl(340 75% 65% / 0.1) 0%, transparent 50%)"]
    }} transition={{
      duration: 10,
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
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="h-6 w-6 text-accent" />
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic marketing initiatives that drive measurable results and create lasting impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}>
              <Card className="group h-full relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
                {/* Animated gradient background */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} animate={hoveredIndex === index ? {
              scale: [1, 1.2, 1]
            } : {}} transition={{
              duration: 3,
              repeat: Infinity
            }} />

                {/* Top accent bar */}
                <motion.div className={`h-2 bg-gradient-to-r ${project.color}`} animate={hoveredIndex === index ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}} transition={{
              duration: 3,
              repeat: Infinity
            }} style={{
              backgroundSize: "200% 200%"
            }} />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {project.status}
                    </Badge>
                    {index === 0 && <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 180
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }}>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </motion.div>}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  <motion.div className="pt-2" initial={{
                opacity: 0.8
              }} whileHover={{
                opacity: 1
              }}>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Impact</p>
                    <motion.p className="text-lg font-semibold text-accent" animate={hoveredIndex === index ? {
                  scale: [1, 1.05, 1]
                } : {}} transition={{
                  duration: 0.5
                }}>
                      {project.impact}
                    </motion.p>
                  </motion.div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => <motion.div key={skillIndex} initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: skillIndex * 0.1
                }}>
                        <Badge variant="outline" className="text-xs hover:border-accent transition-colors">
                          {skill}
                        </Badge>
                      </motion.div>)}
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none" style={{
              background: "radial-gradient(circle at center, hsl(340 75% 65% / 0.1), transparent 70%)"
            }} transition={{
              duration: 0.5
            }} />
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;