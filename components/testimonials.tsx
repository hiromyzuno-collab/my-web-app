import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Leaf } from './leaf'
import { Reveal } from './reveal'

/**
 * 小さな二重コンマ風の引用符（画像参考: 大きな単一グリフではなく、
 * 細めで小さいカンマ2つを組み合わせた形）。開き用・閉じ用で反転。
 */
function QuoteMark({ close = false, className = '' }: { close?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 40 24" className={className} aria-hidden="true" fill="none">
      <g fill="currentColor" transform={close ? 'translate(40 0) scale(-1 1)' : undefined}>
        <path d="M4 14c0-5 2.6-8.4 7-10.2l1.4 2.6C9.4 8 8 10 8 12.6c1.8.3 3 1.7 3 3.6 0 2.2-1.7 3.8-3.9 3.8C4.7 20 4 17.6 4 14z" />
        <path d="M19 14c0-5 2.6-8.4 7-10.2l1.4 2.6c-3 1.6-4.4 3.6-4.4 6.2 1.8.3 3 1.7 3 3.6 0 2.2-1.7 3.8-3.9 3.8-2.4 0-3.1-2.4-3.1-5.8z" />
      </g>
    </svg>
  )
}

function QuoteCard({ label, lead, body, region, delay }: { label: string; lead: string; body: string; region: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <figure className="quote-card relative h-full rounded-[22px] border-[1.5px] border-gold/55 bg-paper-soft/95 px-6 pb-8 pt-9 sm:px-7">
        <QuoteMark className="absolute -left-1 -top-1 h-6 w-10 text-clay/85" />
        <figcaption className="text-center font-serif text-base font-semibold tracking-[0.14em] text-clay sm:text-lg">{label}</figcaption>
        <blockquote className="mt-5">
          <p className="font-serif text-[16.5px] font-semibold leading-[1.95] text-ink sm:text-[17px]">{lead}</p>
          <p className="mt-4 font-sans text-[14.5px] leading-[2] text-ink-soft sm:text-[15px]">{body}</p>
        </blockquote>
        <div className="mt-6 flex items-end justify-between">
          <p className="flex items-center gap-1.5 font-sans text-xs tracking-wide text-brown/70">
            <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.8} aria-hidden="true" />
            {region}
          </p>
          <Leaf variant="gold-s1" className="h-6 w-6 -rotate-[8deg] opacity-90" />
        </div>
        <QuoteMark close className="absolute -bottom-1 -right-1 h-6 w-10 text-clay/85" />
      </figure>
    </Reveal>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="voices-heading" className="paper-section py-14 sm:py-16 lg:py-[78px] overflow-x-clip">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Leaf variant="cream-a" className="absolute -left-8 bottom-16 hidden h-52 w-40 -rotate-[22deg] lg:block" />
        <Leaf variant="cream-b" flip className="absolute -right-8 bottom-16 hidden h-56 w-40 rotate-[14deg] lg:block" />

        <Reveal className="text-center">
          <div className="relative mx-auto max-w-[720px]">
            <span aria-hidden="true" className="absolute left-0 top-1/2 hidden h-px w-[92px] -translate-y-1/2 bg-brown/45 sm:block" />
            <Leaf variant="gold" className="absolute left-[70px] top-1/2 hidden h-16 w-13 -translate-y-1/2 -rotate-[12deg] sm:block" />
            {/* 「先」丸バッジ: flexで確実に垂直中央揃え(ズレの原因だったtranslate-y手動調整を廃止)。文字はやや大きめ */}
            <h2 id="voices-heading" className="flex items-center justify-center gap-2 font-serif font-semibold tracking-[0.06em] text-brown-deep" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)' }}>
              <span className="grid h-[1.5em] w-[1.5em] shrink-0 place-items-center rounded-full bg-clay font-serif text-[0.85em] leading-none text-paper-soft">先</span>
              <span>行販売のお声</span>
            </h2>
            <Leaf variant="gold" flip className="absolute right-[70px] top-1/2 hidden h-16 w-13 -translate-y-1/2 rotate-[12deg] sm:block" />
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
              {/* 葉の向き修正: green-b(自然な傾きが右向き)を左に、green-a(自然な傾きが左向き)を右に配置し、
                  どちらもアーチの内側(中央上)へ向かって沿うように統一 */}
              <Leaf variant="green-b" className="absolute -left-14 top-10 z-10 h-36 w-20 rotate-[8deg]" />
              <Leaf variant="green-a" className="absolute -right-13 top-10 z-10 h-36 w-18 -rotate-[8deg]" />
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
          <Leaf variant="cream-b" className="absolute -left-8 top-1/2 h-24 w-18 -translate-y-1/2 -rotate-[20deg] sm:-left-16 sm:h-28 sm:w-22" />
          <p className="font-serif text-[16px] font-semibold leading-[2.1] tracking-[0.06em] text-brown-deep sm:text-lg">
            おいしさとやさしさを、毎日の食卓へ。
            <br />
            これからも、皆さまの声を大切にしてまいります。
          </p>
          <Leaf variant="cream-a" flip className="absolute -right-8 top-1/2 h-24 w-18 -translate-y-1/2 rotate-[20deg] sm:-right-16 sm:h-28 sm:w-22" />
        </Reveal>
      </div>
    </section>
  )
}
