'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type PreviewMember = { name: string; role: string; image?: string | null; bio?: string }

export default function TeamPreview() {
  const { teamMembers } = siteContent
  const previewMembers: PreviewMember[] = [
    { ...teamMembers.founder, role: teamMembers.founder.title },
    ...teamMembers.advisoryBoard.slice(0, 2).map((m) => ({ name: m.name, role: m.role, image: null })),
  ]

  return (
    <section id="team-preview" className="relative py-24 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 via-transparent to-primary-900/5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 max-w-3xl">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            {teamMembers.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {previewMembers.map((member, i) => (
            <div
              key={member.name}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary-50 flex items-center justify-center">
                    <User className="w-20 h-20 text-primary-300" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                {member.bio && (
                  <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                )}
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  View Full Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
          >
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
