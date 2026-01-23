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
            className="relative w-full h-[600px] cursor-pointer group"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {/* Front - Image Focused */}
                <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover:border-primary/50 transition-colors" 
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Full Image Background */}
                    <div className="absolute inset-0">
                        {project.image ? (
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground/50 font-bold tracking-widest">[ PROJECT VISUAL ]</span>
                            </div>
                        )}
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>

                    {/* Visual Flip Indicator */}
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                        <span>FLIP FOR DETAILS</span>
                        <span className="text-sm">→</span>
                    </div>

                    {/* Content overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">Project {project.id}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white leading-tight">{project.title}</h3>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.keyPoints.map((point, i) => (
                                <span key={i} className="bg-white/10 backdrop-blur-sm text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/20">
                                    {point}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back - Details */}
                <div
                    className="absolute inset-0 backface-hidden p-8 rounded-2xl border border-primary/20 shadow-2xl flex flex-col"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden', backgroundColor: 'hsl(var(--background))' }}
                >
                    {/* Header */}
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">Project {project.id}</span>
                        <h3 className="text-2xl font-bold mt-2 text-foreground leading-tight">{project.title}</h3>
                    </div>

                    {/* Problem & Solution */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Problem</h4>
                            <p className="text-sm leading-relaxed text-foreground/90">{project.problem}</p>
                        </div>

                        <div className="bg-secondary/5 p-5 rounded-xl border border-secondary/10">
                            <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">The Solution</h4>
                            <p className="text-sm leading-relaxed text-foreground/90">{project.solution}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={project.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Full Project
                    </a>

                    <p className="text-center text-xs text-muted-foreground mt-4">Click anywhere to flip back</p>
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

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <FlipCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
