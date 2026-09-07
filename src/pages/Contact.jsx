import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/site'
import Icon from '../components/Icon'

export default function Contact() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' })
  const [contactSent, setContactSent] = useState(false)

  const sendContact = (e) => {
    e.preventDefault()
    setContactSent(true)
  }

  return (
    <section id="contact" className="contact">
      <p className="section-kicker">Say hello</p>
      <h2>Contact Us</h2>

      <div className="contact-grid">
        <aside className="contact-panel">
          <h3>Let’s keep your travels fresh</h3>
          <p>
            Questions about colours, delivery, or how the water pouch works? Drop us a note — we
            usually reply within one working day.
          </p>
          <ul>
            <li>
              <Icon name="mail" />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </li>
            <li>
              <Icon name="phone" />
              <div>
                <strong>Phone</strong>
                <a href="tel:+94112345678">+94 11 234 5678</a>
              </div>
            </li>
            <li>
              <Icon name="pin" />
              <div>
                <strong>Studio</strong>
                <span>Colombo, Sri Lanka</span>
              </div>
            </li>
          </ul>
        </aside>

        {contactSent ? (
          <div className="thanks-card">
            <h3>Message sent</h3>
            <p>
              Thanks {contact.name}. We’ll get back to you at {contact.email} shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={sendContact}>
            <label>
              Name
              <input
                required
                placeholder="Your name"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </label>
            <div className="contact-row">
              <label>
                Email
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
              </label>
              <label>
                Phone
                <input
                  required
                  placeholder="07X XXX XXXX"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
              </label>
            </div>
            <label>
              Message
              <textarea
                required
                rows="4"
                placeholder="How can we help?"
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
              />
            </label>
            <button className="buy-btn" type="submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
