'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import { getWazeLink } from '@/lib/utils'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Placeholder for CRM integration
    console.log('Form submitted:', formData)

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('תודה! נחזור אליך בהקדם')
      setIsSubmitting(false)
      setFormData({ name: '', city: '', phone: '', email: '' })

      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Section id="contact" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          צור קשר
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          לפניות והשארת פרטים – נחזור אליכם בהקדם
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              השאירו פרטים ונחזור אליכם
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="שם מלא"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="שם מלא"
                required
              />
              <Input
                label="עיר"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="עיר מגורים"
                required
              />
              <Input
                label="טלפון"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="05X-XXX-XXXX"
                required
              />
              <Input
                label="אימייל"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </Button>
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-semibold"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              פרטי התקשרות
            </h3>
            <div className="space-y-6">
              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#19b4b5] to-[#7ba8ad] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">טלפון</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-[#19b4b5] transition-colors">
                    {CONTACT_INFO.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ed7b15] to-[#ff6139] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">אימייל</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-[#ed7b15] transition-colors break-all">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </a>

              {/* Location */}
              <a
                href={getWazeLink(CONTACT_INFO.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7ba8ad] to-[#19b4b5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">מיקום</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-[#19b4b5] transition-colors">
                    {CONTACT_INFO.address}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    לחץ לניווט ב-Waze
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours (Optional) */}
          <div className="bg-gradient-to-br from-[#19b4b5] to-[#7ba8ad] rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">שעות פעילות</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">ראשון - חמישי</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">שישי</span>
                <span>08:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">שבת</span>
                <span>סגור</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
