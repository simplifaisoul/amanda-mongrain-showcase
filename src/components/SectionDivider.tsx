import { motion } from "framer-motion";

const SectionDivider = () => (
  <motion.div
    className="section-divider mx-auto max-w-4xl"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  />
);

export default SectionDivider;
