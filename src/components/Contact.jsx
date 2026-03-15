import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section section-alt contact-mini">
      <div className="container">
        <div className="contact-mini-inner reveal">
          <p className="contact-mini-label">Open to cool projects &amp; collaborations</p>
          <a href="mailto:smritiregmi.m10@gmail.com" className="contact-email-link">
            <FaEnvelope />
            smritiregmi.m10@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
