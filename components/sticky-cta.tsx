'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LINE_ADD_URL } from '@/lib/site'

export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    const finalCta = document.getElementById('line-final-cta')
    const footer = document.getElementById('site-footer')
    let heroVisible = true
    let finalVisible = false
    let footerVisible = false
    const update = () => setShow(!heroVisible && !finalVisible && !footerVisible)

    const heroObs = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting
      update()
    }, { threshold: 0, rootMargin: '-45% 0px 0px 0px' })

    const finalObs = new IntersectionObserver(([entry]) => {
      finalVisible = entry.isIntersecting
      update()
    }, { threshold: 0.12 })

    const footerObs = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting
      update()
    }, { threshold: 0.02 })

    if (hero) heroObs.observe(hero)
    if (finalCta) finalObs.observe(finalCta)
    if (footer) footerObs.observe(footer)
    return () => {
      heroObs.disconnect()
      finalObs.disconnect()
      footerObs.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-paper/96 px-3 pb-[calc(env(safe-area-inset-bottom)+.55rem)] pt-2 backdrop-blur-md transition-all duration-300 md:hidden ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`}
      aria-hidden={!show}
    >
      <a
        href={LINE_ADD_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="group flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-cta-deep/20 bg-cta px-4 py-3 text-cta-foreground shadow-[0_2px_0_var(--color-cta-deep)]"
      >
        <span className="font-serif text-[15px] font-semibold text-gold-soft">LINE限定特典を受け取る</span>
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </div>
  )
}
