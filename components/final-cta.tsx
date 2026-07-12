import Image from 'next/image'
import { LineCta } from './line-cta'
import { Reveal } from './reveal'

/**
 * 締めセクション（Q11B: 最有力準拠）。
 * 大きな味噌汁写真を敷いた帯の上に、二段見出し＋ピルCTA。
 * 写真はろみ生成の横長版（/images/retro-hd/closing.jpg）と差し替え予定。
 * 現在は既存の味噌汁写真をプレースホルダとして使用（生成プロンプト.md 参照）。
 */
export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-heading" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/miso-soup.jpg" // → 生成後: /images/retro-hd/closing.jpg
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-[70%_55%]"
        />
        {/* 左→右の紙ウォッシュ（テキスト可読性）＋上下の紙フェード（前後セクションと接続） */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,236,216,0.96)_0%,rgba(244,236,216,0.90)_40%,rgba(244,236,216,0.55)_62%,rgba(244,236,216,0.18)_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-paper to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-paper to-transparent" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-[1120px] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <p className="font-serif text-sm tracking-[0.18em] text-brown/75 sm:text-[15px]">今日の一杯から、未来のわたしへ。</p>
          <h2 id="final-cta-heading" className="mt-4 font-serif font-semibold text-brown-deep" style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3.4rem)', lineHeight: 1.5 }}>
            無理なく続く、
            <br className="sm:hidden" />
            おいしい習慣を。
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <div className="mx-auto mt-9 max-w-[650px] sm:mt-11">
            <LineCta size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
