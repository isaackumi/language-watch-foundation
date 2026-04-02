'use client'

import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')
    try {
      // TODO: Wire to your newsletter API (e.g. Supabase, Mailchimp, Resend)
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setMessage('Thank you! You have been subscribed.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          aria-label="Email for newsletter subscription"
          aria-invalid={status === 'error'}
          aria-describedby={message ? 'newsletter-message' : undefined}
          className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 focus:border-emerald-300/50 font-semibold disabled:opacity-70 transition-colors duration-200"
        />
        {message && (
          <p
            id="newsletter-message"
            role="status"
            className={`text-sm font-medium ${status === 'success' ? 'text-emerald-300' : 'text-red-300'}`}
          >
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-4 rounded-2xl bg-emerald-500 text-indigo-950 font-bold hover:bg-emerald-400 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed min-h-[52px] cursor-pointer shadow-lg shadow-emerald-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
