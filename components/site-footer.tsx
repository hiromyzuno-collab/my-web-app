import { BrandLogo } from './brand-logo'
import { IS_COMPETITION_PREVIEW, PREVIEW_NOTICE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-gold/30 bg-paper-deep/80 py-6 text-brown-deep sm:py-7">
      <div className="mx-auto max-w-[1120px] px-5 text-center sm:px-7 lg:px-8">
        <BrandLogo className="justify-center" markSize={38} />
        <nav aria-label="フッターナビゲーション" className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 font-sans text-xs text-brown/80 sm:gap-x-6 sm:text-sm">
          <a href="#" className="transition-colors hover:text-clay">特定商取引法に基づく表記</a>
          <span aria-hidden="true" className="hidden text-gold/60 sm:inline">｜</span>
          <a href="#" className="transition-colors hover:text-clay">プライバシーポリシー</a>
          <span aria-hidden="true" className="hidden text-gold/60 sm:inline">｜</span>
          <a href="#" className="transition-colors hover:text-clay">お問い合わせ</a>
        </nav>
        <div className="mx-auto mt-4 max-w-[820px] border-t border-gold/25 pt-4 font-sans text-xs leading-6 text-brown/70">
          <p>© 2026 AKETENO Inc.</p>
          {IS_COMPETITION_PREVIEW && <p className="mt-2">{PREVIEW_NOTICE}</p>}
        </div>
      </div>
    </footer>
  )
}
