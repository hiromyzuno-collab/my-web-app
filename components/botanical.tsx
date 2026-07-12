type BotanicalProps = {
  className?: string
  flip?: boolean
}

/**
 * Hand-drawn botanical ornament for the approved retro paper design.
 * A warm clay under-print gives the sprig a restrained orange shadow,
 * while the main stroke inherits its section colour.
 */
export function Botanical({ className = '', flip = false }: BotanicalProps) {
  const transform = flip ? 'translate(64 0) scale(-1 1)' : undefined

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 34"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={transform}>
        {/* soft clay-coloured under-print */}
        <g transform="translate(0 1.35)" opacity="0.24">
          <path
            d="M3 27C16 27 27 22 39 13C48 6 54 5 61 4"
            stroke="#c96a35"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
          <g fill="#c96a35" stroke="#c96a35" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M16 24C11 22 9 18 10.5 14C15 15 18 19 16 24Z" />
            <path d="M23 21C18 18.5 17 14.2 19 10.5C23.4 12.2 26 16.4 23 21Z" />
            <path d="M31 17C27 13.5 27 9.5 29.5 6.5C33.5 9 35 13.4 31 17Z" />
            <path d="M39 12.6C36.5 8 38 4.7 41 2.5C44.1 5.8 44.6 9.5 39 12.6Z" />
            <path d="M18 25.3C14.4 27.8 10.5 27.6 7.6 25.4C10.2 22.1 14 21.4 18 25.3Z" />
            <path d="M27 21.2C23.7 24.4 19.7 24.8 16.5 22.9C18.8 19.2 22.9 18.2 27 21.2Z" />
            <path d="M36 15.5C33 19.2 29 20 25.6 18.3C27.5 14.4 31.4 13 36 15.5Z" />
            <path d="M47 8.3C44.5 11.7 41 12.8 37.7 11.4C39.2 7.7 42.6 6 47 8.3Z" />
          </g>
        </g>

        {/* primary ink */}
        <path
          d="M3 27C16 27 27 22 39 13C48 6 54 5 61 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <g stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round">
          <path d="M16 24C11 22 9 18 10.5 14C15 15 18 19 16 24Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M23 21C18 18.5 17 14.2 19 10.5C23.4 12.2 26 16.4 23 21Z" fill="currentColor" fillOpacity="0.22" />
          <path d="M31 17C27 13.5 27 9.5 29.5 6.5C33.5 9 35 13.4 31 17Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M39 12.6C36.5 8 38 4.7 41 2.5C44.1 5.8 44.6 9.5 39 12.6Z" fill="currentColor" fillOpacity="0.21" />
          <path d="M18 25.3C14.4 27.8 10.5 27.6 7.6 25.4C10.2 22.1 14 21.4 18 25.3Z" fill="currentColor" fillOpacity="0.17" />
          <path d="M27 21.2C23.7 24.4 19.7 24.8 16.5 22.9C18.8 19.2 22.9 18.2 27 21.2Z" fill="currentColor" fillOpacity="0.18" />
          <path d="M36 15.5C33 19.2 29 20 25.6 18.3C27.5 14.4 31.4 13 36 15.5Z" fill="currentColor" fillOpacity="0.19" />
          <path d="M47 8.3C44.5 11.7 41 12.8 37.7 11.4C39.2 7.7 42.6 6 47 8.3Z" fill="currentColor" fillOpacity="0.17" />
        </g>
      </g>
    </svg>
  )
}
