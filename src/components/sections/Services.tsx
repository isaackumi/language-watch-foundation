'use client'

import { siteContent } from '@/data/content'
import { Mic, BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const iconMap = [
  Mic,
  BookOpen,
  MessageCircle,
  GraduationCap,
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  const activities = siteContent.about.activities.items

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary-900/5 via-transparent to-primary-800/5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Our Activities & Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 max-w-3xl">
              What We Offer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed max-w-3xl">
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
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
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
