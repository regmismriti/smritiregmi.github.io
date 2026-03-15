import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'AI Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // active section tracking
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY + 90 >= s.offsetTop) cur = s.id
      })
      if (cur) setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={() => handleLink('#home')}>
          &gt; _
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
                href={href}
                onClick={(e) => { e.preventDefault(); handleLink(href) }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className={`nav-link${active === 'contact' ? ' active' : ''}`}
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLink('#contact') }}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
