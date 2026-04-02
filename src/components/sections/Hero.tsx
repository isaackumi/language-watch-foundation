'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageSquare, Leaf, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteContent } from '@/data/content'
import Link from 'next/link'

const SLIDE_INTERVAL = 6000

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

const itemFade = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useRef(false)
  const reduceMotionFm = useReducedMotion()
  const slides = siteContent.hero.slides || [{ image: siteContent.hero.backgroundImage, alt: 'LWF' }]

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const easeContent = reduceMotionFm || prefersReducedMotion.current

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider + warm ink wash (editorial, not purple glass) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-ink" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: reduceMotionFm ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotionFm ? 1 : 1.02 }}
            transition={{ duration: reduceMotionFm ? 0.35 : 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 motion-reduce:scale-100"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-brand-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-brand-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-brand-clay/15" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-brand-clay md:block"
          aria-hidden
        />
      </div>

      {/* Slide navigation arrows - hidden on mobile to avoid blocking content */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-white/35 bg-brand-ink/30 text-white backdrop-blur-sm transition-all hover:bg-brand-ink/50 md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-white/35 bg-brand-ink/30 text-white backdrop-blur-sm transition-all hover:bg-brand-ink/50 md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide dots - lower on mobile (no scroll indicator), higher on desktop */}
      <div className="absolute bottom-6 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 cursor-pointer rounded-sm transition-all duration-300 ${
              i === currentSlide ? 'w-10 bg-primary-400 shadow-[0_0_14px_rgba(255,195,0,0.45)]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28">
        <div className="max-w-3xl">
          <motion.div
            variants={easeContent ? undefined : contentVariants}
            initial={easeContent ? { opacity: 0, y: 16 } : 'hidden'}
            animate={easeContent ? { opacity: 1, y: 0 } : 'visible'}
            transition={easeContent ? { duration: 0.35 } : undefined}
            className="space-y-0"
          >
            <motion.div
              variants={easeContent ? undefined : itemFade}
              className="mb-8 inline-flex items-center gap-2 rounded-sm border border-brand-ink/25 bg-primary-500 px-4 py-2.5 shadow-lg sm:px-5"
            >
              <motion.span
                aria-hidden
                animate={reduceMotionFm ? undefined : { rotate: [0, 6, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Leaf className="h-5 w-5 shrink-0 text-brand-ink/80" />
              </motion.span>
              <span className="text-sm font-bold uppercase tracking-wide text-brand-ink sm:text-base">
                Promoting Decorous Language for National Peace
              </span>
            </motion.div>

            <motion.h1
              variants={easeContent ? undefined : itemFade}
              className="hero-title mb-6 max-w-[18ch] text-4xl sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white">{siteContent.hero.title.split(' (')[0]}</span>
              <span className="text-primary-400"> (LWF)</span>
            </motion.h1>

            <motion.p
              variants={easeContent ? undefined : itemFade}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-stone-200 sm:text-xl"
            >
              {siteContent.hero.description}
            </motion.p>

            <motion.div
              variants={easeContent ? undefined : itemFade}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={reduceMotionFm ? undefined : { y: -3 }} whileTap={reduceMotionFm ? undefined : { scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link
                  href="/about"
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-primary-500 px-8 py-4 text-lg font-bold text-brand-ink shadow-xl shadow-primary-600/25 transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
                >
                  <span>{siteContent.hero.ctaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              <motion.div whileHover={reduceMotionFm ? undefined : { y: -3 }} whileTap={reduceMotionFm ? undefined : { scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link
                  href="/contact"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-white/80 bg-transparent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to avoid clutter and overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          type="button"
          onClick={handleScrollToAbout}
          className="group flex cursor-pointer flex-col items-center gap-2 rounded-sm border border-white/25 bg-brand-ink/25 px-4 py-2 text-white/85 backdrop-blur-sm transition-colors hover:bg-brand-ink/40 hover:text-white"
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <motion.div
            animate={reduceMotionFm ? undefined : { y: [0, 6, 0] }}
            transition={reduceMotionFm ? undefined : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-8 w-6 justify-center rounded-sm border-2 border-white/40 bg-brand-ink/20 pt-2 shadow-inner"
          >
            <div className="h-1.5 w-1 rounded-sm bg-primary-400" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
