const company = {
  email: "ljoestad@gmail.com",
  phone: "90591820",
}

const packages = [
  {
    title: "Enkel nettside",
    price: "5 990 kr",
    highlight: "Kom i gang raskt",
    description: "For deg som trenger en ryddig og profesjonell tilstedeværelse på nett uten store investeringer.",
    items: [
      "Én til tre sider",
      "Mobiloptimalisert design",
      "Kontaktskjema",
      "Kontaktknapper (e-post, telefon)",
      "Tilpasset domene",
      "Publiseringsklar",
    ],
    featured: false,
  },
  {
    title: "Profesjonell nettside",
    price: "9 990 kr",
    highlight: "Mest populær",
    description: "Full nettside med skreddersydd design, tydelig budskap og innhold som bygger tillit og gir henvendelser.",
    items: [
      "Opptil fem sider",
      "Skreddersydd design",
      "Tydelige CTA-er på alle sider",
      "SEO-klart innhold",
      "Mobiloptimalisert for alle skjermer",
      "Bilder og bildeoptimalisering",
      "Kontaktskjema",
      "Google Maps-integrasjon",
      "Tilpasset domene",
      "Publiseringsklar",
    ],
    featured: true,
  },
  {
    title: "Nettside Drift",
    price: "Fra 499 kr / mnd",
    highlight: "Fast IT-partner",
    description: "Vi passer på nettsiden din og bistår med endringer og rapportering.",
    items: [
      "Alt i Profesjonell-pakken",
      "Månedlige innholdsoppdateringer",
      "Teknisk vedlikehold",
      "Sikkerhetsoppdateringer",
      "Tekstendringer og bildebytte",
      "Prioritert support",
      "Rapport på trafikk og bruk",
    ],
    featured: false,
  },
]

const alwaysIncluded = [
  { icon: "📱", text: "Mobiloptimalisert – fungerer på telefon, nettbrett og PC" },
  { icon: "⚡", text: "Rask lastetid – optimalisert for at kunden ikke forlater siden" },
  { icon: "🔒", text: "HTTPS og sikkerhetssertifikat inkludert" },
  { icon: "🎨", text: "Design tilpasset bedriftens farger og identitet" },
  { icon: "📞", text: "Kontaktpunkter som gjør det lett å ta kontakt" },
  { icon: "🔍", text: "SEO-grunnstruktur for bedre synlighet på Google" },
]

const faq = [
  {
    q: "Hvor lang tid tar det å lage en nettside?",
    a: "En enkel nettside er vanligvis klar på 1–2 uker. En profesjonell nettside tar typisk 2–4 uker avhengig av innhold og tilbakemeldinger.",
  },
  {
    q: "Trenger jeg eget domene?",
    a: "Vi hjelper deg med å registrere et domene om du ikke har et fra før, eller kobler til et du allerede eier. Domene- og hostingkostnader faktureres separat.",
  },
  {
    q: "Kan jeg oppdatere innholdet selv etterpå?",
    a: "Ja, vi kan sette opp et enkelt CMS (innholdssystem) om du ønsker det. Alternativt tar vi oss av endringene for deg med vedlikeholdspakken.",
  },
  {
    q: "Hva koster hosting og domene?",
    a: "Hosting koster typisk 500–1 000 kr/år og domene 100–200 kr/år. Vi anbefaler gode og rimelige løsninger tilpasset behovet ditt.",
  },
  {
    q: "Hva om jeg vil ha flere sider enn pakken inneholder?",
    a: "Ekstra sider prises per side. Ta kontakt så gir vi et tilpasset tilbud.",
  },
]

export default function WebPriser() {
  return (
    <>
      <PriserHero />
      <PakkerSection />
      <AlwaysIncluded />
      <ProsessSection />
      <FaqSection />
      <PriserCTA />
    </>
  )
}

function PriserHero() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
        >
          ← Tilbake til forsiden
        </a>

        <div className="mt-12 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Priser og pakker
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Enkle priser. Ingen skjulte kostnader.
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-300 sm:text-xl">
            Vi tilbyr faste pakkepriser slik at du vet nøyaktig hva du betaler. Ingen timepris, ingen overraskelser.
          </p>
        </div>
      </div>
    </section>
  )
}

function PakkerSection() {
  return (
    <section id="pakker" className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PackageCard({ title, price, highlight, description, items, featured }) {
  return (
    <div
      className={`relative flex flex-col rounded-[2rem] p-8 shadow-glow ring-1 ${
        featured
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ring-white/20'
          : 'bg-slate-900/90 ring-white/10'
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-semibold text-white">
          Populær
        </span>
      )}

      <div>
        <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${featured ? 'text-orange-200' : 'text-cyan-300'}`}>
          {highlight}
        </p>
        <h2 className="mt-4 text-3xl font-black text-white">{title}</h2>
        <p className={`mt-5 text-4xl font-black ${featured ? 'text-orange-200' : 'text-white'}`}>{price}</p>
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-300">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${company.email}?subject=${encodeURIComponent(title)}`}
        className={`mt-10 block rounded-full px-6 py-4 text-center font-semibold transition duration-300 hover:-translate-y-1 ${
          featured
            ? 'bg-brand-orange text-white hover:bg-[#fb923c]'
            : 'bg-slate-800 text-white hover:bg-slate-700'
        }`}
      >
        Kom i gang
      </a>
    </div>
  )
}

function AlwaysIncluded() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-glow">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">I alle pakker</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Alltid inkludert – uansett pakke.</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alwaysIncluded.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <p className="leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProsessSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Slik foregår det</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Fra ja til publisert – steg for steg.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { number: "01", title: "Første prat", text: "Vi snakker om bedriften, målgruppen og hva nettsiden skal oppnå." },
            { number: "02", title: "Tilbud", text: "Du får et skriftlig tilbud med fast pris og leveringstid. Ingen overraskelser." },
            { number: "03", title: "Design og bygging", text: "Vi lager nettsiden og involverer deg underveis for tilbakemeldinger." },
            { number: "04", title: "Publisering", text: "Vi publiserer siden og gjør deg trygg på innholdet før lansering." },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow transition duration-300 hover:-translate-y-1"
            >
              <p className="text-5xl font-black text-cyan-300/40">{step.number}</p>
              <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Vanlige spørsmål</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Spørsmål og svar.</h2>
        </div>

        <div className="mt-14 space-y-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow"
            >
              <h3 className="text-xl font-black text-white">{item.q}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PriserCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] py-24 text-white">
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Usikker på hvilken pakke som passer?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/85 leading-8">
          Ta kontakt for en uforpliktende prat. Vi hjelper deg å finne riktig løsning for din bedrift og budsjett.
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
