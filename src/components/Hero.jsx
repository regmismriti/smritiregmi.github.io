import { useEffect, useRef, useState, useCallback } from 'react'
import Typed from 'typed.js'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Player } from '@lottiefiles/react-lottie-player'
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaGraduationCap, FaRocket, FaDownload } from 'react-icons/fa'
import codingAnim from '../assets/lottie/codingPerson.json'

const particleOptions = {
  fpsLimit: 60,
  particles: {
    number: { value: 55, density: { enable: true, area: 900 } },
    color: { value: ['#7c3aed', '#ec4899', '#06b6d4', '#10b981'] },
    shape: { type: 'circle' },
    opacity: { value: { min: 0.15, max: 0.45 }, animation: { enable: true, speed: 0.8, sync: false } },
    size: { value: { min: 1, max: 3.5 } },
    links: { enable: true, distance: 150, color: '#9ca3af', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1.4, direction: 'none', outModes: { default: 'out' } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 180, links: { opacity: 0.7 } },
      push: { quantity: 3 },
    },
  },
  detectRetina: true,
}

export default function Hero() {
  const typedEl = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Agentic AI Systems', 'Autonomous AI Agents', 'LLM-Powered Solutions', 'MLOps Pipelines', 'Research-Driven AI'],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
    })
    return () => typed.destroy()
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <section id="home" className="hero">
      {ready && (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particleOptions} />
      )}

      <div className="hero-inner container">
        <div className="hero-text reveal">
          <p className="hero-greeting">Hi <span className="wave">👋</span>, I'm</p>
          <h1 className="hero-name">Smriti Regmi</h1>
          <h2 className="hero-role">
            I build&nbsp;<em><span ref={typedEl} /></em>
          </h2>
          <p className="hero-desc">
            AI Researcher &amp; ML Engineer specializing in agentic systems, large language models,
            and production MLOps pipelines — turning research into intelligent real-world solutions.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>
              <FaRocket /> View Projects
            </a>
            {/* <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
              <FaDownload /> Resume
            </a> */}
          </div>
          <div className="hero-socials">
            {[
              { href: 'https://github.com/regmismriti', icon: <FaGithub />, label: 'GitHub' },
              { href: 'http://linkedin.com/in/smriti-regmi-596b36197/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
              { href: 'https://scholar.google.com/citations?user=O08rXU8AAAAJ&hl=en', icon: <FaGraduationCap />, label: 'Google Scholar' },
              // { href: 'https://twitter.com/smritiregmi', icon: <FaTwitter />, label: 'Twitter' },
              { href: 'mailto:smritiregmi.m10@gmail.com', icon: <FaEnvelope />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} className="social-pill" title={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-lottie reveal">
          <Player autoplay loop src={codingAnim} />
        </div>
      </div>

      <div className="scroll-down" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <p>Scroll Down</p>
      </div>
    </section>
  )
}
