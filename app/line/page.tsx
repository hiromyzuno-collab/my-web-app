/**
 * app/line/page.tsx
 *
 * PCでLPのCTAを押した人が着地する、ブランド世界観に統一した
 * LINE友だち追加の案内ページ。
 *
 * 【差し替えが必要な箇所】
 * 1. LINE_URL      : 本番の公式LINE URL（lib/site.ts で管理）
 * 2. QR_IMAGE_PATH : 実際のQRコード画像（public/images/line-qr.png 等）
 *
 * 【配置方法】
 * このファイルをプロジェクトの app/line/page.tsx としてそのまま追加してください。
 * これにより https://（本番ドメイン）/line がこのページになります。
 * LP本体のCTAリンク先を、PC表示時のみこのページへ向けるかは
 * 実装判断（別途相談）です。
 */

import { LeafMotif } from "@/components/leaf-motif";

// TODO: 本番のLINE公式URLに差し替え（lib/site.ts の LINE_URL と合わせる）
const LINE_URL = "https://line.me/R/ti/p/@daichi-no-mukuna";
// TODO: 実際のQR画像に差し替え
const QR_IMAGE_PATH = "/images/line-qr-placeholder.png";

export const metadata = {
  title: "大地のムクナ｜LINE友だち追加",
  robots: { index: false, follow: false },
};

export default function LinePage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px] rounded-3xl border border-[var(--border)] bg-[var(--paper-light)] shadow-[0_12px_32px_rgba(80,54,26,0.14)] overflow-hidden">

        {/* ヘッダー */}
        <div className="relative bg-[var(--paper-deep)] px-6 pt-7 pb-5 text-center border-b border-[var(--border)]">
          <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)] bg-[var(--paper-light)] font-serif text-lg text-[var(--clay-deep)]">
            大
          </div>
          <p className="font-serif text-lg font-bold tracking-wide text-[var(--ink)]">
            大地のムクナ
          </p>
          <p className="mt-0.5 text-[10px] tracking-[0.18em] text-[var(--ink-soft)]">
            DAICHI NO MUCUNA
          </p>
        </div>

        {/* 本文 */}
        <div className="px-7 pt-8 pb-2 text-center">
          <h1 className="mb-2.5 font-serif text-xl font-bold leading-relaxed text-[var(--ink)]">
            スマートフォンで
            <br />
            友だち追加してください
          </h1>
          <p className="mb-6 text-[13.5px] leading-loose text-[var(--ink-soft)]">
            QRコードを読み取ると、
            <br />
            限定レシピ5選のご案内が届きます。
          </p>

          {/* QRコード枠 */}
          <div className="relative mx-auto mb-3 flex h-[220px] w-[220px] items-center justify-center rounded-[20px] border border-[var(--border)] bg-[var(--paper-light)]">
            <span className="absolute left-2.5 top-2.5 h-5 w-5 rounded-tl-md border-l-[3px] border-t-[3px] border-[var(--olive)]" />
            <span className="absolute right-2.5 top-2.5 h-5 w-5 rounded-tr-md border-r-[3px] border-t-[3px] border-[var(--olive)]" />
            <span className="absolute bottom-2.5 left-2.5 h-5 w-5 rounded-bl-md border-b-[3px] border-l-[3px] border-[var(--olive)]" />
            <span className="absolute bottom-2.5 right-2.5 h-5 w-5 rounded-br-md border-b-[3px] border-r-[3px] border-[var(--olive)]" />

            {/* 本番ではここを next/image + QR_IMAGE_PATH に差し替え */}
            <img
              src={QR_IMAGE_PATH}
              alt="LINE友だち追加QRコード"
              className="h-[160px] w-[160px] rounded object-contain opacity-90"
            />
          </div>
          <p className="mb-5 text-[10px] tracking-wide text-[var(--gold)]">
            ※ QRコードは本番用に差し替え予定
          </p>

          {/* PCでLINEアプリを使っている人向けの直接起動リンク */}
          <a
            href={LINE_URL}
            className="mb-6 inline-block text-[11.5px] text-[var(--olive)] underline underline-offset-4"
          >
            PCでLINEをお使いの方はこちら
          </a>

          {/* 手順 */}
          <div className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--paper)] px-5 py-4 text-left">
            {[
              "スマートフォンのカメラでQRを読み取る",
              "LINEアプリが開き「友だち追加」画面が表示される",
              "追加後すぐに限定レシピ5選が届く",
            ].map((step, i) => (
              <div key={i} className="flex gap-2.5 py-1.5 text-[12.5px] leading-relaxed text-[var(--ink-soft)]">
                <span className="font-serif font-bold text-[var(--clay)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </div>
            ))}
          </div>

          {/* スマホでこのページを開いた人向けのCTA */}
          <a
            href={LINE_URL}
            className="mb-2 flex items-center justify-center gap-2 rounded-full bg-[var(--line-accessible-dark)] px-5 py-3.5 text-[14.5px] font-bold text-white shadow-[0_4px_12px_rgba(8,122,55,0.25)]"
          >
            LINEアプリで直接開く
          </a>
          <p className="mb-6 text-[11px] text-[var(--ink-soft)]">
            スマートフォンでご覧の場合はこちら
          </p>
        </div>

        {/* フッター */}
        <div className="border-t border-[var(--border)] px-5 pb-6 pt-4 text-center">
          <p className="text-[10.5px] text-[var(--ink-soft)]">
            登録無料・約30秒　｜　メールアドレス不要　｜　いつでも解除可能
          </p>
          <div className="mt-1 flex justify-center opacity-60">
            <LeafMotif className="h-6 w-24" />
          </div>
          <p className="mt-3 font-serif text-[11px] tracking-wide text-[var(--ink)]">
            大地のムクナ　公式LINEページ
          </p>
          <p className="mt-1 text-[9.5px] text-[var(--ink-soft)] opacity-70">
            © 2025 AKETENO Inc.
          </p>
        </div>
      </div>
    </main>
  );
}
