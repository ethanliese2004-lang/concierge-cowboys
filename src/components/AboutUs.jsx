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
              Ethan is an Arizona native who studied communications at ASU and is very knowledgeable and passionate about all courses and topics provided. He lives on his horse ranch in Cave Creek, managing and working horses by day and shooting under analog at night. He is dedicated to his work and wants to share his love for the industry with everyone.
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
