import { Leaf, Soup, Sparkles } from 'lucide-react'
import { Leaf as LeafDeco } from './leaf'
import { Reveal } from './reveal'

const reasons = [
  {
    icon: Sparkles,
    title: '食卓になじむ発酵の味わい',
    body: '毎日の料理に取り入れやすい',
    tone: 'clay',
  },
  {
    icon: Soup,
    title: 'いつもの味噌汁で続けられる',
    body: '新しい手順を増やさない',
    tone: 'green',
  },
  {
    icon: Leaf,
    title: '具材に合わせて楽しめる',
    body: '季節や好みに応じてアレンジ',
    tone: 'brown',
  },
]

const toneClass = {
  clay: 'border-clay/50 text-clay-deep',
  green: 'border-green/50 text-green-deep',
  brown: 'border-brown/45 text-brown-deep',
}

export function Reasons() {
  return (
    <section aria-labelledby="reasons-heading" className="paper-section-soft border-y border-gold/15 py-9 sm:py-11 lg:py-12">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Reveal className="text-center">
          <h2
            id="reasons-heading"
            className="relative mx-auto max-w-[36rem] px-8 text-center font-serif font-semibold text-brown-deep"
            style={{ fontSize: 'clamp(1.45rem, 2.8vw, 1.95rem)', lineHeight: 1.45 }}
          >
            <LeafDeco variant="gold-s1" className="absolute left-0 top-1/2 h-7 w-7 -translate-y-1/2 sm:h-8 sm:w-8" />
            毎日続けたくなる、三つの理由
            <LeafDeco variant="gold-s1" flip className="absolute right-0 top-1/2 h-7 w-7 -translate-y-1/2 sm:h-8 sm:w-8" />
          </h2>
        </Reveal>

        <ul className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4 lg:mt-7 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal as="li" key={reason.title} delay={index * 90}>
                <article className={`group flex min-h-[88px] items-center gap-4 rounded-[16px] border bg-paper-soft/88 px-5 py-4 text-left transition-transform duration-500 hover:-translate-y-0.5 md:block md:min-h-[148px] md:px-5 md:py-5 md:text-center ${toneClass[reason.tone as keyof typeof toneClass]}`}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-current/35 bg-paper/80 transition-transform duration-500 group-hover:rotate-[3deg] md:mx-auto md:h-11 md:w-11">
                    <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 md:mt-3">
                    <h3 className="font-serif text-[15px] font-semibold leading-[1.6] sm:text-base md:text-[17px]">{reason.title}</h3>
                    <p className="mt-1 font-sans text-[12px] leading-6 text-ink-soft sm:text-[13px] md:mt-1.5">{reason.body}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
