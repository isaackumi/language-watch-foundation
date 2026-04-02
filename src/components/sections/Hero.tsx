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
      {/* Slider background + indigo block tint (design system) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900" />
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
        <div className="absolute inset-0 bg-indigo-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/35 to-indigo-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/25 via-transparent to-emerald-900/20" />
        {/* Geometric blocks */}
        <div
          className="absolute -right-16 top-1/4 h-44 w-44 rotate-12 rounded-3xl border-2 border-white/15 bg-white/5 backdrop-blur-sm hidden lg:block pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -left-10 bottom-1/3 h-32 w-32 -rotate-6 rounded-2xl border-2 border-emerald-400/20 bg-emerald-500/10 backdrop-blur-sm hidden md:block pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Slide navigation arrows - hidden on mobile to avoid blocking content */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl backdrop-saturate-150 border border-white/40 items-center justify-center text-white hover:bg-white/35 hover:border-white/55 shadow-lg ring-1 ring-white/15 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl backdrop-saturate-150 border border-white/40 items-center justify-center text-white hover:bg-white/35 hover:border-white/55 shadow-lg ring-1 ring-white/15 transition-all duration-200"
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
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide ? 'bg-emerald-400 w-10 shadow-[0_0_12px_rgba(52,211,153,0.5)]' : 'w-2.5 bg-white/45 hover:bg-white/75'
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
              className="inline-flex items-center gap-2 glass-hero-pill rounded-full px-5 py-2.5 mb-8"
            >
              <motion.span
                aria-hidden
                animate={reduceMotionFm ? undefined : { rotate: [0, 8, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Leaf className="w-5 h-5 text-emerald-300 shrink-0" />
              </motion.span>
              <span className="text-base font-semibold text-white tracking-tight drop-shadow-sm">
                Promoting Decorous Language for National Peace
              </span>
            </motion.div>

            <motion.h1
              variants={easeContent ? undefined : itemFade}
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="text-white">{siteContent.hero.title.split(' (')[0]}</span>
              <span className="text-primary-300"> (LWF)</span>
            </motion.h1>

            <motion.p
              variants={easeContent ? undefined : itemFade}
              className="text-lg sm:text-xl text-white/95 mb-10 leading-relaxed max-w-2xl drop-shadow-md"
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
                  className="inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary-500 text-indigo-950 font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-400 transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
                >
                  <span>{siteContent.hero.ctaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              <motion.div whileHover={reduceMotionFm ? undefined : { y: -3 }} whileTap={reduceMotionFm ? undefined : { scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link
                  href="/contact"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950 bg-emerald-400/25 backdrop-blur-xl backdrop-saturate-150 text-white border-2 border-emerald-300/55 hover:bg-emerald-400/35 hover:border-emerald-200/70 ring-1 ring-white/20"
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
          className="group cursor-pointer flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 rounded-2xl px-4 py-2 bg-white/[0.08] backdrop-blur-md border border-white/20 hover:bg-white/15"
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <motion.div
            animate={reduceMotionFm ? undefined : { y: [0, 6, 0] }}
            transition={reduceMotionFm ? undefined : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-8 border-2 border-white/45 rounded-full flex justify-center pt-2 bg-white/10 backdrop-blur-md shadow-inner"
          >
            <div className="w-1 h-1.5 bg-white rounded-full" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
