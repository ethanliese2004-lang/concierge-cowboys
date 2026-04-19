import footerLogo from '../images/footer-logo.jpg'

export default function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Concierge Cowboys" />
      <p className="foot-tag">★ Shoot with Competence. Carry with Confidence. ★</p>
      <p>&copy; 2025 Concierge Cowboys. All rights reserved.</p>
      <p style={{ marginTop: 6, fontSize: 11, color: 'rgba(158,134,95,0.4)' }}>Safety-First Firearms Instruction · Arizona</p>
    </footer>
  )
}
