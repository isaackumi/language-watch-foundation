'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace('/#', '/'))
  }

  const isLightNav = isScrolled || pathname !== '/'

  const linkTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 420, damping: 28 }

  return (
    <motion.nav
      aria-label="Main navigation"
      /* x: -50% keeps bar centered — Tailwind -translate-x-1/2 is overridden by Framer transform */
      initial={reduceMotion ? { x: '-50%' } : { opacity: 0, y: -16, x: '-50%' }}
      animate={{
        x: '-50%',
        opacity: 1,
        y: 0,
        ...(reduceMotion
          ? {}
          : {
              scale: isScrolled ? 0.995 : 1,
            }),
      }}
      transition={{
        opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        x: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        scale: { type: 'spring', stiffness: 380, damping: 35 },
      }}
      className={cn(
        'fixed top-2 left-1/2 z-50 w-[min(95%,64rem)] max-w-5xl sm:top-4 rounded-2xl overflow-hidden',
        isLightNav ? 'glass-nav-light' : 'glass-nav-dark'
      )}
    >
      <div className="px-4 py-3 sm:px-6 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 min-h-[3rem] sm:min-h-0">
          <motion.div className="shrink-0 min-w-0 max-w-[45%] sm:max-w-none" whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image
                src="/images/logo/nananom.jpg"
                alt="Language Watch Foundation"
                width={36}
                height={36}
                className="rounded-lg object-cover flex-shrink-0 sm:w-10 sm:h-10 ring-2 ring-white/40 shadow-md"
              />
              <span className={cn('font-bold tracking-tight truncate', isLightNav ? 'text-slate-900' : 'text-white drop-shadow-sm', 'text-base sm:text-xl')}>
                <span className="sm:hidden">LWF</span>
                <span className="hidden sm:inline">LANGUAGE WATCH (LWF)</span>
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center justify-end gap-1 lg:gap-1.5 flex-1 min-w-0 pl-4">
            {navLinks.map((link) => (
              <motion.div key={link.href} className="shrink-0" whileHover={reduceMotion ? undefined : { y: -1 }} transition={linkTransition}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer block whitespace-nowrap',
                    isLightNav
                      ? isActive(link.href)
                        ? 'bg-indigo-500/20 text-indigo-900 shadow-sm ring-1 ring-indigo-200/60'
                        : 'text-slate-600 hover:bg-white/55 hover:text-indigo-900'
                      : isActive(link.href)
                        ? 'bg-white/30 text-white ring-1 ring-white/50 shadow-[0_2px_12px_rgba(0,0,0,0.15)]'
                        : 'text-white/92 hover:bg-white/18 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div className="shrink-0 ml-2 lg:ml-3" whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} transition={linkTransition}>
              <Link
                href="/contact"
                className={cn(
                  'px-5 py-2.5 lg:px-6 rounded-full font-semibold text-sm cursor-pointer block shadow-lg transition-colors duration-200 whitespace-nowrap',
                  isLightNav
                    ? 'bg-emerald-500 text-indigo-950 hover:bg-emerald-400 ring-1 ring-white/50'
                    : 'bg-emerald-400 text-indigo-950 hover:bg-emerald-300 ring-1 ring-white/30'
                )}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <motion.button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            className={cn(
              'md:hidden p-2 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer',
              isLightNav
                ? 'text-slate-700 hover:bg-white/55 active:bg-white/70 ring-1 ring-slate-200/60'
                : 'text-white hover:bg-white/20 active:bg-white/25 ring-1 ring-white/25'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { height: 0, opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: reduceMotion ? 1 : 0 }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { height: { type: 'spring', stiffness: 320, damping: 32 }, opacity: { duration: 0.2 } }
            }
            className={cn('md:hidden overflow-hidden border-t', isLightNav ? 'border-indigo-200/40 bg-white/35 backdrop-blur-xl' : 'border-white/20 bg-white/[0.12] backdrop-blur-2xl')}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: reduceMotion ? 0 : 0.05 }}
              className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.04 * i, type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                    'flex items-center px-4 py-3.5 rounded-xl font-semibold min-h-[44px] transition-colors cursor-pointer',
                    isLightNav
                      ? isActive(link.href)
                        ? 'bg-indigo-500/20 text-indigo-900 ring-1 ring-indigo-200/50'
                        : 'text-slate-700 active:bg-white/60 hover:bg-white/45'
                      : isActive(link.href)
                        ? 'bg-white/30 text-white ring-1 ring-white/40'
                        : 'text-white active:bg-white/20 hover:bg-white/15'
                  )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.15, ...linkTransition }}>
                <Link
                  href="/contact"
                  className={cn(
                    'flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold min-h-[44px] mt-2 cursor-pointer shadow-md',
                    isLightNav ? 'bg-emerald-500 text-indigo-950 hover:bg-emerald-400' : 'bg-emerald-400 text-indigo-950 hover:bg-emerald-300'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
