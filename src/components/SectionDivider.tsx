import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="section-divider w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default SectionDivider;
