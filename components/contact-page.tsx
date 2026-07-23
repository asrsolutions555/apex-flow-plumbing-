'use client'

import { useState } from 'react'
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react'

interface ContactPageProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactPage({ isOpen, onClose }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store locally as per requirements
    const messages = JSON.parse(localStorage.getItem('apex_messages') || '[]')
    messages.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    })
    localStorage.setItem('apex_messages', JSON.stringify(messages))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
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
          <div>
            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="text-sm text-muted-foreground">We{"'"}re here to help and answer any questions</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-8 animate-fadeInUp">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We{"'"}ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="service-question">Service Question</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="complaint">Service Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                    placeholder={"Tell us what you'd like to know..."}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>

              <p className="text-xs text-muted-foreground text-center">
                No email capture on this page. We{"'"}ll contact you directly at the provided phone number or email.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
