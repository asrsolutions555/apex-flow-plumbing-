'use client'

import { ChevronRight, Info } from 'lucide-react'

interface CTASectionProps {
  onBookingClick: () => void
  onLearnMoreClick: () => void
}

export function CTASection({ onBookingClick, onLearnMoreClick }: CTASectionProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-accent to-orange-500 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Book your service in under two minutes. Same-day dispatch, upfront pricing, and a 1-year warranty on every repair.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onBookingClick}
              className="px-8 py-4 bg-white text-accent rounded-lg hover:bg-white/90 transition-all font-bold text-lg flex items-center justify-center gap-2 group shadow-lg"
            >
              Book Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLearnMoreClick}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all font-bold text-lg flex items-center justify-center gap-2"
            >
              <Info className="w-5 h-5" />
              Learn More
            </button>
          </div>

          {/* Reassurance line */}
          <p className="text-sm text-white/80 pt-2">
            No obligation. Free inspection and quote before any work begins.
          </p>
        </div>
      </div>
    </section>
  )
}
