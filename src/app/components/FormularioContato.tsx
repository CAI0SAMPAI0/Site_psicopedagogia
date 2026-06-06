'use client'

import { FormEvent, useState } from 'react'

export default function FormularioContato() {
  const [name, setName] = useState('')
  const [pergunta, setPergunta] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = `Olá, meu nome é ${name}.\n${pergunta}`
    const number = '5524999992327'
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} id="contact_form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Seu nome:"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        name="pergunta"
        id="pergunta"
        placeholder="Escreva sua pergunta aqui..."
        required
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
      />
      <br />
      <div className="btn-enviar">
        <input type="submit" id="submit_button" value="ENVIAR" />
      </div>
    </form>
  )
}
