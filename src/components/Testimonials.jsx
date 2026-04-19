const testimonials = [
  'I was intimidated before I came in. Now I feel completely different — confident, informed, and actually excited about my next session.',
  'They explain everything without making you feel dumb. The pace was perfect and I never felt rushed or pressured. Highly recommend.',
  'This is exactly what beginners need. Real instruction, real patience, and real results. I left with skills I\'ll use for life.',
]

export default function Testimonials() {
  return (
    <section className="testi-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Student Stories</span>
          <h2>What Our Students <span>Say</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((txt, i) => (
            <div key={i} className="testi-card">
              <div className="testi-q">&ldquo;</div>
              <p className="testi-txt">{txt}</p>
              <div className="testi-stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
