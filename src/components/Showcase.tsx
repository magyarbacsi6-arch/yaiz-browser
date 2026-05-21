'use client';

import { motion } from 'framer-motion';
import { Sparkles, Settings, Home } from 'lucide-react';

const showcases = [
  {
    icon: Home,
    title: 'Smart Homepage',
    description: 'Your personalized dashboard with AI-powered suggestions, bookmarks, and news.',
    gradient: 'from-[#00D4FF] to-[#00A3FF]',
    features: ['AI-powered feed', 'Quick bookmarks', 'Weather & news', 'Recent tabs'],
  },
  {
    icon: Sparkles,
    title: 'AI Sidebar',
    description: 'Your intelligent assistant is always ready. Summarize, write, translate, and more.',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    features: ['Page summarization', 'Content writing', 'Code generation', 'Voice commands'],
  },
  {
    icon: Settings,
    title: 'Advanced Settings',
    description: 'Fine-tune every aspect of your browsing experience with granular controls.',
    gradient: 'from-[#00D4FF] to-[#7B61FF]',
    features: ['Privacy controls', 'Theme engine', 'Performance tuning', 'Extension manager'],
  },
];

export default function Showcase() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-6">
            🖥️ Product Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Beautiful inside{' '}
            <span className="text-gradient-accent">and out</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every pixel crafted for an unparalleled browsing experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300">
                  <div
                    className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                      <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-gray-500"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
