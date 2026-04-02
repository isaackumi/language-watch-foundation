'use client'

import { siteContent } from '@/data/content'
import { Mic, BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const iconMap = [
  Mic,
  BookOpen,
  MessageCircle,
  GraduationCap,
]

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
    <section id="services" className="relative py-24 lg:py-28 bg-surface-warm overflow-hidden">
      <div className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(120deg,#eef2ff_0%,transparent_40%,#ecfdf5_100%)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <motion.h2 variants={cardVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 max-w-3xl font-heading text-balance">
              What We Offer
            </motion.h2>
            <motion.p variants={cardVariants} className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              From speaking clubs to SCEFFCOM CONSULT—our programs promote decorous language and effective communication for national peace and development.
            </motion.p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                whileHover={reduceMotion ? undefined : { y: -5, transition: { type: 'spring', stiffness: 420, damping: 28 } }}
                className="group glass-card rounded-2xl border-2 border-slate-100/90 border-t-4 border-t-emerald-500 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-100/80 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-indigo-700" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex cursor-pointer items-center gap-2 mt-5 text-indigo-700 font-semibold hover:text-emerald-700 transition-colors duration-200"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
