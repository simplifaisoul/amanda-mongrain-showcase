import { motion } from "framer-motion";
import { Award, CheckCircle2, Trophy } from "lucide-react";

const Certifications = () => {
    const certs = [
        { title: "Digital Strategy", icon: <Trophy className="w-10 h-10 mb-4 text-primary" /> },
        { title: "Data Analytics", icon: <CheckCircle2 className="w-10 h-10 mb-4 text-secondary" /> },
        { title: "Brand Management", icon: <Award className="w-10 h-10 mb-4 text-white" /> },
    ];

    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-widest text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    My Certifications
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="aspect-square bg-card border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {cert.icon}
                            <h3 className="text-xl font-bold text-center text-foreground z-10">{cert.title}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-4 mb-6 rounded-full"></div>

                            <button className="z-20 px-4 py-2 text-xs font-bold uppercase tracking-wider border border-primary/30 rounded-full hover:bg-primary hover:text-white transition-all text-primary">
                                View Certificate
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
