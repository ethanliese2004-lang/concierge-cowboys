import { useEffect, useRef, useState } from 'react'
import heroNv from '../images/hero-nv.jpg'

const IMG_W = 1400, IMG_H = 933
const PORT_CX = 0.496, PORT_CY = 0.499
const PORT_RX = 0.29, PORT_RY = 0.345
const INTRO = 3800, EASE = 1800

function easeIO(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

function getPortholeDims(W, H) {
  const scale = Math.max(W / IMG_W, H / IMG_H)
  const rendW = IMG_W * scale, rendH = IMG_H * scale
  const offX = (W - rendW) / 2, offY = (H - rendH) / 2
  return {
    cx: offX + PORT_CX * rendW,
    cy: offY + PORT_CY * rendH,
    rx: PORT_RX * rendW,
    ry: PORT_RY * rendH,
  }
}

export default function Hero() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let startTime = null
    let cx = 0, cy = 0, rx = 0, ry = 0
    let easeStartX = 0, easeStartY = 0, easeStartTime = null
    let settled = false
    let rafId

    function loop(now) {
      if (!startTime) startTime = now
      const elapsed = now - startTime

      const W = canvas.width = hero.offsetWidth
      const H = canvas.height = hero.offsetHeight

      const port = getPortholeDims(W, H)
      const { cx: restX, cy: restY, rx: destRx, ry: destRy } = port
      const sweepR = (destRx + destRy) / 2

      if (elapsed < INTRO) {
        const t = elapsed / 1000
        cx = W * 0.5 + W * 0.14 * Math.sin(0.82 * t)
        cy = H * 0.5 + H * 0.10 * Math.sin(1.2 * t + 1.1)
        rx = sweepR; ry = sweepR
        easeStartX = cx; easeStartY = cy; easeStartTime = null
        settled = false
      } else if (!settled) {
        if (!easeStartTime) easeStartTime = now
        const et = Math.min((now - easeStartTime) / EASE, 1)
        const ease = easeIO(et)
        cx = easeStartX + (restX - easeStartX) * ease
        cy = easeStartY + (restY - easeStartY) * ease
        rx = sweepR + (destRx - sweepR) * ease
        ry = sweepR + (destRy - sweepR) * ease
        if (et >= 1) {
          settled = true
          setTimeout(() => setFadeIn(true), 600)
        }
      } else {
        cx = restX; cy = restY; rx = destRx; ry = destRy
      }

      ctx.clearRect(0, 0, W, H)

      ctx.save()
      ctx.fillStyle = 'rgb(0,0,0)'
      ctx.beginPath()
      ctx.rect(0, 0, W, H)
      ctx.ellipse(cx, cy, rx * 0.88, ry * 0.88, 0, 0, Math.PI * 2, true)
      ctx.fill('evenodd')
      ctx.restore()

      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(rx, ry)
      const feather = ctx.createRadialGradient(0, 0, 0.75, 0, 0, 1.0)
      feather.addColorStop(0, 'rgba(0,0,0,0)')
      feather.addColorStop(0.5, 'rgba(0,0,0,0.15)')
      feather.addColorStop(1, 'rgba(0,0,0,1)')
      ctx.fillStyle = feather
      ctx.beginPath()
      ctx.arc(0, 0, 1.0, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-photo-nv" id="heroNvLayer">
        <img src={heroNv} alt="" />
      </div>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}
      />
      <div className="hero-content">
        <div style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 1.8s ease' }}>
          <div className="hero-tagline">
            <div className="shoot-line"><span className="shoot-text">Shoot with Competence.</span></div>
            <span className="carry-line">Carry with Confidence.</span>
          </div>
        </div>
        <div className="hero-divider">★ ★ ★ ★ ★</div>
        <span className="hero-badge">Arizona&apos;s Premier Firearms Training</span>
        <p className="hero-sub" style={{ marginTop: 16 }}>
          Beginner-friendly firearms training built around safety, real-world skills, and genuine confidence — wherever you&apos;re starting from.
        </p>
        <div className="hero-ctas">
          <a href="#quote" className="btn-primary">Book Your First Class</a>
          <a href="#classes" className="btn-outline">See All Classes</a>
        </div>
        <p className="hero-trust"><span>✦</span> No experience needed <span>✦</span> Judgment-free <span>✦</span> Safety-first instruction</p>
      </div>
    </section>
  )
}
