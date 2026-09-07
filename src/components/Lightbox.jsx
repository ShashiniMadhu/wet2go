export default function Lightbox({ src, onClose }) {
  if (!src) return null

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <img src={src} alt="Wet2Go large view" />
    </div>
  )
}
