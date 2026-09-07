import { useState } from 'react'
import { GALLERY } from '../data/site'
import Lightbox from '../components/Lightbox'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {GALLERY.map((src) => (
            <button key={src} type="button" onClick={() => setLightbox(src)}>
              <img src={src} alt="Wet2Go gallery" />
            </button>
          ))}
        </div>
      </section>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
