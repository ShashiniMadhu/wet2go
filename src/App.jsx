import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import HowItWorks from './pages/HowItWorks'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.color === item.color)
      if (existing) {
        return prev.map((entry) =>
          entry.color === item.color ? { ...entry, qty: entry.qty + item.qty } : entry,
        )
      }
      return [...prev, item]
    })
    setCartOpen(true)
  }

  const updateCartQty = (id, next) => {
    setCart((prev) =>
      prev
        .map((item) => (item.color === id ? { ...item, qty: next } : item))
        .filter((item) => item.qty > 0),
    )
  }

  return (
    <div className="page">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Home />
      <About />
      <Product onAddToCart={addToCart} />
      <HowItWorks />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateCartQty}
        onClearCart={() => setCart([])}
      />
    </div>
  )
}
