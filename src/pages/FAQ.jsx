import { useState } from 'react'
import { FAQS } from '../data/site'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="faq-intro">
        <p className="section-kicker">Still curious?</p>
        <h2>Questions, answered</h2>
        <p>
          Everything you need to know about packing wet, staying fresh, and getting Wet2Go to your
          door.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <button
            key={item.q}
            type="button"
            className={openFaq === i ? 'open' : ''}
            onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
          >
            <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="faq-body">
              <span className="faq-q">{item.q}</span>
              <span className="faq-a">{item.a}</span>
            </span>
            <span className="faq-toggle" aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  )
}
