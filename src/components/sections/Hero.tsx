import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Mail, Phone, ExternalLink, Download, ChevronRight } from 'lucide-react';
import { PROFILE } from '../../constants';
import { HEADER_IMAGE } from '../../constanta';
import { TypingText } from '../ui/TypingText';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Elements - More subtle and modern */}
      <motion.div 
        style={{ y: y1, opacity }} 
        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2, opacity }} 
        className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" 
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] md:text-xs font-bold mb-8 uppercase tracking-[0.2em] mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[0.95] tracking-[-0.04em] mb-8">
              <div className="block mb-2">
                <TypingText text={PROFILE.name} showCursor />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300">
                <TypingText text={PROFILE.role} delay={1} />
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mb-12">
              {[
                { icon: MapPin, text: PROFILE.location },
                { icon: Mail, text: PROFILE.email },
                { icon: Phone, text: PROFILE.phone }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-500 bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:border-indigo-500/30">
                  <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-500/20 group"
              >
                Start a Project
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={PROFILE.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[44px] md:rounded-[52px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative z-10 rounded-[40px] md:rounded-[48px] overflow-hidden border-2 border-white dark:border-zinc-800 shadow-2xl aspect-[4/5] bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src={HEADER_IMAGE} 
                  alt={PROFILE.name}
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
                  <div className="p-5 lg:p-6 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white font-black shadow-lg">
                        7+
                      </div>
                      <div>
                        <p className="text-white font-bold text-base lg:text-lg leading-tight">Years Excellence</p>
                        <p className="text-white/60 text-xs lg:text-sm mt-0.5">Mobile & Full-stack expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-600 rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-600 rounded-full blur-[80px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
