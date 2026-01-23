import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    id: number;
    title: string;
    problem: string;
    solution: string;
    keyPoints: string[];
    pdfLink: string;
}

const FlipCard = ({ project }: { project: ProjectCardProps }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[500px] cursor-pointer group"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-background border border-white/10 p-8 rounded-2xl flex flex-col shadow-xl group-hover:border-primary/50 transition-colors" style={{ backfaceVisibility: 'hidden', backgroundColor: 'hsl(var(--background))' }}>
                    {/* Visual Flip Indicator (Corner Fold effect) */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-background border-r-primary/50 shadow-md transform rotate-90 rounded-bl-lg"></div>
                    <div className="absolute top-2 right-2 text-[10px] text-white font-bold tracking-wider z-10 rotate-45">FLIP</div>

                    <div className="flex-1">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">Project {project.id}</span>
                        <h3 className="text-3xl font-bold mt-4 mb-6 text-foreground leading-tight">{project.title}</h3>

                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Key Highlights:</p>
                            <ul className="space-y-2">
                                {project.keyPoints.map((point, i) => (
                                    <li key={i} className="flex items-start text-foreground/80 text-sm">
                                        <span className="mr-2 text-primary">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                        <p className="text-xs text-muted-foreground">Click card (or corner) to view detailed case study.</p>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            →
                        </div>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden p-0 rounded-2xl border border-primary/20 shadow-2xl overflow-hidden rotate-y-180 flex flex-col"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden', backgroundColor: 'hsl(var(--background))' }}
                >
                    {/* Image Placeholder Section */}
                    <div className="h-1/3 bg-muted relative group-hover:saturate-150 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-bold tracking-widest">[ PROJECT VISUAL ]</span>
                        </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto">
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">The Problem</h4>
                            <p className="text-sm leading-relaxed text-foreground/90">{project.problem}</p>
                        </div>

                        <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">The Solution</h4>
                            <p className="text-sm leading-relaxed text-foreground/90">{project.solution}</p>
                        </div>

                        <a
                            href={project.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Full Project
                        </a>
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
            pdfLink: "https://drive.google.com/file/d/1TAZjK0JHLTi5mN_Hp-cdxzwDwv8G22_M/view"
        },
        {
            id: 2,
            title: "Place D'Orleans - IMC Plan",
            problem: "Retail brand facing increased competition and shifting consumer behaviour during high-pressure seasonal periods.",
            solution: "Repositioned brand around convenience, emotional relief, and experiential value through integrated digital and in-store approach to drive foot traffic and sales.",
            keyPoints: ["Brand Repositioning", "Omnichannel Strategy", "Seasonal Campaign"],
            pdfLink: "https://drive.google.com/drive/folders/1oK9W4ydoRJMMp0tyy2ghYOLfHGcuGkFa?usp=drive_link"
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
            pdfLink: "https://drive.google.com/drive/folders/1LSQ4_icytyUrjShyspmVd-aT_ZV2A9mt?usp=drive_link"
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
