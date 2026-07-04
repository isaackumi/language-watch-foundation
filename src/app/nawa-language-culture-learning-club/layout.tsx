import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

const { nawaClub } = siteContent

export const metadata: Metadata = {
  title: `${nawaClub.title} (${nawaClub.acronym}) | ${siteContent.meta.title}`,
  description: nawaClub.welcome,
}

export default function NawaClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
