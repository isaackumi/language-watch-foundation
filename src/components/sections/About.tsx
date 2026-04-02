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
    <section id="about" className="relative py-24 lg:py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="glass-card rounded-2xl border-2 border-indigo-200/50 shadow-md shadow-indigo-950/5 p-8 lg:p-9 card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 border border-indigo-100">
              <Award className="w-6 h-6 text-indigo-600" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Our Mission</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-3">{about.mission.intro}</p>
            <ul className="space-y-2 text-slate-600 text-[15px]">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="glass-card rounded-2xl border-2 border-emerald-200/50 shadow-md shadow-emerald-900/5 p-8 lg:p-9 card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100">
              <Lightbulb className="w-6 h-6 text-emerald-700" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Our Vision</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">{about.vision.text}</p>
          </motion.div>
        </motion.div>

        {/* Intro with founder image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.p variants={cardMotion} className="section-eyebrow mb-3">
              About Us
            </motion.p>
            <motion.h2 variants={cardMotion} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-heading text-balance">
              Kasa wↄ Tumi – Words are Powerful
            </motion.h2>
            <motion.p variants={cardMotion} className="text-lg text-slate-600 leading-relaxed mb-6">
              {about.paragraphs[0]}
            </motion.p>
            <motion.div variants={cardMotion}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-600 transition-colors duration-200 cursor-pointer group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={cardMotion}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-indigo-950/15 ring-2 ring-white/50 aspect-[4/3]"
          >
            <Image
              src={teamMembers.founder.image}
              alt="Dr. Nana Anima Wiafe-Akenten - Founder, LWF"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Objectives */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className="glass-card rounded-2xl border-2 border-slate-100/80 border-l-4 border-l-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 lg:p-7"
            >
              <Target className="w-9 h-9 text-indigo-600 mb-4" aria-hidden />
              <p className="text-slate-600 text-[15px] leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
