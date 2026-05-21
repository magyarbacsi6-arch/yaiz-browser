'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Compare', href: '#comparison' },
  { label: 'Download', href: '#download' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center font-bold text-sm group-hover:shadow-lg group-hover:shadow-[#00D4FF]/25 transition-shadow duration-300">
              Y
            </div>
            <span className="font-semibold text-lg tracking-tight">Yaiz</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/[0.05] bg-[#0A0A0A]/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white font-medium"
              >
                <Download className="w-4 h-4" />
                Download Yaiz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
