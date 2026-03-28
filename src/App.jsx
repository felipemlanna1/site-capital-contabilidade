import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, InstagramLogo, Buildings, Calculator, ChartLineUp, Users, FileText, Scales, Phone, MapPin, ShieldCheck } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/554830251800?text=Olá! Gostaria de saber mais sobre os serviços da Capital Contabilidade.'
const IG = 'https://www.instagram.com/capital_contabilidades/'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Stars({ size = 14 }) {
  return <div style={{ display: 'flex', gap: 2 }}>{[0,1,2,3,4].map(i => <Star key={i} size={size} weight="fill" color="#0EA5E9" />)}</div>
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Capital <span>Contabilidade</span></div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <Phone size={16} weight="duotone" /> Contato
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <ShieldCheck size={14} weight="fill" /> DESDE 1995 EM FLORIANÓPOLIS
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Capital<br /><span className="a">Contabilidade</span>
      </motion.h1>
      <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Assessoria contábil, fiscal e trabalhista completa para sua empresa.
        Abertura de empresas, planejamento tributário e IRPF com atendimento personalizado.
      </motion.p>
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="big" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.05 }}>
        <WhatsappLogo size={22} weight="duotone" /> Falar com Contador
      </motion.a>
      <motion.a href={IG} target="_blank" rel="noopener noreferrer" className="hero-ig" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <InstagramLogo size={18} weight="duotone" /> @capital_contabilidades
      </motion.a>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { n: '29+', l: 'Anos' },
    { n: '4.8', l: 'Nota Google' },
    { n: '154', l: 'Avaliações' },
    { n: 'ME', l: 'Porte' },
  ]
  return (
    <section className="stats sp">
      <div className="mx">
        <motion.div className="stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const servicos = [
  { icon: <Buildings size={24} weight="duotone" />, title: 'Abertura de Empresas', desc: 'Constituição societária completa com orientação sobre melhor regime tributário.' },
  { icon: <Calculator size={24} weight="duotone" />, title: 'Assessoria Contábil', desc: 'Escrituração contábil, balanços e demonstrações financeiras periódicas.' },
  { icon: <Scales size={24} weight="duotone" />, title: 'Assessoria Fiscal', desc: 'Apuração de impostos, obrigações acessórias e compliance fiscal.' },
  { icon: <Users size={24} weight="duotone" />, title: 'Departamento Pessoal', desc: 'Folha de pagamento, admissões, rescisões e gestão de benefícios.' },
  { icon: <ChartLineUp size={24} weight="duotone" />, title: 'Planejamento Tributário', desc: 'Análise estratégica para reduzir a carga tributária da sua empresa.' },
  { icon: <FileText size={24} weight="duotone" />, title: 'IRPF / IRPJ', desc: 'Declaração de imposto de renda pessoa física e jurídica com segurança.' },
]

function Servicos() {
  return (
    <section className="srv sp" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Serviços</span>
          <h2>Soluções contábeis completas</h2>
          <p>Tudo que sua empresa precisa em um só escritório</p>
        </motion.div>
        <motion.div className="srv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {servicos.map((s, i) => (
            <motion.div key={i} className="sc" variants={fadeUp} custom={i}>
              <div className="si">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Excelente atendimento e muita competência. Cuido da minha empresa com eles há anos.', author: 'Roberto M.' },
  { text: 'Abri minha empresa com a Capital e nunca tive problemas fiscais. Muito profissionais.', author: 'Aline S.' },
  { text: 'Sempre disponíveis para tirar dúvidas. Atendimento personalizado de verdade.', author: 'Marcos P.' },
  { text: 'Melhor escritório de contabilidade que já trabalhei. Confiança total.', author: 'Juliana F.' },
  { text: 'Equipe super atenciosa. Me ajudaram a economizar muito no planejamento tributário.', author: 'Carlos R.' },
  { text: 'Profissionais sérios e comprometidos. Recomendo para qualquer empreendedor.', author: 'Fernanda L.' },
]

function Reviews() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Depoimentos</span>
          <h2>Clientes confiam</h2>
          <p>154 avaliações com nota 4.8 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rc" variants={fadeUp} custom={i}>
              <div className="rc-stars"><Stars /></div>
              <p className="rc-txt">&ldquo;{r.text}&rdquo;</p>
              <div className="rc-auth">{r.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Sua empresa<br /><span className="a">em boas mãos</span></h2>
          <p>Fale com nossos contadores e descubra como podemos ajudar.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="big">
            <WhatsappLogo size={22} weight="duotone" /> Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">Capital <span>Contabilidade</span></div>
        <div className="footer-info">
          <MapPin size={12} weight="duotone" style={{ verticalAlign: 'middle' }} /> R. Emilio Blum, 131 – Torre A, Sl. 307 – Centro, Florianópolis<br />
          (48) 3025-1800 · CNPJ: 04.467.095/0001-09
        </div>
        <div className="footer-links">
          <a href={IG} target="_blank" rel="noopener noreferrer" className="fl"><InstagramLogo size={14} weight="duotone" /> @capital_contabilidades</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
        </div>
        <div className="footer-copy">© 2026 Capital Soluções Contábeis Ltda. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingCta() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Contato
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Capital Contabilidade | Florianópolis, SC</title>
        <meta name="description" content="Contabilidade em Florianópolis desde 1995. Nota 4.8 com 154 avaliações. Abertura de empresas, assessoria contábil, fiscal e trabalhista." />
      </Helmet>
      <Navbar />
      <Hero />
      <StatsSection />
      <Servicos />
      <Reviews />
      <Cta />
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
