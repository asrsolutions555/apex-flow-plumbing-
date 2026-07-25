'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you offer upfront pricing before starting work?',
    answer: 'Yes. Every visit starts with a free inspection and a written quote. You approve the price before any work begins — no surprises, no hidden fees.',
  },
  {
    question: 'How fast can a plumber arrive for an emergency?',
    answer: 'Our average emergency response time is under 45 minutes. We dispatch the closest available licensed technician 24/7, including nights and weekends.',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: 'Every Apex Flow technician is fully licensed, insured, and background-checked. We carry general liability and workers compensation coverage on every job.',
  },
  {
    question: 'Is your work covered by a warranty?',
    answer: 'Yes. All repairs are backed by a 1-year workmanship warranty. If the same issue returns within the warranty period, we fix it free of charge.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater local area and surrounding neighborhoods. Call (555) 019-FLOW with your address and we will confirm coverage and arrival time.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, cash, and digital wallets. Payment is collected only after the work is complete and you are satisfied.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Answers to the questions we hear most.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
