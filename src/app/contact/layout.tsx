import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | LANGUAGE WATCH Foundation (LWF)',
  description: 'Get in touch with LANGUAGE WATCH Foundation. Contact us for language training, translation, and communication services.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
