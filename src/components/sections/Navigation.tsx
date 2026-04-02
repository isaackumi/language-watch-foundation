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
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
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

  /** Ink-on-paper bar once scrolled or off the home hero */
  const isSolidBar = isScrolled || pathname !== '/'

  return (
    <motion.header
      aria-label="Main navigation"
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300',
        isSolidBar
          ? 'border-b-2 border-brand-ink/10 bg-brand-paper/95 shadow-[0_6px_30px_rgba(20,17,15,0.07)] backdrop-blur-sm'
          : 'border-b border-white/15 bg-gradient-to-b from-brand-ink/40 to-transparent'
      )}
    >
      <nav className="container flex items-center justify-between gap-3 py-3 sm:py-3.5">
        <motion.div className="min-w-0 shrink" whileHover={reduceMotion ? undefined : { scale: 1.01 }}>
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/images/logo/nananom.jpg"
              alt="Language Watch Foundation"
              width={40}
              height={40}
              className={cn(
                'h-9 w-9 shrink-0 rounded-md object-cover shadow-md ring-2 sm:h-10 sm:w-10',
                isSolidBar ? 'ring-brand-ink/15' : 'ring-white/50'
              )}
            />
            <span
              className={cn(
                'truncate font-heading text-base font-semibold tracking-tight sm:text-lg',
                isSolidBar ? 'text-brand-ink' : 'text-white drop-shadow-md'
              )}
            >
              <span className="sm:hidden">LWF</span>
              <span className="hidden sm:inline">LANGUAGE WATCH (LWF)</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden items-center gap-0.5 md:flex md:flex-1 md:justify-end lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'border-b-2 px-3 py-2 text-sm font-semibold transition-colors',
                isSolidBar
                  ? isActive(link.href)
                    ? 'border-primary-500 text-brand-ink'
                    : 'border-transparent text-brand-ink/75 hover:text-brand-ink'
                  : isActive(link.href)
                    ? 'border-primary-400 text-white'
                    : 'border-transparent text-white/90 hover:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              'ml-2 rounded-sm px-4 py-2.5 text-sm font-bold shadow-md transition-colors lg:ml-4',
              isSolidBar
                ? 'bg-primary-500 text-brand-ink hover:bg-primary-400'
                : 'bg-primary-500 text-brand-ink hover:bg-primary-400 ring-1 ring-white/25'
            )}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm md:hidden',
            isSolidBar
              ? 'text-brand-ink ring-1 ring-brand-ink/15 hover:bg-brand-sand/80'
              : 'text-white ring-1 ring-white/25 hover:bg-white/10'
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
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { height: 0 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: reduceMotion ? 1 : 0 }}
            transition={reduceMotion ? { duration: 0.15 } : { height: { type: 'spring', stiffness: 320, damping: 32 } }}
            className="overflow-hidden border-t border-brand-ink/10 bg-brand-paper md:hidden"
          >
            <div className="container space-y-0.5 py-3">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 0.04 * i }}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex min-h-[48px] items-center rounded-sm px-4 py-3 font-semibold',
                      isActive(link.href) ? 'bg-brand-sand text-brand-ink' : 'text-brand-ink/85 active:bg-brand-sand/70'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex min-h-[48px] items-center justify-center rounded-sm bg-primary-500 px-4 py-3 font-bold text-brand-ink shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
