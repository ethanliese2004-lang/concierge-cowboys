const steps = [
  { num: '1', title: 'Welcome & Overview', desc: 'A quick intro, outline of what you\'ll learn, and answers to any initial questions. No pressure, no assumptions.' },
  { num: '2', title: 'Safety First', desc: 'The core safety principles that guide everything we do. You\'ll feel completely comfortable before we move forward.' },
  { num: '3', title: 'Hands-On Fundamentals', desc: 'How a firearm works — step by step — so you understand what you\'re doing and why.' },
  { num: '4', title: 'Guided Practice', desc: 'Controlled, supportive practice with clear instruction and feedback at your pace.' },
  { num: '5', title: 'Confidence Built', desc: 'By the end, you won\'t just understand the basics — you\'ll feel genuinely capable.' },
]

export default function FirstClass() {
  return (
    <section className="first-class-section" id="first-class">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">What to Expect</span>
          <h2>Your first class, <span>step by step.</span></h2>
          <p className="body-text" style={{ margin: '0 auto 44px', textAlign: 'center' }}>
            Designed to be clear, calm, and completely beginner-friendly from minute one.
          </p>
        </div>
        <div className="steps-list">
          {steps.map((s) => (
            <div key={s.num} className="step-item">
              <div className="step-num">{s.num}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 42, border: '1px solid var(--border)', padding: '24px 26px', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Rye',serif", color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            You won&apos;t be rushed, judged, or expected to know anything beforehand.
          </p>
        </div>
      </div>
    </section>
  )
}
