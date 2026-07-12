import Image from 'next/image'
import { LineCta } from './line-cta'
import { Reveal } from './reveal'

/**
 * ヒーロー。
 * - バッジ: 薬膳.png（テキスト・葉飾りまで完成済みの1枚絵）をそのまま使用。
 *   大幅に大型化し、ヒーロー写真の枠を突き破って下のセクション(お悩み)に
 *   意図的にオーバーラップさせる「刻印・スタンプ」的な見せ方に変更。
 *   これを実現するため、写真クロップ用のoverflow-hiddenをバッジの外側に出し、
 *   バッジはセクション直下の非クリップ領域に配置(z-30でお悩みセクションより前面)。
 * - CTA/見出し/なじませ処理は従来どおり。
 */
function IslandBadge() {
  // サイズ調整: 女性の顔とほぼ同じ大きさ程度まで縮小。突き破り演出は控えめに(-bottom-6〜10)。
  return (
    <div
      className="absolute -bottom-6 right-2 z-30 w-[108px] sm:-bottom-8 sm:right-4 sm:w-[130px] lg:-bottom-10 lg:right-7 lg:w-[168px]"
      style={{ aspectRatio: 1928 / 2660 }}
    >
      <Image src="/images/retro/badge-final.png" alt="糸島発、自然素材の薬膳味噌" fill sizes="168px" className="object-contain" priority />
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative border-b border-gold/20 bg-paper">
      <div className="relative mx-auto min-h-[660px] max-w-[1180px] overflow-hidden sm:min-h-[560px] lg:min-h-[470px] xl:min-h-[490px]">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[74%] lg:w-[68%]">
          <Image
            src="/images/hero-woman.jpg"
            alt="糸島の緑を眺めながら、味噌汁を両手で持って微笑む女性"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1180px) 74vw, 800px"
            className="object-cover object-[78%_22%] sm:object-[64%_30%] lg:object-[62%_28%]"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,236,216,0.97)_0%,rgba(244,236,216,0.92)_36%,rgba(244,236,216,0.62)_55%,rgba(244,236,216,0.08)_78%,transparent_100%)] sm:bg-[linear-gradient(90deg,rgba(244,236,216,1)_0%,rgba(244,236,216,0.99)_41%,rgba(244,236,216,0.68)_55%,rgba(244,236,216,0.04)_73%,transparent_100%)] lg:bg-[linear-gradient(90deg,rgba(244,236,216,1)_0%,rgba(244,236,216,0.99)_42%,rgba(244,236,216,0.62)_55%,rgba(244,236,216,0.03)_68%,transparent_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-paper via-paper/55 to-transparent sm:h-36 lg:h-28" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[660px] flex-col justify-between px-5 pb-9 pt-10 sm:min-h-[560px] sm:justify-center sm:px-8 sm:pb-12 sm:pt-8 lg:min-h-[470px] lg:px-10 xl:min-h-[490px] xl:px-14">
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

          <Reveal delay={120}>
            <div className="mx-auto mt-9 w-full max-w-[640px] sm:mt-10 lg:mt-12">
              <LineCta size="lg" />
            </div>
          </Reveal>
        </div>
      </div>

      <IslandBadge />
    </section>
  )
}
