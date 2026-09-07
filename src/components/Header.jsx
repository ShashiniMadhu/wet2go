import { useEffect, useRef, useState } from 'react'
import { NAV } from '../data/site'
import { scrollToId } from '../utils/scroll'
import Icon from './Icon'
import Logo from './Logo'
import TopBar from './TopBar'

export default function Header({ cartCount, onOpenCart }) {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const headRef = useRef(null)

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const syncHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    }
    syncHeight()
    const observer = new ResizeObserver(syncHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const offset = 140
      let current = 'home'
      for (const item of NAV) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= offset) current = item.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <div className="sticky-head" ref={headRef}>
      <TopBar />
      <header className="nav">
        <Logo />
        <nav className={menuOpen ? 'open' : ''}>
          {NAV.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? 'active' : ''}
              onClick={() => go(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="cart-btn" type="button" onClick={onOpenCart} aria-label="Open cart">
            <Icon name="bag" />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <button className="buy-btn" type="button" onClick={() => go('product')}>
            <Icon name="bag" /> Buy Now
          </button>
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>
    </div>
  )
}
