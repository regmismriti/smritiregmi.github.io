import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaFeatherAlt } from 'react-icons/fa'

// Add your poems and stories here
const writings = [
  {
    id: 1,
    type: 'poem',
    title: 'Reflections',
    date: 'March 2024',
    body: `Isn't it weird?
How one soul 
Can be seen so differently?
For some, you're cold-hearted,
An icy breeze in a winter morning
While others find the warmth
An illumination when hope seems gone.
Some see an introvert,
Quite lost in thought
Whilst others see an extrovert,
In every room you're sought.
To some you're childish,
With lively dreams that never age,
Yet others find your wisdom
Hard & heavy to comprehend.
Some paint your soul as pure,
Untouched, as a pristine bright light
Whilst others see your essence
As a moon, both scarred and bright.
People and their perceptions,
A kaleidoscope of views,
Am I a prism refracting
Or a canvas of myriad hues?`,
  },
  {
    id: 2,
    type: 'poem',
    title: 'Death',
    date: 'January 2024',
    body: `Colors once vibrant are now dim in my sight
Lost in the shadow's of sorrow's endless night.
What Karmas, what debts from lives gone by,
Have woven the fabric of this hopeless sky?
My best friend battled with life
Giving one hell of a fight
Against the grip of cancer's might.
Jealousy murmurs, bitter and sore,
For she found peace forevermore.
Thanks to death, her struggles cease,
Freed at last, she found release.
For each day, I wonder in the quite embrace of eternal rest,
Do we drift in solitude where whispers of peace forever endure?
Feeling truly blessed?
Or face the dawn of pain once more,
Where whispers of suffering are constant, relentless, and sure?
`,
  },
  // Add more poems or stories below:
  {
    id: 3,
    type: 'story',
    title: 'Rideeeee',
    date: 'February 2024',
    body: `Why's Patience so tough to keep?
Anxious folks, why must they leap?
Life's tough, it's true every time,
Unpredictable, no reason or rhyme.
Each day's a gamble, no sure bet,
Pushing forward, trying to forget.
Is there an end to this loop we're in?
Or just more struggles, more to begin.
For sure, life's short; we can't predict the end
So why not live each second being each other's friend?
Every day I wonder why?
If life's so full of lows, why still try?
Searching for a grace in this crazy race
Hoping for calm in this hectic place
Hoping for a calm in this hectic place…`,
  },
]

export default function Verses() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const entry = selected !== null ? writings.find(w => w.id === selected) : null

  return (
    <div className="verses-page">
      {/* Nav */}
      <nav className="verses-nav">
        <button className="verses-back" onClick={() => selected !== null ? setSelected(null) : navigate(-1)}>
          <FaArrowLeft /> {selected !== null ? 'All Writings' : 'Back to Portfolio'}
        </button>
        <span className="verses-nav-title"><FaFeatherAlt /> Verses &amp; Musings</span>
      </nav>

      {/* List view */}
      {entry === null && (
        <div className="verses-container">
          <div className="verses-header">
            <h1 className="verses-title">Verses &amp; Musings</h1>
            <p className="verses-sub">Poems, reflections, and random thoughts from the in-between moments.</p>
          </div>
          <div className="verses-list">
            {writings.map(({ id, type, title, date, body }) => (
              <button key={id} className="verse-item" onClick={() => setSelected(id)}>
                <div className="verse-item-type">{type}</div>
                <div className="verse-item-main">
                  <h3 className="verse-item-title">{title}</h3>
                  <p className="verse-item-preview">{body.split('\n')[0]}...</p>
                </div>
                <span className="verse-item-date">{date}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Single entry view */}
      {entry !== null && (
        <div className="verses-container verses-single">
          <div className="verse-type-badge">{entry.type}</div>
          <h1 className="verse-full-title">{entry.title}</h1>
          <p className="verse-full-date">{entry.date}</p>
          <div className="verse-divider" />
          <pre className="verse-full-body">{entry.body}</pre>
        </div>
      )}
    </div>
  )
}
