'use client';

import { GitBranch, Globe, MessageCircle, Mail } from 'lucide-react';

const footerLinks = {
  product: ['Features', 'Download', 'Changelog', 'Roadmap'],
  company: ['About', 'Blog', 'Careers', 'Press'],
  support: ['Help Center', 'Contact', 'Status', 'Community'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center font-bold text-sm">
                Y
              </div>
              <span className="font-semibold text-lg tracking-tight">Yaiz</span>
            </a>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
              The fastest, smartest, and most private browser. Built for the modern web.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-[#00D4FF]/30 transition-all duration-200 group"
              >
                <GitBranch className="w-4 h-4 text-gray-500 group-hover:text-[#00D4FF] transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-[#7B61FF]/30 transition-all duration-200 group"
              >
                <Globe className="w-4 h-4 text-gray-500 group-hover:text-[#7B61FF] transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-[#00D4FF]/30 transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-[#00D4FF] transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-[#7B61FF]/30 transition-all duration-200 group"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-[#7B61FF] transition-colors" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Yaiz. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with 💎 for a better web.
          </p>
        </div>
      </div>
    </footer>
  );
}
