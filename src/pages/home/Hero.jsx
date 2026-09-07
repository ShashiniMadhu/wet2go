import { scrollToId } from '../../utils/scroll'
import Icon from '../../components/Icon'

const FEATURES = [
  ['shield', 'Waterproof'],
  ['wind', 'Ventilated'],
  ['bucket', 'Water Collection'],
  ['fold', 'Foldable'],
  ['carry', 'Easy to Carry'],
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-navy" aria-hidden="true" />
      <div className="hero-bg" role="img" aria-label="Wet2Go beach landscape" />

      <div className="hero-copy">
        <h1>
          Pack Wet. <span>Travel Fresh.</span>
        </h1>
        <p className="hero-lead">
          Wet2Go is a smart and convenient bag that keeps your wet clothes separate, your
          belongings clean, and your journey fresh.
        </p>
        <div className="hero-ctas">
          <button className="buy-btn" type="button" onClick={() => scrollToId('product')}>
            <Icon name="cart" /> Buy Now
          </button>
          <button className="ghost-btn" type="button" onClick={() => scrollToId('about')}>
            Learn More <Icon name="arrow" />
          </button>
        </div>
        <ul className="feature-row">
          {FEATURES.map(([icon, label]) => (
            <li key={label}>
              <Icon name={icon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
