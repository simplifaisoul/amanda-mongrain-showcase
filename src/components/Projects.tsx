import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SimplifAI-1 IMC Plan",
    description: "A comprehensive Integrated Marketing Communications plan that successfully launched SimplifAI-1, resulting in 7+ website clients and establishing market presence.",
    status: "Completed",
    impact: "7+ Clients Acquired",
    skills: ["Strategic Planning", "Marketing", "Client Acquisition", "IMC"],
    color: "from-accent/20 to-accent/5"
  },
  {
    title: "Project Coming Soon",
    description: "An exciting new project currently in development. Check back soon for updates on this innovative marketing campaign.",
    status: "In Development",
    impact: "TBA",
    skills: ["Marketing", "Strategy", "Innovation"],
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Project Coming Soon",
    description: "Another groundbreaking project in the pipeline. Stay tuned for more details on this strategic initiative.",
    status: "Planning",
    impact: "TBA",
    skills: ["Strategy", "Planning", "Digital Marketing"],
    color: "from-muted/40 to-muted/10"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic marketing initiatives that drive measurable results and create lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                    {project.status}
                  </Badge>
                  {index === 0 && (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  )}
                </div>
                <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pt-2">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Impact</p>
                  <p className="text-lg font-semibold text-accent">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
