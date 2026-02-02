import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import nikeAd from "@/assets/creatives/nike-ad.jpg";
import selfPortrait from "@/assets/creatives/self-portrait.jpg";
import illustratorLemons from "@/assets/creatives/illustrator-lemons.jpg";
import calvinKleinAd from "@/assets/creatives/calvin-klein-ad.jpg";

const creatives = [
    {
        title: "Nike Ad",
        subtitle: "Advertising Design",
        image: nikeAd,
    },
    {
        title: "Self Portrait",
        subtitle: "Digital Art & Photography",
        image: selfPortrait,
    },
    {
        title: "Illustrator Work",
        subtitle: "Vector Illustration",
        image: illustratorLemons,
    },
    {
        title: "Calvin Klein Ad",
        subtitle: "Transit Shelter Campaign",
        image: calvinKleinAd,
    },
];

const CreativeExplorations = () => {
    const [selectedCreative, setSelectedCreative] = useState<number | null>(null);

    const goToPrevious = () => {
        if (selectedCreative !== null) {
            setSelectedCreative(selectedCreative === 0 ? creatives.length - 1 : selectedCreative - 1);
        }
    };

    const goToNext = () => {
        if (selectedCreative !== null) {
            setSelectedCreative(selectedCreative === creatives.length - 1 ? 0 : selectedCreative + 1);
        }
    };

    return (
        <section className="py-24 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-right mb-20 text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    CREATIVE <span className="text-secondary">EXPLORATIONS</span>
                </motion.h2>

                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {creatives.map((creative, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative overflow-hidden rounded-3xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            onClick={() => setSelectedCreative(idx)}
                        >
                            <img
                                src={creative.image}
                                alt={creative.title}
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] p-4"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">{creative.title}</h3>
                                <p className="text-muted-foreground text-sm">{creative.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCreative !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCreative(null)}
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
                            key={selectedCreative}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-5xl w-full px-16"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCreative(null)}
                                className="absolute -top-12 right-16 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <img
                                src={creatives[selectedCreative].image}
                                alt={creatives[selectedCreative].title}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                            />
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-bold text-white">{creatives[selectedCreative].title}</h3>
                                <p className="text-muted-foreground">{creatives[selectedCreative].subtitle}</p>
                            </div>

                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2 mt-4">
                                {creatives.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedCreative(idx)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            idx === selectedCreative ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
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
