'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, User, MapPin, Globe } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const tm = siteContent.teamMembers

  return (
    <main className="min-h-screen">
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
            <p className="text-primary-800 font-bold uppercase tracking-widest text-sm mb-4">Team Members</p>
            <h1 className="hero-title text-gray-900 mb-6">Our Team</h1>
            <p className="text-lg text-gray-700 leading-relaxed">{tm.intro}</p>
            <p className="mt-4 text-sm font-semibold text-primary-800 italic">{tm.registeredNote}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Founder */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b-2 border-primary-200 pb-2">
            Founder & CEO
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border border-gray-100">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={tm.founder.image}
                alt={tm.founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{tm.founder.name}</h3>
              <p className="text-primary-600 font-semibold mb-2">{tm.founder.title}</p>
              <p className="text-gray-600 italic mb-4">{tm.founder.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{tm.founder.bio}</p>
            </div>
          </div>
        </motion.section>

        {/* Advisory Board */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b-2 border-primary-200 pb-2">
            Advisory Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tm.advisoryBoard.map((m) => (
              <motion.div key={m.name} variants={fadeUp}>
                <MemberCard name={m.name} role={m.role} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Associate Members */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b-2 border-primary-200 pb-2">
            Associate Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tm.associateMembers.map((m) => (
              <motion.div key={m.name} variants={fadeUp}>
                <MemberCard name={m.name} role={m.role} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team (Staff) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b-2 border-primary-200 pb-2">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tm.team.map((t) => (
              <motion.div key={t.role} variants={fadeUp}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-primary-900 text-sm uppercase tracking-wide">{t.role}</h4>
                  <p className="text-gray-700 mt-1">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Regional Team Leaders */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-2 border-b-2 border-primary-200 pb-2">
            <MapPin className="w-6 h-6" />
            Regional Team Leaders and Representatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tm.regionalLeaders.map((r) => (
              <motion.div key={r.region} variants={fadeUp}>
                <MemberCard name={r.name} role={r.region} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* International Representatives */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-2 border-b-2 border-primary-200 pb-2">
            <Globe className="w-6 h-6" />
            International Representatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tm.internationalRepresentatives.map((int) => (
              <motion.div key={int.country} variants={fadeUp}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-primary-900 mb-2">{int.country}</h4>
                  <p className="text-gray-700">{int.names.join(', ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
