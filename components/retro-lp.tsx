import { BrandLogo } from "@/components/brand-logo";
import { RetroLineCta } from "@/components/retro-line-cta";

const features = [
  {
    image: "/images/retro/fermentation.png",
    alt: "木の器に盛られた発酵味噌",
    title: "発酵のチカラ",
    body: <>素材の旨みを引き出し、食卓に<br />なじむ味わいへ。</>,
    className: "feature--fermentation",
  },
  {
    image: "/images/retro/mucuna.png",
    alt: "木の器に入ったムクナ豆",
    title: "ムクナ豆の個性",
    body: <>昔から食べ継がれてきた豆を、<br />毎日の味噌汁へ。</>,
    className: "feature--mucuna",
  },
  {
    image: "/images/retro/itoshima.png",
    alt: "海と山に囲まれた糸島の風景",
    title: "糸島の風景",
    body: <>海と山に囲まれた土地の物語を、<br />一杯に込めて。</>,
    className: "feature--itoshima",
  },
];

const recipes = [
  { no: "01", title: <>豆腐と小ねぎの<br />基本味噌汁</>, image: "/images/retro/recipe-01.png" },
  { no: "02", title: <>根菜たっぷり<br />胡麻味噌汁</>, image: "/images/retro/recipe-02.png" },
  { no: "03", title: <>きのこと生姜の<br />温か味噌汁</>, image: "/images/retro/recipe-03.png" },
];

function BookIcon() {
  return (
    <svg viewBox="0 0 64 54" aria-hidden="true">
      <path d="M6 8c10-2 18 1 26 7v32c-8-6-16-9-26-7V8Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M58 8c-10-2-18 1-26 7v32c8-6 16-9 26-7V8Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="4" y="5" width="56" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="m7 9 25 19L57 9" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="m8.5 12 2.3 2.4 4.8-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Hero({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? "mobile-hero" : "desktop-hero"} aria-labelledby={mobile ? "mobile-hero-heading" : "desktop-hero-heading"}>
      <div className="hero-photo" aria-hidden="true">
        <img src="/images/retro/hero-woman.jpg" alt="" />
      </div>
      <div className="hero-wash" aria-hidden="true" />
      <BrandLogo className="hero-logo" compact={mobile} />
      <a href="/line" className="hero-mini-line">LINE限定特典 <span aria-hidden="true">›</span></a>
      <div className="hero-copy">
        <h1 id={mobile ? "mobile-hero-heading" : "desktop-hero-heading"}>
          <span><strong className="clay">発酵のチカラ</strong>と</span>
          <span><strong className="green">ムクナ豆</strong>のやさしさを、</span>
          <span><strong className="clay">一杯の味噌汁</strong>に。</span>
        </h1>
        <p>三つの個性が、毎日の一杯を<br />少し特別にしてくれます。</p>
        <RetroLineCta className="hero-cta" compact={mobile} />
      </div>
      <img className="hero-badge" src="/images/retro/yakuzen-badge.png" alt="糸島発 自然素材の薬膳味噌" />
    </section>
  );
}

function Features({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? "mobile-features retro-paper" : "desktop-features retro-paper"} aria-labelledby={mobile ? "mobile-features-heading" : "desktop-features-heading"}>
      <header className="section-heading features-heading">
        <h2 id={mobile ? "mobile-features-heading" : "desktop-features-heading"}>
          <span className="clay">発酵</span><span className="times">×</span><span className="green">ムクナ豆</span><span className="times">×</span><span className="green">糸島の自然</span>
        </h2>
        <p>三つの個性が、毎日の一杯を少し特別に。</p>
      </header>
      <div className="features-grid">
        {features.map((feature) => (
          <article className={`feature ${feature.className}`} key={feature.title}>
            <div className="feature-image-wrap">
              <img className="feature-image" src={feature.image} alt={feature.alt} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuoteCard({ side }: { side: "left" | "right" }) {
  const left = side === "left";
  return (
    <article className={`quote-card quote-card--${side}`}>
      <span className="quote-mark" aria-hidden="true">“</span>
      <h3>{left ? "朝の時間について" : "味わいについて"}</h3>
      {left ? (
        <p>朝の一杯が、こんなに幸せな<br />気持ちにしてくれるとは<br />思いませんでした。<br />やさしい味で、気持ちまで<br />整うようです。</p>
      ) : (
        <p>出汁や塩分を控えめにしても、<br />しっかり旨味を感じます。<br />やさしい味わいなのに物足りなさがなく、<br />家族みんなで安心していただけるのが<br />嬉しいです。毎日のごはんに<br />欠かせなくなりました。</p>
      )}
      <small>{left ? "福岡県／40代女性" : "東京都／50代女性"}</small>
      <img className="quote-leaf" src={left ? "/images/retro/leaf-small-gold.png" : "/images/retro/leaf-large-right.png"} alt="" />
    </article>
  );
}

function Testimonials({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? "mobile-testimonials retro-paper retro-paper--deep" : "desktop-testimonials retro-paper retro-paper--deep"} aria-labelledby={mobile ? "mobile-testimonials-heading" : "desktop-testimonials-heading"}>
      <header className="section-heading testimonials-heading">
        <h2 id={mobile ? "mobile-testimonials-heading" : "desktop-testimonials-heading"}>先行販売のお声</h2>
        <p>実際にお試しいただいた方のお声をご紹介します。</p>
      </header>
      <img className="testimonials-botanical testimonials-botanical--left" src="/images/retro/leaf-large-left.png" alt="" />
      <img className="testimonials-botanical testimonials-botanical--right" src="/images/retro/leaf-large-right.png" alt="" />
      <div className="testimonials-grid">
        <QuoteCard side="left" />
        <figure className="soup-figure">
          <img className="soup-feature" src="/images/retro/soup-feature.png" alt="湯気の立つやさしい味噌汁" />
          <figcaption>毎日の食卓に、やさしい一杯を。</figcaption>
        </figure>
        <QuoteCard side="right" />
      </div>
    </section>
  );
}

function RecipeList() {
  return (
    <div className="recipe-list" aria-label="限定レシピの一部">
      {recipes.map((recipe) => (
        <article className="recipe-row" key={recipe.no}>
          <span className="recipe-no">{recipe.no}</span>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt="" />
        </article>
      ))}
    </div>
  );
}

function Reassurance() {
  return (
    <aside className="reassurance">
      <h3>安心してご登録ください</h3>
      <ul>
        <li><CheckIcon />登録無料・約30秒</li>
        <li><CheckIcon />メールアドレス不要</li>
        <li><CheckIcon />いつでも簡単に解除可能</li>
      </ul>
    </aside>
  );
}

function LineBenefits({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? "mobile-line-benefits retro-paper" : "desktop-line-benefits retro-paper"} aria-labelledby={mobile ? "mobile-line-heading" : "desktop-line-heading"}>
      <header className="section-heading line-heading">
        <h2 id={mobile ? "mobile-line-heading" : "desktop-line-heading"}>LINE登録で受け取れる特典</h2>
        <p>登録後すぐに、毎日の食卓に役立つ内容をお届けします。</p>
      </header>
      <div className="line-content-grid">
        <figure className="phone-figure">
          <img src="/images/retro/phone-retro-screen.png" alt="大地のムクナ公式LINEの画面イメージ" />
        </figure>
        <RecipeList />
        <div className="benefit-icons">
          <article><BookIcon /><p>暮らしに役立つ<br />発酵コラム</p></article>
          <article><MailIcon /><p>先行販売や<br />限定案内の<br />お知らせ</p></article>
        </div>
        <Reassurance />
      </div>
      <div className="line-bottom">
        <p><span>今日の一杯から、未来のわたしへ。</span><strong>無理なく続く、おいしい習慣を。</strong></p>
        <RetroLineCta className="line-bottom-cta" compact={mobile} />
      </div>
    </section>
  );
}

function Footer({ mobile = false }: { mobile?: boolean }) {
  return (
    <footer className={mobile ? "mobile-footer retro-paper" : "desktop-footer retro-paper"}>
      <BrandLogo compact />
      <nav aria-label="フッターナビゲーション">
        <a href="#legal">特定商取引法に基づく表記</a>
        <a href="#privacy">プライバシーポリシー</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
      <small>© 2025 AKETENO Inc.</small>
    </footer>
  );
}

export function RetroLandingPage() {
  return (
    <>
      <a href="#desktop-main" className="skip-link">本文へ移動</a>
      <div className="desktop-shell">
        <main id="desktop-main" className="retro-desktop" aria-label="大地のムクナ ランディングページ PC版">
          <Hero />
          <Features />
          <Testimonials />
          <LineBenefits />
          <Footer />
        </main>
      </div>
      <main className="retro-mobile" aria-label="大地のムクナ ランディングページ スマートフォン版">
        <Hero mobile />
        <Features mobile />
        <Testimonials mobile />
        <LineBenefits mobile />
        <Footer mobile />
      </main>
    </>
  );
}
