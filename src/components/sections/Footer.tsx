import { siteContent } from '@/data/content'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="relative bg-indigo-950 text-white rounded-t-[2rem] overflow-hidden border-t border-indigo-800/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_100%,rgba(16,185,129,0.12),transparent_55%)] pointer-events-none" />
      {/* Main Footer Content - Large */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-extrabold text-white tracking-tight font-heading">
              LANGUAGE WATCH Foundation
            </h3>
            <p className="text-xl font-semibold text-emerald-300">(LWF)</p>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-md">
              {siteContent.footer.description}
            </p>
            <p className="text-indigo-200/90 text-base italic">
              Kasa wↄ Tumi – Words are Powerful
            </p>
            <div className="flex gap-4 pt-4" role="list">
              {siteContent.contact.social.facebook && (
                <a
                  href={siteContent.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 hover:text-indigo-950 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border border-white/10"
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
                  className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 hover:text-indigo-950 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border border-white/10"
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
                  className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 hover:text-indigo-950 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border border-white/10"
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
                  className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 hover:text-indigo-950 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border border-white/10"
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
                  className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 hover:text-indigo-950 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border border-white/10"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 font-heading">Quick Links</h4>
            <ul className="space-y-5">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-indigo-100 hover:text-emerald-300 font-semibold transition-colors duration-200 text-lg cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 font-heading">Our Services</h4>
            <ul className="space-y-5">
              {siteContent.footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-indigo-100 hover:text-emerald-300 font-semibold transition-colors duration-200 text-lg cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 font-heading">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-emerald-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-indigo-100 font-semibold text-lg">{siteContent.contact.location}</p>
                  <p className="text-indigo-200/80">{siteContent.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-emerald-300 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`} className="block text-indigo-100 hover:text-emerald-300 font-semibold text-lg transition-colors duration-200 cursor-pointer">
                    {siteContent.contact.phone}
                  </a>
                  {siteContent.contact.mobile.map((mobile) => (
                    <a key={mobile} href={`tel:${mobile.replace(/\s/g, '')}`} className="block text-indigo-200/80 hover:text-emerald-300 transition-colors duration-200 cursor-pointer">
                      {mobile}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-indigo-100 hover:text-emerald-300 font-semibold text-lg transition-colors duration-200 cursor-pointer"
                >
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 pt-16 border-t border-indigo-800/80">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-bold text-white mb-4 font-heading">Stay Updated</h4>
            <p className="text-indigo-100 text-lg mb-6">
              Subscribe to our newsletter for updates on our programs, workshops, and language initiatives.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-800/80 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-indigo-200/90 font-semibold text-lg">
              © {new Date().getFullYear()} LANGUAGE WATCH Foundation (LWF). All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-indigo-200/90 hover:text-emerald-300 font-semibold transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-indigo-200/90 hover:text-emerald-300 font-semibold transition-colors duration-200 cursor-pointer"
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
