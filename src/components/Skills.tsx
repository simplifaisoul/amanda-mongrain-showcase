import { motion } from "framer-motion";
import { Megaphone, Brain, Briefcase, Globe, BookOpen, BarChart3 } from "lucide-react";

const Skills = () => {
  const qualities = [
    { 
      title: "IMC Strategy", 
      description: "Developing Integrated Marketing Communications that ensure a brand's voice is consistent across social, digital, and traditional touchpoints.",
      icon: Megaphone,
      delay: 0 
    },
    { 
      title: "Consumer Insights", 
      description: "Diving deep into audience psychology to identify the 'why' behind consumer behavior.",
      icon: Brain,
      delay: 0.05 
    },
    { 
      title: "Client & Project Management", 
      description: "Managing the bridge between client goals and creative execution to ensure projects stay on-strategy and on-budget.",
      icon: Briefcase,
      delay: 0.1 
    },
    { 
      title: "Digital Ecosystem Strategy", 
      description: "Architecting cohesive brand experiences across SEO, paid social, and web to optimize impact on every platform.",
      icon: Globe,
      delay: 0.15 
    },
    { 
      title: "Brand Storytelling", 
      description: "Translating complex brand values into compelling narratives that resonate emotionally with Gen Z and Millennial demographics.",
      icon: BookOpen,
      delay: 0.2 
    },
    { 
      title: "Data-Driven Logic", 
      description: "Defining and tracking Target KPIs to ensure every creative decision is backed by measurable business objectives and ROI.",
      icon: BarChart3,
      delay: 0.25 
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-card relative noise-overlay overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="gradient-text-animated">Bring</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Core competencies that drive impactful brand strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualities.map((q, index) => {
            const Icon = q.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: q.delay }}
                className="group p-6 rounded-2xl glass cursor-default relative overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {q.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {q.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Skills;
