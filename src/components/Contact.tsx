import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new projects and opportunities. 
            Whether you need a strategic marketing plan or want to explore collaboration, let's connect.
          </p>
        </div>

        <Card className="mt-12 p-8 bg-background/95 backdrop-blur animate-scale-in">
          <div className="grid md:grid-cols-3 gap-6">
            <Button 
              size="lg"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground h-auto py-6"
              onClick={() => window.location.href = 'mailto:amanda@example.com'}
            >
              <Mail className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-90">Get in touch</div>
              </div>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="flex items-center gap-2 border-2 h-auto py-6"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm opacity-90">Connect with me</div>
              </div>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="flex items-center gap-2 border-2 h-auto py-6"
            >
              <FileText className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Resume</div>
                <div className="text-sm opacity-90">View my CV</div>
              </div>
            </Button>
          </div>
        </Card>

        <p className="mt-12 text-primary-foreground/70 animate-fade-in-slow">
          Based in [Your Location] • Available for freelance & full-time opportunities
        </p>
      </div>
    </section>
  );
};

export default Contact;
