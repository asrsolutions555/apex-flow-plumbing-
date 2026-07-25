'use client'

import { useState } from 'react'
import { ChevronRight, CircleAlert as AlertCircle } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onBookingClick: () => void
}

export function Hero({ onBookingClick }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 bg-gradient-to-b from-background via-background to-secondary/40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slideInLeft">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">24/7 Emergency Service Available</span>
              </div>
            </div>

            {/* Live availability indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="animate-pulse-dot relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700">Plumbers available now</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-foreground">Fast Plumbing</span>
              <br />
              <span className="text-accent">When You Need It</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Professional plumbing solutions for every emergency. From burst pipes to drain cleaning, we{"'"}re here to fix it fast. Same-day dispatch guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookingClick}
                className="px-8 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-all font-semibold flex items-center justify-center gap-2 group animate-pulse-glow"
              >
                Claim My Fast Dispatch
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:(555)019-FLOW"
                className="px-8 py-3 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <p className="text-sm text-muted-foreground">Homes Served</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-96 sm:h-full min-h-96 lg:min-h-screen flex items-center justify-center animate-slideInRight">
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass-light shadow-lg shadow-accent/5">
              <Image
                src="/emergency-plumber.png"
                alt="Emergency plumbing service technician at work"
                fill
                className="object-cover"
                priority
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-secondary/50 animate-pulse" />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 border border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
