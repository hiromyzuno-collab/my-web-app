import Image from "next/image";
import { ArrowUpRight, Check, Heart, ShieldCheck, Smartphone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Leaf } from "@/components/leaf";
import { LINE_ADD_URL } from "@/lib/site";

const QR_IMAGE_PATH = "/images/line-qr.png";

export const metadata = {
  title: "大地のムクナ｜LINE友だち追加",
  robots: { index: false, follow: false },
};

const steps = [
  "スマートフォンのカメラでQRコードを読み取る",
  "LINEが開いたら「友だち追加」を選ぶ",
  "登録後、限定レシピ5選を受け取る",
];

export default function LinePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3e7ca] px-4 py-6 sm:px-6 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(199,119,74,.13), transparent 26%), radial-gradient(circle at 88% 90%, rgba(84,112,64,.12), transparent 30%)",
        }}
      />

      <Leaf
        variant="cream-b"
        className="absolute -left-8 top-16 h-40 w-28 -rotate-[18deg] opacity-55 sm:left-[max(1rem,calc(50%-300px))] sm:top-24"
      />
      <Leaf
        variant="cream-a"
        flip
        className="absolute -right-8 bottom-20 h-40 w-28 rotate-[16deg] opacity-50 sm:right-[max(1rem,calc(50%-300px))]"
      />

      <article className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[28px] border border-[#d9c79f] bg-[#fffaf0] shadow-[0_20px_55px_rgba(80,54,26,0.16)] sm:rounded-[34px]">
        <header className="relative border-b border-[#e4d3af] bg-[#f8edd5] px-5 pb-6 pt-7 text-center sm:px-8 sm:pt-8">
          <Leaf
            variant="gold-s1"
            className="absolute left-4 top-4 h-9 w-9 -rotate-12 opacity-55"
          />
          <Leaf
            variant="gold-s1"
            flip
            className="absolute right-4 top-4 h-9 w-9 rotate-12 opacity-55"
          />

          <BrandLogo className="justify-center" markSize={48} />
          <div className="mx-auto mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#c7774a]/30 bg-[#fff8ec] px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#a85832]">
            <Heart className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            THANK YOU
          </div>
        </header>

        <div className="px-5 pb-7 pt-7 text-center sm:px-8 sm:pb-8 sm:pt-9">
          <p className="font-serif text-[13px] font-semibold tracking-[0.14em] text-[#b7663e]">
            ご関心をお寄せいただき、ありがとうございます。
          </p>
          <h1 className="mt-2 font-serif text-[26px] font-semibold leading-[1.55] tracking-[0.03em] text-brown-deep sm:text-[29px]">
            LINEよりご案内いたします
          </h1>
          <p className="mx-auto mt-3 max-w-[340px] text-[13.5px] leading-7 text-ink-soft sm:text-sm">
            限定レシピ5選を、LINEよりお届けします。
            下のQRコード、またはボタンからご登録ください。
          </p>

          <section aria-labelledby="qr-heading" className="mt-7">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#c7774a]/35" aria-hidden="true" />
              <h2 id="qr-heading" className="font-serif text-sm font-semibold text-brown-deep">
                QRコードから友だち追加
              </h2>
              <span className="h-px w-8 bg-[#c7774a]/35" aria-hidden="true" />
            </div>

            <div className="relative mx-auto w-fit rounded-[24px] border border-[#d6bd8d] bg-white p-4 shadow-[0_8px_24px_rgba(91,61,30,0.1)]">
              <span className="absolute -left-px -top-px h-8 w-8 rounded-tl-[24px] border-l-2 border-t-2 border-[#c7774a]" />
              <span className="absolute -right-px -top-px h-8 w-8 rounded-tr-[24px] border-r-2 border-t-2 border-[#c7774a]" />
              <span className="absolute -bottom-px -left-px h-8 w-8 rounded-bl-[24px] border-b-2 border-l-2 border-[#c7774a]" />
              <span className="absolute -bottom-px -right-px h-8 w-8 rounded-br-[24px] border-b-2 border-r-2 border-[#c7774a]" />
              <Image
                src={QR_IMAGE_PATH}
                alt="LINE友だち追加用QRコード"
                width={176}
                height={176}
                className="h-40 w-40 object-contain sm:h-44 sm:w-44"
                priority
              />
            </div>
            <p className="mt-3 text-[11px] leading-5 text-brown/60">
              カメラをかざすとLINEが開きます
            </p>
          </section>

          <div className="my-6 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-[#ddcfb1]" />
            <span className="text-[10px] font-medium tracking-[0.16em] text-brown/45">または</span>
            <span className="h-px flex-1 bg-[#ddcfb1]" />
          </div>

          <a
            href={LINE_ADD_URL}
            className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-green-deep px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_7px_18px_rgba(47,96,53,0.25)] transition hover:bg-[#284f2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7774a]"
          >
            <Smartphone className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
            LINEアプリで直接開く
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <p className="mt-2.5 text-[11px] leading-5 text-brown/60">
            スマートフォンでご覧の方はこちらが便利です
          </p>
          <a
            href={LINE_ADD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-green-deep underline decoration-green/35 underline-offset-4 transition hover:text-[#284f2e]"
          >
            PC版LINEで開く方はこちら
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <section aria-labelledby="steps-heading" className="mt-7 rounded-[22px] border border-[#ded0b2] bg-[#f8f0df] px-4 py-5 text-left sm:px-5">
            <div className="flex items-center gap-2 border-b border-[#ded0b2] pb-3">
              <ShieldCheck className="h-4.5 w-4.5 text-[#b7663e]" strokeWidth={1.8} aria-hidden="true" />
              <h2 id="steps-heading" className="font-serif text-sm font-semibold text-brown-deep">
                かんたん3ステップ
              </h2>
              <span className="ml-auto rounded-full bg-[#c7774a]/10 px-2 py-1 text-[9px] font-semibold tracking-wider text-[#a85832]">
                約30秒
              </span>
            </div>
            <ol className="mt-3 space-y-1">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 py-2 text-[12.5px] leading-6 text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#c7774a] font-serif text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-green-deep">
            <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            登録無料・いつでも解除できます
          </div>
        </div>

        <footer className="relative overflow-hidden border-t border-[#dfcba4] bg-[#f4e5c8] px-6 pb-7 pt-6 text-center sm:px-8">
          <Leaf
            variant="green-b"
            className="absolute -bottom-7 -left-2 h-24 w-14 rotate-[28deg] opacity-30"
          />
          <Leaf
            variant="green-a"
            flip
            className="absolute -bottom-8 -right-3 h-24 w-14 -rotate-[25deg] opacity-25"
          />
          <p className="relative font-serif text-[15px] font-semibold tracking-[0.04em] text-brown-deep">
            あらためまして、ご登録ありがとうございます。
          </p>
          <p className="relative mx-auto mt-2 max-w-[340px] text-[12px] leading-6 text-ink-soft">
            日々の健やかな習慣づくりに、少しでもお役立ていただけましたら嬉しく思います。
          </p>
          <div className="relative mx-auto mt-4 h-px w-12 bg-[#c7774a]/45" aria-hidden="true" />
          <p className="relative mt-4 font-serif text-[11px] tracking-[0.08em] text-brown-deep">
            大地のムクナ 公式LINEページ
          </p>
          <p className="relative mt-1 text-[9.5px] text-brown/55">© 2026 AKETENO Inc.</p>
        </footer>
      </article>
    </main>
  );
}
