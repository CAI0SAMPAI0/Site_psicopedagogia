'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    // Dynamically import ScrollReveal only on client
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal()
      sr.reveal('.topo_do_site', { origin: 'left', duration: 2000, distance: '20%' })
      sr.reveal('.especialidades',  { origin: 'left', duration: 2000, distance: '20%' })
      sr.reveal('.sobre',           { origin: 'left', duration: 2000, distance: '20%' })
      sr.reveal('.formulario, footer', { origin: 'left', duration: 2000, distance: '20%' })
      sr.reveal('.esp-box',         { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 })
      sr.reveal('.txt_topo_site, .titulo', { delay: 100, origin: 'left', distance: '30px' })
    })
  }, [])

  return null
}
