'use client'

import { useState, useEffect } from 'react'
import { ChevronUp, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  onBookingClick: () => void
  onContactClick: () => void
}

export function Footer({ onBookingClick, onContactClick }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Info Column */}
          <div className="space-y-4 animate-slideInLeft">
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:(555)019-FLOW"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>(555) 019-FLOW</span>
              </a>
              <a
                href="mailto:info@apexflow.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@apexflow.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Main Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4 animate-slideInRight">
            <h3 className="text-lg font-bold text-foreground">Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">24/7 Emergency</span>
                <span className="inline-flex items-center gap-1 text-accent font-medium text-xs bg-accent/10 px-2 py-1 rounded">
                  <Clock className="w-3 h-3" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact Form
                </button>
              </li>
              <li>
                <button
                  onClick={onBookingClick}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Book Service
                </button>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4 animate-slideInRight">
            <h3 className="text-lg font-bold text-foreground">Emergency?</h3>
            <p className="text-sm text-muted-foreground">
              Don{"'"}t wait. Call us now or click below to book immediate service.
            </p>
            <button
              onClick={onBookingClick}
              className="w-full px-4 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-bold text-sm"
            >
              Emergency Booking
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apex Flow Plumbing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={backToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl animate-slideInRight z-40"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}
