import { useState } from 'react'
import { COLORS, FREE_DELIVERY, PRICE, formatRs } from '../data/site'
import Icon from '../components/Icon'

export default function Product({ onAddToCart }) {
  const [color, setColor] = useState(COLORS[0].id)
  const [qty, setQty] = useState(1)
  const selectedColor = COLORS.find((c) => c.id === color)

  const addToCart = () => {
    onAddToCart({
      color,
      name: selectedColor.name,
      qty,
      price: PRICE,
      image: selectedColor.image,
    })
  }

  return (
    <section id="product" className="product">
      <div className="product-media">
        <img src={selectedColor.image} alt={`${selectedColor.name} Wet2Go bag`} />
      </div>
      <div className="product-info">
        <h2>Wet2Go Bag</h2>
        <p className="price">{formatRs(PRICE)}</p>
        <p>
          10" wide × 14" high. Waterproof lining, mesh vents with silk flaps, fabric handle, a 4"
          water collection pouch, and a fold-and-Velcro travel mode.
        </p>
        <p className="product-delivery">
          <Icon name="truck" />
          Free delivery on orders over {formatRs(FREE_DELIVERY, { cents: false })}.
        </p>
        <p className="swatch-label">Colour</p>
        <div className="swatches">
          {COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={color === c.id ? 'on' : ''}
              style={{ background: c.hex }}
              onClick={() => setColor(c.id)}
              aria-label={c.name}
            />
          ))}
        </div>
        <p className="color-name">{selectedColor.name}</p>
        <div className="qty-row">
          <button type="button" onClick={() => setQty((n) => Math.max(1, n - 1))}>
            −
          </button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty((n) => n + 1)}>
            +
          </button>
        </div>
        <button className="buy-btn wide" type="button" onClick={addToCart}>
          <Icon name="cart" /> Add to Cart
        </button>
      </div>
    </section>
  )
}
