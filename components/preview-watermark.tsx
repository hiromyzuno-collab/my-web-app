import { IS_COMPETITION_PREVIEW, PREVIEW_WATERMARK } from '@/lib/site'

export function PreviewWatermark() {
  if (!IS_COMPETITION_PREVIEW) return null
  return (
    <div className="pointer-events-none fixed bottom-24 right-3 z-30 hidden select-none text-[9px] font-medium tracking-[0.18em] text-brown/20 lg:block" aria-hidden="true">
      {PREVIEW_WATERMARK}
    </div>
  )
}
