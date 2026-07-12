import Image from 'next/image'
import { Leaf } from './leaf'
import { Reveal } from './reveal'

/**
 * 三本柱。
 * 新しい高解像度・縁取り済みドーム写真（retro-framed/）を採用。
 * 画像自体に縁取りと下端の装飾線が焼き込み済みのため、CSS側の枠・葉は追加しない。
 * 上部の左右葉飾りは大型化（植物モチーフを盛大に、との指示反映）。
 */
const pillars = [
  {
    img: '/images/retro-framed/fermentation-framed-tight.png',
    alt: '木の器に盛られた、金色に熟成した発酵味噌',
    title: '発酵のチカラ',
    body: '素材の旨みを引き出し、食卓になじむ味わいへ。',
    titleClass: 'text-clay-deep',
  },
  {
    img: '/images/retro-framed/mucuna-framed-tight.png',
    alt: '木の器に盛られた、淡い色合いのムクナ豆',
    title: 'ムクナ豆の個性',
    body: '昔から食べ継がれてきた豆を、毎日の味噌汁へ。',
    titleClass: 'text-green-deep',
  },
  {
    img: '/images/retro-framed/itoshima-framed-tight.png',
    alt: '海と緑の山にかこまれた糸島の風景',
    title: '糸島の風景',
    body: '海と山に囲まれた土地の物語を、一杯に込めて。',
    titleClass: 'text-clay-deep',
  },
]

export function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="paper-section overflow-x-clip py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Leaf variant="cream-b" className="absolute -left-6 -top-4 h-28 w-24 -rotate-[16deg] opacity-95 sm:h-36 sm:w-28 lg:-left-10 lg:h-44 lg:w-36" />
        <Leaf variant="cream-a" flip className="absolute -right-6 -top-4 h-28 w-24 rotate-[16deg] opacity-95 sm:h-36 sm:w-28 lg:-right-10 lg:h-44 lg:w-36" />

        <Reveal className="text-center">
          <p className="font-serif text-[15px] tracking-[0.08em] text-ink-soft sm:text-base">そのお悩みに、やさしい答えを。</p>
          <h2 id="pillars-heading" className="mt-3 font-serif font-semibold text-brown-deep" style={{ fontSize: 'clamp(1.65rem, 3.4vw, 2.35rem)', lineHeight: 1.5 }}>
            <span className="text-clay">発酵</span>
            <span className="mx-2 text-gold sm:mx-3">×</span>
            <span className="text-green-deep">ムクナ豆</span>
            <span className="mx-2 text-gold sm:mx-3">×</span>
            <span className="text-green">糸島の自然</span>
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-8 text-ink-soft sm:text-base">三つの個性が、毎日の一杯を少し特別に。</p>
        </Reveal>

        <ul className="mt-12 grid gap-14 sm:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 110} className="group relative flex flex-col items-center text-center">
              <div className="relative w-[272px] transition-transform duration-500 group-hover:-translate-y-1 sm:w-[300px] lg:w-[330px]" style={{ aspectRatio: 1471 / 1206 }}>
                <Image src={pillar.img} alt={pillar.alt} fill sizes="(max-width: 768px) 300px, 330px" className="object-contain drop-shadow-[0_8px_20px_rgba(91,61,30,0.14)]" />
              </div>
              <h3 className={`mt-2 font-serif text-xl font-semibold sm:text-[22px] ${pillar.titleClass}`}>{pillar.title}</h3>
              <p className="mt-2 max-w-[16.5rem] font-sans text-[15px] leading-[1.85] text-ink-soft sm:text-base">{pillar.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
