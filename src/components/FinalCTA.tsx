'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4FF]/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(123,97,255,0.04)_0%,_transparent_50%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-6">
            🚀 Get Started
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Switch to{' '}
          <span className="text-gradient-accent">Yaiz Today</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Join millions of users who have discovered a faster, smarter, and more private way to browse the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full glass-strong text-white font-semibold text-lg hover:bg-white/[0.08] transition-all duration-300"
          >
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8 text-xs text-gray-500"
        >
          <span>🔒 No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>⚡ 30-second install</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>🆓 Free forever</span>
        </motion.div>
      </div>
    </section>
  );
}
