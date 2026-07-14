import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://renatapsico.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Psicopedagoga em Resende RJ | Renata Siqueira | TDAH, Autismo, Dislexia',
    template: '%s | Renata Siqueira Psicopedagoga',
  },
  description:
    'Psicopedagoga e Neuropsicopedagoga em Resende RJ. Atendimento especializado para crianças, adolescentes e idosos com TDAH, autismo, dislexia, dificuldades de aprendizagem e raciocínio lógico. Consultório no bairro Nova Alegria, Resende. Atende também Itatiaia, Porto Real e região Sul Fluminense.',
  keywords: [
    'psicopedagoga resende', 'psicopedagoga rj', 'neuropsicopedagoga resende',
    'tdah resende', 'autismo resende', 'dislexia resende',
    'dificuldade de aprendizagem resende', 'psicólogo resende',
    'avaliação diagnóstica resende', 'terapia aprendizagem resende',
    'psicopedagoga itatiaia', 'psicopedagoga porto real',
    'psicopedagoga sul fluminense', 'atendimento educacional especializado resende',
    'renata siqueira psicopedagoga', 'renata brito siqueira',
    'consultório psicopedagógico nova alegria resende',
    'psicopedagoga infantil resende', 'psicopedagoga crianças resende',
    'dificuldade de leitura resende', 'dificuldade de escrita resende',
    'dificuldade matemática resende', 'disgrafia resende',
    'discalculia resende', 'disortografia resende',
    'neurociências educação resende', 'intervenção psicopedagógica resende',
    'psicopedagoga perto de mim', 'psicopedagoga vale do paraíba',
    'atendimento psicopedagógico idosos resende',
  ],
  authors: [{ name: 'Renata Brito de Siqueira' }],
  creator: 'Renata Brito de Siqueira',
  publisher: 'Renata Brito de Siqueira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Renata Siqueira – Psicopedagoga',
    title: 'Psicopedagoga em Resende RJ | Renata Siqueira | TDAH, Autismo, Dislexia',
    description:
      'Atendimento psicopedagógico especializado em Resende RJ. Avaliação, prevenção e intervenção para TDAH, autismo, dificuldades de leitura, escrita e raciocínio lógico-matemático.',
    images: [
      {
        url: `${SITE_URL}/images/logo_renata.jpeg`,
        width: 306,
        height: 306,
        alt: 'Logo Renata Siqueira Psicopedagoga em Resende RJ',
      },
      {
        url: `${SITE_URL}/images/sobre_mim.jpg`,
        width: 864,
        height: 1184,
        alt: 'Renata Siqueira – Psicopedagoga em Resende RJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicopedagoga em Resende RJ | Renata Siqueira',
    description: 'Psicopedagoga e Neuropsicopedagoga em Resende RJ. Atendimento especializado para TDAH, autismo, dislexia e outras necessidades.',
    images: [`${SITE_URL}/images/logo_renata.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: `${SITE_URL}/images/logo_renata.jpeg`, type: 'image/jpeg', sizes: '306x306' },
      { url: `${SITE_URL}/images/logo_renata.svg`, type: 'image/svg+xml' },
    ],
    shortcut: `${SITE_URL}/images/logo_renata.jpeg`,
    apple: `${SITE_URL}/images/logo_renata.jpeg`,
    other: {
      rel: 'mask-icon',
      url: `${SITE_URL}/images/logo_renata.svg`,
    },
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
        {/* Toastify CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Renata Brito de Siqueira" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={SITE_URL} />

        {/* Favicon – multiplos formatos para indexacao confiavel no Google */}
        <link rel="icon" type="image/jpeg" href={`${SITE_URL}/images/logo_renata.jpeg`} />
        <link rel="icon" type="image/svg+xml" href={`${SITE_URL}/images/logo_renata.svg`} />
        <link rel="shortcut icon" href={`${SITE_URL}/images/logo_renata.jpeg`} />
        <link rel="apple-touch-icon" href={`${SITE_URL}/images/logo_renata.jpeg`} />
        <link rel="apple-touch-icon" sizes="306x306" href={`${SITE_URL}/images/logo_renata.jpeg`} />

        {/* Web App Manifest */}
        <link rel="manifest" href={`${SITE_URL}/manifest.json`} />

        {/* Open Graph image – logo como imagem principal */}
        <meta property="og:image" content={`${SITE_URL}/images/logo_renata.jpeg`} />
        <meta property="og:image:width" content="306" />
        <meta property="og:image:height" content="306" />
        <meta property="og:image:alt" content="Logo Renata Siqueira Psicopedagoga em Resende RJ" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicopedagoga em Resende RJ | Renata Siqueira" />
        <meta name="twitter:description" content="Psicopedagoga e Neuropsicopedagoga em Resende RJ. Atendimento especializado para TDAH, autismo, dislexia e outras necessidades." />
        <meta name="twitter:image" content={`${SITE_URL}/images/logo_renata.jpeg`} />

        {/* JSON-LD – Schema Markup for Local Business / Health & Wellness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
              '@id': `${SITE_URL}#business`,
              name: 'Psicopedagoga Resende Renata Siqueira',
              alternateName: 'Renata Brito de Siqueira – Psicopedagoga',
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo_renata.jpeg`,
              image: `${SITE_URL}/images/logo_renata.jpeg`,
              photograph: `${SITE_URL}/images/sobre_mim.jpg`,
              description:
                'Psicopedagoga e Neuropsicopedagoga especializada no atendimento de crianças, adolescentes e idosos com TDAH, autismo, dislexia, dificuldades de aprendizagem, leitura, escrita e raciocínio lógico-matemático. Localizada em Resende (RJ), bairro Nova Alegria.',
              telephone: '+55-24-99999-2327',
              email: '',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Resende',
                addressRegion: 'RJ',
                addressCountry: 'BR',
                postalCode: '27500-000',
                streetAddress: 'Bairro Nova Alegria',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -22.47771909693467,
                longitude: -44.49810668378378,
              },
              sameAs: [
                'https://www.instagram.com/renatasiqueirapsico/',
                'https://wa.me/5524999992327',
                'https://maps.app.goo.gl/MjxnCSVjbFdVmNmm8',
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              serviceArea: [
                { '@type': 'City', name: 'Resende', containedInPlace: { '@type': 'State', name: 'Rio de Janeiro' } },
                { '@type': 'City', name: 'Itatiaia' },
                { '@type': 'City', name: 'Porto Real' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços Psicopedagógicos',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Avaliação Diagnóstica Psicopedagógica' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intervenção Psicopedagógica' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Atendimento TDAH' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Atendimento Autismo' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terapia de Dislexia e Dificuldades de Leitura' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dificuldades no Raciocínio Lógico-Matemático' } },
                ],
              },
            }),
          }}
        />
        {/* JSON-LD – Organization Schema (logo para knowledge panel) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${SITE_URL}#organization`,
              name: 'Renata Siqueira Psicopedagoga',
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/logo_renata.jpeg`,
                width: 306,
                height: 306,
              },
            }),
          }}
        />
        {/* JSON-LD – Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${SITE_URL}#person`,
              name: 'Renata Brito de Siqueira',
              jobTitle: 'Psicopedagoga e Neuropsicopedagoga',
              description: 'Psicopedagoga e Neuropsicopedagoga em Resende RJ, especializada em TDAH, autismo, dislexia e dificuldades de aprendizagem.',
              image: `${SITE_URL}/images/sobre_mim.jpg`,
              url: SITE_URL,
              worksFor: {
                '@type': 'Organization',
                name: 'Renata Siqueira Psicopedagoga',
              },
              knowsAbout: [
                'Psicopedagogia', 'Neuropsicopedagogia', 'TDAH', 'Autismo',
                'Dislexia', 'Dificuldades de Aprendizagem', 'Neurociências',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Resende',
                addressRegion: 'RJ',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://www.instagram.com/renatasiqueirapsico/',
              ],
            }),
          }}
        />
        {/* JSON-LD – FAQPage Schema (rich results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'O que faz uma psicopedagoga?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A psicopedagoga realiza avaliação, prevenção e intervenção de dificuldades de aprendizagem, incluindo TDAH, autismo, dislexia, disgrafia, discalculia e problemas de leitura, escrita e raciocínio lógico-matemático.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Qual a diferença entre psicopedagoga e neuropsicopedagoga?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A neuropsicopedagoga possui formação adicional em neurociências, permitindo um trabalho baseado no funcionamento cerebral e na reposição cognitiva, ampliando a compreensão dos processos de aprendizagem.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Onde fica o consultório da Renata Siqueira?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'O consultório da psicopedagoga Renata Siqueira fica no bairro Nova Alegria, em Resende (RJ). Atende também pacientes de Itatiaia, Porto Real e toda a região Sul Fluminense.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'A psicopedagoga atende quais idades?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A Renata Siqueira atende crianças, adolescentes e idosos que apresentam dificuldades de aprendizagem, leitura, escrita ou raciocínio lógico-matemático.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
