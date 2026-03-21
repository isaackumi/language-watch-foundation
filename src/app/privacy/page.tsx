import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | LANGUAGE WATCH Foundation (LWF)',
  description: 'Privacy policy for LANGUAGE WATCH Foundation website and services.',
}

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-lg">
            LANGUAGE WATCH Foundation (LWF) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Information We Collect</h2>
          <p>
            We may collect information you provide when contacting us, subscribing to our newsletter, or participating in our programs. This may include your name, email address, phone number, and other relevant details.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, send updates about our programs, and improve our services. We do not share your personal information with third parties without your consent.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Us</h2>
          <p>
            For questions about this privacy policy, please contact us at{' '}
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
