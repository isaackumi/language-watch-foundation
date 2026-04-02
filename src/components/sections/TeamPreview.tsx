'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { User, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type PreviewMember = { name: string; role: string; image?: string | null; bio?: string }

export default function TeamPreview() {
  const reduceMotion = useReducedMotion()
  const { teamMembers } = siteContent
  const previewMembers: PreviewMember[] = [
    { ...teamMembers.founder, role: teamMembers.founder.title },
    ...teamMembers.advisoryBoard.slice(0, 2).map((m) => ({ name: m.name, role: m.role, image: null })),
  ]

  return (
    <section id="team-preview" className="relative py-24 lg:py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_100%_50%,rgba(16,185,129,0.06),transparent)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={reduceMotion ? { duration: 0.45 } : { type: 'spring', stiffness: 380, damping: 32 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-3">Team</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 max-w-3xl font-heading text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {teamMembers.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-24px' }}
              transition={
                reduceMotion
                  ? { duration: 0.4, delay: i * 0.05 }
                  : { type: 'spring', stiffness: 360, damping: 30, delay: i * 0.07 }
              }
              whileHover={reduceMotion ? undefined : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 26 } }}
              className="rounded-2xl border-2 border-indigo-100/90 shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm ring-1 ring-white/60"
            >
              <div className="relative h-56 overflow-hidden bg-indigo-950">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                    <User className="w-20 h-20 text-indigo-400" aria-hidden />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.role}</p>
                </div>
              </div>
              <div className="p-6 border-t border-white/50 bg-white/55 backdrop-blur-xl backdrop-saturate-150">
                {member.bio && (
                  <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                )}
                <Link
                  href="/team"
                  className="inline-flex cursor-pointer items-center gap-2 text-indigo-700 font-semibold text-sm hover:text-emerald-700 transition-colors duration-200"
                >
                  View Full Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0.4 } : { type: 'spring', stiffness: 380, damping: 32 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
            <Link
              href="/team"
              className="inline-flex cursor-pointer items-center gap-2 rounded-2xl px-8 py-3.5 bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-600/25 ring-1 ring-white/20"
            >
              View Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
