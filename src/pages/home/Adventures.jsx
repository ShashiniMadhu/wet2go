import { ADVENTURES } from '../../data/site'
import Icon from '../../components/Icon'

export default function Adventures() {
  return (
    <section className="adventures">
      <h2>Designed for Every Adventure</h2>
      <div className="cards">
        {ADVENTURES.map((item) => (
          <article key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="card-icon">
              <Icon name={item.icon} />
            </div>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
