'use client'

import { siteContent } from '@/data/content'
import { motion, useReducedMotion } from 'framer-motion'
import { Target, Award, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 380, damping: 32 },
  },
}
const fadeUpSimple = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }

export default function About() {
  const { about, teamMembers } = siteContent
  const reduceMotion = useReducedMotion()
  const cardMotion = reduceMotion ? fadeUpSimple : fadeUp

  return (
    <section id="about" className="relative overflow-hidden bg-brand-paper py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_0%_0%,rgba(178,74,50,0.07),transparent_55%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="card-hover rounded-sm border-2 border-brand-ink/10 border-l-4 border-l-primary-500 bg-white p-8 shadow-md lg:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-brand-ink/10 bg-brand-sand">
              <Award className="h-6 w-6 text-brand-clay" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-brand-ink">Our Mission</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-brand-ink/75">{about.mission.intro}</p>
            <ul className="space-y-2 text-[15px] text-brand-ink/75">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="card-hover rounded-sm border-2 border-brand-ink/10 border-l-4 border-l-brand-clay bg-white p-8 shadow-md lg:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-brand-ink/10 bg-brand-mist">
              <Lightbulb className="h-6 w-6 text-primary-700" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-brand-ink">Our Vision</h3>
            <p className="text-[15px] leading-relaxed text-brand-ink/75">{about.vision.text}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <motion.p variants={cardMotion} className="section-eyebrow mb-3">
              About Us
            </motion.p>
            <motion.h2 variants={cardMotion} className="mb-6 max-w-xl text-balance font-heading text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
              Kasa wↄ Tumi – Words are Powerful
            </motion.h2>
            <motion.p variants={cardMotion} className="mb-6 text-lg leading-relaxed text-brand-ink/75">
              {about.paragraphs[0]}
            </motion.p>
            <motion.div variants={cardMotion}>
              <Link
                href="/about"
                className="group inline-flex cursor-pointer items-center gap-2 font-bold text-link transition-colors hover:text-link-hover"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={cardMotion}
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-brand-ink/10 shadow-xl"
          >
            <Image
              src={teamMembers.founder.image}
              alt="Dr. Nana Anima Wiafe-Akenten - Founder, LWF"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/25 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {about.objectives.items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardMotion}
              whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 450, damping: 28 } }}
              className="rounded-sm border-2 border-brand-ink/10 border-l-4 border-l-primary-500 bg-white p-6 shadow-md transition-shadow hover:shadow-lg lg:p-7"
            >
              <Target className="mb-4 h-9 w-9 text-brand-clay" aria-hidden />
              <p className="text-[15px] leading-relaxed text-brand-ink/75">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
