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

                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                        className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gray-800 animate-pulse">
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">VISUAL 01</div>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Campaign Visuals</h3>
                            <p className="text-gray-300 text-sm">Art Direction & Setup</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group relative h-[400px] mt-0 md:mt-12 overflow-hidden rounded-3xl cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gray-900 animate-pulse delay-100">
                            <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-xl">VISUAL 02</div>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Social Kit</h3>
                            <p className="text-gray-300 text-sm">Brand Identity & Assets</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group relative h-[400px] mt-0 md:mt-24 overflow-hidden rounded-3xl cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-gray-800 animate-pulse delay-200">
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">VISUAL 03</div>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Photography</h3>
                            <p className="text-gray-300 text-sm">Creative Direction</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CreativeExplorations;
