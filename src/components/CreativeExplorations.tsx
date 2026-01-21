import { motion } from "framer-motion";

const CreativeExplorations = () => {
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

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gray-800 animate-pulse">
                            {/* Placeholder for image */}
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-2xl">VISUAL 01</div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Campaign Visuals</h3>
                            <p className="text-gray-300">Art Direction & Setup</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer mt-0 md:mt-24"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gray-900 animate-pulse delay-100">
                            {/* Placeholder for image */}
                            <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-2xl">VISUAL 02</div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Social Media Kit</h3>
                            <p className="text-gray-300">Brand Identity & Assets</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CreativeExplorations;
