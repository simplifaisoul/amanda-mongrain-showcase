import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Target, Lightbulb, Rocket, BarChart3, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import mightyMaestroImg from "@/assets/strategic/mighty-maestro.jpg";
import mightyMaestroPersonaImg from "@/assets/strategic/mighty-maestro-persona.jpg";
import mightyMaestroStepImg from "@/assets/strategic/mighty-maestro-step.jpg";
import mightyMaestroSweatImg from "@/assets/strategic/mighty-maestro-sweat.jpg";
import mightyMaestroSmileImg from "@/assets/strategic/mighty-maestro-smile.jpg";
import mightyMaestroRepeatImg from "@/assets/strategic/mighty-maestro-repeat.jpg";
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
    images?: string[];
}

const CaseStudyCard = ({ study, index }: { study: CaseStudyProps; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = study.images || [];
    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

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
                {images.length > 0 && (
                    <div className="h-72 md:h-96 overflow-hidden bg-muted/30 flex items-center justify-center p-4 relative">
                        <img 
                            src={images[currentImageIndex]} 
                            alt={study.hook}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        
                        {/* Image Navigation */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                                
                                {/* Image Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-primary w-6' : 'bg-foreground/30 hover:bg-foreground/50'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
                
                {/* Hook/Title */}
                <div className="p-6 md:p-8">
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
            hook: "Mighty Maestro: A Strategic Social Growth Pitch",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "The Problem: Mighty Maestro Fitness (Ottawa) struggled with low class attendance (5-10/session). The Goal: Develop a 2-month integrated strategy to increase awareness by 30% and scale attendance to 20-25 participants per class."
                },
                {
                    title: "The Insight",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: "\"The First Step is the Hardest.\" Research into the Ottawa Gen Z demographic revealed that \"gym anxiety\" and toxic masculinity in traditional spaces were the primary barriers. The audience wasn't looking for a \"body transformation,\" they were looking for belonging."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Concept: \"Step, Sweat, Smile, Repeat.\" I developed a circular content framework designed to lower the psychological barrier to entry. Instead of marketing \"fitness,\" we marketed a community loop that rewards showing up over perfection."
                },
                {
                    title: "The Execution",
                    icon: <Rocket className="w-4 h-4" />,
                    content: [
                        "Thematic Pillars: A 4-week rotating content calendar (Step/Sweat/Smile/Repeat) to build narrative momentum.",
                        "Engagement Funnel: Used interactive Instagram Stories (Polls, Mystery Workouts) to convert \"passive followers\" into \"active participants.\"",
                        "Local SEO: Targeted high-intent keywords like \"Safe Fitness Ottawa\" and \"Affordable Community Gym\" to capture local search traffic."
                    ]
                },
                {
                    title: "Strategic Goals",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: [
                        "Scale Attendance: Design a funnel to move the average class size from 10 to 25 participants.",
                        "Brand Awareness: Establish Mighty Maestro as the #1 \"Safe Space\" for fitness in the Ottawa student community.",
                        "Organic Growth: Implement an SEO-first content strategy to drive consistent, non-paid web traffic."
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1TAZjK0JHLTi5mN_Hp-cdxzwDwv8G22_M/view",
            images: [mightyMaestroPersonaImg, mightyMaestroImg, mightyMaestroStepImg, mightyMaestroSweatImg, mightyMaestroSmileImg, mightyMaestroRepeatImg]
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
            images: [placeDorleans]
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
            images: [davidsteaImg]
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
            images: [ottawa67sImg]
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
