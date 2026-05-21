'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

export default function FloatingAIButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] flex items-center justify-center shadow-lg shadow-[#00D4FF]/25 hover:shadow-xl hover:shadow-[#00D4FF]/40 transition-shadow duration-300 cursor-pointer"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Sparkles className="w-6 h-6 text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-[#111111] border border-white/[0.08] shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-medium text-sm">Yaiz AI</span>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white/[0.03] rounded-xl p-3 mb-3">
                <p className="text-xs text-gray-400">Hi! I'm Yaiz AI. How can I help you today?</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/[0.05] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 border border-white/[0.08] focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                />
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 cursor-pointer">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
