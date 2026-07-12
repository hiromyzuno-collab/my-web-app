import { ChevronRight } from 'lucide-react'
import { LINE_ADD_URL } from '@/lib/site'

function LineGlyph({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-paper ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 38" className="h-[62%] w-[62%]" fill="none">
        <path d="M20 2C9.5 2 1 8.9 1 17.4c0 7.6 6.7 14 15.8 15.2.6.1 1.4.4 1.6.9.2.5.1 1.2.1 1.7l-.3 1.6c-.1.5-.4 1.9 1.7 1 2-.8 11-6.5 15-11.1 2.8-3 4.1-6.1 4.1-9.3C40 8.9 31.5 2 20 2Z" className="fill-line" />
        <text x="20" y="21.2" textAnchor="middle" className="fill-paper text-[9px] font-bold">LINE</text>
      </svg>
    </span>
  )
}

type LineCtaProps = {
  size?: 'lg' | 'md'
  className?: string
}

export function LineCta({ size = 'lg', className = '' }: LineCtaProps) {
  const isLg = size === 'lg'
  return (
    <a
      href={LINE_ADD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex w-full items-center gap-3 rounded-full border border-cta-deep/25 bg-cta text-cta-foreground shadow-[0_3px_0_0_var(--color-cta-deep),0_8px_18px_rgba(50,81,36,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_0_0_var(--color-cta-deep),0_10px_22px_rgba(50,81,36,0.14)] active:translate-y-[1px] ${
        isLg ? 'min-h-[72px] px-6 py-3 sm:min-h-[78px] sm:px-9' : 'min-h-12 px-5 py-2.5'
      } ${className}`}
    >
      <LineGlyph className={isLg ? 'h-11 w-11 sm:h-12 sm:w-12' : 'h-9 w-9'} />
      <span className="flex min-w-0 flex-1 flex-col items-center text-center">
        <span className={`font-sans font-medium tracking-[0.04em] text-cta-foreground/90 ${isLg ? 'text-[11px] sm:text-xs' : 'text-[10px]'}`}>
          ＼ 登録無料・約30秒で完了 ／
        </span>
        <span className={`font-serif font-semibold tracking-[0.035em] text-gold-soft ${isLg ? 'mt-0.5 text-[17px] sm:text-xl' : 'text-sm'}`}>
          限定レシピ5選を無料で受け取る
        </span>
      </span>
      <ChevronRight className={`${isLg ? 'h-6 w-6' : 'h-5 w-5'} shrink-0 transition-transform duration-300 group-hover:translate-x-1`} aria-hidden="true" />
    </a>
  )
}
