import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Target, Lightbulb, Rocket, BarChart3, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface CaseStudySection {
    title: string;
    icon: React.ReactNode;
    content: string | string[];
}

export interface CaseStudyProps {
    id: number;
    hook: string;
    sections: CaseStudySection[];
    pdfLink: string;
    images?: string[];
}

const CaseStudyCard = ({ study, index }: { study: CaseStudyProps; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = study.images || [];
    const hasMultipleImages = images.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Get first two sections for the front preview
    const keyPoints = study.sections.slice(0, 2);

    return (
        <motion.div
            className="perspective-1000 h-[600px] md:h-[650px] cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={handleFlip}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div 
                    className="absolute inset-0 backface-hidden bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Image */}
                    {images.length > 0 && (
                        <div className="h-56 md:h-72 overflow-hidden bg-muted/30 flex items-center justify-center p-4 relative">
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
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(i);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-primary w-6' : 'bg-foreground/30 hover:bg-foreground/50'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                    
                    {/* Front Content */}
                    <div className="p-6 md:p-8">
                        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                            Case Study {study.id}
                        </span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4">
                            {study.hook}
                        </h3>
                        
                        {/* Key Points Preview */}
                        <div className="space-y-3">
                            {keyPoints.map((section, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        {section.icon}
                                    </div>
                                    <p className="text-sm text-foreground/70 line-clamp-2">
                                        {Array.isArray(section.content) ? section.content[0] : section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Flip Hint */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-primary/60">
                            <RotateCcw className="w-4 h-4" />
                            <span className="text-xs font-medium">Click to see more</span>
                        </div>
                    </div>
                </div>

                {/* Back of Card */}
                <div 
                    className="absolute inset-0 backface-hidden bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 overflow-y-auto"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2">
                                    Case Study {study.id}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                                    {study.hook}
                                </h3>
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsFlipped(false);
                                }}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div className="grid gap-3">
                            {study.sections.slice(0, isExpanded ? undefined : 3).map((section, i) => (
                                <div
                                    key={i}
                                    className="bg-background/50 rounded-xl p-4 border border-border/30"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            {section.icon}
                                        </div>
                                        <h4 className="font-bold text-foreground text-xs uppercase tracking-wide">
                                            {section.title}
                                        </h4>
                                    </div>
                                    {Array.isArray(section.content) ? (
                                        <ul className="space-y-1">
                                            {section.content.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                                                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-xs text-foreground/80 leading-relaxed">{section.content}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Expand/Collapse Button */}
                        {study.sections.length > 3 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(!isExpanded);
                                }}
                                className="w-full mt-3 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors py-2 rounded-xl bg-primary/5 hover:bg-primary/10"
                            >
                                <span className="text-xs font-semibold">
                                    {isExpanded ? 'Show Less' : `Show ${study.sections.length - 3} More`}
                                </span>
                                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                            </button>
                        )}

                        {/* CTA */}
                        <div className="mt-4 pt-4 border-t border-border/30">
                            <a
                                href={study.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Full Case Study
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CaseStudyCard;
