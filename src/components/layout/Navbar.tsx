import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Github } from 'lucide-react';
import { Theme } from '../../hooks/useTheme';
import { PROFILE } from '../../constants';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  theme, 
  toggleTheme, 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Explorer', href: '#explorer', id: 'explorer' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between px-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-[24px] border border-white/20 dark:border-white/5 shadow-2xl shadow-zinc-900/5 dark:shadow-black/20 pointer-events-auto">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-lg shadow-indigo-600/20 group-hover:rotate-6 transition-transform">
            AR
          </div>
          <span className="text-sm font-black tracking-widest text-zinc-900 dark:text-white hidden sm:block">
            AFIFUR ROZAQ
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href}
              className={`text-xs font-bold transition-all px-4 py-2 rounded-xl relative ${
                activeSection === link.id 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/5' 
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-xl -z-10"
                />
              )}
            </a>
          ))}
          
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
          
          <div className="flex items-center gap-1.5">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 transition-colors h-9 w-9 flex items-center justify-center overflow-hidden"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            <a 
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-80 transition-all h-9 w-9 flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 h-9 w-9 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <button 
            className="text-zinc-900 dark:text-white p-2 h-9 w-9 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/50 rounded-xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-bold tracking-tight py-4 px-6 rounded-2xl transition-all ${
                    activeSection === link.id 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/5' 
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
