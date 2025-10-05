import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Writeups from "@/components/Writeups";

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)'
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <div className="mb-8">
              <a 
                href="#" 
                className="italic text-primary hover:text-primary/80 transition-colors"
              >
                Download Resume
              </a>
            </div>
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Publications />
            <Testimonials />
            <Writeups />
            
            <footer className="mt-24 text-sm text-foreground">
              <p>
                Built with <span className="text-text-light">React</span>,{" "}
                <span className="text-text-light">Tailwind CSS</span> &{" "}
                <span className="text-text-light">Lovable AI</span>. Hosted in{" "}
                <span className="text-text-light">Vercel</span>. Inspired by{" "}
                <a 
                  href="https://brittanychiang.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Brittany Chiang
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
