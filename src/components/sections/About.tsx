'use client'

import { siteContent } from '@/data/content'
import { motion } from 'framer-motion'
import { Target, Award, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }

export default function About() {
  const { about, teamMembers } = siteContent

  return (
    <section id="about" className="relative py-24 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 via-transparent to-primary-900/5 pointer-events-none" />
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
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8"
          >
            <Award className="w-10 h-10 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-3">{about.mission.intro}</p>
            <ul className="space-y-2 text-gray-600 text-[15px]">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-500">⮚</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8"
          >
            <Lightbulb className="w-10 h-10 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">{about.vision.text}</p>
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
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              About Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Kasa wↄ Tumi – Words are Powerful
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-6">
              {about.paragraphs[0]}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
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
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <Target className="w-10 h-10 text-primary-500 mb-4" />
              <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
