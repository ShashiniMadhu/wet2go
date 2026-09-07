import { useMemo, useState } from 'react'
import Icon from './Icon'

export default function CartDrawer({ open, cart, onClose, onUpdateQty, onClearCart }) {
  const [checkout, setCheckout] = useState(false)
  const [orderDone, setOrderDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })

  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0)

  const deliveryNote = useMemo(() => {
    if (cartTotal >= 2500) return 'Free delivery applied.'
    if (cartTotal === 0) return 'Free delivery on orders over Rs. 2,500.'
    return `Add Rs. ${(2500 - cartTotal).toLocaleString()} more for free delivery.`
  }, [cartTotal])

  if (!open) return null

  const placeOrder = (e) => {
    e.preventDefault()
    setOrderDone(true)
    onClearCart()
  }

  return (
    <div className="drawer-bg" onClick={onClose} role="presentation">
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>Your Cart</h2>
          <button type="button" onClick={onClose} aria-label="Close cart">
            <Icon name="close" />
          </button>
        </header>
        {orderDone ? (
          <p className="thanks">Order placed. We will confirm by email shortly.</p>
        ) : cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : checkout ? (
          <form onSubmit={placeOrder} className="checkout">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              required
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              required
              rows="3"
              placeholder="Delivery address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <p className="total">Total: Rs. {cartTotal.toLocaleString()}</p>
            <p className="note">{deliveryNote}</p>
            <button className="buy-btn wide" type="submit">
              Place Order
            </button>
          </form>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.color}>
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <p>Rs. {item.price.toLocaleString()}</p>
                  <div className="qty-row small">
                    <button type="button" onClick={() => onUpdateQty(item.color, item.qty - 1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => onUpdateQty(item.color, item.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <p className="total">Total: Rs. {cartTotal.toLocaleString()}</p>
            <p className="note">{deliveryNote}</p>
            <button className="buy-btn wide" type="button" onClick={() => setCheckout(true)}>
              Checkout
            </button>
          </>
        )}
      </aside>
    </div>
  )
}
