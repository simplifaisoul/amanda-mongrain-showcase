import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden flex items-center justify-center min-h-[60vh]">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Together</span>
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
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:amandamongrain7@gmail.com">
            <Button variant="outline" size="lg" className="h-16 px-8 text-lg border-2 border-primary/50 text-foreground hover:bg-primary hover:text-white transition-all w-64 justify-start group">
              <Mail className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />
              Email Me
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/amanda-mongrain-059a3529a/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-16 px-8 text-lg border-2 border-secondary/50 text-foreground hover:bg-secondary hover:text-white transition-all w-64 justify-start group">
              <Linkedin className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </a>

          <a href="https://docs.google.com/document/d/1sTszr7E7bKvWVja96W72ICVirEEMTVAD/edit?usp=sharing&ouid=103657833264329754570&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-16 px-8 text-lg border-2 border-white/20 text-foreground hover:bg-white hover:text-black transition-all w-64 justify-start group">
              <FileText className="mr-4 w-6 h-6 group-hover:scale-110 transition-transform" />
              Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;