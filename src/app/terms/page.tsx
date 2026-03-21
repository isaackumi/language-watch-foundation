import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | LANGUAGE WATCH Foundation (LWF)',
  description: 'Terms of service for LANGUAGE WATCH Foundation website and services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-link font-semibold hover:text-link-hover transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-lg">
            By using the LANGUAGE WATCH Foundation (LWF) website and services, you agree to these terms of service.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Use of Services</h2>
          <p>
            Our services are provided for educational and professional development purposes. You agree to use them in accordance with our mission of promoting decorous and polite language use.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and materials, is the property of LWF and is protected by copyright laws. Unauthorized use is prohibited.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact</h2>
          <p>
            For questions about these terms, please contact us at{' '}
            <a href="mailto:languagewatch@gmail.com" className="text-link hover:text-link-hover font-semibold">
              languagewatch@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
