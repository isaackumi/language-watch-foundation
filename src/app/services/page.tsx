'use client'

import Services from '@/components/sections/Services'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesPage() {
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
            <p className="text-primary-800 font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
            <h1 className="hero-title text-gray-900 mb-6">
              Our Activities & Services
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Speaking clubs, language & culture programs, public lectures, and SCEFFCOM CONSULT—promoting decorous language for national peace and development.
            </p>
          </motion.div>
        </div>
      </section>

      <Services hideHeader />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your language training, translation, or consulting needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-500 text-white font-bold shadow-lg hover:bg-primary-600 transition-all hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
