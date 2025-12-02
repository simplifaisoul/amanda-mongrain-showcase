import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const strengths = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Developing comprehensive marketing strategies that align with business objectives"
  },
  {
    icon: TrendingUp,
    title: "Growth Focus",
    description: "Driving measurable results through data-driven campaign optimization"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Building lasting relationships and delivering exceptional value to clients"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a results-driven marketing professional passionate about creating impactful 
            campaigns that bridge creativity and strategy. With proven success in IMC planning 
            and client acquisition, I transform business challenges into opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {strengths.map((strength, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <strength.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
