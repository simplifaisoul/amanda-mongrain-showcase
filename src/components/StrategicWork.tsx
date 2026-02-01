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
import placeDorleansPersona from "@/assets/strategic/place-dorleans-persona.jpg";
import placeDorleansBillboard from "@/assets/strategic/place-dorleans-billboard.jpg";
import placeDorleansInstagram from "@/assets/strategic/place-dorleans-instagram.jpg";
import placeDorleansNewspaper from "@/assets/strategic/place-dorleans-newspaper.jpg";
import placeDorleansWebsite from "@/assets/strategic/place-dorleans-website.jpg";
import placeDorleansActivation from "@/assets/strategic/place-dorleans-activation.jpg";
import placeDorleansGifts from "@/assets/strategic/place-dorleans-gifts.jpg";
import davidsteaImg from "@/assets/strategic/davidstea.jpg";
import ottawa67sImg from "@/assets/strategic/ottawa-67s.jpg";
import ottawa67sPersonaImg from "@/assets/strategic/ottawa-67s-persona.jpg";
import ottawa67sAppImg from "@/assets/strategic/ottawa-67s-app.jpg";
import ottawa67sLeaderboardImg from "@/assets/strategic/ottawa-67s-leaderboard.jpg";
import ottawa67sEmailImg from "@/assets/strategic/ottawa-67s-email.jpg";

const StrategicWork = () => {
    const caseStudies: CaseStudyProps[] = [
        {
            id: 1,
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
            images: [ottawa67sImg, ottawa67sPersonaImg, ottawa67sAppImg, ottawa67sLeaderboardImg, ottawa67sEmailImg]
        },
        {
            id: 2,
            hook: "Place D'Orleans",
            description: "\"More Holiday\" – A seasonal IMC campaign to reposition an Ottawa shopping center as the stress-free alternative, targeting 120,000 visitors and a 6% sales lift.",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "The Problem: Place d'Orléans faced declining holiday traffic due to intense competition from larger malls and e-commerce. Families experienced high stress during holiday shopping. The Objective: Develop a campaign to reposition the mall as the \"calm, convenient alternative\" to drive 120,000 projected visitors and boost retailer sales by 6% by December 31, 2025."
                },
                {
                    title: "The Insight",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: "\"Shoppers aren't looking for more to do; they're looking for less stress.\" Research into suburban Ottawa women (35-45) revealed a deep desire for ease and joy during the holidays, not just more shopping options. The strategy shifted from transactional retail to experiential relief."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Concept: \"More Holiday.\" I crafted an Integrated Marketing Communications (IMC) plan to transform the mall's perception from a shopping destination to a stress-free, community-focused holiday hub. The \"Big Idea\" was to offer \"more calm, clarity, and joy\" through a curated experience."
                },
                {
                    title: "The Execution",
                    icon: <Rocket className="w-4 h-4" />,
                    content: [
                        "Digital Ecosystem: Targeted paid social media (Instagram/TikTok), Google Display banners, and SEM to reach busy parents with the \"Skip the Chaos. Shop Calm.\" message.",
                        "Experiential Activation: Proposed an in-mall \"Branded Photo Zone\" to create shareable, joyful moments and encourage user-generated content.",
                        "Omnichannel Touchpoints: Integrated transit shelter ads on commuter routes and a central campaign landing page to ensure consistent messaging across all customer journeys."
                    ]
                },
                {
                    title: "Success Benchmarks",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: [
                        "Visitor Traffic: 120,000 projected in-mall visits.",
                        "Retailer Sales: 6% projected increase in retailer sales.",
                        "Digital Reach: 500,000 projected display impressions and 15,000 high-intent search clicks.",
                        "Brand Perception: Establish Place d'Orléans as the preferred stress-free holiday shopping destination in East Ottawa."
                    ]
                }
            ],
            pdfLink: "https://drive.google.com/file/d/1S2BMYMHQ8Z-cCpz7kp1W07CVm94IM9Bs/view",
            images: [placeDorleans, placeDorleansPersona, placeDorleansBillboard, placeDorleansInstagram, placeDorleansNewspaper, placeDorleansWebsite, placeDorleansActivation, placeDorleansGifts]
        },
        {
            id: 3,
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
            id: 4,
            hook: "DAVIDsTEA",
            description: "RFP: DAVIDsTEA Brand Revitalization. Role: Strategic Architect (Market Analysis, Brief Writing, KPI Definition)",
            sections: [
                {
                    title: "The Challenge",
                    icon: <Target className="w-4 h-4" />,
                    content: "The Scenario: I developed a comprehensive Strategic Procurement Brief for DAVIDsTEA, simulating a national brand revitalization project with a hypothetical annual budget of $300,000 to $500,000."
                },
                {
                    title: "The Insight",
                    icon: <Lightbulb className="w-4 h-4" />,
                    content: "\"The Wellness Gap.\" I conducted a deep-dive market analysis of the Canadian tea landscape, identifying that while DAVIDsTEA has high awareness, it lacks \"daily ritual\" relevance for Gen Z. I defined the \"Modern Ritual Seeker\" persona to bridge this gap."
                },
                {
                    title: "The Strategy",
                    icon: <Rocket className="w-4 h-4" />,
                    content: "Architecting the Vision. I authored the full RFP, defining six strategic pillars (from \"Matcha Mission\" to \"Garden to Cup\") to show how a brand can move from \"occasional treat\" to \"daily wellness essential.\""
                },
                {
                    title: "The Requirements",
                    icon: <Rocket className="w-4 h-4" />,
                    content: [
                        "KPI Framework: I established rigorous success metrics, including a 15% target for DTC sales growth.",
                        "Operational Scope: I defined professional standards for the project, including AODA accessibility compliance and national French-language requirements."
                    ]
                },
                {
                    title: "The Goal",
                    icon: <BarChart3 className="w-4 h-4" />,
                    content: "Strategic Mastery: This project was designed to demonstrate the ability to lead a brand's high-level vision, financial parameters, and creative standards from a \"Client-Side\" perspective."
                }
            ],
            pdfLink: "https://drive.google.com/file/d/10l4cAqubCHlpI7xKguIpe_R7EpVbCDoj/view",
            images: [davidsteaImg]
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
