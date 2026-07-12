type BrandLogoProps = {
  className?: string
  markSize?: number
  tone?: 'ink' | 'light'
}

function BeanMark({ size, tone }: { size: number; tone: 'ink' | 'light' }) {
  const fg = tone === 'light' ? '#8a5a2d' : '#fff3cf'
  const bg = tone === 'light' ? '#fff8e8' : '#8a5a2d'
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="shrink-0"
    >
      <circle cx="32" cy="32" r="30" fill={bg} />
      <g fill="none" stroke={fg} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1">
        <path d="M18 16c8 2 12 8 14 16 2-8 6-14 14-16" />
        <path d="M17 46c8-2 13-8 15-16 2 8 7 14 15 16" />
        <path d="M18 17c-3 10 1 19 14 29" />
        <path d="M46 17c3 10-1 19-14 29" />
        <path d="M20 21c4 4 7 7 10 12" />
        <path d="M44 21c-4 4-7 7-10 12" />
      </g>
    </svg>
  )
}

export function BrandLogo({ className = '', markSize = 44, tone = 'ink' }: BrandLogoProps) {
  const primary = tone === 'light' ? 'text-paper' : 'text-brown-deep'
  const secondary = tone === 'light' ? 'text-paper/70' : 'text-brown/70'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BeanMark size={markSize} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg font-semibold tracking-wide sm:text-xl ${primary}`}>
          大地のムクナ
        </span>
        <span className={`mt-1 text-[10px] font-medium tracking-[0.28em] ${secondary}`}>
          DAICHI NO MUCUNA
        </span>
      </span>
    </span>
  )
}
