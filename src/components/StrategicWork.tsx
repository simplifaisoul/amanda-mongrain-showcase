import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import mightyMaestroImg from "@/assets/strategic/mighty-maestro.jpg";

interface ProjectCardProps {
    id: number;
    title: string;
    problem: string;
    solution: string;
    keyPoints: string[];
    pdfLink: string;
    image?: string;
}

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    return (
        <motion.div
            className="group bg-background border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
        >
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto md:min-h-[400px] relative overflow-hidden">
                    {project.image ? (
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-bold tracking-widest">[ PROJECT VISUAL ]</span>
                        </div>
                    )}
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 md:block hidden"></div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Project {project.id}</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4 text-foreground leading-tight">{project.title}</h3>
                    
                    {/* Key Points */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.keyPoints.map((point, i) => (
                            <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20">
                                {point}
                            </span>
                        ))}
                    </div>

                    {/* Problem & Solution */}
                    <div className="flex-1 space-y-4">
                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">The Problem</h4>
                            <p className="text-sm leading-relaxed text-foreground/80">{project.problem}</p>
                        </div>

                        <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/10">
                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">The Solution</h4>
                            <p className="text-sm leading-relaxed text-foreground/80">{project.solution}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={project.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Full Project
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicWork = () => {
    const projects = [
        {
            id: 1,
            title: "Mighty Maestro - Social Media Campaign",
            problem: "Low class attendance (5–10 people per session) at an inclusive Ottawa fitness studio, with Gen Z audiences experiencing gym anxiety and lack of belonging.",
            solution: "Created 'Step. Sweat. Smile. Repeat.' campaign using community-driven storytelling and digital executions to reduce gym anxiety and emphasize inclusivity.",
            keyPoints: ["Target: 30% Awareness Increase", "Boost to 20–25 Attendees", "Gen Z Social Strategy"],
            pdfLink: "https://drive.google.com/file/d/1TAZjK0JHLTi5mN_Hp-cdxzwDwv8G22_M/view",
            image: mightyMaestroImg
        },
        {
            id: 2,
            title: "Place D'Orleans - IMC Plan",
            problem: "Retail brand facing increased competition and shifting consumer behaviour during high-pressure seasonal periods.",
            solution: "Repositioned brand around convenience, emotional relief, and experiential value through integrated digital and in-store approach to drive foot traffic and sales.",
            keyPoints: ["Brand Repositioning", "Omnichannel Strategy", "Seasonal Campaign"],
            pdfLink: "https://drive.google.com/file/d/1S2BMYMHQ8Z-cCpz7kp1W07CVm94IM9Bs/view"
        },
        {
            id: 3,
            title: "DAVIDsTEA – Brand Proposal",
            problem: "Rebuilding relevance and loyalty among Gen Z and Millennials following store closures and brand fragmentation.",
            solution: "Positioned DAVIDsTEA as a modern wellness ritual brand with integrated campaigns across digital, CRM, and experiential touchpoints to drive online sales and emotional connection.",
            keyPoints: ["Wellness Positioning", "CRM & Digital Integration", "Repeat Purchase Focus"],
            pdfLink: "https://drive.google.com/file/d/10l4cAqubCHlpI7xKguIpe_R7EpVbCDoj/view"
        },
        {
            id: 4,
            title: "Ottawa 67's – IMC Plan",
            problem: "Declining Friday-night game attendance caused by an aging fan base, with games not seen as a social destination.",
            solution: "Introduced pub-led game-night experience and 'Break the Ice' digital strategy targeting young professionals to reframe games as a social destination.",
            keyPoints: ["3,700 Ticket Goal/Game", "$79K Incremental Revenue", "Young Professional Focus"],
            pdfLink: "https://drive.google.com/file/d/1MugEW8pEIwq2fSJd2UbCCQnfbEh4iC4h/view"
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-foreground mb-20 relative inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    STRATEGIC <span className="text-primary">WORK</span>
                    <span className="absolute -bottom-4 left-0 w-1/3 h-2 bg-gradient-to-r from-primary to-transparent"></span>
                </motion.h2>

                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
