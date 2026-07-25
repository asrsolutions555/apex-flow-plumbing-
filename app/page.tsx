'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustBadges } from '@/components/trust-badges'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { LearnMoreModal } from '@/components/learn-more-modal'
import { ContactPage } from '@/components/contact-page'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="w-full bg-background">
      <Header onBookingClick={() => setIsBookingOpen(true)} />
      <Hero onBookingClick={() => setIsBookingOpen(true)} />
      <TrustBadges />
      <Services onBookingClick={() => setIsBookingOpen(true)} />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection
        onBookingClick={() => setIsBookingOpen(true)}
        onLearnMoreClick={() => setIsLearnMoreOpen(true)}
      />
      <Footer
        onBookingClick={() => setIsBookingOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
      />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onBookingClick={() => setIsBookingOpen(true)}
      />
      <ContactPage isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  )
}
