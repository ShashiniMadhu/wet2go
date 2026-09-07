import Icon from './Icon'

export default function TopBar() {
  return (
    <div className="topbar">
      <p>
        <span>
          <Icon name="truck" /> FREE DELIVERY ON ORDERS OVER Rs. 2,500
        </span>
        <span className="bar">|</span>
        <span>
          <Icon name="drop" /> Waterproof. Ventilated. Travel Fresh.
        </span>
      </p>
      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Icon name="instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <Icon name="facebook" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
          <Icon name="tiktok" />
        </a>
      </div>
    </div>
  )
}
