import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, BarChart2, Share, MessageSquare, X } from "lucide-react";

import projectManagementCert from "@/assets/certifications/linkedin-project-management-cert.jpg";
import googleAnalyticsCert from "@/assets/certifications/google-analytics-cert.jpg";
import hubspotCert from "@/assets/certifications/hubspot-social-media-cert.png";
import hootsuiteCert from "@/assets/certifications/hootsuite-cert.jpg";

const iconClassName = "w-10 h-10 mb-4";

const certs = [
    { 
        title: "Project Management", 
        iconType: "folder" as const,
        iconColor: "text-primary",
        image: projectManagementCert,
        issuer: "LinkedIn Learning",
    },
    { 
        title: "Google Analytics", 
        iconType: "chart" as const,
        iconColor: "text-secondary",
        image: googleAnalyticsCert,
        issuer: "Google",
    },
    { 
        title: "Social Media Marketing", 
        iconType: "share" as const,
        iconColor: "text-primary",
        image: hubspotCert,
        issuer: "HubSpot Academy",
    },
    { 
        title: "Hootsuite Platform", 
        iconType: "message" as const,
        iconColor: "text-secondary",
        image: hootsuiteCert,
        issuer: "Hootsuite Academy",
    },
];

const CertIcon = ({ iconType, colorClass }: { iconType: string; colorClass: string }) => {
    switch (iconType) {
        case "folder":
            return <Folder className={`${iconClassName} ${colorClass}`} />;
        case "chart":
            return <BarChart2 className={`${iconClassName} ${colorClass}`} />;
        case "share":
            return <Share className={`${iconClassName} ${colorClass}`} />;
        case "message":
            return <MessageSquare className={`${iconClassName} ${colorClass}`} />;
        default:
            return null;
    }
};

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<number | null>(null);

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
                            <CertIcon iconType={cert.iconType} colorClass={cert.iconColor} />
                            <h3 className="text-xl font-bold text-center text-foreground z-10">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{cert.issuer}</p>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-4 mb-6 rounded-full"></div>

                            <button 
                                onClick={() => setSelectedCert(idx)}
                                className="z-20 px-4 py-2 text-xs font-bold uppercase tracking-wider border border-primary/30 rounded-full hover:bg-primary hover:text-white transition-all text-primary"
                            >
                                View Certificate
                            </button>
                        </motion.div>
                    ))}
                </div>
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
