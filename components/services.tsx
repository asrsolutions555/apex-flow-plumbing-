'use client'

import { Droplet, Flame, Zap, Wind, AlertTriangle, Wrench } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  imageUrl: string
}

interface ServicesProps {
  onBookingClick: () => void
}

export function Services({ onBookingClick }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

  const services: Service[] = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Emergency Repair',
      description: 'Burst pipes and critical issues handled immediately with our rapid response team',
      imageUrl: '/emergency-repair.png',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning using advanced techniques to clear blockages',
      imageUrl: '/drain-cleaning.png',
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Water Heater',
      description: 'Installation, repair, and maintenance of residential water heating systems',
      imageUrl: '/water-heater.png',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Pipe Inspection',
      description: 'Advanced camera inspection to detect problems before they become emergencies',
      imageUrl: '/pipe-inspection.png',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Gas Line Service',
      description: 'Safe installation and inspection of gas lines with certified technicians',
      imageUrl: '/gas-line.png',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Preventive Care',
      description: 'Regular maintenance plans to prevent costly emergency repairs down the line',
      imageUrl: '/preventive-care.png',
    },
  ]

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="services" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plumbing solutions for every need, from emergency repairs to preventive maintenance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass rounded-xl overflow-hidden transition-all duration-300 h-96 flex flex-col hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                {/* Image Container */}
                <div className="relative h-40 bg-secondary/50 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onLoad={() => handleImageLoad(index)}
                  />
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 bg-secondary/50 animate-pulse" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {/* Hover CTA */}
                  {hoveredIndex === index && (
                    <button
                      onClick={onBookingClick}
                      className="mt-4 px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors text-sm font-medium animate-fadeInUp"
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center animate-fadeInUp">
          <button
            onClick={onBookingClick}
            className="px-8 py-4 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-all font-bold text-lg inline-flex items-center gap-2 animate-pulse-glow"
          >
            Book Service Now
          </button>
        </div>
      </div>
    </section>
  )
}
