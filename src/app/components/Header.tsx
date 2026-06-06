'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header>
      <div className="interface">
        {/* Logo */}
        <div className="logo">
          <Link href="#i">
            <Image src="/images/logo_renata.jpeg" alt="Logo Renata Siqueira Psicopedagoga" width={184} height={100} className="img" style={{ width: '11.5rem', height: 'auto', borderRadius: '5px' }} />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="menu-desktop">
          <ul>
            <li><Link href="#i">Início</Link></li>
            <li><Link href="#e">Especialidades</Link></li>
            <li><Link href="#s">Sobre</Link></li>
            <li><Link href="#me">Meu espaço</Link></li>
            <li><Link href="#lo">Localização</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="btn-contato">
          <Link href="#c1"><button id="btn-duvidas-header">Dúvidas</button></Link>
        </div>

        {/* Hamburger */}
        <div className="btn-abrir-menu" id="btn-menu" onClick={() => setMenuAberto(true)}>
          <i className="bi bi-list"></i>
        </div>

        {/* Mobile menu */}
        <div className={`menu-mobile${menuAberto ? ' abrir_menu' : ''}`} id="menu-mobile" onClick={() => setMenuAberto(false)}>
          <div className="btn-fechar">
            <i className="bi bi-x"></i>
          </div>
          <nav>
            <ul>
              <li><Link href="#i" onClick={() => setMenuAberto(false)}>Início</Link></li>
              <li><Link href="#e" onClick={() => setMenuAberto(false)}>Especialidades</Link></li>
              <li><Link href="#s" onClick={() => setMenuAberto(false)}>Sobre</Link></li>
              <li><Link href="#me" onClick={() => setMenuAberto(false)}>Meu Espaço</Link></li>
              <li><Link href="#lo" onClick={() => setMenuAberto(false)}>Localização</Link></li>
              <li><Link href="#c2" onClick={() => setMenuAberto(false)}>Contato</Link></li>
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        <div className={`overlay-menu${menuAberto ? ' block' : ''}`} id="overlay-menu" onClick={() => setMenuAberto(false)}
          style={{ display: menuAberto ? 'block' : 'none' }}
        ></div>
      </div>
    </header>
  )
}
