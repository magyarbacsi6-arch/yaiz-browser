'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Software Engineer',
    avatar: 'AR',
    gradient: 'from-[#00D4FF] to-[#00A3FF]',
    content:
      'This browser is insane. The AI sidebar alone saves me hours every week. I have completely switched from Chrome — and I never thought I would say that.',
  },
  {
    name: 'Sarah Chen',
    role: 'Digital Marketer',
    avatar: 'SC',
    gradient: 'from-[#7B61FF] to-[#9D7AFF]',
    content:
      'Better than Chrome and Brave combined. The privacy features are top-notch, and the speed difference is noticeable immediately. Game changer.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Tech Reviewer',
    avatar: 'MJ',
    gradient: 'from-[#00D4FF] to-[#7B61FF]',
    content:
      'I review browsers for a living, and Yaiz is the most exciting launch I have seen in years. The combination of AI + privacy + performance is unmatched.',
  },
  {
    name: 'Emily Nakamura',
    role: 'Freelance Designer',
    avatar: 'EN',
    gradient: 'from-[#00A3FF] to-[#00D4FF]',
    content:
      'The customization options are incredible. I have my browser set up exactly how I want it, and the battery saver actually works. Highly recommend.',
  },
];

export default function Testimonials() {
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
            ⭐ Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by{' '}
            <span className="text-gradient-accent">thousands</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dont take our word for it — hear from the people who use Yaiz every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-white/[0.12] transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xs font-bold`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
