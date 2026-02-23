import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import projectManagementCert from "@/assets/certifications/linkedin-project-management-cert.jpg";
import googleAnalyticsCert from "@/assets/certifications/google-analytics-cert.jpg";
import hubspotCert from "@/assets/certifications/hubspot-social-media-cert.png";
import hootsuiteCert from "@/assets/certifications/hootsuite-cert.jpg";

const certs = [
    { 
        title: "Project Management", 
        image: projectManagementCert,
        issuer: "LinkedIn Learning",
    },
    { 
        title: "Google Analytics", 
        image: googleAnalyticsCert,
        issuer: "Google",
    },
    { 
        title: "Social Media Marketing", 
        image: hubspotCert,
        issuer: "HubSpot Academy",
    },
    { 
        title: "Hootsuite Platform", 
        image: hootsuiteCert,
        issuer: "Hootsuite Academy",
    },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<number | null>(null);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-widest text-muted-foreground"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Certifications
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                >
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="aspect-square bg-card border border-border/30 rounded-3xl p-8 flex flex-col items-center justify-center hover:bg-muted/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-xl font-bold text-center text-foreground z-10">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{cert.issuer}</p>
                            <motion.div
                                className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-4 mb-6 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                            />
                            <button 
                                onClick={() => setSelectedCert(idx)}
                                className="z-20 px-4 py-2 text-xs font-bold uppercase tracking-wider border border-primary/30 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-primary"
                            >
                                View Certificate
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal for viewing certificate */}
            <AnimatePresence>
                {selectedCert !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <img
                                src={certs[selectedCert].image}
                                alt={certs[selectedCert].title}
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
