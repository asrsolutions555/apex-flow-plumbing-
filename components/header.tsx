'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Wrench, Phone } from 'lucide-react'

interface HeaderProps {
  onBookingClick: () => void
}

export function Header({ onBookingClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-solid' : 'header-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-foreground hidden sm:inline">
              Apex Flow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              FAQ
            </button>
            <a
              href="tel:(555)019-FLOW"
              className="flex items-center gap-2 text-accent hover:text-orange-400 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (555) 019-FLOW
            </a>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live availability indicator - shows when scrolled */}
            {isScrolled && (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full animate-fadeInUp">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="animate-pulse-dot relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-green-700">Available now</span>
              </div>
            )}

            <button
              onClick={onBookingClick}
              className="px-3 sm:px-6 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-medium text-xs sm:text-sm animate-fadeInUp"
            >
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3 animate-fadeInUp">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              FAQ
            </button>
            <a
              href="tel:(555)019-FLOW"
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-accent flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (555) 019-FLOW
            </a>
            <button
              onClick={() => {
                onBookingClick()
                setIsMenuOpen(false)
              }}
              className="block w-full px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-medium"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
