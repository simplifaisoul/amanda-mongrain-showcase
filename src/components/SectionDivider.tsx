import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="section-divider w-full"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
};

export default SectionDivider;
