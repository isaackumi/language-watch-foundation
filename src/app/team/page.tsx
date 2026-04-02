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
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-4 hover:shadow-lg hover:border-indigo-100 transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-indigo-700" aria-hidden />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 font-heading">{name}</h4>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const tm = siteContent.teamMembers

  return (
    <main className="min-h-screen font-sans">
      <section className="relative pt-28 sm:pt-32 pb-28 sm:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-900 banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(250,204,21,0.08),transparent)] pointer-events-none" />
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4">Team Members</p>
            <h1 className="hero-title text-white mb-6 font-heading drop-shadow-md">Our Team</h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl drop-shadow-sm">{tm.intro}</p>
            <p className="mt-4 text-sm font-semibold text-primary-300 italic">{tm.registeredNote}</p>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-4 border-indigo-600 pb-2 font-heading">
            Founder & CEO
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border-2 border-indigo-100 shadow-lg shadow-indigo-950/5">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={tm.founder.image}
                alt={tm.founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">{tm.founder.name}</h3>
              <p className="text-indigo-700 font-semibold mb-2">{tm.founder.title}</p>
              <p className="text-slate-600 italic mb-4">{tm.founder.subtitle}</p>
              <p className="text-slate-600 leading-relaxed">{tm.founder.bio}</p>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-4 border-indigo-600 pb-2 font-heading">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-4 border-indigo-600 pb-2 font-heading">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-4 border-indigo-600 pb-2 font-heading">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tm.team.map((t) => (
              <motion.div key={t.role} variants={fadeUp}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wide">{t.role}</h4>
                  <p className="text-slate-700 mt-1">{t.name}</p>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b-4 border-indigo-600 pb-2 font-heading">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b-4 border-indigo-600 pb-2 font-heading">
            <Globe className="w-6 h-6" />
            International Representatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tm.internationalRepresentatives.map((int) => (
              <motion.div key={int.country} variants={fadeUp}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-indigo-900 mb-2">{int.country}</h4>
                  <p className="text-slate-700">{int.names.join(', ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
