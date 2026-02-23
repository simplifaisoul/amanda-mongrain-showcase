import { motion } from "framer-motion";

const Skills = () => {
  const qualities = [
    { 
      title: "IMC Strategy", 
      description: "Developing Integrated Marketing Communications that ensure a brand's voice is consistent across social, digital, and traditional touchpoints.",
    },
    { 
      title: "Consumer Insights", 
      description: "Diving deep into audience psychology to identify the 'why' behind consumer behavior.",
    },
    { 
      title: "Client & Project Management", 
      description: "Managing the bridge between client goals and creative execution to ensure projects stay on-strategy and on-budget.",
    },
    { 
      title: "Digital Ecosystem Strategy", 
      description: "Architecting cohesive brand experiences across SEO, paid social, and web to optimize impact on every platform.",
    },
    { 
      title: "Brand Storytelling", 
      description: "Translating complex brand values into compelling narratives that resonate emotionally with Gen Z and Millennial demographics.",
    },
    { 
      title: "Data-Driven Logic", 
      description: "Defining and tracking Target KPIs to ensure every creative decision is backed by measurable business objectives and ROI.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Bring
          </motion.h2>
          <motion.div
            className="w-12 h-0.5 bg-primary mx-auto mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-md mx-auto">
            Core competencies that drive impactful brand strategies
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {qualities.map((q, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg bg-background border border-primary/40 cursor-default"
            >
              <motion.div
                className="w-8 h-0.5 bg-primary/60 mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                style={{ originX: 0 }}
              />
              <h3 className="text-base font-semibold text-foreground mb-2">
                {q.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {q.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
