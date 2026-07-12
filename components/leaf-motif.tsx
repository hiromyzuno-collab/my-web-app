/**
 * components/leaf-motif.tsx
 *
 * アーチ型写真の底辺に沿う植物モチーフ（葉の飾り）。
 * 使い方：写真を囲う relative コンテナの中に、この component を
 * position: absolute; bottom: -22px; left: 50%; transform: translateX(-50%);
 * の要領で重ねてください（下の例を参照）。
 *
 * 座標は確定済みのため、AIに画像から再生成させず、このファイルをそのまま
 * プロジェクトへ追加して使ってください。
 *
 * 使用例：
 * <div className="relative w-[220px] h-[260px]">
 *   <img src="/images/pillar-fermentation.jpg" className="w-full h-full object-cover rounded-[110px_110px_50%_50%/130px_130px_60px_60px]" />
 *   <LeafMotif className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-[170px] h-[60px]" />
 * </div>
 */

type LeafMotifProps = {
  className?: string;
};

export function LeafMotif({ className = "" }: LeafMotifProps) {
  return (
    <svg
      viewBox="0 0 170 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M85 4 C 60 4, 40 20, 20 26"
        stroke="var(--olive)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M85 4 C 110 4, 130 20, 150 26"
        stroke="var(--olive)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 26 C 26 14, 34 12, 40 18 C 34 22, 26 24, 20 26 Z"
        fill="var(--olive-soft)"
      />
      <path
        d="M150 26 C 144 14, 136 12, 130 18 C 136 22, 144 24, 150 26 Z"
        fill="var(--olive-soft)"
      />
      <path
        d="M62 12 C 66 4, 74 2, 78 8 C 72 12, 66 14, 62 12 Z"
        fill="var(--gold)"
        opacity="0.85"
      />
      <path
        d="M108 12 C 104 4, 96 2, 92 8 C 98 12, 104 14, 108 12 Z"
        fill="var(--gold)"
        opacity="0.85"
      />
      <circle cx="85" cy="6" r="3.5" fill="var(--clay)" />
    </svg>
  );
}
