export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="section-inner">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ fontSize: '0.85rem' }}>About Us</span>
          <p className="body-text" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: '720px' }}>
            Concierge Cowboys wants to bring the knowledge and experience of shooting under night vision to the general public. We provide everything from the night vision units themselves, rifles, and custom shooting ranges to exceed and provide an immersive experience into the world of analog night vision. We offer classroom courses, shooting instruction, CCW classes, rifle courses, night vision off road adventures, shooting under NODs, and one on one coaching sessions to meet everyone's need — whether you are brand new to firearms or very experienced and want to expand your expertise, we will guarantee satisfaction and a once in a lifetime shooting experience.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-label" style={{ fontSize: '0.85rem' }}>Our Instructors</span>
        </div>

        <div className="instructors-grid">
          <div className="instructor-card">
            <span className="instructor-role">CEO &amp; Founder</span>
            <h3 className="instructor-name">Ethan</h3>
            <p className="instructor-bio">
              Ethan is a USCCA-certified firearms instructor and Arizona native who brings real-world experience and professional-level expertise to every course he teaches. With a clear, engaging style and a strong command of the material, he turns complex concepts into practical skills students can confidently apply.
            </p>
            <p className="instructor-bio" style={{ marginTop: '14px' }}>
              As co-owner and manager of Copper Sky Ranch in Cave Creek, Ethan pairs his work in firearms training with hands-on experience managing and working horses — an environment that reinforces discipline, situational awareness, and leadership. By night, he continues refining his craft, often training under night vision, where technical precision meets adaptability in low-light conditions.
            </p>
            <p className="instructor-bio" style={{ marginTop: '14px' }}>
              Ethan is dedicated to developing capable, responsible shooters. His instruction goes beyond the basics, focusing on mindset, safety, and real-world application. If you want training that's grounded, effective, and built on experience — not theory — Ethan delivers.
            </p>
            <p className="instructor-bio" style={{ marginTop: '14px' }}>
              Follow his work on Instagram at <a href="https://www.instagram.com/conciergecowboys" target="_blank" rel="noreferrer" className="instructor-handle">@conciergecowboys</a>.
            </p>
          </div>
          <div className="instructor-card">
            <span className="instructor-role">Co-Instructor</span>
            <h3 className="instructor-name">Dylan</h3>
            <p className="instructor-bio">
              Dylan is an Arizona native and Cave Creek local with a penchant for night vision. He grew up on a quarter horse ranch and went on to study economics and Greco-Roman history at ASU. He's worked in adventure guiding, NV-industry T&amp;E, and begun creating content as <a href="https://www.instagram.com/whohauntsyou" target="_blank" rel="noreferrer" className="instructor-handle">@whohauntsyou</a>.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
