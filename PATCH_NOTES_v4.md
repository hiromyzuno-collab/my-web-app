# Patch notes v4

## Visual refinements
- Rebuilt the smartphone mockup as a slimmer device with a restrained, realistic edge and softer shadow.
- Lowered the mobile hero CTA slightly to balance it with the circular product badge.
- Reversed the three-pillar underline curve into the approved upward arch.
- Restored and enlarged the central botanical leaves around the Mucuna image.
- Strengthened botanical ornaments across viewports with a subtle warm orange under-print.
- Kept botanical heading ornaments visible on mobile without consuming headline width.

## Conversion and spacing
- Compressed the lower LINE-benefits information area on mobile.
- Converted the two supporting information cards to a compact two-column mobile layout.
- Reduced footer vertical space while keeping centered copyright and preview notice.
- Added a dedicated final CTA observer target.
- Mobile sticky LINE CTA now hides when the integrated final CTA or footer becomes visible.

## Verification
- `npm run build`: passed
- TypeScript: passed as part of Next.js production build

---

## v5 — BaseRETRO 素材差し替え（2026-07-12）

**目的**: お手本（BaseRETRO.png）から抜き出した透過素材へ差し替え、見た目をお手本に一致させる。機能・構成・アニメーションは従来どおり。

**差し替え内容**（素材はすべて `public/images/retro/`）
- 三本柱: 発酵／豆／島 の円形素材を直接表示（CSSクリッピング・枠を撤去、drop-shadowのみ）
- お声セクション中央: 杯.png（アーチ枠込み素材）＋ ミニタイトル.png をキャプション帯に使用
- ヒーローのバッジ: 薬膳.png を背景にテキストを円中心（50%/48%）へ重ね
- スマホ: スマホ.png を2倍解像度化し、LINEトーク内容を透視変換で画面に合成（phone-line.png、生成スクリプトの座標はTL(48,39) TR(181,35) BR(230,323) BL(96,347)、縦インセット 11.5%〜81.5%）
- 葉の装飾: SVG（Botanical / LeafMotif）を reef シリーズ素材の `<Leaf>` コンポーネントへ全面置換

**不使用素材**: 先行販売.png — 「お声」が「お売」と誤生成されているため。見出しはテキスト維持＋両脇に金葉素材で見た目を再現。

**その他修正**
- package-lock.json の resolved URL を registry.npmjs.org へ正規化（元環境の内部ミラー参照でインストール不能だったため）
- reasons.tsx: lucide-react の Leaf と装飾 Leaf の名前衝突を LeafDeco で回避

---

## v6 — ファーストビュー/全体バランス調整（2026-07-12）

**Q&A回答の反映**
- CTA: 角丸長方形→ピル型、コンテナ中央寄せに変更
- バッジ: `badge-logo.png` としてテキスト焼き込み一枚画像に作り直し。中心座標を数値検証（各行x中心=325、円中心と一致）してズレの再発を構造的に解消。影とハローを画像内に合成し、背景女性写真との境目をぼかして立体感を付与
- ヘッダー: 固定は維持、`bg-paper/55`+`backdrop-blur-lg`（非スクロール時は`/40`+`blur-md`）でガラス越しの「吸い込まれる」透過感に変更
- 三本柱: BaseRETRO準拠のドーム型枠（底辺直線）+ 底辺下の植物スワッグ（LeafMotif）を復活・大型化。写真はQ7回答（発酵=お味噌のまま／ムクナ豆=緑の豆／糸島=風景）を反映、高解像度版への差し替え待ち（プレースホルダの旧パスにコメントで明記）
- お声セクション: 最有力２準拠のリッチ版に全面差し替え（「先」丸飾り見出し、罫線+葉、二段組みリード文＋本文、地名ピン、大型引用符、締め二行メッセージ）。中央アーチは最有力２から高解像度で再抜き出しした`bowl-hd.png`（350×619）を使用
- LINE特典: 安心チェックカードを維持しつつ、注記「※レシピはイメージです。内容は変更になる場合があります。」を追加（Q9C折衷）。スマホ画面はブランドの豆マーク（クライアント提供モチーフ）をヘッダーに追加して反復
- 締め: 独立の`FinalCta`セクションとして新設。写真を敷いた帯＋二段見出し＋ピルCTA（Q11B）。LINE特典セクション内にあった重複CTAブロックは削除
- 植物モチーフ全体を大型化（三本柱スワッグ、お声セクション両脇、各見出し脇の飾り）

**不具合修正**
- モバイル/タブレットでヒーローCTAとバッジが重なる問題を検出・修正（バッジをCTA帯より上の位置に固定）
- 葉モチーフのはみ出しによる横スクロール発生（mobile +14px, tablet +16px）を`overflow-x-clip`で解消
- Puppeteerによる3ブレークポイント（1280/390/768px）自動監査を実施。画像破損なし、水平オーバーフローなしを確認

**保留（ろみ側の生成待ち）**
- 三本柱の高解像度写真（発酵=味噌ペースト／ムクナ豆=緑の豆をざるに／糸島=海と山の風景）
- 締めセクションの横長写真
- いずれも `生成プロンプト.md` に依頼文面を用意
