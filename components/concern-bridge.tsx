import { Check } from 'lucide-react'
import { Leaf } from './leaf'
import { Reveal } from './reveal'

/**
 * お悩みセクション（Q6B: 最有力準拠の軽量スタイル）。
 * カードをやめ、罫線区切りの横並び＋チェック円アイコン。
 * 見出し文言も最有力に合わせて「こんなお悩み、ありませんか？」。
 */
const concerns = [
  '食生活のバランスが\n気になる',
  '毎日の習慣を\nもっとシンプルにしたい',
  'やさしい味で、\nほっとしたい',
]

export function ConcernBridge() {
  return (
    <section aria-labelledby="concern-heading" className="paper-section border-b border-gold/15 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1060px] px-5 sm:px-7 lg:px-8">
        <Reveal className="text-center">
          <h2
            id="concern-heading"
            className="relative mx-auto max-w-[30rem] px-10 font-serif font-semibold tracking-[0.04em] text-brown-deep"
            style={{ fontSize: 'clamp(1.45rem, 3vw, 2rem)', lineHeight: 1.5 }}
          >
            <Leaf variant="gold" className="absolute -left-2 top-1/2 h-14 w-11 -translate-y-1/2 rotate-[10deg] sm:h-16 sm:w-13" />
            こんなお悩み、ありませんか？
            <Leaf variant="gold" flip className="absolute -right-2 top-1/2 h-14 w-11 -translate-y-1/2 -rotate-[10deg] sm:h-16 sm:w-13" />
          </h2>
        </Reveal>

        <ul className="mt-7 grid gap-0 divide-y divide-gold/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-8">
          {concerns.map((text, index) => (
            <Reveal as="li" key={text} delay={index * 90}>
              <div className="flex flex-col items-center gap-2.5 px-4 py-6 text-center sm:flex-row sm:justify-center sm:gap-3.5 sm:py-2 sm:text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-green/55 text-green-deep">
                  <Check className="h-4.5 w-4.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="whitespace-pre-line font-sans text-[15px] font-medium leading-[1.8] text-ink sm:text-base">
                  {text}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
