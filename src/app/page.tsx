import type { Metadata } from 'next'
import Link from 'next/link'
import Header from './components/Header'
import FormularioContato from './components/FormularioContato'
import GaleriaConsultorio from './components/GaleriaConsultorio'
import ScrollRevealInit from './components/ScrollRevealInit'

export const metadata: Metadata = {
  title: 'Psicopedagoga em Resende RJ | Renata Siqueira | TDAH, Autismo, Dislexia',
}

const especialidades = [
  {
    titulo: 'Avaliação Diagnóstica',
    texto:
      'Com base no reconhecimento e funcionamento cerebral e a sua reposição cognitiva, através do diagnóstico podemos mapear o nível de aquisição das competências mentais necessárias aos processamentos dos conteúdos escolares.',
  },
  {
    titulo: 'Prevenção',
    texto:
      'Ao tratar de algumas dificuldades e transtornos de aprendizagem, podemos evitar o aparecimento de outros problemas. A área preventiva do trabalho do psicopedagogo é baseada na estimulação e orientação do processo ensino-aprendizagem, com objetivo de favorecer a apropriação do conhecimento do aprendente ao longo da vida.',
  },
  {
    titulo: 'Intervenção',
    texto:
      'A intervenção psicopedagógica acontece após sessões avaliativas onde foram encontradas hipóteses causas das falhas na aprendizagem. Diante desses resultados, o psicopedagogo elabora um plano de intervenção e inicia uma terapia da aprendizagem com propostas educativas, de forma a estimular as áreas cerebrais que necessitam de intervenção, levando ao sucesso escolar.',
  },
  {
    titulo: 'Dificuldades na Aprendizagem',
    texto:
      'Dificuldades, transtornos e até problemas de aprendizagem são de ordens que dificultam o ritmo de aprendizagem de uma pessoa. Esses problemas são detectados a partir dos cinco anos de idade e necessitam de acompanhamento de psicopedagogos, psicólogos, fonoaudiólogos, e em alguns casos, outros profissionais.',
  },
  {
    titulo: 'Dificuldades na Leitura e Escrita',
    texto:
      'É uma incapacidade específica de aprendizagem caracterizada por dificuldade para alfabetizar-se, entender o que lê, problemas para memorizar palavras, dispersão, falta de atenção, dificuldades em escrever de forma legível e sem erros ortográficos.',
  },
  {
    titulo: 'Dificuldades no Raciocínio Lógico-Matemático',
    texto:
      'Dificuldade em fazer operações matemáticas e processos cognitivos afetados, como: Velocidade de processamento da informação; memórias de trabalho, tarefas não-verbais, de curto prazo, sequencial auditiva; habilidade visuoespacial, psicomotoras e perceptivo-táteis.',
  },
]

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="topo_do_site" id="i">
          <div className="interface">
            <div className="flex">
              <div className="txt_topo_site">
                <h1>Especialista em Atendimento Educacional Especializado</h1>
                <p>
                  Atendimento educacional especializado para crianças, adolescentes e idosos que apresentam
                  dificuldades de aprendizagem, leitura, escrita ou raciocínio lógico matemático.
                </p>
                <div className="btn-contato">
                  <Link href="#c2"><button id="btn-contato-hero">Entre em contato</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ────────────────────────────────────── */}
        <section className="especialidades" id="e">
          <div className="interface">
            <h2 className="titulo" id="especialidades-titulo">
              MINHAS <span>ESPECIALIDADES.</span>
            </h2>
            <div className="flex">
              {especialidades.map((esp) => (
                <div key={esp.titulo} className="esp-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo_borboleta_nobg_semborda.png"
                    className="icone-esp"
                    alt={`Ícone – ${esp.titulo}`}
                  />
                  <h3>{esp.titulo}</h3>
                  <p>{esp.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FRASE ─────────────────────────────────────────────── */}
        <section className="frase">
          <div className="interface">
            <p>
              &ldquo;Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a
              sua construção.&rdquo;
            </p>
            <span>— Paulo Freire</span>
          </div>
        </section>

        {/* ── SOBRE ─────────────────────────────────────────────── */}
        <section className="sobre" id="s">
          <div className="interface">
            <div className="flex">
              <div className="img-sobre">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/sobre_mim.jpg" alt="Renata Brito de Siqueira – Psicopedagoga em Resende RJ" />
              </div>
              <div className="txt-sobre" id="s">
                <h2>
                  QUEM SOU EU, <span>RENATA BRITO DE SIQUEIRA.</span>
                </h2>
                <p>
                  Formada em Pedagogia, pós-graduada em Psicopedagogia e em Neurociências, com curso de extensão:
                  Prática de Atendimento Psicopedagógico. Atuo na área da educação, lidando com conceitos educacionais,
                  emocionais e sociais de crianças dentro do contexto escolar. Como psicopedagoga atendo crianças,
                  adolescentes e idosos que apresentam dificuldades de aprendizagem, através de avaliações e
                  intervenções psicopedagógicas.
                </p>
                <div className="btn-social">
                  <a href="https://www.instagram.com/renatasiqueirapsico/" target="_blank" rel="noopener noreferrer">
                    <button id="btn-instagram-sobre" aria-label="Instagram da Renata Siqueira">
                      <i className="bi bi-instagram"></i>
                    </button>
                  </a>
                  <a href="https://wa.me/5524999992327" target="_blank" rel="noopener noreferrer">
                    <button id="btn-whatsapp-sobre" aria-label="WhatsApp da Renata Siqueira">
                      <i className="bi bi-whatsapp"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMULÁRIO / DÚVIDAS ──────────────────────────────── */}
        <section className="formulario" id="c1">
          <div className="interface">
            <h2 className="titulo">
              TIRE SUA <span>DÚVIDA</span>
            </h2>
            <FormularioContato />
            <div className="flex"></div>
          </div>
        </section>

        {/* ── CONSULTÓRIO ───────────────────────────────────────── */}
        <section className="consultorio" id="me">
          <div className="interface">
            <h2 className="titulo">
              ESPAÇO DE <span>ATENDIMENTO</span>
            </h2>
            <GaleriaConsultorio />
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ───────────────────────────────────────── */}
        <section className="localizacao" id="lo">
          <div className="interface">
            <h2 className="titulo">
              LOCALIZAÇÃO DO <span>CONSULTÓRIO</span>
            </h2>

            <div className="mapa-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.7235184676812!2d-44.49810668378378!3d-22.47771909693467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e79f01a3f28af%3A0x6598e720f277c186!2sPsicopedagoga%20Resende%20Renata%20Siqueira!5e0!3m2!1spt-BR!2sbr!4v1772710991783!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Psicopedagoga Renata Siqueira em Resende RJ"
              />
            </div>

            <div className="rota-maps">
              <a href="https://maps.app.goo.gl/MjxnCSVjbFdVmNmm8" target="_blank" rel="noopener noreferrer">
                Abrir rota no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer>
        <div className="interface">
          <div className="line-footer">
            <div className="flex">
              <div className="logo-footer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo_renata.jpeg" alt="Logo Renata Siqueira Psicopedagoga" />
              </div>
              <div className="btn-social" id="c2">
                <a href="https://www.instagram.com/renatasiqueirapsico/" target="_blank" rel="noopener noreferrer">
                  <button id="btn-instagram-footer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </button>
                </a>
                <a
                  href="https://wa.me/5524999992327?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20contigo%2C%20pois%20eu%20quero%20fazer%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button id="btn-whatsapp-footer" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ────────────────────────────────────── */}
      <a
        href="https://wa.me/5524999992327?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a Psicopedagoga Renata"
        id="whatsapp-float-btn"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/whatsapp.svg" alt="WhatsApp" />
      </a>
    </>
  )
}
