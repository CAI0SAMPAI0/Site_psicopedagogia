import type { MetadataRoute } from 'next'

const SITE_URL = 'https://renatapsico.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${SITE_URL}/images/logo_renata.jpeg`,
        `${SITE_URL}/images/sobre_mim.jpg`,
        `${SITE_URL}/images/logo_borboleta_nobg_semborda.png`,
        `${SITE_URL}/images/consultorio1.jpg`,
        `${SITE_URL}/images/consultorio2.jpg`,
        `${SITE_URL}/images/consultorio3.jpg`,
        `${SITE_URL}/images/consultorio4.jpeg`,
        `${SITE_URL}/images/consultorio5.jpeg`,
        `${SITE_URL}/images/consultorio6.jpeg`,
      ],
    },
  ]
}
