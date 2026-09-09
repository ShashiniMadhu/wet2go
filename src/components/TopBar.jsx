import { FREE_DELIVERY, formatRs } from '../data/site'
import Icon from './Icon'

export default function TopBar() {
  return (
    <div className="topbar">
      <p>
        <span className="topbar-offer">
          <Icon name="truck" /> FREE DELIVERY ON ORDERS OVER {formatRs(FREE_DELIVERY, { cents: false })}
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
        <a
          href="https://www.facebook.com/share/1EZV1yQpBK/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <Icon name="facebook" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
          <Icon name="tiktok" />
        </a>
      </div>
    </div>
  )
}
