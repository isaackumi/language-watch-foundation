'use client'

/**
 * Compact home lead — no full-screen imagery or carousel (high contrast, readable).
 * Target with 21st toolbar / Cursor: stable region id for AI edits.
 */
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { siteContent } from '@/data/content'

export default function HomeIntro() {
  const { hero } = siteContent
  const titleMain = hero.title.split(' (')[0]

  return (
    <section
      id="home-intro__21st"
      data-slot="home-intro"
      className="border-b border-neutral-200 bg-white pt-24 sm:pt-28"
      aria-label="Welcome"
    >
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900 sm:text-sm">
          Promoting decorous language for national peace
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-[2.75rem] lg:leading-[1.08]">
          {titleMain}{' '}
          <span className="text-amber-800">(LWF)</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-700 sm:text-xl">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-base font-bold text-neutral-950 shadow-sm ring-1 ring-amber-600/30 hover:bg-amber-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
          >
            {hero.ctaText}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-neutral-900 bg-white px-6 py-3.5 text-base font-bold text-neutral-950 hover:bg-neutral-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            <MessageSquare className="h-5 w-5" aria-hidden />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
