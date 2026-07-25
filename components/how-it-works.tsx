'use client'

import { CalendarCheck, Truck, CircleCheck as CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Your Visit',
    description: 'Pick a time that works for you in under two minutes. Same-day slots available.',
  },
  {
    icon: Truck,
    title: 'We Dispatch Fast',
    description: 'The closest licensed technician is sent to your address right away.',
  },
  {
    icon: CheckCircle2,
    title: 'Problem Solved',
    description: 'We fix the issue, clean up, and back it with a 1-year warranty.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from problem to solution.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative flex flex-col items-center text-center space-y-4 animate-fadeInUp">
                {/* Step number + icon */}
                <div className="relative">
                  <div className="w-24 h-24 bg-white border-2 border-accent/20 rounded-full flex items-center justify-center shadow-sm group-hover:border-accent transition-colors">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
