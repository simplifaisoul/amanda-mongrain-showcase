import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Target, Lightbulb, Rocket, BarChart3, ChevronDown, ChevronUp } from "lucide-react";
import mightyMaestroImg from "@/assets/strategic/mighty-maestro.jpg";
import placeDorleans from "@/assets/strategic/place-dorleans.jpg";
import davidsteaImg from "@/assets/strategic/davidstea.jpg";
import ottawa67sImg from "@/assets/strategic/ottawa-67s.jpg";

interface CaseStudySection {
    title: string;
    icon: React.ReactNode;
    content: string | string[];
}

interface CaseStudyProps {
    id: number;
    hook: string;
    sections: CaseStudySection[];
    pdfLink: string;
    image?: string;
}

const CaseStudyCard = ({ study, index }: { study: CaseStudyProps; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Hero Section */}
            <div className="relative">
                {study.image && (
                    <div className="h-64 md:h-80 overflow-hidden">
                        <img 
                            src={study.image} 
                            alt={study.hook}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    </div>
                )}
                
                {/* Hook/Title */}
                <div className={`${study.image ? 'absolute bottom-0 left-0 right-0' : ''} p-6 md:p-8`}>
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                        Case Study {study.id}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                        {study.hook}
                    </h3>
                </div>
            </div>

            {/* Content Sections */}
            <div className="p-6 md:p-8 pt-4">
                <div className="grid gap-4">
                    {study.sections.slice(0, isExpanded ? undefined : 2).map((section, i) => (
                        <motion.div
                            key={i}
                            className="bg-background/50 rounded-2xl p-5 border border-border/30"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    {section.icon}
                                </div>
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">
                                    {section.title}
                                </h4>
                            </div>
                            {Array.isArray(section.content) ? (
                                <ul className="space-y-2">
                                    {section.content.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Expand/Collapse Button */}
                {study.sections.length > 2 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full mt-4 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors py-3 rounded-xl bg-primary/5 hover:bg-primary/10"
                    >
                        <span className="text-sm font-semibold">
                            {isExpanded ? 'Show Less' : `Show More (${study.sections.length - 2} sections)`}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                )}

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border/30">
                    <a
                        href={study.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Full Case Study
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicWork = () => {
    const caseStudies: CaseStudyProps[] = [
        {
            id: 1,
            hook: "Mighty Maestro: 2.5x Attendance Growth via Gen Z Social Strategy",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "Low attendance (5-10/class) due to \"gym anxiety\" among Ottawa Gen Z women. Goal: Increase awareness by 30% and attendance to 20+ per class."
                },
                {
                    title: "The Insight",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: "\"The first step is the hardest.\" Traditional fitness marketing feels exclusive; Gen Z craves a \"judgment-free loop\" rather than a destination."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Concept: \"Step, Sweat, Smile, Repeat.\" A 4-stage content funnel designed to lower the barrier to entry and reward consistency over perfection."
                },
                {
                    title: "The Execution",
                    icon: <Rocket className="w-4 h-4" />,
                    content: [
                        "Thematic Content: Weekly pillars (Step/Sweat/Smile/Repeat) to build a narrative.",
                        "Interactive Stories: Polls and \"Mystery Workouts\" to foster community.",
                        "SEO: Targeting \"Safe Fitness Ottawa\" to capture high-intent searchers."
                    ]
                },
                {
                    title: "The Results",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: [
                        "+30% Brand Awareness",
                        "250% Increase in Class Attendance (from 10 to 25 avg)",
                        "Community Growth: Established a thriving, inclusive fitness \"fam\" in Ottawa."
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1TAZjK0JHLTi5mN_Hp-cdxzwDwv8G22_M/view",
            image: mightyMaestroImg
        },
        {
            id: 2,
            hook: "Place D'Orleans: Seasonal IMC Plan for Retail Revival",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "Retail brand facing increased competition and shifting consumer behaviour during high-pressure seasonal periods."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Repositioned brand around convenience, emotional relief, and experiential value through integrated digital and in-store approach to drive foot traffic and sales."
                },
                {
                    title: "Key Tactics",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: [
                        "Brand Repositioning around emotional value",
                        "Omnichannel Strategy across digital and physical",
                        "Seasonal Campaign optimization"
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1S2BMYMHQ8Z-cCpz7kp1W07CVm94IM9Bs/view",
            image: placeDorleans
        },
        {
            id: 3,
            hook: "DAVIDsTEA: Rebuilding Brand Relevance for Modern Wellness",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "Rebuilding relevance and loyalty among Gen Z and Millennials following store closures and brand fragmentation."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Positioned DAVIDsTEA as a modern wellness ritual brand with integrated campaigns across digital, CRM, and experiential touchpoints to drive online sales and emotional connection."
                },
                {
                    title: "Key Tactics",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: [
                        "Wellness Positioning for modern consumers",
                        "CRM & Digital Integration for seamless experience",
                        "Repeat Purchase Focus through loyalty programs"
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/10l4cAqubCHlpI7xKguIpe_R7EpVbCDoj/view",
            image: davidsteaImg
        },
        {
            id: 4,
            hook: "Ottawa 67's: Transforming Games into Social Destinations",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "Declining Friday-night game attendance caused by an aging fan base, with games not seen as a social destination."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Introduced pub-led game-night experience and 'Break the Ice' digital strategy targeting young professionals to reframe games as a social destination."
                },
                {
                    title: "The Results",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: [
                        "3,700 Ticket Goal per Game",
                        "$79K Incremental Revenue target",
                        "Young Professional Focus demographic shift"
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1MugEW8pEIwq2fSJd2UbCCQnfbEh4iC4h/view",
            image: ottawa67sImg
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-background/50">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-foreground mb-6 relative inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    CASE <span className="text-primary">STUDIES</span>
                    <span className="absolute -bottom-4 left-0 w-1/3 h-2 bg-gradient-to-r from-primary to-transparent"></span>
                </motion.h2>
                
                <motion.p
                    className="text-muted-foreground text-lg mb-16 max-w-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Real-world marketing challenges solved with strategic thinking and creative execution.
                </motion.p>

                <div className="flex flex-col gap-12">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
