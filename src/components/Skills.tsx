import { motion } from "framer-motion";

const Skills = () => {
    const qualities = [
        { title: "Strategic Vision", delay: 0 },
        { title: "Creative Execution", delay: 0.2 },
        { title: "Data Driven", delay: 0.4 },
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    What I Bring
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {qualities.map((q, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                delay: q.delay
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm hover:border-primary hover:bg-primary/30 transition-colors cursor-default"
                        >
                            <span className="text-xl md:text-2xl font-semibold text-center text-foreground px-4">
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
