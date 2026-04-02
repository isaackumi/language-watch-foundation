'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight, Flag, Eye, ArrowRight, ArrowLeft, ListChecks, Sparkles } from 'lucide-react'
import Link from 'next/link'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function AboutPage() {
  const { about } = siteContent
  const reduceMotion = useReducedMotion()

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduceMotion
      ? { duration: 0.35 }
      : { duration: 0.55, ease: easeOut },
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900">
      <div className="fixed top-24 left-4 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-full bg-white/92 backdrop-blur-md border border-indigo-200/80 shadow-lg shadow-indigo-950/10 text-indigo-900 font-semibold text-sm hover:bg-white hover:border-indigo-300 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-900 banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(250,204,21,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 relative z-10">
          <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">About Us</span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-4xl mb-10 space-y-8"
          >
            <h1 className="font-heading text-white drop-shadow-md">
              <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-balance leading-[1.15]">
                {siteContent.meta.brandName}
              </span>
              <span className="mt-5 block text-lg sm:text-xl md:text-2xl font-medium text-white/92 leading-snug text-balance max-w-3xl border-l-[3px] border-emerald-400 pl-5 sm:pl-6">
                {siteContent.meta.brandTagline}
              </span>
            </h1>
            <div>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-emerald-200/85 mb-3">
                Campaigns &amp; programs
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5" aria-label="Campaign hashtags and program names">
                {siteContent.meta.brandTags.map((tag, i) => (
                  <motion.li
                    key={tag}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.15 + i * 0.06, duration: 0.35 }}
                  >
                    <span className="inline-flex rounded-xl bg-white/[0.14] backdrop-blur-md border border-white/25 px-3.5 py-2 text-sm sm:text-[0.9375rem] font-semibold text-white shadow-sm">
                      {tag}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.header>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="#mission"
              className="inline-flex cursor-pointer items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary-500 text-indigo-950 font-bold text-sm sm:text-base shadow-lg hover:bg-primary-400 transition-colors duration-200"
            >
              Our Mission
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
            <Link
              href="#activities"
              className="inline-flex cursor-pointer items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 text-indigo-950 font-bold text-sm sm:text-base border border-emerald-300/50 shadow-lg hover:bg-emerald-400 transition-colors duration-200"
            >
              Activities &amp; Services
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.45 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <div className="w-6 h-10 border-2 border-white/35 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-emerald-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Narrative */}
      <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" aria-hidden />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative">
          <motion.div {...viewAnim}>
            <p className="section-eyebrow mb-4">Who we are</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading tracking-tight mb-10 text-balance">
              Our story
            </h2>
            <div className="space-y-8 text-slate-600 leading-[1.75] text-[17px]">
              {about.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-slate-700 text-lg sm:text-[1.125rem] font-medium' : undefined}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-20 lg:py-24 bg-surface border-y border-indigo-100/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            {...viewAnim}
            className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(49,46,129,0.12)] border border-indigo-100/80 ring-1 ring-white"
          >
            <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-14 items-start">
              <div className="relative mx-auto lg:mx-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-full lg:aspect-square lg:max-w-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-indigo-100">
                <Image
                  src={siteContent.teamMembers.founder.image}
                  alt={siteContent.teamMembers.founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 280px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/25 to-transparent pointer-events-none" />
              </div>
              <div>
                <p className="section-eyebrow mb-3">{siteContent.teamMembers.founder.title}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-2 text-balance">
                  {siteContent.teamMembers.founder.name}
                </h2>
                <p className="text-emerald-700 font-semibold text-base mb-6 leading-snug">
                  {siteContent.teamMembers.founder.subtitle}
                </p>
                <div className="border-l-[3px] border-indigo-200 pl-5 sm:pl-6">
                  <p className="text-slate-600 leading-[1.75] text-[17px]">{siteContent.teamMembers.founder.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.article
            {...viewAnim}
            className="group rounded-2xl bg-white p-8 lg:p-9 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-indigo-200/70 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-100/80 transition-colors">
              <Eye className="w-6 h-6 text-indigo-600" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 tracking-tight">
              {about.vision.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">{about.vision.text}</p>
          </motion.article>

          <motion.article
            id="mission"
            {...viewAnim}
            transition={
              reduceMotion
                ? { duration: 0.35 }
                : { duration: 0.55, ease: easeOut, delay: 0.06 }
            }
            className="group rounded-2xl bg-white p-8 lg:p-9 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-100/80 transition-colors">
              <Flag className="w-6 h-6 text-emerald-700" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 tracking-tight">
              {about.mission.title}
            </h2>
            <p className="text-slate-700 font-medium mb-4 text-[17px] leading-relaxed">{about.mission.intro}</p>
            <ul className="space-y-3">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed">
                  <ChevronRight className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Objectives */}
        <motion.section
          {...viewAnim}
          transition={
            reduceMotion
              ? { duration: 0.35 }
              : { duration: 0.55, ease: easeOut, delay: 0.04 }
          }
          className="mt-12 lg:mt-16 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-emerald-50/40 border border-indigo-100/70 p-8 md:p-10 lg:p-12 shadow-md"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center">
              <ListChecks className="w-5 h-5 text-indigo-600" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight">
              {about.objectives.title}
            </h2>
          </div>
          <ul className="space-y-0 divide-y divide-indigo-100/80">
            {about.objectives.items.map((item, i) => (
              <li key={i} className="flex gap-4 py-5 first:pt-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-600 leading-relaxed text-[16px] pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Activities */}
        <motion.section
          id="activities"
          {...viewAnim}
          transition={
            reduceMotion
              ? { duration: 0.35 }
              : { duration: 0.55, ease: easeOut, delay: 0.08 }
          }
          className="mt-12 lg:mt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="section-eyebrow mb-2">What we do</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading tracking-tight text-balance">
                {about.activities.title}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-indigo-700 font-semibold text-sm hover:text-indigo-600 transition-colors shrink-0"
            >
              View all services
              <ChevronRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-5 sm:gap-6">
            {about.activities.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.05,
                  duration: 0.45,
                  ease: easeOut,
                }}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-indigo-200/60 transition-all duration-300"
              >
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100">
                    <Sparkles className="w-5 h-5 text-indigo-600" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug mb-3 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-[16px]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-500 text-indigo-950 font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-400 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <Link
              href="/team"
              className="inline-flex cursor-pointer items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-indigo-200 bg-white text-indigo-900 font-semibold hover:bg-indigo-50 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              Meet our team
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
