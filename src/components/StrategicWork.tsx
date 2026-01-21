import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
    id: number;
    title: string;
    problem: string;
    solution: string;
}

const FlipCard = ({ project }: { project: ProjectCardProps }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[400px] perspective-1000 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-card border border-white/10 p-8 rounded-2xl flex flex-col justify-between shadow-xl group-hover:border-primary/50 transition-colors">
                    <div>
                        <span className="text-primary font-mono text-sm tracking-wider">PROJECT {project.id}</span>
                        <h3 className="text-3xl font-bold mt-4 mb-4 text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">Click to reveal the strategic solution.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center self-end">
                        <span className="text-2xl text-primary">→</span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden p-8 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-2xl flex flex-col justify-center rotate-y-180"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-bold opacity-70 uppercase tracking-widest mb-2">Problem</h4>
                            <p className="text-lg leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="w-full h-px bg-white/20"></div>
                        <div>
                            <h4 className="text-sm font-bold opacity-70 uppercase tracking-widest mb-2">Solution</h4>
                            <p className="text-lg leading-relaxed">{project.solution}</p>
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
            title: "Market Expansion",
            problem: "Client struggled to penetrate Q4 saturated market with legacy messaging.",
            solution: "Developed 'Quiet Luxury' campaign focusing on exclusivity, resulting in 40% lead increase."
        },
        {
            id: 2,
            title: "Brand Re-alignment",
            problem: "Disconnect between Gen Z audience values and corporate identity.",
            solution: "Implemented authentic influencer strategy and sustainability-first messaging overhaul."
        },
        {
            id: 3,
            title: "Digital Acquisition",
            problem: "High CPA across paid social channels effectively draining budget.",
            solution: "Restructured ad account with UGC-focused creatives and lookalike audience modeling."
        },
        {
            id: 4,
            title: "Product Launch",
            problem: "New SaaS product lacked differentiation in crowded landscape.",
            solution: "Crafted challenge-based narrative positioning the tool as the 'Anti-Complexity' hero."
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
