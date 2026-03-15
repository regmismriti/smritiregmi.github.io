import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">&lt;SR/&gt;</span>
          <div className="footer-socials">
            {[
              { href: 'https://github.com/smritiregmi',        Icon: FaGithub,     label: 'GitHub' },
              { href: 'https://linkedin.com/in/smritiregmi',   Icon: FaLinkedinIn, label: 'LinkedIn' },
              { href: 'https://twitter.com/smritiregmi',       Icon: FaTwitter,    label: 'Twitter' },
              { href: 'mailto:smriti.regmi@email.com',         Icon: FaEnvelope,   label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} title={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
          <p style={{ fontSize: '.88rem', color: '#a78bfa' }}>
            Designed &amp; Built with <span className="footer-heart">♥</span> by{' '}
            <strong style={{ color: '#c4b5fd' }}>Smriti Regmi</strong>
          </p>
          <p className="footer-copy">© 2025 Smriti Regmi · All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
