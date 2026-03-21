import { siteContent } from '@/data/content'

const baseUrl = 'https://languagewatchfoundation.org'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteContent.meta.title,
    description: siteContent.meta.description,
    url: baseUrl,
    email: siteContent.contact.email,
    telephone: siteContent.contact.phone.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteContent.contact.location,
      addressLocality: 'Accra',
      addressCountry: 'GH',
      postalCode: 'LG 877',
    },
    sameAs: [
      siteContent.contact.social.facebook,
      siteContent.contact.social.twitter,
      siteContent.contact.social.instagram,
      siteContent.contact.social.linkedin,
      siteContent.contact.social.youtube,
    ].filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
