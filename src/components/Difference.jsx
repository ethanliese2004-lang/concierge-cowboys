const points = [
  { num: '01', title: 'Beginner-First Approach', body: 'We meet you exactly where you are and build skill step by step — no assumptions, no shortcuts, no intimidation.' },
  { num: '02', title: 'Safety Is the Foundation', body: 'Everything we teach starts with control, awareness, and responsibility. Safety isn\'t a module — it\'s the framework of every lesson.' },
  { num: '03', title: 'Real-World Focus', body: 'We teach how to think, not just how to shoot. Our curriculum prepares you for real-world scenarios with clarity and calm.' },
  { num: '04', title: 'Supportive Environment', body: 'No pressure. No judgment. Ask anything. Our instructors are here to guide you, and questions are always encouraged.' },
]

export default function Difference() {
  return (
    <section className="diff-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className="section-label">What Makes Us Different</span>
          <h2>Training built for <span>you.</span></h2>
        </div>
        <div className="diff-grid">
          {points.map((p) => (
            <div key={p.num} className="diff-card">
              <div className="diff-num">{p.num}</div>
              <div className="diff-title">{p.title}</div>
              <p className="diff-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
