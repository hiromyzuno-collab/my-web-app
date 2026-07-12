import { ConcernBridge } from '@/components/concern-bridge'
import { FinalCta } from '@/components/final-cta'
import { Hero } from '@/components/hero'
import { LineBenefits } from '@/components/line-benefits'
import { Pillars } from '@/components/pillars'
import { PreviewWatermark } from '@/components/preview-watermark'
import { Reasons } from '@/components/reasons'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StickyCta } from '@/components/sticky-cta'
import { Testimonials } from '@/components/testimonials'

export default function Page() {
  return (
    <>
      <a href="#main-content" className="sr-only z-50 rounded-md bg-paper px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        本文へ移動
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ConcernBridge />
        <Pillars />
        <Reasons />
        <Testimonials />
        <LineBenefits />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
      <PreviewWatermark />
    </>
  )
}
