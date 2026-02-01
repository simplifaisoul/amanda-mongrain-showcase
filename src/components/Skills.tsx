import { motion } from "framer-motion";

const Skills = () => {
  const qualities = [
    { title: "Creative Problem Solving", delay: 0 },
    { title: "IMC Planning", delay: 0.05 },
    { title: "Interpersonal Skills", delay: 0.1 },
    { title: "Social Media Marketing", delay: 0.15 },
    { title: "Content Strategy", delay: 0.2 },
    { title: "Brand Management", delay: 0.25 },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {qualities.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: q.delay }}
              className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-sm md:text-base font-medium text-foreground">
                {q.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
