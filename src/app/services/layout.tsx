import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | LANGUAGE WATCH Foundation (LWF)',
  description: 'Language training, translation, public speaking coaching, media consulting, workshops, and creative writing services.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
