/**
 * components/leaf.tsx
 *
 * BaseRETRO から抜き出した水彩調の葉素材（reef シリーズ）を表示する装飾コンポーネント。
 * SVG の Botanical / LeafMotif に代わり、お手本と同一の見た目を実現する。
 * すべて装飾のため aria-hidden。variant で素材を選択し、className で配置・回転・反転を指定する。
 */

type LeafVariant =
  | 'green-a' // 縦向きの緑スプリグ（幅広） 60x116
  | 'green-b' // 縦向きの緑スプリグ（細身） 40x116
  | 'gold' // 金色のカーブした小枝 60x78
  | 'gold-s1' // 金色の小さな花びら 40x39
  | 'gold-s2' // 金色の小さな葉クラスタ 40x39
  | 'cream-a' // クリーム色の葉枝（淡） 100x116
  | 'cream-b' // クリーム色の葉枝（大） 100x135

const srcMap: Record<LeafVariant, string> = {
  'green-a': '/images/retro/leaf-green-a.png',
  'green-b': '/images/retro/leaf-green-b.png',
  gold: '/images/retro/leaf-gold.png',
  'gold-s1': '/images/retro/leaf-gold-s1.png',
  'gold-s2': '/images/retro/leaf-gold-s2.png',
  'cream-a': '/images/retro/leaf-cream-a.png',
  'cream-b': '/images/retro/leaf-cream-b.png',
}

type LeafProps = {
  variant: LeafVariant
  className?: string
  flip?: boolean
}

export function Leaf({ variant, className = '', flip = false }: LeafProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={srcMap[variant]}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`pointer-events-none select-none object-contain ${flip ? '-scale-x-100' : ''} ${className}`}
    />
  )
}
