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
            hook: "Mighty Maestro",
            description: "A strategic social media growth pitch designed to double class attendance for a local fitness studio by targeting Gen Z women with an inclusive, community-first approach.",
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
            images: [mightyMaestroImg, mightyMaestroPersonaImg, mightyMaestroStepImg, mightyMaestroSweatImg, mightyMaestroSmileImg, mightyMaestroRepeatImg]
        },
        {
            id: 2,
            hook: "Place D'Orleans",
            description: "A seasonal integrated marketing campaign designed to revive retail foot traffic and reposition the shopping center as a convenient, emotionally rewarding destination.",
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
            hook: "DAVIDsTEA",
            description: "A brand revitalization proposal to rebuild relevance among Gen Z and Millennials by repositioning DAVIDsTEA as a modern wellness ritual brand.",
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
            hook: "Ottawa 67's",
            description: "\"Break the Ice\" – A strategic IMC proposal to transform Friday-night hockey games into must-attend social destinations for young professionals.",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "The Problem: Declining Friday night game attendance among the 25-30 age demographic in Ottawa. The Objective: Develop a 3-month integrated strategy to drive $79,000 in projected incremental revenue and sell 3,700 additional tickets."
                },
                {
                    title: "The Insight",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: "\"Hockey culture can feel exclusive.\" Research into Ottawa young professionals revealed that while they value community, they often feel intimidated by traditional sports environments. The strategy shifted the focus from \"the game\" to \"the social catalyst.\""
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Concept: \"Break the Ice.\" I built a \"ground-up\" Integrated Marketing Communications (IMC) plan to reframe the Ottawa 67's as a social hub. The strategy focused on lowering social barriers for \"non-hockey fans\" to foster new local connections."
                },
                {
                    title: "The Execution",
                    icon: <Rocket className="w-4 h-4" />,
                    content: [
                        "BRRReakthrough App: A conceptual community-building tool to connect fans with shared interests in-arena.",
                        "O'Riley's Pub Pop-Up: A strategic partnership proposal to create a dedicated social gathering space at TD Place.",
                        "Thematic Messaging: \"Your team, your terms\" tagline designed to emphasize inclusivity and social belonging."
                    ]
                },
                {
                    title: "Success Benchmarks",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: [
                        "Revenue Target: $79,000 in incremental ticket and F&B sales.",
                        "Growth Target: 3,700 additional tickets sold over the campaign period.",
                        "Engagement Target: 5,000 app downloads with a 50% interaction rate."
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1MugEW8pEIwq2fSJd2UbCCQnfbEh4iC4h/view",
            images: [ottawa67sImg]
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicWork;
