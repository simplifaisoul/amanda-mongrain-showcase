import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";

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

    return (
        <section className="py-28 px-6 bg-background overflow-hidden relative noise-overlay">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">
                            Certifications
                        </h2>
                    </div>
                    <p className="text-muted-foreground">Industry-recognized credentials</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass rounded-2xl p-8 flex flex-col items-center justify-center group relative overflow-hidden cursor-pointer aspect-square"
                            onClick={() => setSelectedCert(idx)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Award className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            </div>
                            
                            <motion.span
                                className="absolute bottom-6 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                View →
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-4xl w-full glass rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2.5 bg-background/80 rounded-full hover:bg-background transition-colors"
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
