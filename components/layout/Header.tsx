'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 start-0 end-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#19b4b5] to-[#7ba8ad] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">פ</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">פנינת הבית</h1>
              <p className="text-xs text-gray-600 hidden sm:block">חידוש מטבחים ושיש</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium"
            >
              שירותים
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium"
            >
              גלריה
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium"
            >
              צור קשר
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              href={`tel:${CONTACT_INFO.phone}`}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {CONTACT_INFO.phoneFormatted}
            </Button>
            <Button
              href={SOCIAL_LINKS.whatsapp}
              variant="secondary"
              size="sm"
            >
              וואטסאפ
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#19b4b5]"
              aria-label="תפריט"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-start text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium py-2"
              >
                שירותים
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-start text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium py-2"
              >
                גלריה
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-start text-gray-700 hover:text-[#19b4b5] transition-colors duration-200 font-medium py-2"
              >
                צור קשר
              </button>
              <Button
                href={`tel:${CONTACT_INFO.phone}`}
                variant="outline"
                size="sm"
                className="w-full sm:hidden"
              >
                התקשר: {CONTACT_INFO.phoneFormatted}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
