import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogVlog() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">Vlog</span>
        <h1 className="bp-title">A Week in the Life of an AI Researcher</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> March 5, 2025</span>
          <span><FaClock /> 5 min watch</span>
          <span><FaTag /> Research Life, AI, Vlog</span>
        </div>

        <div className="bp-body">
          <p>People often imagine AI research as a glamorous montage of breakthrough moments — neural networks converging, papers getting accepted, robots coming to life. The reality is quieter, messier, and honestly a lot more interesting.</p>

          <p>This week I decided to document what my days actually look like — the reading, the debugging, the coffee, and the occasional moment where something finally works.</p>

          {/* Replace the src below with your actual video embed URL */}
          <div className="vlog-embed-wrap">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="A Week in the Life of an AI Researcher"
              allowFullScreen
            />
          </div>

          <h2>Monday — Paper Reading Day</h2>
          <p>Every Monday I dedicate 3–4 hours to reading new papers from arXiv. This week's queue included two papers on linear attention approximations and one on mixture-of-experts routing strategies. I take notes in Obsidian and tag everything — it's the only way to keep track across months of research.</p>

          <h2>Tuesday & Wednesday — Experiments</h2>
          <p>I've been running ablations on a medical image segmentation model. Tuesday was mostly setting up the experiment config and debugging a shape mismatch that turned out to be a single transposed dimension. Wednesday the runs finally completed — results were mixed, which usually means the interesting work is just beginning.</p>

          <h2>Thursday — Writing</h2>
          <p>Writing is the hardest part. Translating results into coherent prose that reviewers will understand takes longer than the experiments themselves. I spent most of Thursday restructuring the related work section of a paper we're submitting next month.</p>

          <h2>Friday — Community & Reflection</h2>
          <p>Fridays I try to step back. I read blog posts, watch talks, and sometimes just sit with the bigger picture questions — why does this work? what would I do differently? what should I read next week?</p>

          <div className="bp-callout">
            <strong>Honest take:</strong> Research is 80% slow, uncertain, iterative work and 20% moments of genuine excitement. Both parts are necessary. The slow parts are where the real thinking happens.
          </div>

          <blockquote>
            The best researchers I know are not the ones with the most publications — they're the ones who stay genuinely curious even when nothing is working.
          </blockquote>
        </div>

        <div className="bp-author">
          <div className="bp-avatar">SR</div>
          <div>
            <p className="bp-author-name">Smriti Regmi</p>
            <p className="bp-author-bio">AI Researcher & ML Engineer specializing in agentic systems and large language models. Documenting the honest side of research life.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
