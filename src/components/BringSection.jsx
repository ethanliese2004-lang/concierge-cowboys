const items = [
  { icon: '👕', text: 'Comfortable Clothing' },
  { icon: '👟', text: 'Closed-Toe Shoes' },
  { icon: '🌟', text: 'A Willingness to Learn' },
]

export default function BringSection() {
  return (
    <section className="bring-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">What to Bring</span>
          <h2>Just <span>show up.</span></h2>
          <p className="body-text" style={{ margin: '0 auto 6px', textAlign: 'center' }}>
            We provide everything else you need.
          </p>
        </div>
        <div className="bring-grid">
          {items.map((item) => (
            <div key={item.text} className="bring-item">
              <div className="bring-icon">{item.icon}</div>
              <div className="bring-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
