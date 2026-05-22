'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  Apple,
  Terminal,
  Smartphone,
  Tablet,
  Package,
  ChevronRight,
} from 'lucide-react';

const platforms = [
  {
    name: 'Windows (Portable)',
    icon: Monitor,
    version: 'v2.0.1',
    size: '110 MB',
    gradient: 'from-[#00A3FF] to-[#00D4FF]',
    href: '/downloads/Yaiz-Browser-Portable.zip',
  },
  {
    name: 'Windows (Installer)',
    icon: Package,
    version: 'v2.0.1',
    size: '78 MB',
    gradient: 'from-[#00A3FF] to-[#00D4FF]',
    href: '/downloads/Yaiz-Browser-Setup.exe',
  },
  {
    name: 'Linux (x64)',
    icon: Terminal,
    version: 'v2.0.1',
    size: '102 MB',
    gradient: 'from-[#00D4FF] to-[#7B61FF]',
    href: '/downloads/Yaiz-Browser-Linux-x64.zip',
  },
  {
    name: 'macOS (Intel)',
    icon: Apple,
    version: 'Coming Soon',
    size: '',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    href: '#',
  },
  {
    name: 'macOS (Apple Silicon)',
    icon: Apple,
    version: 'Coming Soon',
    size: '',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    href: '#',
  },
  {
    name: 'Android',
    icon: Smartphone,
    version: 'Coming Soon',
    size: '',
    gradient: 'from-[#00A3FF] to-[#00D4FF]',
    href: '#',
  },
  {
    name: 'iOS',
    icon: Tablet,
    version: 'Coming Soon',
    size: '',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    href: '#',
  },
];

export default function Download() {
  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,97,255,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,255,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-6">
            📥 Download
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Available on{' '}
            <span className="text-gradient-accent">every platform</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get Yaiz on your preferred device. Sync everywhere, browse anywhere.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                download={platform.href !== '#'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative block"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `radial-gradient(ellipse at center, ${platform.name.includes('Windows') || platform.name === 'Android' ? '#00D4FF' : '#7B61FF'}15 0%, transparent 70%)`,
                    }}
                />
                <div className="relative glass rounded-2xl p-6 text-center hover:border-white/[0.12] transition-all duration-300 group-hover:translate-y-[-2px] cursor-pointer">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{platform.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{platform.version}</p>
                  {platform.size && <p className="text-xs text-gray-600 mb-2">{platform.size}</p>}
                  <div className="flex items-center justify-center gap-1 text-xs text-[#00D4FF] font-medium">
                    {platform.href === '#' ? 'Soon' : 'Download'}
                    {platform.href !== '#' && <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full glass text-sm text-gray-500">
            <span>🔒 Secure download</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>⚡ Fast installation</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>🆓 Completely free</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
