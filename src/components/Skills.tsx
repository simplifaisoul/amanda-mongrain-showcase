import { motion } from "framer-motion";

const Skills = () => {
  const qualities = [
    { 
      title: "IMC Strategy", 
      description: "Developing Integrated Marketing Communications that ensure a brand's voice is consistent across social, digital, and traditional touchpoints.",
      delay: 0 
    },
    { 
      title: "Consumer Insights", 
      description: "Diving deep into audience psychology to identify the 'why' behind consumer behavior.",
      delay: 0.05 
    },
    { 
      title: "Content Architecture", 
      description: "Building strategic content funnels that move audiences from awareness to action.",
      delay: 0.1 
    },
    { 
      title: "Brand Storytelling", 
      description: "Translating complex brand values into compelling narratives that resonate emotionally with Gen Z and Millennial demographics.",
      delay: 0.15 
    },
    { 
      title: "Data-Driven Logic", 
      description: "Defining and tracking Target KPIs to ensure every creative decision is backed by measurable business objectives and ROI.",
      delay: 0.2 
    },
    { 
      title: "Multi-Platform Design", 
      description: "Creating cohesive visual experiences across web, mobile, and social platforms that maintain brand consistency.",
      delay: 0.25 
    },
    { 
      title: "Client & Project Management", 
      description: "Managing the bridge between client goals and creative execution to ensure projects stay on-strategy and on-budget.",
      delay: 0.3 
    },
    { 
      title: "Digital Ecosystem Strategy", 
      description: "Architecting cohesive brand experiences across SEO, paid social, and web to optimize impact on every platform.",
      delay: 0.35 
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Bring
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Core competencies that drive impactful brand strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: q.delay }}
              className="p-6 rounded-lg bg-background border border-primary/40 hover:border-primary transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {q.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {q.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
