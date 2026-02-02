import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import projectManagementCert from "@/assets/certifications/linkedin-project-management-cert.jpg";
import googleAnalyticsCert from "@/assets/certifications/google-analytics-cert.jpg";
import hubspotCert from "@/assets/certifications/hubspot-social-media-cert.png";
import hootsuiteCert from "@/assets/certifications/hootsuite-cert.jpg";

// Inline SVG icons using simple shapes for maximum browser compatibility
const FolderIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
        <rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="6" x2="10" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="3" x2="2" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="2" y1="3" x2="2" y2="6" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const ShareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
        <circle cx="18" cy="5" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="6" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="19" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const MessageIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
        <rect x="2" y="4" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="6" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="6" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const certs = [
    { 
        title: "Project Management", 
        icon: FolderIcon,
        iconColor: "text-primary",
        image: projectManagementCert,
        issuer: "LinkedIn Learning",
    },
    { 
        title: "Google Analytics", 
        icon: ChartIcon,
        iconColor: "text-secondary",
        image: googleAnalyticsCert,
        issuer: "Google",
    },
    { 
        title: "Social Media Marketing", 
        icon: ShareIcon,
        iconColor: "text-primary",
        image: hubspotCert,
        issuer: "HubSpot Academy",
    },
    { 
        title: "Hootsuite Platform", 
        icon: MessageIcon,
        iconColor: "text-secondary",
        image: hootsuiteCert,
        issuer: "Hootsuite Academy",
    },
];

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
                    {certs.map((cert, idx) => {
                        const IconComponent = cert.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-square bg-card border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <IconComponent className={`w-10 h-10 mb-4 ${cert.iconColor}`} />
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
                        );
                    })}
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
