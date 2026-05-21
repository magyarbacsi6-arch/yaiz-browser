'use client';

import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(123,97,255,0.05)_0%,_transparent_50%)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF]/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            Now Available — Yaiz Browser v2.0
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-gradient">The Future of</span>
          <br />
          <span className="text-gradient-accent">Browsing Starts Here.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Meet Yaiz — the fastest, smartest, and most private browser ever built.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#download"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#00D4FF]/25 transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Now
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-strong text-white font-semibold text-lg hover:bg-white/[0.08] transition-all duration-300"
          >
            Learn More
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.08]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="bg-white/[0.05] rounded-lg px-3 py-1.5 text-xs text-gray-500 text-center">
                  yaiz.ai
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,212,255,0.06)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(123,97,255,0.06)_0%,_transparent_50%)]" />
              <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col items-start justify-center h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center font-bold text-xl mb-4">
                  Y
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  Welcome to{' '}
                  <span className="text-gradient-accent">Yaiz</span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-md">
                  Your AI-powered private browser. Fast, secure, and built for the modern web.
                </p>
                <div className="flex gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-gray-400">
                    🔒 Private
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-gray-400">
                    ⚡ Fast
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-gray-400">
                    🤖 AI-Powered
                  </div>
                </div>
                <div className="mt-6 w-full max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      placeholder="Search with Yaiz AI..."
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 -right-4 h-12 bg-gradient-to-r from-[#00D4FF]/10 via-[#7B61FF]/10 to-transparent blur-xl rounded-full -z-10" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
