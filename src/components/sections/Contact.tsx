'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle2, AlertCircle, Globe } from 'lucide-react'
import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ hideHeader }: { hideHeader?: boolean } = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters'
    }
    if (!formData.email.trim()) {
      next.email = 'Email is required'
    } else if (!EMAIL_REGEX.test(formData.email)) {
      next.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      next.subject = 'Subject must be at least 2 characters'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('idle')
    setFormError(null)
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (!res.ok) {
        setFormStatus('error')
        setFormError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch {
      setFormStatus('error')
      setFormError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    { icon: Mail, title: 'Email', value: siteContent.contact.email, link: `mailto:${siteContent.contact.email}` },
    { icon: Phone, title: 'Telephone', value: siteContent.contact.phone, link: `tel:${siteContent.contact.phone.replace(/\s/g, '')}` },
    { icon: Phone, title: 'Mobile', value: siteContent.contact.mobile.join(', '), link: `tel:${siteContent.contact.mobile[0].replace(/\s/g, '')}` },
    { icon: Globe, title: 'Website', value: siteContent.contact.website, link: `https://${siteContent.contact.website}` },
    { icon: MapPin, title: 'Location', value: siteContent.contact.location, link: 'https://maps.google.com/?q=Onyame+Na+Ay%C4%9B+House+Ayimensa-Kweiman+Road+Accra' },
    { icon: MapPin, title: 'Address', value: siteContent.contact.address, link: null },
    { icon: Phone, title: 'C.E.O. Contact', value: siteContent.contact.ceoContact, link: `tel:${siteContent.contact.ceoContact.replace(/\s/g, '')}` },
  ]

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/5 via-transparent to-primary-800/5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 max-w-3xl">
              Get in touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              For more information on our services, kindly get in touch using the following addresses and/or telephone numbers. Your comments and suggestions are also welcome.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {formStatus === 'success' && (
                <div
                  role="status"
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              {formStatus === 'error' && formError && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">{formError}</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-link/20 focus:border-link transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-link/20 focus:border-link transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }))
                  }}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-link/20 focus:border-link transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }))
                  }}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-link/20 focus:border-link transition-colors ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-link text-white font-bold hover:bg-link-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Wrapper = info.link ? 'a' : 'div'
                const wrapperProps = info.link
                  ? { href: info.link, target: '_blank' as const, rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Wrapper
                    key={info.title}
                    {...wrapperProps}
                    className="flex items-start gap-4 group p-4 rounded-xl hover:bg-primary-50/50 transition-colors"
                  >
                    <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-0.5">{info.title}</h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">{info.value}</p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="https://maps.google.com/?q=Onyame+Na+Ay%C4%9B+House+Ayimensa-Kweiman+Road+Accra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                View on Map
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
