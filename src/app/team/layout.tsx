import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | LANGUAGE WATCH Foundation (LWF)',
  description: 'Meet our dedicated team of language and communication experts.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
