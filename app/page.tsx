'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { ContactPage } from '@/components/contact-page'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="w-full bg-background">
      <Header onBookingClick={() => setIsBookingOpen(true)} />
      <Hero onBookingClick={() => setIsBookingOpen(true)} />
      <Services onBookingClick={() => setIsBookingOpen(true)} />
      <Testimonials />
      <Footer 
        onBookingClick={() => setIsBookingOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
      />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactPage isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  )
}
