const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.7',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ICONS = {
  truck: (
    <>
      <path d="M3 7h11v10H3z" />
      <path d="M14 11h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </>
  ),
  drop: <path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </>
  ),
  facebook: <path d="M15 8h2V4h-2a4 4 0 0 0-4 4v2H9v4h2v8h4v-8h2.5l.5-4H15V8z" />,
  tiktok: (
    <path d="M14 4v9.2a3.2 3.2 0 1 1-2.4-3.1V8.2A6.4 6.4 0 0 0 18 12V8.5A8 8 0 0 1 14 4z" />
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 13H7L6 8z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.3" fill="currentColor" />
      <circle cx="18" cy="20" r="1.3" fill="currentColor" />
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.5L21 8H7" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  wind: (
    <>
      <path d="M4 8h10a3 3 0 1 0-3-3" />
      <path d="M4 12h14a3 3 0 1 1-3 3" />
      <path d="M4 16h8" />
    </>
  ),
  bucket: (
    <>
      <path d="M7 8h10l-1.2 11H8.2L7 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  fold: (
    <>
      <path d="M5 5h10v14H5z" />
      <path d="M15 8h4v11H9" />
    </>
  ),
  carry: (
    <>
      <path d="M8 10h8l-1 10H9L8 10z" />
      <path d="M9 10V8a3 3 0 0 1 6 0v2" />
      <path d="M12 4v2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  swim: (
    <>
      <circle cx="7" cy="7" r="2" />
      <path d="M4 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M10 9l3 2 4-1" />
    </>
  ),
  gym: <path d="M7 9v6M17 9v6M4 11v2M20 11v2M7 12h10" />,
  sports: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2 3 2 13 0 16M4 12h16M7 7c3 2 7 2 10 0M7 17c3-2 7-2 10 0" />
    </>
  ),
  hike: (
    <>
      <path d="M4 20l6-10 3 5 3-4 4 9" />
      <circle cx="10" cy="6" r="1.6" />
    </>
  ),
  travel: (
    <>
      <path d="M8 8h8v12H8z" />
      <path d="M10 8V6h4v2" />
      <path d="M8 13h8" />
    </>
  ),
  beach: (
    <>
      <path d="M12 4v16" />
      <path d="M12 8c4 0 7 2 8 4-5 0-8-1-8-4z" />
      <path d="M4 20h16" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </>
  ),
  phone: (
    <>
      <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
}

export default function Icon({ name }) {
  const paths = ICONS[name]
  if (!paths) return null

  return (
    <svg {...common} aria-hidden="true">
      {paths}
    </svg>
  )
}
