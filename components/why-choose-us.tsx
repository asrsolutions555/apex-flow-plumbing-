'use client'

import { Shield, Zap, BadgeDollarSign, Wrench, UserCheck, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured technicians on every job.',
  },
  {
    icon: Zap,
    title: 'Same-Day Dispatch',
    description: 'Average arrival under 45 minutes for emergency calls.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Upfront Pricing',
    description: 'Written quote before work begins. No surprises, ever.',
  },
  {
    icon: Wrench,
    title: 'Workmanship Warranty',
    description: '1-year warranty on all repairs. If it breaks again, we fix it free.',
  },
  {
    icon: UserCheck,
    title: 'Background-Checked Techs',
    description: 'Every technician is vetted, trained, and uniformed.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We are not done until you are happy with the work.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="text-accent">Apex Flow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six reasons homeowners and businesses across the region trust us with their plumbing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
