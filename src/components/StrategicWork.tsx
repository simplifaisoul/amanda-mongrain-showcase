import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import CaseStudyCard, { CaseStudyProps } from "./CaseStudyCard";
import mightyMaestroImg from "@/assets/strategic/mighty-maestro.jpg";
import mightyMaestroPersonaImg from "@/assets/strategic/mighty-maestro-persona.jpg";
import mightyMaestroStepImg from "@/assets/strategic/mighty-maestro-step.jpg";
import mightyMaestroSweatImg from "@/assets/strategic/mighty-maestro-sweat.jpg";
import mightyMaestroSmileImg from "@/assets/strategic/mighty-maestro-smile.jpg";
import mightyMaestroRepeatImg from "@/assets/strategic/mighty-maestro-repeat.jpg";
import placeDorleans from "@/assets/strategic/place-dorleans.jpg";
import davidsteaImg from "@/assets/strategic/davidstea.jpg";
import ottawa67sImg from "@/assets/strategic/ottawa-67s.jpg";

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
            <div className="max-w-6xl mx-auto">
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
                    Real-world marketing challenges solved with strategic thinking and creative execution. Click to explore each project.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
