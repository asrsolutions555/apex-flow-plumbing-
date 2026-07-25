'use client'

import { X, Zap, BadgeDollarSign, Shield, Wrench, Clock, Star, ChevronRight } from 'lucide-react'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
  onBookingClick: () => void
}

const reasons = [
  {
    icon: Zap,
    title: 'Same-Day Dispatch',
    description: 'Average arrival under 45 minutes for emergencies, 24/7.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Upfront Pricing',
    description: 'Written quote before any work begins. No hidden fees, ever.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully vetted, background-checked, and insured technicians.',
  },
  {
    icon: Wrench,
    title: '1-Year Workmanship Warranty',
    description: 'If the same issue returns, we fix it free of charge.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Nights, weekends, and holidays — we never close.',
  },
  {
    icon: Star,
    title: '4.9-Star Rated by 500+ Customers',
    description: 'Real reviews from real homeowners and businesses.',
  },
]

export function LearnMoreModal({ isOpen, onClose, onBookingClick }: LearnMoreModalProps) {
  if (!isOpen) return null

  const handleBooking = () => {
    onClose()
    onBookingClick()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass animate-fadeInUp">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Why Apex Flow?</h2>
            <p className="text-sm text-muted-foreground">Here is what makes us different.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-colors"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <button
              onClick={handleBooking}
              className="w-full px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Book My Service Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              No obligation. Free inspection and quote before any work begins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
