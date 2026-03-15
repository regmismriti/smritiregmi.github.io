import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import travelAnim from '../assets/lottie/Traveling Camera.json'
import splashAnim from '../assets/lottie/splashAnimation.json'
import booksAnim from '../assets/lottie/Books stack.json'

const tabs = [
  { id: 'reading', label: 'Reading List',        emoji: null, desc: 'Books that shaped the way I think',     lottie: booksAnim },
  { id: 'writing', label: 'Verses & Musings',    emoji: '🪶', desc: 'Poems and stories from quiet moments',  lottie: splashAnim },
  { id: 'travel',  label: 'Travel & Photography',emoji: null, desc: 'Moments captured across the world',     lottie: travelAnim },
]

export default function Hobbies() {
  const navigate = useNavigate()

  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="s-head">
          <p className="s-label">Beyond the Code</p>
          <h2 className="s-title">Hobbies &amp; Interests</h2>
          <p className="s-sub">Things that inspire, recharge, and define me outside of research</p>
        </div>

        <div className="hobby-cards-grid">
          {tabs.map(({ id, label, emoji, desc, lottie }) => (
            <button
              key={id}
              className="hobby-card-big reveal"
              onClick={() => id === 'writing' ? navigate('/verses') : id === 'travel' ? navigate('/gallery') : navigate('/reading')}
            >
              <div className="hobby-card-lottie">
                {lottie
                  ? <Player autoplay loop src={lottie} />
                  : <span className="hobby-card-emoji">{emoji}</span>
                }
              </div>
              <div className="hobby-card-info">
                <h3 className="hobby-card-title">{label}</h3>
                <p className="hobby-card-desc">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
