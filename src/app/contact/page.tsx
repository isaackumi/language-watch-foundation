'use client'

import Contact from '@/components/sections/Contact'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - yellow banner with jagged edge */}
      <section className="relative pt-32 pb-24 bg-banner banner-jagged overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-primary-800 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</p>
            <h1 className="hero-title text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions about our programs or services? We&apos;d love to hear from you. Reach out for inquiries, consultations, or to schedule a session.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact hideHeader />
    </main>
  )
}
