import { useMemo, useState } from 'react'
import { FREE_DELIVERY, formatRs } from '../data/site'
import Icon from './Icon'

function DeliveryStatus({ cartTotal }) {
  const freeDelivery = cartTotal >= FREE_DELIVERY
  const progress = Math.min(100, (cartTotal / FREE_DELIVERY) * 100)

  return (
    <div className={`delivery-banner${freeDelivery ? ' applied' : ''}`}>
      <div className="delivery-banner-head">
        <Icon name="truck" />
        <strong>{freeDelivery ? 'Free delivery applied' : 'Unlock free delivery'}</strong>
      </div>
      <p>
        {freeDelivery
          ? `Your order is over ${formatRs(FREE_DELIVERY, { cents: false })}. Shipping is free.`
          : `Free delivery on orders over ${formatRs(FREE_DELIVERY, { cents: false })}. Add ${formatRs(FREE_DELIVERY - cartTotal)} more.`}
      </p>
      <div className="delivery-track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="delivery-meta">
        {formatRs(cartTotal)} of {formatRs(FREE_DELIVERY, { cents: false })}
      </p>
    </div>
  )
}

function CartTotals({ cartTotal }) {
  const freeDelivery = cartTotal >= FREE_DELIVERY

  return (
    <div className="cart-summary">
      <p>
        <span>Subtotal</span>
        <span>{formatRs(cartTotal)}</span>
      </p>
      <p className={freeDelivery ? 'delivery-line free' : 'delivery-line'}>
        <span>Delivery</span>
        <span>{freeDelivery ? 'FREE' : 'Standard'}</span>
      </p>
      <p className="total">
        <span>Total</span>
        <span>{formatRs(cartTotal)}</span>
      </p>
    </div>
  )
}

export default function CartDrawer({ open, cart, onClose, onUpdateQty, onClearCart }) {
  const [checkout, setCheckout] = useState(false)
  const [orderDone, setOrderDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })
  const [order, setOrder] = useState(null)

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty * item.price, 0),
    [cart],
  )

  const closeDrawer = () => {
    onClose()
    if (orderDone) {
      setOrderDone(false)
      setCheckout(false)
      setOrder(null)
      setForm({ name: '', email: '', phone: '', address: '' })
    }
  }

  if (!open) return null

  const placeOrder = (e) => {
    e.preventDefault()
    setOrder({
      id: `W2G-${Date.now().toString().slice(-6)}`,
      name: form.name,
      email: form.email,
      address: form.address,
      total: cartTotal,
      freeDelivery: cartTotal >= FREE_DELIVERY,
      items: cart.map((item) => ({ name: item.name, qty: item.qty })),
    })
    setOrderDone(true)
    onClearCart()
  }

  return (
    <div className="drawer-bg" onClick={closeDrawer} role="presentation">
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>{orderDone ? 'Order confirmed' : 'Your Cart'}</h2>
          <button type="button" onClick={closeDrawer} aria-label="Close cart">
            <Icon name="close" />
          </button>
        </header>
        {orderDone && order ? (
          <div className="order-success">
            <div className="order-success-icon">
              <Icon name="check" />
            </div>
            <h3>Thank you, {order.name.split(' ')[0]}!</h3>
            <p className="order-success-lead">
              Your Wet2Go order is in. We’ll email a confirmation to{' '}
              <strong>{order.email}</strong> within one working day.
            </p>
            <dl className="order-success-meta">
              <div>
                <dt>Order number</dt>
                <dd>{order.id}</dd>
              </div>
              <div>
                <dt>Order total</dt>
                <dd>{formatRs(order.total)}</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd className={order.freeDelivery ? 'free' : ''}>
                  {order.freeDelivery ? 'FREE' : 'Standard'}
                </dd>
              </div>
              <div>
                <dt>Ship to</dt>
                <dd>{order.address}</dd>
              </div>
            </dl>
            <ul className="order-success-items">
              {order.items.map((item) => (
                <li key={item.name}>
                  {item.name} × {item.qty}
                </li>
              ))}
            </ul>
            <p className="order-success-note">Pack wet. Travel fresh — we’ll see you on the next trip.</p>
            <button className="buy-btn wide" type="button" onClick={closeDrawer}>
              Continue shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : checkout ? (
          <form onSubmit={placeOrder} className="checkout">
            <DeliveryStatus cartTotal={cartTotal} />
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
            <CartTotals cartTotal={cartTotal} />
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
                  <p>{formatRs(item.price)}</p>
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
            <DeliveryStatus cartTotal={cartTotal} />
            <CartTotals cartTotal={cartTotal} />
            <button className="buy-btn wide" type="button" onClick={() => setCheckout(true)}>
              Checkout
            </button>
          </>
        )}
      </aside>
    </div>
  )
}
