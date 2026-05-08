export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
        <a href="/" className="rounded-xl bg-white px-3 py-1.5">
          <img src="/torungen_web_horizontal.png" alt="Torungen Web" className="h-12 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="/#hva-vi-leverer" className="transition hover:text-white">Hva vi lager</a>
          <a href="/#prosess" className="transition hover:text-white">Prosess</a>
          <a href="/priser" className="transition hover:text-white">Priser</a>
        </nav>

        <a
          href="mailto:ljoestad@gmail.com?subject=Nettside"
          className="hidden rounded-full bg-gradient-to-r from-brand-orange via-[#f97316] to-[#fb923c] px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] md:inline-flex"
        >
          Få tilbud
        </a>
      </div>
    </header>
  )
}
