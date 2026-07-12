import Image from 'next/image'
import { LineCta } from './line-cta'
import { Reveal } from './reveal'

/**
 * ヒーロー。
 * - バッジ: テキスト焼き込み済みの一枚ロゴPNG（badge-logo.png）。
 *   HTMLテキスト重ねを廃止したため、デバイス・幅によるズレは構造上発生しない。
 *   影＋紙色ハローを画像内に合成済みで、背景写真との境目が馴染む（立体感）。
 * - CTA: ピル型・コンテナ中央寄せ（フィッツの法則: モバイル親指ゾーン中央）。
 * - なじませ: PCは横グラデ維持＋下端の縦フェード追加、モバイルは縦フェード主体（Q4折衷）。
 * - 見出し: 最有力準拠のゆったりバランス（Q5B: 行間1.5）。
 */
function IslandBadge() {
  return (
    <div
      className="absolute bottom-[128px] right-2 z-20 w-[148px] sm:bottom-[132px] sm:right-4 sm:w-[168px] lg:bottom-8 lg:right-7 lg:w-[196px]"
      style={{ aspectRatio: 654 / 595 }}
    >
      <Image src="/images/retro/badge-logo.png" alt="糸島発、自然素材の薬膳味噌" fill sizes="196px" className="object-contain" />
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-gold/20 bg-paper">
      <div className="relative mx-auto min-h-[700px] max-w-[1180px] overflow-hidden sm:min-h-[640px] lg:min-h-[560px] xl:min-h-[580px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[74%] lg:w-[68%]">
          <Image
            src="/images/hero-woman.jpg"
            alt="糸島の緑を眺めながら、味噌汁を両手で持って微笑む女性"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1180px) 74vw, 800px"
            className="object-cover object-[78%_center] sm:object-[64%_42%] lg:object-[62%_40%]"
          />
        </div>

        {/* 横グラデ（PC: テキスト可読性の主担保） */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,236,216,0.97)_0%,rgba(244,236,216,0.92)_36%,rgba(244,236,216,0.62)_55%,rgba(244,236,216,0.08)_78%,transparent_100%)] sm:bg-[linear-gradient(90deg,rgba(244,236,216,1)_0%,rgba(244,236,216,0.99)_41%,rgba(244,236,216,0.68)_55%,rgba(244,236,216,0.04)_73%,transparent_100%)] lg:bg-[linear-gradient(90deg,rgba(244,236,216,1)_0%,rgba(244,236,216,0.99)_42%,rgba(244,236,216,0.62)_55%,rgba(244,236,216,0.03)_68%,transparent_100%)]" aria-hidden="true" />
        {/* 縦フェード（最有力式: 下のセクションへ溶け込む。モバイルは特に強め） */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-paper via-paper/55 to-transparent sm:h-36 lg:h-28" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[700px] flex-col justify-between px-5 pb-9 pt-10 sm:min-h-[640px] sm:justify-center sm:px-8 sm:pb-12 sm:pt-8 lg:min-h-[560px] lg:px-10 xl:min-h-[580px] xl:px-14">
          <Reveal>
            <div className="w-full max-w-[610px] sm:max-w-[580px]">
              <h1
                id="hero-heading"
                className="font-serif font-semibold tracking-[0.01em] text-brown-deep"
                style={{ fontSize: 'clamp(1.72rem, 4.5vw, 3.75rem)', lineHeight: 1.5 }}
              >
                <span className="block whitespace-nowrap"><span className="text-clay">発酵のチカラ</span>と</span>
                <span className="block whitespace-nowrap"><span className="text-green-deep">ムクナ豆</span>のやさしさを、</span>
                <span className="block whitespace-nowrap"><span className="text-clay">一杯の味噌汁</span>に。</span>
              </h1>

              <p className="mt-7 max-w-[26rem] font-sans text-base leading-[2] text-ink sm:text-[17px]">
                三つの個性が、毎日の一杯を
                <br />
                少し特別にしてくれます。
              </p>
            </div>
          </Reveal>

          {/* CTA: コンテナ中央（バッジと干渉しない下部帯・縦フェード上） */}
          <Reveal delay={120}>
            <div className="mx-auto mt-9 w-full max-w-[640px] sm:mt-10 lg:mt-12">
              <LineCta size="lg" />
            </div>
          </Reveal>
        </div>

        <IslandBadge />
      </div>
    </section>
  )
}
