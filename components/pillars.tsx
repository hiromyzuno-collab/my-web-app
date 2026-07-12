import Image from 'next/image'
import { Leaf } from './leaf'
import { LeafMotif } from './leaf-motif'
import { Reveal } from './reveal'

/**
 * 三本柱（Q7）。
 * - 枠: BaseRETRO準拠のドーム型（天面が丸く、底辺が直線）＋底辺下に植物スワッグ（LeafMotif、大型化）。
 * - 写真: ろみ生成の高解像度版と差し替え予定。現在は旧素材をプレースホルダとして使用。
 *   差し替え先パス: /images/retro-hd/fermentation.png ほか（生成プロンプト.md 参照）
 * - 冒頭に接続文「そのお悩みに、やさしい答えを。」（Q6B とのブリッジ）。
 */
const pillars = [
  {
    img: '/images/pillar-fermentation.png', // → 生成後: 味噌ペースト高解像度版
    alt: '木の器に盛られた、金色に熟成した発酵味噌',
    title: '発酵のチカラ',
    body: '素材の旨みを引き出し、食卓になじむ味わいへ。',
    titleClass: 'text-clay-deep',
  },
  {
    img: '/images/pillar-mucuna.png', // → 生成後: ざるに盛った緑のムクナ豆
    alt: 'ざるに盛られた、淡い緑色のムクナ豆',
    title: 'ムクナ豆の個性',
    body: '昔から食べ継がれてきた豆を、毎日の味噌汁へ。',
    titleClass: 'text-green-deep',
  },
  {
    img: '/images/pillar-itoshima.png', // → 生成後: 海と山の糸島風景
    alt: '海と緑の山にかこまれた糸島の風景',
    title: '糸島の風景',
    body: '海と山に囲まれた土地の物語を、一杯に込めて。',
    titleClass: 'text-clay-deep',
  },
]

export function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="paper-section py-14 sm:py-16 lg:py-[76px] overflow-x-clip">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Leaf variant="gold" className="absolute -left-1 top-0 h-16 w-12 -rotate-[18deg] opacity-85 sm:h-20 sm:w-16 lg:-left-6" />
        <Leaf variant="gold" flip className="absolute -right-1 top-0 h-16 w-12 rotate-[18deg] opacity-85 sm:h-20 sm:w-16 lg:-right-6" />

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

        <ul className="mt-11 grid gap-12 sm:mt-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 110} className="group relative flex flex-col items-center text-center">
              <div className="relative h-[224px] w-[224px] sm:h-[234px] sm:w-[234px] lg:h-[248px] lg:w-[248px]">
                {/* ドーム型（天面が半円、底辺が直線）: BaseRETROの窓型 */}
                <div className="relative h-full w-full overflow-hidden rounded-[50%_50%_4%_4%/44%_44%_4%_4%] border border-gold/35 bg-paper-soft shadow-[0_5px_18px_rgba(91,61,30,0.09)] transition-transform duration-500 group-hover:-translate-y-1">
                  <Image src={pillar.img} alt={pillar.alt} fill sizes="(max-width: 768px) 234px, 248px" className="object-cover transition-transform duration-700 group-hover:scale-[1.018]" />
                </div>
                {/* 底辺下の植物スワッグ（大型化: 190x66） */}
                <LeafMotif className="pointer-events-none absolute -bottom-[25px] left-1/2 z-10 h-[66px] w-[190px] -translate-x-1/2" />
              </div>
              <h3 className={`mt-3 font-serif text-xl font-semibold sm:text-[22px] ${pillar.titleClass}`}>{pillar.title}</h3>
              <p className="mt-2 max-w-[16.5rem] font-sans text-[15px] leading-[1.85] text-ink-soft sm:text-base">{pillar.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
