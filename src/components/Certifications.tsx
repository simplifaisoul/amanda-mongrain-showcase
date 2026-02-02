import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import projectManagementCert from "@/assets/certifications/linkedin-project-management-cert.jpg";
import googleAnalyticsCert from "@/assets/certifications/google-analytics-cert.jpg";
import hubspotCert from "@/assets/certifications/hubspot-social-media-cert.png";
import hootsuiteCert from "@/assets/certifications/hootsuite-cert.jpg";

// Simple filled SVG icons for maximum compatibility
const FolderIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
    </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/>
    </svg>
);

const ShareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
    </svg>
);

const MessageIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
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
