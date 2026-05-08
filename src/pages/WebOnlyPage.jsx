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
    <section id="top" className="relative isolate overflow-hidden py-14 sm:py-20 lg:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Profesjonelle nettsider til fast pris
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight leading-tight sm:text-5xl lg:text-7xl">
            Nettsider som gir deg flere kunder – ikke bare pynt.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg lg:mt-7 lg:text-xl lg:leading-8">
            Vi lager moderne nettsider med tydelig budskap, mobiloptimalisert design og kontaktpunkter som faktisk konverterer. Enkelt, raskt og med fast pris.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={`mailto:${company.email}?subject=Nettside`}
              className="inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-brand-orange px-7 py-4 text-center font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-105"
            >
              Få din nye nettside
            </a>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Ring 905 91 820
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <HeroStat icon="📱" label="Mobiloptimalisert" />
            <HeroStat icon="⚡" label="Rask levering" />
            <HeroStat icon="✓" label="Fast pris" />
          </div>
        </div>

        <div className="relative mt-4 md:mt-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/25 to-brand-orange/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img
              src="/Webside%20advokat.png"
              alt="Profesjonell webdesign"
              className="h-[320px] w-full object-cover brightness-110 contrast-105 sm:h-[420px] lg:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/15 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroStat({ icon, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-3 py-4 text-center backdrop-blur-sm sm:px-5 sm:py-6">
      <p className="text-lg font-black text-cyan-200 sm:text-xl">{icon}</p>
      <p className="mt-1 text-[10px] tracking-[0.2em] text-slate-400 sm:mt-2 sm:text-xs sm:tracking-[0.3em]">{label}</p>
    </div>
  )
}

function WebTrustStrip() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-5 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 text-center text-xs font-semibold tracking-[0.15em] text-slate-300 sm:text-sm sm:tracking-[0.28em] md:grid-cols-4 lg:px-8">
        <p>✓ Mobiloptimalisert design</p>
        <p>✓ Tydelige CTA-er</p>
        <p>✓ Profesjonelt uttrykk</p>
        <p>✓ Fast pris</p>
      </div>
    </section>
  )
}

function WebDesignFeature() {
  return (
    <section className="bg-slate-950 py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Webdesign</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            En nettside skal ikke bare være pen. Den skal skaffe henvendelser.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
            Vi bygger nettsider med tydelig budskap, god mobilopplevelse og konkrete kontaktpunkter. Perfekt for lokale bedrifter som vil se mer seriøse ut og få flere kunder.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <WebCheck text="Mobiloptimalisert" />
            <WebCheck text="Tydelig CTA" />
            <WebCheck text="Rask lastetid" />
            <WebCheck text="SEO-klart innhold" />
          </div>

          <a
            href={`mailto:${company.email}?subject=Nettside`}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Kom i gang med din nye nettside
          </a>
        </div>

        <div className="space-y-4">
          {[
            {
              heading: "Flere henvendelser",
              text: "Vi lager nettsider med klare budskap, tydelige knapper og en struktur som leder kunden mot kontakt.",
            },
            {
              heading: "Kunden blir værende",
              text: "God flyt, lesbar tekst, rask lastetid og mobilvennlig design gjør det enklere for besøkende å forstå hvem du er.",
            },
            {
              heading: "Profesjonelt førsteinntrykk",
              text: "Nettsiden er ofte første møte med bedriften. Vi sørger for at den gir inntrykk av kvalitet, ryddighet og seriøsitet.",
            },
            {
              heading: "Uttrykker det selskapet står for",
              text: "Design, tekst og struktur tilpasses bedriftens identitet, tjenester og målgruppe.",
            },
          ].map((item) => (
            <article
              key={item.heading}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 sm:p-7"
            >
              <h3 className="text-lg font-black text-white sm:text-xl">{item.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebCheck({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-3 shadow-sm ring-1 ring-white/10 sm:p-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 font-black text-brand-orange sm:h-9 sm:w-9">✓</span>
      <span className="text-sm font-semibold text-white sm:text-base">{text}</span>
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
    <section id="hva-vi-leverer" className="relative py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Hva er inkludert</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Alt du trenger for en nettside som faktisk fungerer.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">
            En god nettside er mer enn design. Den skal forklare hva bedriften gjør, bygge tillit og gjøre det enkelt for kunden å ta neste steg.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-slate-900 lg:p-8"
            >
              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-3xl bg-cyan-300/15 text-2xl ring-1 ring-cyan-300/20 lg:h-16 lg:w-16 lg:text-3xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-white sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebProcess() {
  return (
    <section id="prosess" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Slik jobber vi</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">Fra første prat til publisert nettside.</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
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
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition duration-300 hover:-translate-y-1 lg:p-8">
      <p className="text-5xl font-black text-cyan-300/40">{number}</p>
      <h3 className="mt-6 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{text}</p>
    </div>
  )
}

function WebPricing() {
  return (
    <section id="pakker" className="bg-slate-950 py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Pakker</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">Velg pakken som passer din bedrift.</h2>
          </div>
          <a href="/priser" className="shrink-0 text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">
            Se full prisoversikt →
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <PriceCard
            title="Enkel nettside"
            price="5 990 kr"
            highlight="Kom i gang raskt"
            items={["Én til tre sider", "Mobiloptimalisert", "Kontaktskjema", "Publiseringsklar"]}
          />
          <PriceCard
            title="Profesjonell nettside"
            price="9 990 kr"
            highlight="Mest populær"
            items={["Opptil fem sider", "Skreddersydd design", "Tydelige CTA-er", "SEO-klart innhold", "Mobiloptimalisert"]}
            featured
          />
          <PriceCard
            title="Nettside Drift"
            price="Fra 499 kr / mnd"
            highlight="Fast støtte"
            items={["Alt i Profesjonell", "Månedlige oppdateringer", "Sikkerhetsoppdateringer", "Innholdsendringer", "Prioritert support"]}
          />
          <PriceCard
            title="Timepris"
            price="1 290 kr / time"
            highlight="Enkeltoppdrag"
            items={["Ingen bindingstid", "Endringer og oppdateringer", "Feilretting", "Faktureres per time"]}
          />
        </div>

        <div className="mt-8 text-center">
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
      className={`relative flex flex-col rounded-[2rem] p-6 shadow-glow ring-1 lg:p-8 ${
        featured
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ring-white/10'
          : 'bg-slate-900/90 ring-white/10'
      }`}
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white lg:right-6 lg:top-6 lg:px-4 lg:py-1.5">
          Populær
        </span>
      )}
      <p className={`text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm ${featured ? 'text-orange-200' : 'text-cyan-300'}`}>
        {highlight}
      </p>
      <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{title}</h3>
      <p className={`mt-3 text-2xl font-black lg:text-3xl ${featured ? 'text-orange-200' : 'text-white'}`}>{price}</p>
      <ul className={`mt-5 flex-1 space-y-2.5 text-sm ${featured ? 'text-slate-300' : 'text-slate-400'}`}>
        {items.map((item) => <li key={item}>✓ {item}</li>)}
      </ul>
      <a
        href={`mailto:${company.email}?subject=${encodeURIComponent(title)}`}
        className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold transition duration-300 hover:-translate-y-1 ${
          featured ? 'bg-brand-orange text-white hover:bg-[#fb923c]' : 'bg-slate-800 text-white hover:bg-slate-700'
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
      className="relative overflow-hidden bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl">
          Klar for en nettside som jobber for deg?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/85 leading-7 sm:text-lg sm:leading-8">
          Ta kontakt for en uforpliktende prat om din nye nettside. Vi finner ut hva som passer best for din bedrift.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
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
