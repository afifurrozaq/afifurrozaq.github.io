import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Mail } from 'lucide-react';

// Hooks
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

// Layout
import { Navbar } from './components/layout/Navbar';

// UI Components
import { ScrollToTop } from './components/ui/ScrollToTop';
import { SectionHeading } from './components/ui/SectionHeading';

// Sections
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { WebApps } from './components/sections/WebApps';
import { AwardsAndEducation } from './components/sections/AwardsAndEducation';
import { GithubExplorer } from './components/sections/GithubExplorer';
import { ContactForm } from './components/sections/ContactForm';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(['home', 'skills', 'experience', 'projects', 'web-apps', 'explorer', 'contact']);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 relative">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[60] origin-left shadow-[0_0_10px_rgba(79,70,229,0.5)]"
        style={{ scaleX }}
      />

      <Navbar 
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative z-10">
        <Hero />
        
        <div className="space-y-12 md:space-y-20 lg:space-y-32">
          <Skills selectedTech={selectedTech} onTechSelect={setSelectedTech} />
          <Experience />
          <Projects selectedTech={selectedTech} onTechSelect={setSelectedTech} />
          <WebApps />
          <AwardsAndEducation />

          {/* GitHub Explorer Section */}
          <section id="explorer" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
              <GithubExplorer />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-900/10 transition-colors border-y border-zinc-200/50 dark:border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                  <SectionHeading icon={Mail}>Get In Touch</SectionHeading>
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight">
                    Have a project in mind? <br />
                    <span className="text-indigo-600 dark:text-indigo-500">Let's build something great together.</span>
                  </h3>
                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 md:mb-10 leading-relaxed font-medium">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 rounded-[24px] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm shadow-zinc-200/20 dark:shadow-none">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-indigo-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">Email Me</p>
                        <p className="text-base text-zinc-900 dark:text-white font-black">afifurrozaq@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">AR</div>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium">
              © {new Date().getFullYear()} Afifur Rozaq. Built with React & Tailwind.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors text-sm font-bold">Twitter</a>
            <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors text-sm font-bold">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-indigo-500 transition-colors text-sm font-bold">GitHub</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
