'use client'

import { useState } from 'react'
import { EnquiryForm } from '@/data/seed'

interface ContactFormProps {
  onSuccess?: (ticketId: string) => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: '',
    brand: '',
    email: '',
    instagram: '',
    collabType: '',
    budget: '',
    launchDate: '',
    brief: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [ticketId, setTicketId] = useState('')

  const collaborationTypes = [
    'Brand Campaign',
    'Product Photography',
    'Video Content',
    'Social Media Campaign',
    'Event Coverage',
    'Other'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Discuss in call'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.brand.trim()) return 'Brand/Agency name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.collabType) return 'Please select a collaboration type'
    if (!formData.budget) return 'Please select a budget range'
    if (!formData.launchDate) return 'Please provide an estimated launch date'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Simulate API call with 400ms delay
      await new Promise(resolve => setTimeout(resolve, 400))

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        setTicketId(result.ticketId || 'ENQ-20251130-1234')
        setSubmitStatus('success')
        onSuccess?.(result.ticketId || 'ENQ-20251130-1234')

        // Reset form
        setFormData({
          name: '',
          brand: '',
          email: '',
          instagram: '',
          collabType: '',
          budget: '',
          launchDate: '',
          brief: ''
        })
      } else {
        throw new Error('Failed to submit enquiry')
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Thank you, {formData.name}! 🎉
          </h3>
          <p className="text-white/60 mb-6">
            We've received your brief and will get back to you within 24-48 hours.
            Your request ID: <span className="text-primary font-mono">{ticketId}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Instagram
          </a>
          <a
            href="#media-kit"
            className="btn-secondary"
          >
            Download Media Kit
          </a>
        </div>

        {/* Contact Info Card */}
        <div className="card max-w-md mx-auto mt-8">
          <h4 className="font-semibold text-white mb-3">Need immediate assistance?</h4>
          <div className="space-y-2 text-white/60 text-sm">
            <p>📧 hello@paddy.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>💬 Available for urgent collaborations</p>
          </div>
        </div>

        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-primary hover:text-primary-light underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start a <span className="text-gradient">Collaboration</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Let's create something amazing together. Fill out the form below and I'll get back to you within 24-48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="brand" className="block text-white font-medium mb-2">
              Brand/Agency *
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Nike Inc."
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="john@brand.com"
              required
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-white font-medium mb-2">
              Instagram / Website
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="@yourbrand"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="collabType" className="block text-white font-medium mb-2">
              Collaboration Type *
            </label>
            <select
              id="collabType"
              name="collabType"
              value={formData.collabType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              required
            >
              <option value="" className="text-black">Select type</option>
              {collaborationTypes.map((type) => (
                <option key={type} value={type} className="text-black">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-white font-medium mb-2">
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              required
            >
              <option value="" className="text-black">Select budget</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="text-black">
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="launchDate" className="block text-white font-medium mb-2">
            Estimated Launch Date *
          </label>
          <input
            type="date"
            id="launchDate"
            name="launchDate"
            value={formData.launchDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <div>
          <label htmlFor="brief" className="block text-white font-medium mb-2">
            Project Brief
          </label>
          <textarea
            id="brief"
            name="brief"
            value={formData.brief}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell me about your brand, campaign goals, target audience, and any specific requirements..."
          />
        </div>

        {errorMessage && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
            <p className="text-red-300">{errorMessage}</p>
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-12"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              'Submit Enquiry'
            )}
          </button>
        </div>

        <p className="text-center text-white/40 text-sm">
          By submitting this form, you agree to our{' '}
          <a href="#terms" className="text-primary hover:text-primary-light underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#privacy" className="text-primary hover:text-primary-light underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  )
}