import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8 lg:py-5">
        <a href="/" className="rounded-xl bg-white px-3 py-1.5">
          <img src="/torungen_web_lowercase.png" alt="Torungen Web" className="h-9 w-auto object-contain sm:h-11" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="/#hva-vi-leverer" className="transition hover:text-white">Hva vi lager</a>
          <a href="/#prosess" className="transition hover:text-white">Prosess</a>
          <a href="/priser" className="transition hover:text-white">Priser</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:ljoestad@gmail.com?subject=Nettside"
            className="hidden rounded-full bg-gradient-to-r from-brand-orange via-[#f97316] to-[#fb923c] px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] md:inline-flex"
          >
            Få tilbud
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
            aria-label="Meny"
          >
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-base font-medium text-slate-300">
            <a href="/#hva-vi-leverer" onClick={() => setOpen(false)} className="transition hover:text-white">Hva vi lager</a>
            <a href="/#prosess" onClick={() => setOpen(false)} className="transition hover:text-white">Prosess</a>
            <a href="/priser" onClick={() => setOpen(false)} className="transition hover:text-white">Priser</a>
          </nav>
          <a
            href="mailto:ljoestad@gmail.com?subject=Nettside"
            className="mt-6 block rounded-full bg-gradient-to-r from-brand-orange via-[#f97316] to-[#fb923c] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Få tilbud
          </a>
        </div>
      )}
    </header>
  )
}
