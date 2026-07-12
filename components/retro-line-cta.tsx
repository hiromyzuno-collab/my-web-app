type RetroLineCtaProps = {
  className?: string;
  compact?: boolean;
};

function LineIcon() {
  return (
    <span className="retro-line-icon" aria-hidden="true">
      <svg viewBox="0 0 56 52" role="img">
        <path d="M28 2C13.6 2 2 11.1 2 22.5c0 10.2 8.9 18.5 21 20.3.8.2 1.8.5 2.1 1.2.3.6.2 1.6.1 2.2l-.4 2.2c-.1.7-.5 2.5 2.2 1.4 2.7-1.1 14.5-8.6 19.9-14.7 3.7-4 5.4-8.1 5.4-12.4C52 11.1 40.4 2 28 2Z" fill="#fffdf5"/>
        <text x="27.5" y="27.2" textAnchor="middle" fill="#2f7d3f" fontSize="10.5" fontWeight="800">LINE</text>
      </svg>
    </span>
  );
}

export function RetroLineCta({ className = "", compact = false }: RetroLineCtaProps) {
  return (
    <a className={`retro-line-cta ${compact ? "retro-line-cta--compact" : ""} ${className}`} href="/line">
      <LineIcon />
      <span className="retro-line-cta__copy">
        <span className="retro-line-cta__sub">＼ 登録無料・約30秒で完了 ／</span>
        <span className="retro-line-cta__main">限定レシピ5選を無料で受け取る</span>
      </span>
      <span className="retro-line-cta__arrow" aria-hidden="true">›</span>
    </a>
  );
}
