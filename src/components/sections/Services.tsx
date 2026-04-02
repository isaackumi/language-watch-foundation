'use client'

import { siteContent } from '@/data/content'
import { Mic, BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const iconMap = [Mic, BookOpen, MessageCircle, GraduationCap]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeUpSpring = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 360, damping: 30 } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  const reduceMotion = useReducedMotion()
  const cardVariants = reduceMotion ? fadeUp : fadeUpSpring
  const activities = siteContent.about.activities.items

  return (
    <section id="services" className="relative overflow-hidden bg-surface-warm py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(125deg,rgba(255,195,0,0.06)_0%,transparent_45%,rgba(178,74,50,0.05)_100%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={cardVariants} className="section-eyebrow mb-3">
              Our Activities & Services
            </motion.p>
            <motion.h2 variants={cardVariants} className="mb-6 max-w-3xl text-balance font-heading text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
              What We Offer
            </motion.h2>
            <motion.p variants={cardVariants} className="max-w-3xl text-lg leading-relaxed text-brand-ink/75">
              From speaking clubs to SCEFFCOM CONSULT—our programs promote decorous language and effective communication
              for national peace and development.
            </motion.p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {activities.map((item, i) => {
            const Icon = iconMap[i] || GraduationCap
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -4, transition: { type: 'spring', stiffness: 420, damping: 28 } }}
                className="group rounded-sm border-2 border-brand-ink/10 border-t-4 border-t-primary-500 bg-white p-6 shadow-md transition-shadow hover:shadow-lg lg:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm border border-brand-ink/10 bg-brand-sand transition-colors group-hover:bg-brand-mist">
                  <Icon className="h-6 w-6 text-brand-clay" aria-hidden />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-brand-ink/75">{item.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex cursor-pointer items-center gap-2 font-semibold text-link transition-colors hover:text-link-hover"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
