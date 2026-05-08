const company = {
  email: "ljoestad@gmail.com",
  phone: "90591820",
}

const credentials = [
  {
    icon: "💻",
    title: "30 år i IT-bransjen",
    text: "Siden tidlig på 90-tallet har jeg jobbet som konsulent, leder og prosjektleder i IT. Fra tidlige nettsider og intranett til moderne digitale flater – jeg har sett bransjen utvikle seg fra innsiden.",
  },
  {
    icon: "📊",
    title: "Sertifisert i digital markedsføring",
    text: "Formell sertifisering innen digital markedsføring gir deg trygghet for at nettsiden ikke bare ser bra ut, men faktisk er bygget for å nå kundene dine.",
  },
  {
    icon: "🗂️",
    title: "Sertifisert prosjektleder",
    text: "Prosjektlederkompetansen sikrer at arbeidet skjer strukturert, til avtalt tid og pris – uten unødvendige overraskelser underveis.",
  },
  {
    icon: "🤖",
    title: "KI og moderne produksjon",
    text: "Nye produksjonsmetoder med digitale språkmodeller gjør at jeg kan levere bedre nettsider raskere og til lavere kostnader – uten at det går på bekostning av kvalitet.",
  },
]

export default function OmOss() {
  return (
    <>
      <OmOssHero />
      <OmOssStory />
      <OmOssCredentials />
      <OmOssPhilosophy />
      <OmOssCTA />
    </>
  )
}

function OmOssHero() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
        >
          ← Tilbake til forsiden
        </a>

        <div className="mt-10 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Om Torungen Web
            </div>

            <h1 className="text-4xl font-black tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              30 år med IT og markedsføring. Nå lager jeg nettsider som jobber for deg.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Torungen Web er et én-til-én-samarbeid. Ingen mellomledd, ingen storbypriser – bare solid erfaring, god kommunikasjon og en nettside du er stolt av.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${company.email}?subject=Nettside`}
                className="inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-brand-orange px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-105"
              >
                Ta kontakt
              </a>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Ring 905 91 820
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/20 to-brand-orange/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
              <img
                src="/B0002919BW.jpg"
                alt="Torungen Web – Morten Ljøstad"
                className="h-[400px] w-full object-cover object-top sm:h-[480px] lg:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OmOssStory() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Bakgrunn</p>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">Erfaring fra der det teller.</h2>

        <div className="mt-8 space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          <p>
            Jeg har jobbet i IT-bransjen siden tidlig på 90-tallet – som konsulent, leder og prosjektleder for virksomheter av ulik størrelse og kompleksitet. Den erfaringen tar jeg med meg inn i hvert eneste nettside-prosjekt jeg leverer.
          </p>
          <p>
            Med sertifisering innen digital markedsføring og prosjektledelse vet jeg ikke bare hvordan en god nettside ser ut – jeg vet hva som skal til for å levere den i tide, til rett pris og med et resultat som faktisk fungerer for bedriften din.
          </p>
          <p>
            Jeg brenner for digitale flater og effektive verktøy. Det betyr at jeg alltid ser etter smarte løsninger fremfor å bruke unødvendig tid eller penger. Du skal få mer for pengene dine – ikke mer kompleksitet.
          </p>
        </div>
      </div>
    </section>
  )
}

function OmOssCredentials() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Kompetanse</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Det jeg bringer til bordet.</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition duration-300 hover:-translate-y-1 lg:p-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-300/15 text-2xl ring-1 ring-cyan-300/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OmOssPhilosophy() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 p-8 shadow-glow lg:p-10">
            <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">KI og kvalitet</p>
            <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
              Bedre nettsider til lavere kostnader – takket være KI.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Nye og oppdaterte produksjonsmetoder ved hjelp av digitale språkmodeller (KI) åpner for muligheter som ikke fantes for få år siden. Jeg bruker disse verktøyene aktivt – ikke for å kutte hjørner, men for å levere mer gjennomarbeidede nettsider raskere og til en pris som er rettferdig for deg.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Det betyr at du som småbedrift eller organisasjon kan få en nettside på profesjonelt nivå – uten å betale storstudiopris.
            </p>
          </div>

          <div className="rounded-[2rem] border border-brand-orange/20 bg-slate-900/80 p-8 shadow-glow lg:p-10">
            <p className="text-sm font-semibold tracking-[0.35em] text-brand-orange">Løftet mitt til deg</p>
            <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
              En nettside du er stolt av.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Jeg er opptatt av at du får levert en nettside du er stolt av – en som forteller hvem din bedrift eller organisasjon er, hva dere tilbyr og hvorfor kunden bør velge dere.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Det er ikke bare pikslene som teller. Det er fortellingen bak dem. Og den historien kjenner du best – jobben min er å hjelpe deg å fortelle den på en måte som treffer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OmOssCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          La oss lage noe du er stolt av.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/85 leading-7 sm:text-lg sm:leading-8">
          Ta kontakt for en uforpliktende prat. Jeg hjelper deg å finne den rette løsningen for din bedrift.
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
