'use client'

import { Shield, Clock, Award, Star, Hop as Home, Zap } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Availability' },
  { icon: Award, label: 'BBB Accredited' },
  { icon: Star, label: '4.9-Star Rated' },
  { icon: Home, label: '500+ Homes Served' },
  { icon: Zap, label: 'Same-Day Dispatch' },
]

export function TrustBadges() {
  return (
    <section className="py-6 sm:py-8 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex items-center gap-2 justify-center text-center sm:text-left"
              >
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {badge.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
