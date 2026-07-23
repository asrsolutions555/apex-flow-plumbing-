'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner, Downtown',
      content: 'Our pipe burst at 2 AM and Apex Flow was there within 30 minutes. Professional, courteous, and fixed the problem faster than expected. Definitely calling them again!',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      content: 'We have a commercial property with older plumbing. Their preventive maintenance has saved us thousands in potential emergency repairs. Highly recommend their service.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Property Manager',
      content: 'Managing multiple properties, I need reliable plumbing support. Apex Flow responds fast and gets the job done right. Best service in the area.',
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-secondary/5 to-background border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What <span className="text-accent">Our Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by homeowners and businesses across the region
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative glass rounded-2xl p-8 sm:p-12 min-h-96 flex flex-col justify-between"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Testimonial Content */}
          <div className="space-y-6 animate-fadeInUp">
            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground">
              {`"${testimonials[currentIndex].content}"`}
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-muted w-2 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-accent/10">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-6.002 4.75-6 7c0 3.526-1.1 6.546-1 8.5-1 1.5 1.5 2 1 3s-1.5 1-1 1z" />
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {[
            { value: '4.9★', label: 'Average Rating' },
            { value: '500+', label: 'Happy Customers' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 glass rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
