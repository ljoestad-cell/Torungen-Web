const company = {
  email: "ljoestad@gmail.com",
  phone: "90591820",
}

export default function WebOnlyPage() {
  return (
    <>
      <WebHero />
      <WebTrustStrip />
      <WebDesignFeature />
      <WebIncludes />
      <WebProcess />
      <WebPricing />
      <WebCTA />
    </>
  )
}

function WebHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Profesjonelle nettsider for lokale bedrifter
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            Nettsider som gir deg flere kunder – ikke bare pynt.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Vi lager moderne nettsider med tydelig budskap, mobiloptimalisert design og kontaktpunkter som faktisk konverterer. Enkelt, raskt og med fast pris.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${company.email}?subject=Nettside`}
              className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-brand-orange px-8 py-4 text-center font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-105"
            >
              Få din nye nettside
            </a>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Ring 905 91 820
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-center">
            <HeroStat number="📱" label="Mobiloptimalisert" />
            <HeroStat number="⚡" label="Rask levering" />
            <HeroStat number="✓" label="Fast pris" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/25 to-brand-orange/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-4 shadow-glow backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-100 text-slate-900 shadow-inner">
              <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-200 px-4 py-3">
                <div className="flex gap-1.5 shrink-0">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 rounded-full bg-white px-4 py-1 text-xs text-gray-400 text-center border border-gray-300">
                  www.din-bedrift.no
                </div>
              </div>
              <div className="bg-slate-900 text-white">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <div className="h-3 w-20 rounded-full bg-white/70" />
                  <div className="flex gap-4">
                    <div className="h-2 w-10 rounded-full bg-white/30" />
                    <div className="h-2 w-10 rounded-full bg-white/30" />
                    <div className="h-2 w-10 rounded-full bg-white/30" />
                  </div>
                  <div className="h-6 w-20 rounded-full bg-brand-orange/90" />
                </div>
                <div className="px-5 py-7 bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="h-2 w-28 rounded-full bg-cyan-300/50 mb-3" />
                  <div className="h-4 w-4/5 rounded-full bg-white/80 mb-2" />
                  <div className="h-4 w-2/3 rounded-full bg-white/60 mb-5" />
                  <div className="h-2.5 w-full rounded-full bg-white/20 mb-1.5" />
                  <div className="h-2.5 w-5/6 rounded-full bg-white/20 mb-5" />
                  <div className="h-8 w-32 rounded-full bg-brand-orange" />
                </div>
                <div className="px-5 py-5 bg-slate-950">
                  <div className="h-2.5 w-36 rounded-full bg-white/40 mb-4" />
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { accent: 'bg-cyan-300/25' },
                      { accent: 'bg-brand-orange/25' },
                      { accent: 'bg-blue-400/25' },
                    ].map((card, i) => (
                      <div key={i} className="rounded-2xl bg-slate-800/80 p-3">
                        <div className={`h-6 w-6 rounded-xl ${card.accent} mb-2`} />
                        <div className="h-2 w-14 rounded-full bg-white/50 mb-2" />
                        <div className="h-2 w-full rounded-full bg-white/20 mb-1" />
                        <div className="h-2 w-3/4 rounded-full bg-white/20" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mx-5 mb-5 rounded-2xl bg-gradient-to-r from-brand-orange to-[#fb923c] p-4 flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-36 rounded-full bg-white/80" />
                    <div className="h-2 w-28 rounded-full bg-white/50" />
                  </div>
                  <div className="h-8 w-24 rounded-full bg-slate-900/80 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroStat({ number, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-6 backdrop-blur-sm">
      <p className="text-xl font-black tracking-tight text-cyan-200">{number}</p>
      <p className="mt-2 text-xs tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  )
}

function WebTrustStrip() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-6 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 text-center text-sm font-semibold tracking-[0.28em] text-slate-300 md:grid-cols-4 lg:px-8">
        <p>✓ Mobiloptimalisert design</p>
        <p>✓ Tydelige CTA-er som konverterer</p>
        <p>✓ Profesjonelt førsteinntrykk</p>
        <p>✓ Fast pris – ingen overraskelser</p>
      </div>
    </section>
  )
}

function WebDesignFeature() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Webdesign</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">En nettside skal ikke bare være pen. Den skal skaffe henvendelser.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Vi bygger nettsider med tydelig budskap, god mobilopplevelse og konkrete kontaktpunkter. Perfekt for lokale bedrifter som vil se mer seriøse ut og få flere kunder.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <WebCheck text="Mobiloptimalisert" />
            <WebCheck text="Tydelig CTA" />
            <WebCheck text="Rask lastetid" />
            <WebCheck text="SEO-klart innhold" />
          </div>

          <a
            href={`mailto:${company.email}?subject=Nettside`}
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Kom i gang med din nye nettside
          </a>
        </div>

        <div className="space-y-4">
          {[
            {
              heading: "Flere henvendelser",
              text: "Vi lager nettsider med klare budskap, tydelige knapper og en struktur som leder kunden mot kontakt. Målet er ikke bare trafikk, men relevante henvendelser.",
            },
            {
              heading: "Kunden blir værende",
              text: "God flyt, lesbar tekst, rask lastetid og mobilvennlig design gjør det enklere for besøkende å forstå hvem du er og hvorfor de bør velge deg.",
            },
            {
              heading: "Profesjonelt førsteinntrykk",
              text: "Nettsiden er ofte første møte med bedriften. Vi sørger for at den gir inntrykk av kvalitet, ryddighet og seriøsitet.",
            },
            {
              heading: "Uttrykker det selskapet står for",
              text: "Design, tekst og struktur tilpasses bedriftens identitet, tjenester og målgruppe, slik at nettsiden oppleves ekte og relevant.",
            },
          ].map((item) => (
            <article
              key={item.heading}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-black text-white">{item.heading}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebCheck({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-4 shadow-sm ring-1 ring-white/10">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/15 font-black text-brand-orange">✓</span>
      <span className="font-semibold text-white">{text}</span>
    </div>
  )
}

function WebIncludes() {
  const items = [
    { icon: "🎨", title: "Skreddersydd design", text: "Unikt uttrykk som passer din bedrift, bransje og målgruppe." },
    { icon: "📱", title: "Mobiloptimalisert", text: "Fungerer perfekt på alle skjermstørrelser – telefon, nettbrett og PC." },
    { icon: "⚡", title: "Rask og ryddig", text: "Optimalisert for rask lastetid slik at kunden ikke forlater siden." },
    { icon: "📞", title: "Kontaktpunkter", text: "Tydelige knapper, skjemaer og lenker som gjør det lett å ta kontakt." },
    { icon: "🔍", title: "SEO-klart", text: "Strukturert innhold som gjør det enklere å bli funnet på Google." },
    { icon: "✍️", title: "Innhold og tekst", text: "Vi hjelper med tekster som forklarer hva du leverer på en tydelig måte." },
  ]

  return (
    <section id="hva-vi-leverer" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Hva er inkludert</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Alt du trenger for en nettside som faktisk fungerer.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            En god nettside er mer enn design. Den skal forklare hva bedriften gjør, bygge tillit og gjøre det enkelt for kunden å ta neste steg.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-slate-900"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-300/15 text-3xl ring-1 ring-cyan-300/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebProcess() {
  return (
    <section id="prosess" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Slik jobber vi</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Fra første prat til publisert nettside.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ProcessStep
            number="01"
            title="Kartlegging"
            text="Vi finner ut hva bedriften din trenger, hvem kundene dine er og hva nettsiden skal oppnå."
          />
          <ProcessStep
            number="02"
            title="Design og bygging"
            text="Vi designer og bygger nettsiden med tydelig budskap, mobiloptimalisert layout og gode kontaktpunkter."
          />
          <ProcessStep
            number="03"
            title="Publisering og støtte"
            text="Vi publiserer siden og er tilgjengelig for endringer, oppdateringer og videreutvikling."
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow transition duration-300 hover:-translate-y-1">
      <p className="text-6xl font-black text-cyan-300/40">{number}</p>
      <h3 className="mt-8 text-2xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </div>
  )
}

function WebPricing() {
  return (
    <section id="pakker" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Pakker</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Velg pakken som passer din bedrift.</h2>
          </div>
          <a href="/priser" className="shrink-0 text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">
            Se full prisoversikt →
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <PriceCard
            title="Enkel nettside"
            price="Fra 9 000 kr"
            highlight="Kom i gang raskt"
            items={[
              "Én til tre sider",
              "Mobiloptimalisert",
              "Kontaktskjema",
              "Publiseringsklar",
            ]}
          />
          <PriceCard
            title="Profesjonell nettside"
            price="Fra 15 000 kr"
            highlight="Mest populær"
            items={[
              "Opptil fem sider",
              "Skreddersydd design",
              "Tydelige CTA-er",
              "SEO-klart innhold",
              "Mobiloptimalisert",
            ]}
            featured
          />
          <PriceCard
            title="Nettside + vedlikehold"
            price="Fra 499 kr / mnd"
            highlight="Fast støtte"
            items={[
              "Alt i Profesjonell",
              "Månedlige oppdateringer",
              "Innholdsendringer",
              "Prioritert support",
            ]}
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="/priser"
            className="inline-flex rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            Se detaljert prisoversikt
          </a>
        </div>
      </div>
    </section>
  )
}

function PriceCard({ title, price, highlight, items, featured }) {
  return (
    <div
      className={`relative rounded-[2rem] p-8 shadow-glow ring-1 ${
        featured
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ring-white/10'
          : 'bg-slate-900/90 text-slate-100 ring-white/10'
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-semibold text-white">
          Populær
        </span>
      )}
      <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${featured ? 'text-orange-200' : 'text-cyan-300'}`}>
        {highlight}
      </p>
      <h3 className="mt-4 text-3xl font-black">{title}</h3>
      <p className={`mt-5 text-3xl font-black ${featured ? 'text-orange-200' : 'text-white'}`}>{price}</p>
      <ul className={`mt-8 space-y-4 ${featured ? 'text-slate-300' : 'text-slate-400'}`}>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <a
        href={`mailto:${company.email}?subject=Nettside`}
        className={`mt-8 block rounded-full px-6 py-4 text-center font-semibold transition duration-300 hover:-translate-y-1 ${
          featured
            ? 'bg-brand-orange text-white hover:bg-[#fb923c]'
            : 'bg-slate-800 text-white hover:bg-slate-700'
        }`}
      >
        Kontakt oss
      </a>
    </div>
  )
}

function WebCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] py-24 text-white"
    >
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Klar for en nettside som jobber for deg?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/85 leading-8">
          Ta kontakt for en uforpliktende prat om din nye nettside. Vi finner ut hva som passer best for din bedrift.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${company.email}?subject=Nettside`}
            className="rounded-full bg-slate-950 px-8 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
          >
            Send e-post
          </a>
          <a
            href={`tel:${company.phone}`}
            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            Ring 905 91 820
          </a>
        </div>
      </div>
    </section>
  )
}
