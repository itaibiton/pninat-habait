'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { SOCIAL_LINKS } from '@/lib/constants'

export function DIYTeaser() {
  return (
    <Section background="primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#19b4b5] via-[#7ba8ad] to-[#ed7b15] p-1"
      >
        <div className="relative bg-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-block bg-gradient-to-r from-[#ed7b15] to-[#ff6139] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  בקרוב! 🎉
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  ערכת DIY – עשה זאת בעצמך
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
                  ערכת עשה זאת בעצמך לחידוש מטבחים, בקרוב להשקה בישראל.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  כל הכלים והחומרים שתצטרכו כדי לשדרג את המטבח שלכם בעצמכם, עם הדרכה
                  מקצועית צעד אחר צעד.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    href={SOCIAL_LINKS.whatsapp}
                    variant="primary"
                    size="lg"
                  >
                    קבלו עדכונים
                  </Button>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="lg"
                  >
                    השאירו פרטים
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-64 lg:h-full min-h-[400px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/diy/diy-coming-soon.jpg"
                alt="ערכת DIY - בקרוב"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r" />

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute top-8 end-8 bg-white rounded-2xl shadow-2xl p-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#19b4b5]">בקרוב</div>
                  <div className="text-sm text-gray-600 font-medium">2025</div>
                </div>
              </motion.div>

              {/* Features */}
              <div className="absolute bottom-8 start-8 end-8 space-y-3">
                {['הדרכה מקצועית', 'חומרים איכותיים', 'תמיכה מלאה'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2 shadow-lg mx-2"
                  >
                    <svg className="w-5 h-5 text-[#ed7b15]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
