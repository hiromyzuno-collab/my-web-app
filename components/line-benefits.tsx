import Image from 'next/image'
import { BookOpen, Check, Mail } from 'lucide-react'
import { Leaf } from './leaf'
import { LineCta } from './line-cta'
import { Reveal } from './reveal'
import { ReturnToTopLink } from './return-to-top-link'

const recipes = [
  { no: '01', title: '豆腐と小ねぎの\n基本味噌汁', image: '/images/miso-soup.jpg', position: '50% 48%' },
  { no: '02', title: '根菜たっぷり\n胡麻味噌汁', image: '/images/pillar-fermentation.png', position: '50% 54%' },
  { no: '03', title: 'きのこと生姜の\n温か味噌汁', image: '/images/product.jpg', position: '68% 45%' },
]

function PhoneMockup({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <figure className="relative mx-auto w-full">
        <div className="relative" style={{ aspectRatio: 474 / 732, filter: 'drop-shadow(0 8px 16px rgba(70, 43, 21, 0.16))' }}>
          <Image
            src="/images/retro/phone-line.png"
            alt="LINEトーク画面のイメージ。友だち追加後に限定レシピ5選が届く様子"
            fill
            sizes="132px"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-2 text-center font-sans text-[9px] leading-4 text-brown/58">画面は提案用イメージです</figcaption>
      </figure>
    )
  }
  return (
    <figure className="relative mx-auto w-[250px] sm:w-[264px] lg:w-[274px]">
      {/* BaseRETRO から抜き出したスマホ素材に、LINEトーク内容を透視合成済み（2倍解像度） */}
      <div className="relative" style={{ aspectRatio: 474 / 732, filter: 'drop-shadow(0 14px 26px rgba(70, 43, 21, 0.16))' }}>
        <Image
          src="/images/retro/phone-line.png"
          alt="LINEトーク画面のイメージ。友だち追加後に限定レシピ5選が届く様子"
          fill
          sizes="274px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-4 text-center font-sans text-[10px] leading-5 text-brown/58">5選のうち一部をご紹介<br />※画面は提案用イメージです</figcaption>
    </figure>
  )
}

function RecipePanel() {
  return (
    <div className="rounded-[18px] border border-gold/30 bg-paper-soft/94 p-5 shadow-[0_5px_18px_rgba(91,61,30,0.055)] sm:p-6">
      <p className="mb-4 font-serif text-sm font-semibold tracking-wide text-clay-deep">限定レシピ5選の一部</p>
      <ul className="space-y-3">
        {recipes.map((recipe) => (
          <li key={recipe.no} className="grid grid-cols-[42px_minmax(0,1fr)_88px] items-center gap-3 border-b border-border/75 pb-3 last:border-0 last:pb-0">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/55 font-serif text-xs font-semibold text-clay-deep">{recipe.no}</span>
            <span className="whitespace-pre-line font-serif text-[15px] font-semibold leading-[1.65] text-brown-deep">{recipe.title}</span>
            <div className="relative h-14 overflow-hidden rounded-lg border border-gold/20">
              <Image src={recipe.image} alt="" fill sizes="88px" className="object-cover" style={{ objectPosition: recipe.position }} aria-hidden="true" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileCompactRecipes() {
  return (
    <ul className="flex-1 space-y-2.5">
      {recipes.map((recipe) => (
        <li key={recipe.no} className="flex items-center gap-2.5 rounded-[13px] border border-gold/30 bg-paper-soft/94 px-2.5 py-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/55 font-serif text-[11px] font-semibold text-clay-deep">{recipe.no}</span>
          <span className="whitespace-pre-line font-serif text-[12.5px] font-semibold leading-[1.4] text-brown-deep">{recipe.title}</span>
        </li>
      ))}
    </ul>
  )
}

function InformationPanel() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:block lg:space-y-3">
      <div className="rounded-[15px] border border-gold/30 bg-paper-soft/94 p-4 lg:p-5">
        <BookOpen className="h-5 w-5 text-gold lg:h-6 lg:w-6" strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-2 font-serif text-sm font-semibold leading-relaxed text-brown-deep lg:mt-3 lg:text-base">暮らしに役立つ<br />発酵コラム</p>
      </div>
      <div className="rounded-[15px] border border-gold/30 bg-paper-soft/94 p-4 lg:p-5">
        <Mail className="h-5 w-5 text-gold lg:h-6 lg:w-6" strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-2 font-serif text-sm font-semibold leading-relaxed text-brown-deep lg:mt-3 lg:text-base">先行販売や<br />限定案内のお知らせ</p>
      </div>
      <div className="col-span-2 rounded-[15px] border border-clay/30 bg-paper-soft/94 p-4 lg:p-5">
        <p className="font-serif text-sm font-semibold text-clay-deep lg:text-base">安心してご登録ください</p>
        <ul className="mt-2 grid gap-x-4 gap-y-1.5 font-sans text-[11px] leading-5 text-ink-soft sm:grid-cols-3 lg:mt-3 lg:block lg:space-y-2 lg:text-xs lg:leading-6">
          <li className="flex gap-1.5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay lg:mt-1 lg:h-4 lg:w-4" aria-hidden="true" />登録無料・約30秒</li>
          <li className="flex gap-1.5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay lg:mt-1 lg:h-4 lg:w-4" aria-hidden="true" />メールアドレス不要</li>
          <li className="flex gap-1.5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay lg:mt-1 lg:h-4 lg:w-4" aria-hidden="true" />いつでも簡単に解除可能</li>
        </ul>
      </div>
    </div>
  )
}

export function LineBenefits() {
  return (
    <section id="line-benefits" aria-labelledby="line-benefits-heading" className="paper-section-soft overflow-x-clip border-y border-gold/20 py-10 sm:py-12 lg:py-14 scroll-mt-20">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7 lg:px-8">
        <Leaf variant="cream-b" className="absolute -left-4 top-16 h-32 w-24 -rotate-[10deg] opacity-95 sm:h-40 sm:w-30 lg:left-0 lg:top-20 lg:h-48 lg:w-36" />
        <Leaf variant="cream-a" flip className="absolute -right-4 top-16 h-32 w-24 rotate-[10deg] opacity-95 sm:h-40 sm:w-30 lg:right-0 lg:top-20 lg:h-48 lg:w-36" />

        <Reveal className="text-center">
          <h2 id="line-benefits-heading" className="relative mx-auto max-w-[38rem] px-8 text-center font-serif font-semibold text-brown-deep" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)' }}>
            <Leaf variant="gold" className="absolute -left-2 top-1/2 h-14 w-11 -translate-y-1/2 rotate-[8deg] sm:h-16 sm:w-13" />
            LINE登録で受け取れる特典
            <Leaf variant="gold" flip className="absolute -right-2 top-1/2 h-14 w-11 -translate-y-1/2 -rotate-[8deg] sm:h-16 sm:w-13" />
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-[15px] leading-8 text-ink-soft sm:text-base">登録後すぐに、毎日の食卓に役立つ内容をお届けします。</p>
        </Reveal>

        {/* モバイル専用: スマホモック＋01/02/03を横並びにして一画面に収める */}
        <Reveal className="mt-8 flex items-start gap-3 sm:hidden">
          <div className="w-[132px] shrink-0">
            <PhoneMockup compact />
          </div>
          <MobileCompactRecipes />
        </Reveal>
        <p className="mt-3 text-center font-sans text-[11px] leading-5 text-brown/58 sm:hidden">※レシピはイメージです。内容は変更になる場合があります。</p>

        <Reveal delay={120} className="mt-6 sm:hidden">
          <InformationPanel />
        </Reveal>
        <div className="mt-4 sm:hidden">
          <ReturnToTopLink />
        </div>

        {/* sm以上: 既存のスマホモック＋レシピパネル＋情報パネルの3カラム構成 */}
        <div className="mt-8 hidden items-center gap-6 sm:grid lg:mt-10 lg:grid-cols-[278px_minmax(0,1fr)_248px] lg:grid-rows-[auto_auto] lg:gap-x-0 lg:gap-y-6">
          <Reveal className="relative z-20 lg:row-span-2 lg:translate-x-4 lg:translate-y-2"><PhoneMockup /></Reveal>

          <Reveal className="relative z-10 lg:-ml-4 lg:pl-0" delay={90}>
            <RecipePanel />
            <p className="mt-2.5 pl-1 font-sans text-[11px] leading-5 text-brown/58">※レシピはイメージです。内容は変更になる場合があります。</p>
          </Reveal>

          <Reveal className="lg:ml-5" delay={180}>
            <InformationPanel />
          </Reveal>

          <div className="lg:col-start-2 lg:col-span-2 lg:-ml-3">
            <ReturnToTopLink />
          </div>

        </div>
      </div>
    </section>
  )
}
