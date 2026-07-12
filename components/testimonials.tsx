import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Leaf } from './leaf'
import { Reveal } from './reveal'

/**
 * 先行販売のお声（Q8A: 最有力２準拠のリッチ版）。
 * - 見出し: 先頭一文字「先」をクレイ円に白抜き＋左右に罫線と葉。
 * - 中央: 最有力２から高解像度で抜き直した杯（bowl-hd.png 350x619）を
 *   縦長ドーム窓（CSS角丸）でクリップ。リボン帯＋帯下に小さな葉。
 * - カード: 大きな引用符（左上・右下）、中央見出し、リード文＋本文の二段組、地名ピン。
 * - 締め: 二行メッセージ＋クリーム葉。
 */
function QuoteCard({ label, lead, body, region, delay }: { label: string; lead: string; body: string; region: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <figure className="quote-card relative h-full rounded-[22px] border-[1.5px] border-gold/55 bg-paper-soft/95 px-6 pb-9 pt-11 sm:px-7">
        <span aria-hidden="true" className="absolute left-5 top-2 font-serif text-[64px] leading-none text-clay/90">“</span>
        <figcaption className="text-center font-serif text-base font-semibold tracking-[0.14em] text-clay sm:text-lg">{label}</figcaption>
        <blockquote className="mt-5">
          <p className="font-serif text-[16.5px] font-semibold leading-[1.95] text-ink sm:text-[17px]">{lead}</p>
          <p className="mt-4 font-sans text-[14.5px] leading-[2] text-ink-soft sm:text-[15px]">{body}</p>
        </blockquote>
        <p className="mt-6 flex items-center gap-1.5 font-sans text-xs tracking-wide text-brown/70">
          <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.8} aria-hidden="true" />
          {region}
        </p>
        <span aria-hidden="true" className="absolute bottom-1 right-6 font-serif text-[64px] leading-none text-clay/90">”</span>
      </figure>
    </Reveal>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="voices-heading" className="paper-section py-14 sm:py-16 lg:py-[78px] overflow-x-clip">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Leaf variant="cream-a" className="absolute -left-4 bottom-24 hidden h-36 w-28 -rotate-[24deg] lg:block" />
        <Leaf variant="cream-b" flip className="absolute -right-4 bottom-24 hidden h-40 w-28 rotate-[16deg] lg:block" />

        <Reveal className="text-center">
          <div className="relative mx-auto max-w-[720px]">
            <span aria-hidden="true" className="absolute left-0 top-1/2 hidden h-px w-[92px] -translate-y-1/2 bg-brown/45 sm:block" />
            <Leaf variant="gold" className="absolute left-[86px] top-1/2 hidden h-11 w-9 -translate-y-1/2 -rotate-[12deg] sm:block" />
            <h2 id="voices-heading" className="font-serif font-semibold tracking-[0.06em] text-brown-deep" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)' }}>
              <span className="mr-1.5 inline-grid h-[1.5em] w-[1.5em] translate-y-[0.18em] place-items-center rounded-full bg-clay align-baseline font-serif text-[0.78em] leading-none text-paper-soft">先</span>
              行販売のお声
            </h2>
            <Leaf variant="gold" flip className="absolute right-[86px] top-1/2 hidden h-11 w-9 -translate-y-1/2 rotate-[12deg] sm:block" />
            <span aria-hidden="true" className="absolute right-0 top-1/2 hidden h-px w-[92px] -translate-y-1/2 bg-brown/45 sm:block" />
          </div>
          <p className="mt-4 font-serif text-[15px] tracking-[0.1em] text-green-deep sm:text-base">実際にお試しいただいた方のお声</p>
        </Reveal>

        <div className="mt-11 grid items-center gap-7 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] lg:gap-8">
          <div className="order-2 lg:order-1">
            <QuoteCard
              label="朝の時間について"
              lead="朝の一杯が、こんなに幸せな気持ちにしてくれるとは思いませんでした。"
              body="お湯を注ぐだけで、ふわっと香る出汁のやさしさにほっとします。忙しい朝でも、心が整って一日を気持ちよくスタートできます。"
              region="福岡市／40代女性"
              delay={70}
            />
          </div>

          <Reveal className="order-1 lg:order-2">
            <figure className="relative mx-auto max-w-[300px]">
              <Leaf variant="green-a" className="absolute -left-11 top-16 z-10 h-28 w-16 -rotate-[10deg]" />
              <Leaf variant="green-b" flip className="absolute -right-10 top-16 z-10 h-28 w-14 rotate-[10deg]" />
              {/* 縦長ドーム窓: 最有力２のアーチ形状をCSS角丸で再現し、高解像度素材をクリップ */}
              <div
                className="relative mx-auto w-[272px] overflow-hidden rounded-[50%_50%_16px_16px/32%_32%_12px_12px] border-[6px] border-[#efe3c6] shadow-[0_10px_26px_rgba(84,55,27,0.16)]"
                style={{ aspectRatio: 350 / 619 }}
              >
                <Image
                  src="/images/retro/bowl-hd.png"
                  alt="湯気の立つ味噌汁と、豆腐・小ねぎを添えた温かな食卓"
                  fill
                  sizes="272px"
                  className="object-cover"
                />
              </div>
              <figcaption className="relative z-10 mx-auto -mt-6 w-[276px]">
                <span className="relative block px-6 py-3 text-center font-serif text-sm font-medium text-brown-deep">
                  <Image src="/images/retro/ribbon.png" alt="" aria-hidden fill sizes="276px" className="-z-10 object-fill" />
                  毎日の食卓に、やさしい一杯を。
                </span>
              </figcaption>
              <Leaf variant="gold-s1" className="mx-auto mt-3 h-6 w-6" />
            </figure>
          </Reveal>

          <div className="order-3">
            <QuoteCard
              label="味わいについて"
              lead="出汁や塩分を控えめにしても、しっかり旨味を感じます。"
              body="やさしい味わいなのに物足りなさがなく、家族みんなで安心していただけるのが嬉しいです。毎日のごはんに欠かせなくなりました。"
              region="東京都／50代女性"
              delay={140}
            />
          </div>
        </div>

        <Reveal className="relative mx-auto mt-12 max-w-[640px] text-center lg:mt-14">
          <Leaf variant="cream-b" className="absolute -left-6 top-1/2 h-16 w-12 -translate-y-1/2 -rotate-[20deg] sm:-left-14 sm:h-20 sm:w-16" />
          <p className="font-serif text-[16px] font-semibold leading-[2.1] tracking-[0.06em] text-brown-deep sm:text-lg">
            おいしさとやさしさを、毎日の食卓へ。
            <br />
            これからも、皆さまの声を大切にしてまいります。
          </p>
          <Leaf variant="cream-a" flip className="absolute -right-6 top-1/2 h-16 w-12 -translate-y-1/2 rotate-[20deg] sm:-right-14 sm:h-20 sm:w-16" />
        </Reveal>
      </div>
    </section>
  )
}
