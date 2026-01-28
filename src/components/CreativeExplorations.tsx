import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import nikeAd from "@/assets/creatives/nike-ad.jpg";
import selfPortrait from "@/assets/creatives/self-portrait.jpg";
import illustratorLemons from "@/assets/creatives/illustrator-lemons.jpg";

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
];

const CreativeExplorations = () => {
    const [selectedCreative, setSelectedCreative] = useState<number | null>(null);

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

                <div className="grid md:grid-cols-3 gap-6">
                    {creatives.map((creative, idx) => (
                        <motion.div
                            key={idx}
                            className={`group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer ${
                                idx === 1 ? "mt-0 md:mt-12" : idx === 2 ? "mt-0 md:mt-24" : ""
                            }`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            onClick={() => setSelectedCreative(idx)}
                        >
                            <img
                                src={creative.image}
                                alt={creative.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">{creative.title}</h3>
                                <p className="text-gray-300 text-sm">{creative.subtitle}</p>
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
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCreative(null)}
                                className="absolute -top-12 right-0 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
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
                                <p className="text-gray-400">{creatives[selectedCreative].subtitle}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CreativeExplorations;
