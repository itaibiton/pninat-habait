'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { GALLERY_ITEMS } from '@/lib/constants'

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <Section id="gallery" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          לפני ואחרי
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          צפו בתוצאות המדהימות שהשגנו עבור לקוחותינו
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item.id)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Before/After Comparison */}
              <div className="relative aspect-[4/3]">
                {/* Before Image */}
                <div className="absolute top-0 bottom-0 start-0 w-1/2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.before}
                    alt={`${item.title} - לפני`}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute top-4 start-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    לפני
                  </div>
                </div>
                {/* After Image */}
                <div className="absolute top-0 bottom-0 end-0 w-1/2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.after}
                    alt={`${item.title} - אחרי`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 end-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    אחרי
                  </div>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">לחץ לצפייה מלאה</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 end-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {GALLERY_ITEMS.find((item) => item.id === selectedItem) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={GALLERY_ITEMS.find((item) => item.id === selectedItem)?.before}
                      alt="לפני"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-4 start-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      לפני
                    </div>
                  </div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={GALLERY_ITEMS.find((item) => item.id === selectedItem)?.after}
                      alt="אחרי"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-4 end-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                      אחרי
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
