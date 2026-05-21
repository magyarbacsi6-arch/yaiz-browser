'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'AI Assistant Built-In', yaiz: true, chrome: false, brave: false },
  { name: 'Advanced Privacy', yaiz: true, chrome: false, brave: true },
  { name: 'Built-in Ad Blocker', yaiz: true, chrome: false, brave: true },
  { name: 'Crypto Wallet', yaiz: true, chrome: false, brave: true },
  { name: 'Ultra Speed Engine', yaiz: true, chrome: true, brave: true },
  { name: 'Full Customization', yaiz: true, chrome: true, brave: false },
  { name: 'AI Page Summaries', yaiz: true, chrome: false, brave: false },
  { name: 'Multi-platform Sync', yaiz: true, chrome: true, brave: true },
  { name: 'Battery Saver', yaiz: true, chrome: false, brave: true },
  { name: 'Voice Commands', yaiz: true, chrome: false, brave: false },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-24 sm:py-32 overflow-hidden">
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
            🏆 Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            See how{' '}
            <span className="text-gradient-accent">Yaiz</span> compares
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just compete — we redefine what a browser can do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-gray-300">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-sm font-semibold">
                    <span className="text-gradient-accent">Yaiz</span>
                  </th>
                  <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                    Chrome
                  </th>
                  <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                    Brave
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors ${
                      feature.name === 'AI Page Summaries' || feature.name === 'Voice Commands'
                        ? 'bg-[#00D4FF]/[0.02]'
                        : ''
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-300">{feature.name}</td>
                    <td className="px-6 py-4">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {feature.chrome ? (
                        <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center">
                          <Check className="w-4 h-4 text-gray-400" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center">
                          <X className="w-4 h-4 text-gray-600" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {feature.brave ? (
                        <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center">
                          <Check className="w-4 h-4 text-gray-400" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center">
                          <X className="w-4 h-4 text-gray-600" />
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
