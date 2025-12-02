import amandaPhoto from "@/assets/amanda-photo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Amanda Mongrain
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            Marketing Strategist & Digital Storyteller
          </p>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
            Transforming brands through strategic marketing campaigns and innovative digital solutions. 
            Specialized in IMC planning and client acquisition.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in-slow">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
            <img 
              src={amandaPhoto} 
              alt="Amanda Mongrain" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
