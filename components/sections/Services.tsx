'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card, CardImage, CardHeader, CardBody } from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Services() {
  return (
    <Section id="services" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          השירותים שלנו
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          פתרונות מתקדמים לחידוש מטבחים ושיש, עם התאמה אישית מלאה ותוצאות מושלמות
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card className="h-full">
              <CardImage
                src={service.image}
                alt={service.title}
                className="h-64"
              />
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[#19b4b5] uppercase tracking-wide mb-4">
                    יתרונות:
                  </h4>
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#ed7b15] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
