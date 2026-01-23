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

const FlipCard = ({ project }: { project: ProjectCardProps }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[500px] md:h-[550px] cursor-pointer group"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {/* Front - Project Details */}
                <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover:border-primary/50 transition-colors bg-background p-6 md:p-8 flex flex-col" 
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <span className="text-primary font-mono text-xs tracking-wider uppercase">Project {project.id}</span>
                            <h3 className="text-xl md:text-2xl font-bold mt-1 text-foreground leading-tight">{project.title}</h3>
                        </div>
                        <div className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider">
                            FLIP FOR IMAGE →
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.keyPoints.map((point, i) => (
                            <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20">
                                {point}
                            </span>
                        ))}
                    </div>

                    {/* Problem & Solution */}
                    <div className="flex-1 flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/2 bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">The Problem</h4>
                            <p className="text-sm leading-relaxed text-foreground/80">{project.problem}</p>
                        </div>

                        <div className="md:w-1/2 bg-secondary/5 p-4 rounded-xl border border-secondary/10">
                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">The Solution</h4>
                            <p className="text-sm leading-relaxed text-foreground/80">{project.solution}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                        <a
                            href={project.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Full Project
                        </a>
                    </div>
                </div>

                {/* Back - Full Image */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden' }}
                >
                    {project.image ? (
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-bold tracking-widest text-sm">[ PROJECT VISUAL ]</span>
                        </div>
                    )}
                    {/* Overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <span className="text-primary font-mono text-xs tracking-wider uppercase">Project {project.id}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                        <span className="text-xs text-white/60 mt-2 block">Click to flip back</span>
                    </div>
                </div>
            </motion.div>
        </div>
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
                        <FlipCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
