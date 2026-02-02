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
    description: string;
    sections: CaseStudySection[];
    pdfLink: string;
    images?: string[];
}

const ImageCarousel = ({ 
    images, 
    currentIndex, 
    onNext, 
    onPrev, 
    onDotClick,
    alt 
}: { 
    images: string[]; 
    currentIndex: number; 
    onNext: (e: React.MouseEvent) => void; 
    onPrev: (e: React.MouseEvent) => void;
    onDotClick: (e: React.MouseEvent, index: number) => void;
    alt: string;
}) => {
    const hasMultipleImages = images.length > 1;

    return (
        <div className="h-64 md:h-80 overflow-hidden bg-muted/30 flex items-center justify-center p-4 relative">
            <img 
                src={images[currentIndex]} 
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {hasMultipleImages && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-background/70 px-3 py-1.5 rounded-full">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => onDotClick(e, i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-7' : 'bg-foreground/30 hover:bg-foreground/50'}`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const CaseStudyCard = ({ study, index }: { study: CaseStudyProps; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = study.images || [];

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleDotClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setCurrentImageIndex(index);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className="perspective-1000 h-[700px] md:h-[750px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div 
                    className="absolute inset-0 backface-hidden bg-card rounded-3xl overflow-hidden shadow-2xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Image Carousel */}
                    {images.length > 0 && (
                        <ImageCarousel 
                            images={images}
                            currentIndex={currentImageIndex}
                            onNext={nextImage}
                            onPrev={prevImage}
                            onDotClick={handleDotClick}
                            alt={study.hook}
                        />
                    )}
                    
                    {/* Front Content */}
                    <div className="p-6 md:p-8">
                        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
                            Case Study {study.id}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                            {study.hook}
                        </h3>
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
                            {study.description}
                        </p>
                        
                        {/* Flip Button */}
                        <button
                            onClick={handleFlip}
                            className="w-full flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary py-4 rounded-2xl transition-all hover:scale-[1.02] group"
                        >
                            <span className="text-base font-semibold">View Full Details</span>
                            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                        </button>
                    </div>
                </div>

                {/* Back of Card */}
                <div 
                    className="absolute inset-0 backface-hidden bg-card rounded-3xl overflow-hidden shadow-2xl"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    {/* Image Carousel on Back */}
                    {images.length > 0 && (
                        <ImageCarousel 
                            images={images}
                            currentIndex={currentImageIndex}
                            onNext={nextImage}
                            onPrev={prevImage}
                            onDotClick={handleDotClick}
                            alt={study.hook}
                        />
                    )}
                    
                    {/* Back Content - Scrollable */}
                    <div className="p-6 md:p-8 h-[calc(100%-20rem)] md:h-[calc(100%-22rem)] overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                            <div className="flex-1 pr-4">
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
                                className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-shrink-0"
                                aria-label="Flip back"
                            >
                                <RotateCcw className="w-5 h-5" />
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
                                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            {section.icon}
                                        </div>
                                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">
                                            {section.title}
                                        </h4>
                                    </div>
                                    {Array.isArray(section.content) ? (
                                        <ul className="space-y-1.5">
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
                                className="w-full mt-3 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors py-2.5 rounded-xl bg-primary/5 hover:bg-primary/10"
                            >
                                <span className="text-sm font-semibold">
                                    {isExpanded ? 'Show Less' : `Show ${study.sections.length - 3} More Sections`}
                                </span>
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                        )}

                        {/* CTA */}
                        <div className="mt-4 pt-4 border-t border-border/30">
                            <a
                                href={study.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
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
