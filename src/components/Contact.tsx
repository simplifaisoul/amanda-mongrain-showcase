import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileText, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm always excited to discuss new projects and opportunities. 
            Whether you need a strategic marketing plan or want to explore collaboration, let's connect.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="mt-12 p-8 bg-background/95 backdrop-blur-xl border-2 border-primary-foreground/10 hover:border-accent/30 transition-all duration-500 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="w-full flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground h-auto py-6 group relative overflow-hidden"
                  onClick={() => window.location.href = 'mailto:amanda@example.com'}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <Mail className="h-5 w-5 relative z-10" />
                  <div className="text-left relative z-10">
                    <div className="font-semibold">Email</div>
                    <div className="text-sm opacity-90">Get in touch</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full flex items-center gap-3 border-2 h-auto py-6 hover:border-accent hover:bg-accent/10 group relative overflow-hidden"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="h-5 w-5 relative z-10" />
                  <div className="text-left relative z-10">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm opacity-90">Connect with me</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full flex items-center gap-3 border-2 h-auto py-6 hover:border-accent hover:bg-accent/10 group relative overflow-hidden"
                >
                  <FileText className="h-5 w-5 relative z-10" />
                  <div className="text-left relative z-10">
                    <div className="font-semibold">Resume</div>
                    <div className="text-sm opacity-90">View my CV</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.p 
          className="mt-12 text-primary-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Based in [Your Location] • Available for freelance & full-time opportunities
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
