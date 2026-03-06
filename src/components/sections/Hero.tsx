import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Mail, Phone, ExternalLink, Download, ChevronRight } from 'lucide-react';
import { PROFILE } from '../../constants';
import { TypingText } from '../ui/TypingText';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-20 right-[10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <motion.div style={{ y: y2, opacity }} className="absolute bottom-20 left-[5%] w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-6 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter mb-8">
              <TypingText text={PROFILE.name} showCursor />
              <br />
              <span className="text-indigo-600 dark:text-indigo-500">
                <TypingText text={PROFILE.role} delay={1} />
              </span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-medium">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900/50 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-4 h-4 text-indigo-500" />
                {PROFILE.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900/50 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <Mail className="w-4 h-4 text-indigo-500" />
                {PROFILE.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900/50 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <Phone className="w-4 h-4 text-indigo-500" />
                {PROFILE.phone}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 group"
              >
                Let's Talk
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={PROFILE.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src="https://picsum.photos/seed/professional/800/1000" 
                alt={PROFILE.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-white font-bold text-lg mb-1">7+ Years Experience</p>
                  <p className="text-white/70 text-sm">Delivering high-quality mobile and full-stack products.</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full blur-[80px] opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-600 rounded-full blur-[80px] opacity-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
