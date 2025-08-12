import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Workflow, Brain, ShieldCheck, PlugZap, Sparkles, Mail, Phone, MapPin } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    {kicker && <p className="uppercase tracking-[0.25em] text-xs text-emerald-300/80 mb-3">{kicker}</p>}
    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 text-slate-300/90 text-base md:text-lg">{subtitle}</p>}
  </div>
)

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-400/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56,255,120,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />
    </div>
  )
}

const Card = ({ children, className = '' }) => (
  <div className={"bg-[#0f1418]/80 border border-white/10 rounded-2xl " + className}>{children}</div>
)
const CardHeader = ({ children, className = '' }) => (
  <div className={"p-5 " + className}>{children}</div>
)
const CardContent = ({ children, className = '' }) => (
  <div className={"p-5 pt-0 " + className}>{children}</div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e10] text-slate-200 selection:bg-emerald-400/30 selection:text-emerald-50">
      <Glow />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0e10]/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-[0_0_35px_rgba(16,185,129,0.35)]">
              <Sparkles className="h-5 w-5 text-[#0b0e10]" />
            </div>
            <div>
              <div className="text-white font-semibold leading-tight">Gruppo Automa Italia</div>
              <div className="text-xs text-emerald-300/80">AI su misura per il tuo business</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servizi" className="hover:text-white text-slate-300/90 transition">Servizi</a>
            <a href="#processo" className="hover:text-white text-slate-300/90 transition">Metodo</a>
            <a href="#casi" className="hover:text-white text-slate-300/90 transition">Casi d’uso</a>
            <a href="#faq" className="hover:text-white text-slate-300/90 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://lumnia-landing.vercel.app/#"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0e10] px-4 py-2 font-medium"
            >
              Scopri Lumnia <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="show" variants={container} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-emerald-300/80 mb-4">Consulenza & Integrazione AI</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Portiamo la tua azienda <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">nell’era dell’IA</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
                Progettiamo e sviluppiamo soluzioni di intelligenza artificiale <span className="text-white font-semibold">su misura</span> — automazioni, chatbot, integrazioni e modelli personalizzati — per aumentare efficienza, qualità e fatturato.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://lumnia-landing.vercel.app/#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0e10] px-5 py-3 font-semibold"
                >
                  Vai al prodotto Lumnia <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contatti"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/10 px-5 py-3 font-medium"
                >
                  Prenota una call
                </a>
              </div>
              <div className="mt-6 text-xs text-slate-400">
                Nessuna vendita di prodotti qui: analizziamo i tuoi processi e costruiamo <span className="text-emerald-300">soluzioni custom</span> end‑to‑end.
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent blur-2xl" />
              <Card className="relative overflow-hidden rounded-3xl">
                <div className="p-0">
                  <div className="aspect-[4/3] w-full grid grid-cols-2">
                    <div className="p-6 border-r border-white/5">
                      <div className="text-sm text-emerald-300/80 mb-1">Assistente</div>
                      <div className="text-2xl font-semibold text-white">Chatbot aziendale</div>
                      <p className="mt-3 text-slate-300/90 text-sm">Base conoscenza privata, toni su brand, integrazione CRM.</p>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-emerald-300/80 mb-1">Automazioni</div>
                      <div className="text-2xl font-semibold text-white">Flussi no‑touch</div>
                      <p className="mt-3 text-slate-300/90 text-sm">Da email a ERP: agenti AI che eseguono compiti operativi.</p>
                    </div>
                    <div className="p-6 border-t border-white/5 border-r">
                      <div className="text-sm text-emerald-300/80 mb-1">Integrazioni</div>
                      <div className="text-2xl font-semibold text-white">API & DataOps</div>
                      <p className="mt-3 text-slate-300/90 text-sm">ETL, governance dati, sicurezza e audit.</p>
                    </div>
                    <div className="p-6 border-t border-white/5">
                      <div className="text-sm text-emerald-300/80 mb-1">Modelli</div>
                      <div className="text-2xl font-semibold text-white">LLM personalizzati</div>
                      <p className="mt-3 text-slate-300/90 text-sm">Prompt, RAG, fine‑tuning, valutazione qualità.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Cosa facciamo"
            title="Automazioni e assistenti AI su misura"
            subtitle="Non vendiamo scaffali di prodotti. Analizziamo il tuo caso d’uso e costruiamo la soluzione più efficace, integrata con i tuoi sistemi."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card className="hover:border-emerald-400/30 transition">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-300">
                  <Workflow className="h-5 w-5" />
                </div>
                <div className="text-white font-semibold">Automazioni su misura</div>
              </CardHeader>
              <CardContent className="text-slate-300/90 text-sm">
                Mapping processi, design dei flussi, agenti AI operativi, orchestrazione e monitoraggio con KPI.
              </CardContent>
            </Card>

            <Card className="hover:border-emerald-400/30 transition">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-300">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="text-white font-semibold">Chatbot & Assistenti</div>
              </CardHeader>
              <CardContent className="text-slate-300/90 text-sm">
                Assistenti conversazionali su base conoscenza privata (RAG), uniformati al tono del brand, multicanale.
              </CardContent>
            </Card>

            <Card className="hover:border-emerald-400/30 transition">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-300">
                  <PlugZap className="h-5 w-5" />
                </div>
                <div className="text-white font-semibold">Integrazioni & DataOps</div>
              </CardHeader>
              <CardContent className="text-slate-300/90 text-sm">
                Connettiamo CRM/ERP, ticketing, email e API. ETL, qualità dati, logging, audit e sicurezza.
              </CardContent>
            </Card>

            <Card className="hover:border-emerald-400/30 transition">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-white font-semibold">AI Governance & Training</div>
              </CardHeader>
              <CardContent className="text-slate-300/90 text-sm">
                Policy, risk management, misurazione qualità, formazione team e adozione responsabile.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Come lavoriamo"
            title="Dal problema al valore in 4 settimane"
            subtitle="Un percorso chiaro e misurabile per passare dall’idea al primo ROI."
          />
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { title: '1. Discovery', text: 'Analisi processi, dati e vincoli. Identificazione dei quick win.' },
              { title: '2. Prototipo', text: 'PoC funzionante con KPI chiari e metriche di qualità.' },
              { title: '3. Integrazione', text: 'Connessioni a sistemi esistenti, sicurezza e governance.' },
              { title: '4. Go‑Live', text: 'Rollout, monitoraggio continuo e miglioramento iterativo.' },
            ].map((step, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="text-white font-semibold">{step.title}</div>
                </CardHeader>
                <CardContent className="text-slate-300/90 text-sm">{step.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASI D'USO */}
      <section id="casi" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Dove l’AI rende di più"
            title="Casi d’uso comuni"
            subtitle="Ogni progetto è unico. Questi sono esempi frequenti dove l’automazione fa la differenza."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { Icon: Brain, title: 'Supporto clienti', text: 'Deflessione ticket, priorità automatica, risposte in tempo reale su base conoscenza.' },
              { Icon: Workflow, title: 'Back‑office smart', text: 'Inserimento ordini, estrazione dati da documenti, riconciliazioni e notifiche automatiche.' },
              { Icon: PlugZap, title: 'Vendite & Marketing', text: 'Lead qualification, assistenti per demo, generazione contenuti coerenti con il brand.' },
            ].map(({ Icon, title, text }, i) => (
              <Card key={i} className="hover:border-emerald-400/30 transition">
                <CardHeader className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/15 grid place-items-center text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-white font-semibold">{title}</div>
                </CardHeader>
                <CardContent className="text-slate-300/90 text-sm">{text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA LUMNIA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-[#0f1418] to-[#0f1418] p-10">
            <div className="absolute -inset-1 rounded-3xl pointer-events-none border border-emerald-500/30 blur-[2px]" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Vuoi un prodotto pronto all’uso?</h3>
                <p className="mt-3 text-slate-300/90">Scopri <span className="text-white font-semibold">Lumnia</span>, la piattaforma del nostro gruppo per assistenti AI aziendali. La landing di <span className="text-emerald-300">Lumnia</span> è su un sito dedicato.</p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="https://lumnia-landing.vercel.app/#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0e10] px-5 py-3 font-semibold shadow-[0_0_35px_rgba(16,185,129,0.35)]"
                >
                  Vai alla landing di Lumnia <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle
              kicker="Parliamone"
              title="Raccontaci il tuo caso d’uso"
              subtitle="Scrivici due righe: ti risponderemo con idee concrete e una proposta di percorso."
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300/90"><Mail className="h-4 w-4 text-emerald-300" /> info@gruppoautoma.it</div>
              <div className="flex items-center gap-3 text-slate-300/90"><Phone className="h-4 w-4 text-emerald-300" /> +39 000 000 0000</div>
              <div className="flex items-center gap-3 text-slate-300/90"><MapPin className="h-4 w-4 text-emerald-300" /> Milano • Roma • Torino</div>
            </div>
          </div>
          <Card>
            <div className="p-6">
              <form className="grid grid-cols-1 gap-4" action="mailto:info@gruppoautoma.it" method="post" encType="text/plain">
                <div>
                  <label className="text-sm text-slate-300/90">Nome e azienda</label>
                  <input name="nome" placeholder="Es. Laura – ACME S.p.A." className="mt-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2 w-full" required />
                </div>
                <div>
                  <label className="text-sm text-slate-300/90">Email</label>
                  <input type="email" name="email" placeholder="nome@azienda.it" className="mt-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2 w-full" required />
                </div>
                <div>
                  <label className="text-sm text-slate-300/90">Descrivi il tuo obiettivo</label>
                  <textarea name="messaggio" placeholder="Raccontaci processo attuale, sistemi in uso e KPI desiderati" className="mt-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2 w-full min-h-[120px]" />
                </div>
                <button type="submit" className="rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0e10] px-5 py-3 font-semibold">Invia</button>
                <p className="text-xs text-slate-400">Compilando accetti il trattamento dei dati ai sensi del Reg. UE 2016/679 (GDPR). Nessuno spam, promesso.</p>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle kicker="Domande frequenti" title="FAQ" />
          <div className="w-full bg-[#0f1418]/60 rounded-2xl border border-white/10 px-4 divide-y divide-white/10">
            <details>
              <summary className="cursor-pointer py-4 text-white font-medium">Vendete prodotti pronti?</summary>
              <div className="pb-4 text-slate-300/90">
                No. Siamo focalizzati su <span className="text-white font-semibold">consulenza, integrazione e sviluppo su misura</span>. Per un prodotto dedicato visita la landing di Lumnia.
              </div>
            </details>
            <details>
              <summary className="cursor-pointer py-4 text-white font-medium">Quanto tempo serve per vedere risultati?</summary>
              <div className="pb-4 text-slate-300/90">
                In genere impostiamo un <span className="text-white font-semibold">PoC in 2–4 settimane</span> con metriche chiare. Da lì si procede al rollout.
              </div>
            </details>
            <details>
              <summary className="cursor-pointer py-4 text-white font-medium">Come gestite sicurezza e privacy?</summary>
              <div className="pb-4 text-slate-300/90">
                Applichiamo principi di <span className="text-white font-semibold">privacy by design</span>, crittografia in transito e a riposo, logging e controllo accessi. Offriamo opzioni on‑prem o cloud.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Gruppo Automa Italia — P.IVA 00000000000</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#servizi" className="text-slate-300/90 hover:text-white">Servizi</a>
            <a href="#processo" className="text-slate-300/90 hover:text-white">Metodo</a>
            <a href="#contatti" className="text-slate-300/90 hover:text-white">Contatti</a>
            <a href="https://lumnia-landing.vercel.app/#" target="_blank" rel="noreferrer noopener" className="text-emerald-300 hover:text-emerald-200">Lumnia</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
