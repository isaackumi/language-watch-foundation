'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
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

  // Use light nav (dark text) when scrolled OR on non-home pages (which have light backgrounds)
  const isLightNav = isScrolled || pathname !== '/'

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 rounded-2xl',
        isLightNav
          ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg'
          : 'bg-white/10 backdrop-blur-lg border border-white/20'
      )}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/nananom.jpg"
              alt="Language Watch Foundation"
              width={40}
              height={40}
              className="rounded-lg object-cover flex-shrink-0"
            />
            <span className={cn('text-xl font-bold tracking-tight', isLightNav ? 'text-gray-900' : 'text-white')}>
              LANGUAGE WATCH
            </span>
            <span className={cn('font-bold', isLightNav ? 'text-primary-600' : 'text-primary-300')}>(LWF)</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                  isLightNav
                    ? isActive(link.href)
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    : isActive(link.href)
                      ? 'bg-white/25 text-white'
                      : 'text-white/90 hover:bg-white/15 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                'ml-4 px-6 py-2.5 rounded-full font-semibold text-sm transition-colors',
                isLightNav
                  ? 'bg-link text-white hover:bg-link-hover'
                  : 'bg-white text-primary-700 hover:bg-white/95'
              )}
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={cn('md:hidden p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center', isLightNav ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/15')}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn('md:hidden overflow-hidden', isLightNav ? 'border-t border-gray-200' : 'border-t border-white/20')}
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl font-semibold transition-colors',
                    isLightNav ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/15'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  'block px-4 py-3 rounded-xl font-semibold text-center',
                  isLightNav ? 'bg-link text-white' : 'bg-white text-primary-700'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
