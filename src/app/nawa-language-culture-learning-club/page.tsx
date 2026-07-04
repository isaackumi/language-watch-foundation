'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, Globe, Phone, Sparkles, Users } from 'lucide-react'

const easeOut = [0.22, 1, 0.36, 1] as const
const { nawaClub } = siteContent

export default function NawaClubPage() {
  const reduceMotion = useReducedMotion()

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduceMotion ? { duration: 0.35 } : { duration: 0.55, ease: easeOut },
  }

  return (
    <div className="min-h-screen bg-surface font-sans">
      <div className="fixed left-4 top-24 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-ink/20 bg-white/95 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-lg shadow-brand-ink/10 backdrop-blur-md transition-all hover:border-brand-clay/35 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[52vh] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1a1400] via-[#2d2400] to-brand-ink banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(250,204,21,0.28),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              {nawaClub.acronym} · {nawaClub.parentOrg}
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <motion.header
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="max-w-3xl space-y-5"
            >
              <h1 className="font-heading text-balance drop-shadow-md">
                <span className="block text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {nawaClub.title}
                </span>
                <span className="mt-4 block text-xl font-semibold text-primary-400 drop-shadow-md sm:text-2xl">
                  {nawaClub.hashtag}
                </span>
              </h1>
              <p className="max-w-2xl rounded-sm border border-white/10 bg-black/30 px-5 py-4 text-lg leading-relaxed text-white shadow-lg backdrop-blur-sm sm:text-xl">
                {nawaClub.welcome}
              </p>
            </motion.header>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: easeOut, delay: reduceMotion ? 0 : 0.1 }}
              className="mx-auto flex shrink-0 justify-center lg:mx-0"
            >
              <div className="rounded-full bg-white p-3 shadow-2xl shadow-black/30 ring-4 ring-primary-400/40">
                <Image
                  src={nawaClub.logo}
                  alt={nawaClub.logoAlt}
                  width={280}
                  height={280}
                  className="h-48 w-48 rounded-full object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="container mx-auto px-4 py-16 text-brand-ink sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.section {...viewAnim} className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-ink/12 bg-brand-sand">
              <BookOpen className="h-6 w-6 text-brand-clay" aria-hidden />
            </div>
            <div>
              <p className="section-eyebrow mb-2">Learning at home</p>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {nawaClub.homeLearning.title}
              </h2>
            </div>
          </div>
          <ul className="divide-y divide-brand-ink/10 rounded-sm border border-brand-ink/10 bg-white shadow-sm">
            {nawaClub.homeLearning.items.map((item, i) => (
              <li key={i} className="flex gap-4 px-6 py-5 sm:px-8">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-brand-ink tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-relaxed text-slate-600">{item}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          {...viewAnim}
          transition={
            reduceMotion ? { duration: 0.35 } : { duration: 0.55, ease: easeOut, delay: 0.06 }
          }
          className="mx-auto mt-14 max-w-3xl lg:mt-20"
        >
          <div className="rounded-sm border border-primary-400/30 bg-gradient-to-br from-primary-50 via-white to-brand-sand/60 p-8 shadow-sm sm:p-10">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary-300/40 bg-primary-100">
                <Globe className="h-6 w-6 text-amber-800" aria-hidden />
              </div>
              <div>
                <p className="section-eyebrow mb-2">Languages we teach</p>
                <h2 className="font-heading text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                  {nawaClub.cognitiveProgram.title}
                </h2>
              </div>
            </div>
            <p className="text-lg font-semibold text-brand-ink">{nawaClub.cognitiveProgram.languages}</p>
          </div>
        </motion.section>

        <motion.section
          {...viewAnim}
          transition={
            reduceMotion ? { duration: 0.35 } : { duration: 0.55, ease: easeOut, delay: 0.1 }
          }
          className="mx-auto mt-14 max-w-3xl lg:mt-20"
        >
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-ink/12 bg-brand-sand">
              <Sparkles className="h-6 w-6 text-brand-clay" aria-hidden />
            </div>
            <div>
              <p className="section-eyebrow mb-2">Beyond the classroom</p>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {nawaClub.experiences.title}
              </h2>
            </div>
          </div>
          <ul className="space-y-4">
            {nawaClub.experiences.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-sm border border-brand-ink/10 bg-white px-6 py-5 shadow-sm sm:px-8"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500" aria-hidden />
                <p className="text-[16px] leading-relaxed text-slate-600">{item}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          {...viewAnim}
          transition={
            reduceMotion ? { duration: 0.35 } : { duration: 0.55, ease: easeOut, delay: 0.12 }
          }
          className="mx-auto mt-16 max-w-3xl lg:mt-20"
        >
          <div className="overflow-hidden rounded-sm border-2 border-brand-ink bg-brand-ink shadow-lg">
            <div className="grid gap-0 lg:grid-cols-[1fr_220px]">
              <div className="p-8 sm:p-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-400">
                  {nawaClub.contact.label}
                </p>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  {nawaClub.contact.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="inline-flex cursor-pointer items-center gap-3 rounded-sm border border-white/20 bg-white/10 px-5 py-3 font-heading text-xl font-bold text-white transition-colors hover:bg-white/15 sm:text-2xl"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-primary-400" aria-hidden />
                      {phone.display}
                    </a>
                  ))}
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary-400 sm:text-base">
                  {nawaClub.contact.audience}
                </p>
                <p className="mt-4 text-sm text-neutral-200">
                  Call or text to register children, youth, or adults — or use the form on our contact page.
                </p>
              </div>
              <div className="flex items-center justify-center bg-black p-4 lg:border-l lg:border-white/10">
                <Image
                  src={nawaClub.contact.flyer}
                  alt={nawaClub.contact.flyerAlt}
                  width={200}
                  height={320}
                  className="h-auto max-h-72 w-full max-w-[200px] object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          {...viewAnim}
          transition={
            reduceMotion ? { duration: 0.35 } : { duration: 0.55, ease: easeOut, delay: 0.14 }
          }
          className="mx-auto mt-16 max-w-3xl rounded-sm border border-brand-ink/12 bg-gradient-to-br from-brand-sand/80 via-brand-paper to-primary-100/30 p-8 text-center sm:p-12 lg:mt-20"
        >
          <Users className="mx-auto mb-4 h-10 w-10 text-brand-clay" aria-hidden />
          <h2 className="mb-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">{nawaClub.cta}</h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-600">
            {nawaClub.contact.audience} — call{' '}
            <a href={`tel:${nawaClub.contact.phones[0].tel}`} className="font-semibold text-link hover:text-link-hover">
              {nawaClub.contact.phones[0].display}
            </a>{' '}
            or{' '}
            <a href={`tel:${nawaClub.contact.phones[1].tel}`} className="font-semibold text-link hover:text-link-hover">
              {nawaClub.contact.phones[1].display}
            </a>{' '}
            to register.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-primary-500 px-8 py-4 font-bold text-brand-ink shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-400 sm:w-auto"
            >
              Register / Get in Touch
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-white px-8 py-4 font-semibold text-brand-ink transition-colors hover:bg-brand-sand sm:w-auto"
            >
              All services
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
