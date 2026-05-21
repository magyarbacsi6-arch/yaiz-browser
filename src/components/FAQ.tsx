'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Yaiz free?',
    answer:
      'Yes! Yaiz is completely free to download and use. We believe privacy and AI-powered browsing should be accessible to everyone. No hidden fees, no premium tiers for basic features.',
  },
  {
    question: 'Is Yaiz safe to use?',
    answer:
      'Absolutely. Yaiz is built with privacy and security as core principles. We use advanced encryption, built-in ad and tracker blocking, anti-fingerprinting technology, and we never sell your data. Our code is regularly audited by third-party security firms.',
  },
  {
    question: 'How is Yaiz different from Chrome?',
    answer:
      'Yaiz combines the best of Chrome with AI capabilities, advanced privacy features, and superior performance. Unlike Chrome, we have a built-in AI assistant, native ad blocking, a crypto wallet, smart tab sleeping for battery savings, and deep customization options — all while using significantly less RAM.',
  },
  {
    question: 'How is Yaiz different from Brave?',
    answer:
      'While both prioritize privacy, Yaiz goes further with a native AI assistant that can summarize pages, write content, and generate code. We also offer more customization options, a smarter speed engine, and a more polished user experience.',
  },
  {
    question: 'Does Yaiz use AI?',
    answer:
      'Yes! AI is at the core of Yaiz. Our built-in AI assistant can summarize web pages, draft emails, write code, answer questions, and even understand voice commands. It works entirely in the sidebar so you can browse and ask questions simultaneously.',
  },
  {
    question: 'Can I sync my data across devices?',
    answer:
      'Yes. Yaiz offers seamless multi-platform sync for your bookmarks, passwords, open tabs, and settings. Your data is end-to-end encrypted, so only you can access it.',
  },
  {
    question: 'Does Yaiz have a built-in VPN?',
    answer:
      'We are currently developing a built-in VPN feature that will be available in an upcoming update. For now, Yaiz offers Incognito++ mode and advanced privacy protections.',
  },
  {
    question: 'Can I import my data from Chrome or Brave?',
    answer:
      'Yes! Yaiz makes it easy to import your bookmarks, passwords, and settings from Chrome, Brave, Firefox, and other major browsers in just a few clicks.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,97,255,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 mb-6">
            ❓ FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Got questions?{' '}
            <span className="text-gradient-accent">We have answers.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about Yaiz.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={`glass rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#00D4FF]/20 bg-white/[0.04]'
                  : 'hover:border-white/[0.12]'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="text-sm sm:text-base font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
