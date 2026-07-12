'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrandLogo } from './brand-logo'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-gold/25 bg-paper/55 shadow-[0_1px_0_rgba(102,72,39,0.05)] backdrop-blur-lg'
          : 'border-gold/15 bg-paper/40 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[66px] max-w-[1180px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href="#top" aria-label="大地のムクナ トップへ" className="rounded-md">
          <BrandLogo markSize={42} />
        </a>
        <a
          href="#line-benefits"
          className="group inline-flex min-h-10 items-center gap-1 rounded-full border border-green-deep/30 bg-green-deep px-3.5 py-2 font-serif text-xs font-semibold text-paper-soft shadow-[0_2px_8px_rgba(47,96,53,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cta sm:min-h-11 sm:px-4 sm:text-sm"
        >
          <span className="hidden sm:inline">LINE限定特典</span>
          <span className="sm:hidden">特典</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
