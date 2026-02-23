import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden flex items-center justify-center min-h-[60vh]">

      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-12 text-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Let's Work{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            Together
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          I'm actively seeking an internship opportunity where I can apply my marketing skills and continue growing as a professional. If you're looking for a passionate and driven team member, let's connect!
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {[
            { href: "mailto:amandamongrain7@gmail.com", icon: <Mail className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />, label: "Email Me", borderClass: "border-primary/50", hoverClass: "hover:bg-primary hover:text-primary-foreground" },
            { href: "https://www.linkedin.com/in/amanda-mongrain-059a3529a/", icon: <Linkedin className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />, label: "LinkedIn", borderClass: "border-secondary/50", hoverClass: "hover:bg-secondary hover:text-secondary-foreground", external: true },
            { href: "https://drive.google.com/file/d/1k-TV-knNmEQVw49kkYhnff_3o45e53tS/view?usp=drive_link", icon: <FileText className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />, label: "Resume", borderClass: "border-border", hoverClass: "hover:bg-foreground hover:text-background", external: true },
          ].map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              custom={i}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Button variant="outline" size="lg" className={`h-16 px-8 text-lg border-2 ${btn.borderClass} text-foreground ${btn.hoverClass} transition-all w-64 justify-start group`}>
                {btn.icon}
                {btn.label}
              </Button>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;