'use client'

import Services from '@/components/sections/Services'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function ServicesPage() {
  const reduceMotion = useReducedMotion()

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: reduceMotion
      ? { duration: 0.35 }
      : { duration: 0.55, ease: easeOut },
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900">
      <div className="fixed left-4 top-24 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-indigo-200/80 bg-white/92 px-4 py-2.5 text-sm font-semibold text-indigo-900 shadow-lg shadow-indigo-950/10 backdrop-blur-md transition-all duration-200 hover:border-indigo-300 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <section className="relative min-h-[44vh] overflow-hidden pt-8 sm:pt-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-900 banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_0%,rgba(16,185,129,0.12),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">Our Services</span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-3xl space-y-5"
          >
            <h1 className="hero-title font-heading text-balance text-white drop-shadow-md">
              Our Activities &amp; Services
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/95 drop-shadow-sm sm:text-xl">
              Speaking clubs, language &amp; culture programs, public lectures, and SCEFFCOM CONSULT—promoting decorous
              language for national peace and development.
            </p>
          </motion.header>
        </div>
      </section>

      <Services hideHeader />

      <section className="border-t border-indigo-100/60 bg-gradient-to-br from-indigo-50/90 via-white to-emerald-50/40 py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...viewAnim}>
            <p className="section-eyebrow mb-3">Next step</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Contact us today to discuss your language training, translation, or consulting needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 font-bold text-indigo-950 shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:bg-emerald-400 sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-indigo-200 bg-white px-8 py-4 font-semibold text-indigo-900 transition-colors duration-200 hover:bg-indigo-50 sm:w-auto"
              >
                About us
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
