import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Target, Lightbulb, Rocket, BarChart3, ChevronDown, ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface CaseStudySection {
    title: string;
    icon: React.ReactNode;
    content: string | string[];
}

export interface CaseStudyProps {
    id: number;
    hook: string;
    description: string;
    role?: string;
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
        <div className="relative h-56 md:h-72 overflow-hidden bg-muted/20 flex items-center justify-center p-4 rounded-2xl">
            <AnimatePresence mode="wait">
                <motion.img 
                    key={currentIndex}
                    src={images[currentIndex]} 
                    alt={alt}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                />
            </AnimatePresence>
            
            {hasMultipleImages && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all hover:scale-110 z-10 backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md transition-all hover:scale-110 z-10 backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    {/* Image counter pill */}
                    <div className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-muted-foreground font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => onDotClick(e, i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-6' : 'bg-foreground/20 w-1.5 hover:bg-foreground/40'}`}
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

    return (
        <motion.div
            className="group bg-card rounded-3xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Image Carousel */}
            {images.length > 0 && (
                <div className="p-3 pb-0">
                    <ImageCarousel 
                        images={images}
                        currentIndex={currentImageIndex}
                        onNext={nextImage}
                        onPrev={prevImage}
                        onDotClick={handleDotClick}
                        alt={study.hook}
                    />
                </div>
            )}
            
            {/* Card Content */}
            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                            Case Study {study.id}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                            {study.hook}
                        </h3>
                    </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {study.description}
                </p>

                {study.role && (
                    <p className="text-sm text-primary font-medium mb-5">
                        {study.role}
                    </p>
                )}

                {/* Expand/Collapse Toggle */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between gap-3 bg-muted/50 hover:bg-muted/80 text-foreground py-3.5 px-5 rounded-xl transition-all duration-300 group/btn"
                >
                    <span className="flex items-center gap-2 text-sm font-semibold">
                        <Layers className="w-4 h-4 text-primary" />
                        {isExpanded ? 'Hide Details' : 'View Full Breakdown'}
                    </span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                </button>

                {/* Expandable Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-5 space-y-3">
                                {study.sections.map((section, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.06, duration: 0.35 }}
                                        className="bg-background/60 rounded-xl p-4 border border-border/20"
                                    >
                                        <div className="flex items-center gap-2.5 mb-2.5">
                                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                {section.icon}
                                            </div>
                                            <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">
                                                {section.title}
                                            </h4>
                                        </div>
                                        {Array.isArray(section.content) ? (
                                            <ul className="space-y-2 ml-9">
                                                {section.content.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-muted-foreground leading-relaxed ml-9">{section.content}</p>
                                        )}
                                    </motion.div>
                                ))}

                                {/* CTA */}
                                <motion.div 
                                    className="pt-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <a
                                        href={study.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Full Case Study
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default CaseStudyCard;
