import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | LANGUAGE WATCH Foundation (LWF)',
  description: 'Terms of service for LANGUAGE WATCH Foundation website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900">
      <div className="fixed left-4 top-24 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/92 px-4 py-2.5 text-sm font-semibold text-indigo-900 shadow-lg shadow-indigo-950/10 backdrop-blur-md transition-all duration-200 hover:border-indigo-300 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <main className="pb-24 pt-32 sm:pt-36">
        <div className="container max-w-3xl">
          <p className="section-eyebrow mb-3">Legal</p>
          <h1 className="mb-10 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem]">
            Terms of Service
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p className="text-slate-700">
              By using the LANGUAGE WATCH Foundation (LWF) website and services, you agree to these terms of service.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Use of Services</h2>
            <p>
              Our services are provided for educational and professional development purposes. You agree to use them in
              accordance with our mission of promoting decorous and polite language use.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and materials, is the property of LWF and is protected
              by copyright laws. Unauthorized use is prohibited.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Contact</h2>
            <p>
              For questions about these terms, please contact us at{' '}
              <a href="mailto:languagewatch@gmail.com" className="font-semibold text-link hover:text-link-hover">
                languagewatch@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
