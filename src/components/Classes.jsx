import carouselLeft from '../images/IMG_2806.jpg'
import carouselRight from '../images/carousel-right.jpg'

const classes = [
  {
    tag: 'Beginner · 2-Hour Classroom',
    title: 'CCW Class',
    price: 80,
    desc: 'A roughly 2-hour classroom-only course designed to help you earn your concealed carry permit and truly understand the fundamentals. You\'ll learn safe carry principles, Arizona CCW law, and walk away with a personalized home protection plan.',
    bring: 'Jeans, T-shirt, notepad.',
    popular: false,
  },
  {
    tag: 'Beginner · Classroom + Range',
    title: 'CCW Class + Range Time',
    price: 175,
    desc: 'Everything in the standard CCW class plus a 50-round live range qualification to apply your knowledge in real conditions. You leave with both a permit-ready education and proven trigger time.',
    bring: 'Jeans, T-shirt, closed-toe shoes, handgun, 50 rounds. A handgun can be provided at the request of the student for an extra charge of $20 for ammo. Eyes and ears provided.',
    popular: true,
    descHighlight: true,
  },
  {
    tag: 'Beginner · Rifle + Range',
    title: 'Rifle Range Class',
    price: 180,
    desc: 'A foundational rifle course covering safe handling, proper manipulation, and the core mechanics of operating a rifle with confidence. Live range time is built in to reinforce everything learned.',
    bring: 'Jeans, T-shirt, closed-toe shoes, rifle, 200 rounds. A rifle can be provided for an extra charge of $100 for ammo.',
    popular: false,
  },
  {
    tag: 'Advanced · Night Vision · No Live Fire',
    title: 'Night Vision 101',
    price: 250,
    desc: 'Learn how to walk, run, read, and handle a firearm under NVGs. No live fire — empty rifles and dummy guns throughout. Explore rifle set-ups for night vision and develop a solid understanding of height over bore. Required before Night Vision 202.',
    bring: 'Jeans, T-shirt, closed-toe shoes, pen and notepad. Night vision provided — white phosphor dual tube analog night vision, both Gen 2+ and Gen 3 available.',
    popular: false,
  },
  {
    tag: 'Advanced · Night Vision · Live Fire',
    title: 'Night Vision 202',
    price: 450,
    desc: 'Experience analog night vision with dual tubes, IR lights, and IR lasers. Shoot both passively and actively, and deepen your mastery of height over bore. Rifle and night vision provided. NV 101 prerequisite required.',
    bring: 'Jeans, T-shirt, closed-toe shoes. Rifle and night vision will be provided.',
    popular: false,
  },
  {
    tag: 'Private · Fully Custom',
    title: '1 v 1 Coaching',
    price: '125/hr',
    desc: 'A personalized coaching session built entirely around you. Buying your first gun, learning to shoot, cleaning your firearm, or anything in between — no limitations to the service we can provide.',
    bring: 'Based on your needs, we will discuss a plan of action and tailor what to bring based on what we are doing.',
    popular: false,
  },
]

export default function Classes() {
  return (
    <section className="carousel-section" id="classes">
      <div className="carousel-header-inner">
        <div className="carousel-side-photo carousel-side-photo--left">
          <img src={carouselLeft} alt="" />
        </div>
        <div className="carousel-header-text">
          <span className="section-label">All Programs &amp; Pricing</span>
          <h2>Find the class that&apos;s <span>right for you.</span></h2>
        </div>
        <div className="carousel-side-photo carousel-side-photo--right">
          <img src={carouselRight} alt="" />
        </div>
      </div>
      <div className="cards-grid">
        {classes.map((cls) => (
          <div key={cls.title} className={`class-card${cls.popular ? ' card-popular' : ''}`}>
            <span className="card-tag">{cls.tag}</span>
            <div className="card-title">{cls.title}</div>
            <div className="card-price"><sup>$</sup>{cls.price}</div>
            <div className="card-body">
              <p className="card-desc">{cls.desc}</p>
              <p className="card-bring"><strong>What to bring:</strong> {cls.bring}</p>
              <a href="#quote" className="card-cta">Book This Class →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
