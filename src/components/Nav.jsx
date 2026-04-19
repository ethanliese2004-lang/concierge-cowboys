import { useState } from 'react'
import navLogo from '../images/nav-logo.jpg'

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY
  const diff = targetY - startY
  let startTime = null
  function step(now) {
    if (!startTime) startTime = now
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo({ top: startY + diff * easeInOutCubic(progress), behavior: 'instant' })
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function handleNavClick(e, href, close) {
  close()
  if (href === '#') { e.preventDefault(); smoothScrollTo(0); return }
  const target = document.querySelector(href)
  if (!target) return
  e.preventDefault()
  smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - 80)
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="site-nav">
      <a className="nav-logo" href="#" onClick={(e) => handleNavClick(e, '#', close)}>
        <img src={navLogo} alt="Concierge Cowboys" />
        <span className="nav-wordmark">Concierge<br />Cowboys</span>
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="#classes" onClick={(e) => handleNavClick(e, '#classes', close)}>Classes</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about', close)}>About</a></li>
        <li><a href="#first-class" onClick={(e) => handleNavClick(e, '#first-class', close)}>First Class</a></li>
        <li><a href="#quote" className="nav-book" onClick={(e) => handleNavClick(e, '#quote', close)}>Book Now</a></li>
      </ul>

      {/* Hamburger button */}
      <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={`hamburger-bar${open ? ' open' : ''}`} />
        <span className={`hamburger-bar${open ? ' open' : ''}`} />
        <span className={`hamburger-bar${open ? ' open' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="nav-mobile-menu">
          <a href="#classes" onClick={(e) => handleNavClick(e, '#classes', close)}>Classes</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about', close)}>About</a>
          <a href="#first-class" onClick={(e) => handleNavClick(e, '#first-class', close)}>First Class</a>
          <a href="#quote" onClick={(e) => handleNavClick(e, '#quote', close)}>Book Now</a>
        </div>
      )}
    </nav>
  )
}
