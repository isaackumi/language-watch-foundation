'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  User,
  Settings,
  Image,
  Users,
  MessageCircle,
  Mail,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteContent } from '@/data/content'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const iconMap = {
  home: Home,
  user: User,
  cog: Settings,
  image: Image,
  users: Users,
  messageCircle: MessageCircle,
  mail: Mail,
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg'
        : 'bg-primary-900/90'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold stylish-title text-white">
              LANGUAGE WATCH Foundation (LWF)
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-primary-300 font-semibold transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-400 transition-colors duration-200 font-semibold shadow-lg border-2 border-primary-400 hover:border-primary-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary-300 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-900 border-t border-primary-700">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-primary-300 font-semibold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-400 transition-colors duration-200 text-center font-semibold shadow-lg border-2 border-primary-400 hover:border-primary-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        .stylish-title {
          font-family: 'Raleway', 'Inter', 'Segoe UI', 'Arial', sans-serif;
          letter-spacing: -0.01em;
        }
      `}</style>
    </nav>
  )
}

