import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:amandamongrain7@gmail.com",
    icon: Mail,
    label: "Email Me",
    gradient: "from-primary/20 to-primary/5",
    hoverBg: "group-hover:bg-primary",
  },
  {
    href: "https://www.linkedin.com/in/amanda-mongrain-059a3529a/",
    icon: Linkedin,
    label: "LinkedIn",
    gradient: "from-secondary/20 to-secondary/5",
    hoverBg: "group-hover:bg-secondary",
    external: true,
  },
  {
    href: "https://drive.google.com/file/d/1k-TV-knNmEQVw49kkYhnff_3o45e53tS/view?usp=drive_link",
    icon: FileText,
    label: "Resume",
    gradient: "from-muted/40 to-muted/10",
    hoverBg: "group-hover:bg-muted-foreground",
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden flex items-center justify-center min-h-[60vh] noise-overlay">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "hsl(330 65% 55% / 0.12)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work <span className="gradient-text-animated">Together</span>
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I'm actively seeking an internship opportunity where I can apply my marketing skills and continue growing as a professional. If you're looking for a passionate and driven team member, let's connect!
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group glass w-72 h-20 px-8 flex items-center gap-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-11 h-11 rounded-xl bg-muted flex items-center justify-center ${link.hoverBg} transition-colors duration-300`}>
                  <Icon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-medium text-foreground flex-1 text-left">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
