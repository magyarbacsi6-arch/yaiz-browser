'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  Shield,
  Sparkles,
  Search,
  Palette,
  Battery,
  Wallet,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Ultra Speed Engine',
    description: 'Faster than Chrome. Optimized RAM usage for a seamless browsing experience.',
    gradient: 'from-[#00D4FF] to-[#00A3FF]',
    glow: '#00D4FF',
  },
  {
    icon: Shield,
    title: 'Advanced Privacy',
    description: 'Built-in ad blocker, tracker blocking, anti-fingerprinting, and Incognito++ mode.',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    glow: '#7B61FF',
  },
  {
    icon: Sparkles,
    title: 'AI Assistant Built-In',
    description: 'Sidebar AI that summarizes pages, writes emails, code, content, and supports voice commands.',
    gradient: 'from-[#00D4FF] to-[#7B61FF]',
    glow: '#00D4FF',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Combines Google-style search with AI answers. Instant results with predictive suggestions.',
    gradient: 'from-[#7B61FF] to-[#00D4FF]',
    glow: '#7B61FF',
  },
  {
    icon: Palette,
    title: 'Full Customization',
    description: 'Themes, layout controls, custom dashboards — make Yaiz truly yours.',
    gradient: 'from-[#00A3FF] to-[#00D4FF]',
    glow: '#00A3FF',
  },
  {
    icon: Battery,
    title: 'Battery & Performance Saver',
    description: 'Smart tab sleeping and energy optimization to extend your battery life.',
    gradient: 'from-[#9D7AFF] to-[#7B61FF]',
    glow: '#9D7AFF',
  },
  {
    icon: Wallet,
    title: 'Crypto Wallet',
    description: 'Built-in Web3 wallet for seamless crypto transactions and dApp interactions.',
    gradient: 'from-[#00D4FF] to-[#00A3FF]',
    glow: '#00D4FF',
  },
  {
    icon: Globe,
    title: 'Multi-platform Sync',
    description: 'Sync your tabs, bookmarks, and passwords across all your devices.',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    glow: '#7B61FF',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,97,255,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-6">
            ⚡ Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need.{' '}
            <span className="text-gradient-accent">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Yaiz combines speed, privacy, and AI into one seamless experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(ellipse at center, ${feature.glow}15 0%, transparent 70%)`,
                  }}
                />
                <div className="relative glass rounded-2xl p-6 h-full hover:border-white/[0.12] transition-all duration-300 group-hover:translate-y-[-2px]">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
