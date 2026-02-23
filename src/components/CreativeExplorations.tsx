import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import nikeAd from "@/assets/creatives/nike-ad.jpg";
import selfPortrait from "@/assets/creatives/self-portrait.jpg";
import illustratorLemons from "@/assets/creatives/illustrator-lemons.jpg";
import calvinKleinAd from "@/assets/creatives/calvin-klein-ad.jpg";
import magazineAd from "@/assets/creatives/magazine-ad.jpg";

const creatives = [
    {
        title: "Nike Ad",
        subtitle: "Advertising Design",
        image: nikeAd,
        rotate: false,
    },
    {
        title: "Self Portrait",
        subtitle: "Digital Art & Photography",
        image: selfPortrait,
        rotate: false,
    },
    {
        title: "Illustrator Work",
        subtitle: "Adobe Illustrator",
        image: illustratorLemons,
        rotate: false,
    },
    {
        title: "Calvin Klein Ad",
        subtitle: "Transit Shelter Campaign",
        image: calvinKleinAd,
        rotate: true,
    },
    {
        title: "Magazine Ad",
        subtitle: "Print Design",
        image: magazineAd,
        rotate: false,
    },
];

const CreativeExplorations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? creatives.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === creatives.length - 1 ? 0 : currentIndex + 1);
    };

    const currentCreative = creatives[currentIndex];

    return (
        <section className="py-24 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-right mb-20 text-foreground"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    CREATIVE <span className="text-secondary">EXPLORATIONS</span>
                </motion.h2>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center">
                    {/* Previous Arrow */}
                    <motion.button
                        onClick={goToPrevious}
                        className="absolute left-0 md:left-8 z-10 p-3 bg-muted/30 rounded-full hover:bg-muted/50 transition-colors border border-border/30"
                        whileHover={{ scale: 1.15, x: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-8 h-8 text-foreground" />
                    </motion.button>

                    {/* Creative Display */}
                    <div className="w-full max-w-4xl mx-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="relative overflow-hidden rounded-3xl cursor-pointer group"
                                onClick={() => setLightboxOpen(true)}
                            >
                                <div className={`flex items-center justify-center ${currentCreative.rotate ? "h-[400px]" : "h-[500px]"}`}>
                                    <img
                                        src={currentCreative.image}
                                        alt={currentCreative.title}
                                        className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
                                            currentCreative.rotate ? "rotate-90 max-w-[350px] max-h-[350px]" : "max-w-full max-h-full"
                                        }`}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">{currentCreative.title}</h3>
                                    <p className="text-muted-foreground text-sm">{currentCreative.subtitle}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Title & Subtitle */}
                        <div className="text-center mt-6">
                            <h3 className="text-2xl font-bold text-foreground">{currentCreative.title}</h3>
                            <p className="text-muted-foreground">{currentCreative.subtitle}</p>
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-3 mt-6">
                            {creatives.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`rounded-full transition-colors ${
                                        idx === currentIndex ? 'bg-primary' : 'bg-foreground/20 hover:bg-foreground/40'
                                    }`}
                                    animate={{ 
                                        width: idx === currentIndex ? 24 : 12,
                                        height: 12,
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <motion.button
                        onClick={goToNext}
                        className="absolute right-0 md:right-8 z-10 p-3 bg-muted/30 rounded-full hover:bg-muted/50 transition-colors border border-border/30"
                        whileHover={{ scale: 1.15, x: 3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-8 h-8 text-foreground" />
                    </motion.button>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxOpen(false)}
                    >
                        {/* Previous Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>

                        {/* Next Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>

                        <motion.div
                            key={currentIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-5xl w-full px-16"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setLightboxOpen(false)}
                                className="absolute -top-12 right-16 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <div className="flex items-center justify-center">
                                <img
                                    src={currentCreative.image}
                                    alt={currentCreative.title}
                                    className={`object-contain rounded-lg ${
                                        currentCreative.rotate ? "rotate-90 max-w-[500px] max-h-[500px]" : "w-full h-auto max-h-[85vh]"
                                    }`}
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-bold text-white">{currentCreative.title}</h3>
                                <p className="text-muted-foreground">{currentCreative.subtitle}</p>
                            </div>

                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2 mt-4">
                                {creatives.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            idx === currentIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CreativeExplorations;
