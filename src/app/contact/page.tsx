'use client'

import Contact from '@/components/sections/Contact'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans">
      {/* Jagged clip only on background — clip-path was cutting off hero text */}
      <section className="relative pt-28 sm:pt-32 pb-28 sm:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-900 banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(99,102,241,0.35),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 text-white/95 hover:text-white font-semibold mb-8 transition-colors duration-200 drop-shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 drop-shadow-sm">
              Contact Us
            </p>
            <h1 className="hero-title text-white mb-6 font-heading drop-shadow-md">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-sans max-w-2xl drop-shadow-sm">
              Have questions about our programs or services? We&apos;d love to hear from you. Reach out for inquiries, consultations, or to schedule a session.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact hideHeader />
    </main>
  )
}
