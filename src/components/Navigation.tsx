import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  return <>
    <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"}`} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })} className="text-2xl font-bold text-foreground hover:text-accent transition-colors relative group" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            <motion.span className="relative z-10" animate={{
              backgroundImage: ["linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground)))", "linear-gradient(to right, hsl(var(--accent)), hsl(var(--foreground)))", "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground)))"]
            }} style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}></motion.span>
            <motion.div className="absolute -inset-2 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
              <Button variant="ghost" onClick={() => scrollToSection("projects")} className="relative group bg-zinc-50/0 text-primary-foreground">
                Projects
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </motion.div>
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }}>
              <Button variant="ghost" onClick={() => scrollToSection("skills")} className="relative group text-primary-foreground">
                Skills
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </motion.div>
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
              <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileTap={{
            scale: 0.9
          }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && <motion.div className="fixed inset-0 z-40 md:hidden" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
        <motion.div className="absolute inset-0 bg-background/98 backdrop-blur-xl" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} />
        <motion.div className="relative h-full flex flex-col items-center justify-center space-y-8" initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
            <Button variant="ghost" onClick={() => scrollToSection("projects")} className="text-2xl text-foreground hover:text-accent">
              Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
            <Button variant="ghost" onClick={() => scrollToSection("skills")} className="text-2xl text-foreground hover:text-accent">
              Skills
            </Button>
          </motion.div>
          <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
            <Button onClick={() => scrollToSection("contact")} className="text-2xl bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </>;
};
export default Navigation;