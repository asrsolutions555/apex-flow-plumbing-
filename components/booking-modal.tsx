'use client'

import { useState } from 'react'
import { X, Calendar, Clock, User, Phone as PhoneIcon } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  service: string
  message: string
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: 'emergency-repair',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store locally as per requirements
    const bookings = JSON.parse(localStorage.getItem('apex_bookings') || '[]')
    bookings.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    })
    localStorage.setItem('apex_bookings', JSON.stringify(bookings))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: 'emergency-repair',
        message: '',
      })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass animate-fadeInUp">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95">
          <h2 className="text-2xl font-bold text-foreground">Book Your Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-8 animate-fadeInUp">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Booking Confirmed!</h3>
              <p className="text-muted-foreground">
                We{"'"}ve received your booking request and will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                  >
                    <option value="emergency-repair">Emergency Repair</option>
                    <option value="drain-cleaning">Drain Cleaning</option>
                    <option value="water-heater">Water Heater Service</option>
                    <option value="pipe-inspection">Pipe Inspection</option>
                    <option value="gas-line">Gas Line Service</option>
                    <option value="preventive-care">Preventive Care</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your issue
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Describe the plumbing problem you're experiencing..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg"
              >
                Confirm Booking
              </button>

              <p className="text-xs text-muted-foreground text-center">
                We{"'"}ll contact you to confirm your appointment and provide an estimated arrival time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
