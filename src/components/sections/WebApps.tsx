import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, BookOpen, ShieldX, Trophy } from 'lucide-react';

const WEB_APPS = [
  {
    title: "Teach AI Assistant",
    description: "An AI-powered teaching assistant platform to help educators and students interact with AI models for better learning experiences. Built with Gemini API integration for intelligent responses.",
    link: "https://teach-ai-assistant.vercel.app",
    tech: ["Next.js", "Gemini API", "Tailwind CSS"],
    icon: Sparkles,
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30",
    highlight: "Top 100 Projects - Google Developer Group #JuaraVibeCoding"
  },
  {
    title: "Aplikasi Doa Harian",
    description: "A digital collection of daily prayers (Doa) to help users practice and memorize Islamic prayers easily. Features a clean, accessible interface for daily spiritual practice.",
    link: "https://aplikasi-doa-harian.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: BookOpen,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    highlight: "Top 100 Projects - Google Developer Group #JuaraVibeCoding"
  },
  {
    title: "DroidShield",
    description: "Open Source AndroidSDK for detect Root Detect, FakeGPS Detect, Emulator Detect, Network Speed Detect",
    link: "https://github.com/afifurrozaq/DroidShield",
    tech: ["Kotlin","AndroidSDK"],
    icon: ShieldX,
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30"
  },
];

export const WebApps: React.FC = () => {
  return (
    <section id="web-apps" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Web Applications</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-6" />
          <p className="text-zinc-400 max-w-2xl">
            Cloud-deployed web applications focusing on AI integration and daily utilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEB_APPS.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${app.color} border ${app.border} hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <app.icon size={120} />
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-100">
                      <app.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-100">{app.title}</h3>
                  </div>
                </div>

                {app.highlight && (
                  <div className="mb-6 flex items-start gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    <Trophy size={16} className="mt-0.5 shrink-0" />
                    <span>{app.highlight}</span>
                  </div>
                )}

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {app.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {app.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-900/50 text-zinc-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-semibold rounded-xl hover:bg-white transition-colors w-fit"
                  >
                    Visit Application
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
