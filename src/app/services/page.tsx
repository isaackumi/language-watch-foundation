'use client'

import Services from '@/components/sections/Services'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <main className="min-h-screen font-sans">
      <section className="relative pt-28 sm:pt-32 pb-28 sm:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-900 banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_0%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 text-white/90 hover:text-white font-semibold mb-8 transition-colors duration-200"
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4">Our Services</p>
            <h1 className="hero-title text-white mb-6 text-balance font-heading drop-shadow-md">
              Our Activities & Services
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-sm">
              Speaking clubs, language & culture programs, public lectures, and SCEFFCOM CONSULT—promoting decorous language for national peace and development.
            </p>
          </motion.div>
        </div>
      </section>

      <Services hideHeader />

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-white to-emerald-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your language training, translation, or consulting needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 text-indigo-950 font-bold shadow-lg shadow-emerald-600/25 hover:bg-emerald-400 transition-all duration-200"
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
