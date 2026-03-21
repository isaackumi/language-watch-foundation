import { siteContent } from '@/data/content'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="relative bg-dark-500 text-white rounded-t-3xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-primary-900/20 pointer-events-none" />
      {/* Main Footer Content - Large */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-black text-white tracking-tight">
              LANGUAGE WATCH Foundation
            </h3>
            <p className="text-xl font-semibold text-primary-400">(LWF)</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {siteContent.footer.description}
            </p>
            <p className="text-gray-400 text-base italic">
              Kasa wↄ Tumi – Words are Powerful
            </p>
            <div className="flex gap-4 pt-4" role="list">
              {siteContent.contact.social.facebook && (
                <a
                  href={siteContent.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="p-3 bg-white/10 rounded-xl hover:bg-primary-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.twitter && (
                <a
                  href={siteContent.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="p-3 bg-white/10 rounded-xl hover:bg-primary-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.instagram && (
                <a
                  href={siteContent.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="p-3 bg-white/10 rounded-xl hover:bg-primary-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.linkedin && (
                <a
                  href={siteContent.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="p-3 bg-white/10 rounded-xl hover:bg-primary-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {siteContent.contact.social.youtube && (
                <a
                  href={siteContent.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="p-3 bg-white/10 rounded-xl hover:bg-primary-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black text-white mb-8">Quick Links</h4>
            <ul className="space-y-5">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 font-semibold transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black text-white mb-8">Our Services</h4>
            <ul className="space-y-5">
              {siteContent.footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 font-semibold transition-colors text-lg"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black text-white mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 font-semibold text-lg">{siteContent.contact.location}</p>
                  <p className="text-gray-400">{siteContent.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`} className="block text-gray-300 hover:text-primary-400 font-semibold text-lg transition-colors">
                    {siteContent.contact.phone}
                  </a>
                  {siteContent.contact.mobile.map((mobile) => (
                    <a key={mobile} href={`tel:${mobile.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-primary-400 transition-colors">
                      {mobile}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-gray-300 hover:text-primary-400 font-semibold text-lg transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 pt-16 border-t border-gray-700">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-lg mb-6">
              Subscribe to our newsletter for updates on our programs, workshops, and language initiatives.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-semibold text-lg">
              © {new Date().getFullYear()} LANGUAGE WATCH Foundation (LWF). All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary-400 font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary-400 font-semibold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
