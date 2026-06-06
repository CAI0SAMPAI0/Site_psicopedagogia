'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const fotos = [
  { src: '/images/consultorio1.jpg', alt: 'Consultório psicopedagógico' },
  { src: '/images/consultorio2.jpg', alt: 'Espaço de atendimento' },
  { src: '/images/consultorio3.jpg', alt: 'Ambiente de aprendizagem' },
  { src: '/images/consultorio4.jpeg', alt: 'Ambiente de aprendizagem' },
  { src: '/images/consultorio5.jpeg', alt: 'Ambiente de aprendizagem' },
  { src: '/images/consultorio6.jpeg', alt: 'Ambiente de aprendizagem' },
]

export default function GaleriaConsultorio() {
  const [modalSrc, setModalSrc] = useState<string | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="galeria-consultorio">
        {fotos.map((f) => (
          <div key={f.src} className="foto-consultorio">
            <Image
              src={f.src}
              alt={f.alt}
              className="img-consultorio"
              width={800}
              height={600}
              onClick={() => setModalSrc(f.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalSrc && (
        <div className="modal" style={{ display: 'block' }} onClick={() => setModalSrc(null)}>
          <span className="fechar" onClick={() => setModalSrc(null)}>&times;</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="imagemModal" src={modalSrc} alt="Imagem ampliada do consultório" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
