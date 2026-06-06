import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://renatapsico.netlify.app'),
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
  ],
  authors: [{ name: 'Renata Brito de Siqueira' }],
  creator: 'Renata Brito de Siqueira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://renatapsico.netlify.app',
    siteName: 'Renata Siqueira – Psicopedagoga',
    title: 'Psicopedagoga em Resende RJ | Renata Siqueira | TDAH, Autismo, Dislexia',
    description:
      'Atendimento psicopedagógico especializado em Resende RJ. Avaliação, prevenção e intervenção para TDAH, autismo, dificuldades de leitura, escrita e raciocínio lógico-matemático.',
    images: [
      {
        url: '/images/sobre_mim.jpg',
        width: 800,
        height: 800,
        alt: 'Renata Siqueira – Psicopedagoga em Resende RJ',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://renatapsico.netlify.app',
  },
  icons: {
    icon: '/images/logo_renata.svg',
  },
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://renatapsico.netlify.app" />
        <meta property="og:image" content="https://renatapsico.netlify.app/images/sobre_mim.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicopedagoga em Resende RJ | Renata Siqueira" />
        <meta name="twitter:description" content="Psicopedagoga e Neuropsicopedagoga em Resende RJ. Atendimento especializado para TDAH, autismo, dislexia e outras necessidades." />
        <meta name="twitter:image" content="https://renatapsico.netlify.app/images/sobre_mim.jpg" />
        {/* JSON-LD – Schema Markup for Local Business / Health & Wellness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
              name: 'Psicopedagoga Resende Renata Siqueira',
              alternateName: 'Renata Brito de Siqueira – Psicopedagoga',
              url: 'https://renatapsico.netlify.app',
              logo: 'https://renatapsico.netlify.app/images/logo_renata.jpeg',
              image: 'https://renatapsico.netlify.app/images/sobre_mim.jpg',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
