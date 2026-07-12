/**
 * components/return-to-top-link.tsx
 *
 * 最終CTAの手前あたりに置く、控えめな「トップへ戻る」テキストリンク。
 * スマホ下部固定CTAと競合しないよう、浮遊ボタンにはせず、
 * 通常のページ内コンテンツとして配置してください。
 *
 * 使用例（page.tsx 内、最終CTAセクションの直前）：
 * <ReturnToTopLink />
 */

"use client";

export function ReturnToTopLink() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center py-6">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-serif text-[13.5px] text-[var(--olive)] transition-opacity hover:opacity-70"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="var(--olive)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        もう一度、大地の物語を読む
      </button>
    </div>
  );
}
