import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      <footer className="py-8 px-6 bg-primary text-center">
        <p className="text-primary-foreground/70">
          © 2024 Amanda Mongrain. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
