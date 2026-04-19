import { useState } from 'react'

const classOptions = [
  { label: 'CCW Class', price: '$80', value: 'CCW Class - $80' },
  { label: 'CCW + Range Time', price: '$175', value: 'CCW + Range Time - $175' },
  { label: 'Rifle Range Class', price: '$50', value: 'Rifle Range Class - $50' },
  { label: 'Night Vision 101', price: '$200', value: 'Night Vision 101 - $200' },
  { label: 'Night Vision 202', price: '$250', value: 'Night Vision 202 - $250' },
  { label: '1 v 1 Coaching', price: '$100', value: '1v1 Coaching - $100' },
]

export default function QuoteForm() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', classes: [], experience: '', timeframe: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm(f => ({ ...f, classes: checked ? [...f.classes, value] : f.classes.filter(c => c !== value) }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = new URLSearchParams({ 'form-name': 'quote-request', ...form, classes: form.classes.join(', ') })
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  if (submitted) {
    return (
      <section className="quote-section" id="quote">
        <div className="quote-inner" style={{ textAlign: 'center' }}>
          <h2>We&apos;ll be in touch <span>within 24 hours.</span></h2>
          <p className="body-text" style={{ margin: '16px auto 0', textAlign: 'center' }}>Thanks for reaching out — we look forward to working with you.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-section" id="quote">
      <div className="quote-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Get a Quote</span>
          <h2>Tell us what you <span>need.</span></h2>
          <p className="body-text" style={{ margin: '0 auto 4px', textAlign: 'center' }}>
            Select the class(es) you&apos;re interested in and we&apos;ll respond within 24 hours.
          </p>
        </div>
        <div className="form-box">
          <form name="quote-request" onSubmit={handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="quote-request" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fn">First Name *</label>
                <input type="text" id="fn" name="first_name" placeholder="John" required value={form.first_name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ln">Last Name *</label>
                <input type="text" id="ln" name="last_name" placeholder="Smith" required value={form.last_name} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="em">Email *</label>
                <input type="email" id="em" name="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ph">Phone</label>
                <input type="tel" id="ph" name="phone" placeholder="(480) 555-0100" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Classes I&apos;m Interested In *</label>
              <div className="classes-grid">
                {classOptions.map((opt) => (
                  <label key={opt.value} className="class-opt">
                    <input type="checkbox" name="classes" value={opt.value} checked={form.classes.includes(opt.value)} onChange={handleChange} />
                    <div>
                      <div className="co-name">{opt.label}</div>
                      <div className="co-price">{opt.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="exp">Experience Level</label>
                <select id="exp" name="experience" value={form.experience} onChange={handleChange}>
                  <option value="">Select your level...</option>
                  <option>Complete Beginner</option>
                  <option>Some Experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="when">Preferred Timeframe</label>
                <select id="when" name="timeframe" value={form.timeframe} onChange={handleChange}>
                  <option value="">Select timeframe...</option>
                  <option>As soon as possible</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>I&apos;m flexible</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="msg">Anything Else?</label>
              <textarea id="msg" name="message" placeholder="Questions, group size, scheduling needs..." value={form.message} onChange={handleChange} />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-primary">Send My Quote Request →</button>
              <p style={{ marginTop: 13, color: 'var(--muted)', fontSize: 11, letterSpacing: '0.05em' }}>
                We respond within 24 hours. No experience needed to reach out.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
