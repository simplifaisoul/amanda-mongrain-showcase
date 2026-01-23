import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import mightyMaestroImg from "@/assets/strategic/mighty-maestro.jpg";
import placeDorleans from "@/assets/strategic/place-dorleans.jpg";
import davidsteaImg from "@/assets/strategic/davidstea.jpg";
import ottawa67sImg from "@/assets/strategic/ottawa-67s.jpg";

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
                {/* Front - Title & Key Points */}
                <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl bg-background p-6 md:p-8 flex flex-col justify-center items-center text-center" 
                    style={{ 
                        backfaceVisibility: 'hidden',
                        background: 'linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.3), hsl(var(--primary)), hsl(var(--primary) / 0.3)) border-box',
                        border: '2px solid transparent'
                    }}
                >
                    <span className="text-primary font-mono text-xs tracking-wider uppercase mb-2">Project {project.id}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">{project.title}</h3>
                    
                    {/* Key Points */}
                    <ul className="text-left space-y-2 mb-8">
                        {project.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                        CLICK TO EXPLORE →
                    </div>
                </div>

                {/* Back - Image + Problem/Solution */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20 shadow-2xl flex flex-col md:flex-row"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden', backgroundColor: 'hsl(var(--background))' }}
                >
                    {/* Image Section */}
                    <div className="md:w-3/5 h-48 md:h-full relative overflow-hidden bg-muted/30 flex items-center justify-center p-2">
                        {project.image ? (
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground/50 font-bold tracking-widest text-sm">[ PROJECT VISUAL ]</span>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-5 md:p-6 flex flex-col">
                        <div className="mb-3">
                            <span className="text-primary font-mono text-xs tracking-wider uppercase">Project {project.id}</span>
                            <h3 className="text-lg font-bold mt-1 text-foreground leading-tight">{project.title}</h3>
                        </div>

                        {/* Problem & Solution */}
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                                <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">The Problem</h4>
                                <p className="text-xs leading-relaxed text-foreground/80">{project.problem}</p>
                            </div>

                            <div className="bg-secondary/5 p-3 rounded-xl border border-secondary/10">
                                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">The Solution</h4>
                                <p className="text-xs leading-relaxed text-foreground/80">{project.solution}</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-3 flex items-center gap-3">
                            <a
                                href={project.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-xl font-semibold text-xs hover:bg-primary/90 transition-colors"
                            >
                                <ExternalLink className="w-3 h-3" />
                                View Full Project
                            </a>
                            <span className="text-[10px] text-muted-foreground">Click to flip</span>
                        </div>
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
            pdfLink: "https://drive.google.com/file/d/1S2BMYMHQ8Z-cCpz7kp1W07CVm94IM9Bs/view",
            image: placeDorleans
        },
        {
            id: 3,
            title: "DAVIDsTEA – Brand Proposal",
            problem: "Rebuilding relevance and loyalty among Gen Z and Millennials following store closures and brand fragmentation.",
            solution: "Positioned DAVIDsTEA as a modern wellness ritual brand with integrated campaigns across digital, CRM, and experiential touchpoints to drive online sales and emotional connection.",
            keyPoints: ["Wellness Positioning", "CRM & Digital Integration", "Repeat Purchase Focus"],
            pdfLink: "https://drive.google.com/file/d/10l4cAqubCHlpI7xKguIpe_R7EpVbCDoj/view",
            image: davidsteaImg
        },
        {
            id: 4,
            title: "Ottawa 67's – IMC Plan",
            problem: "Declining Friday-night game attendance caused by an aging fan base, with games not seen as a social destination.",
            solution: "Introduced pub-led game-night experience and 'Break the Ice' digital strategy targeting young professionals to reframe games as a social destination.",
            keyPoints: ["3,700 Ticket Goal/Game", "$79K Incremental Revenue", "Young Professional Focus"],
            pdfLink: "https://drive.google.com/file/d/1MugEW8pEIwq2fSJd2UbCCQnfbEh4iC4h/view",
            image: ottawa67sImg
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
