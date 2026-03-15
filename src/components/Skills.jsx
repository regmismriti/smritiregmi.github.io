import { useState } from 'react'
import {
  FaBrain, FaRobot, FaSearch, FaDatabase, FaEye, FaFont,
  FaMagic, FaCode, FaTerminal, FaPlug, FaAws,
} from 'react-icons/fa'
import {
  SiOpenai, SiDocker, SiPython, SiPytorch, SiTensorflow,
  SiGit, SiLinux, SiFastapi, SiScikitlearn, SiOpencv, SiJupyter,
  SiNumpy, SiPandas,
} from 'react-icons/si'
import { MdAccountTree } from 'react-icons/md'
import useReveal from '../hooks/useReveal'

const mk = (icon, name, bg, color) => ({ icon, name, bg, color })

const tabs = [
  {
    id: 'ml-core', label: 'ML & Deep Learning', icon: <FaBrain />,
    skills: [
      mk(<SiPytorch />,     'PyTorch',          '#fef2f2', '#dc2626'),
      mk(<SiTensorflow />,  'TensorFlow',        '#fffbeb', '#d97706'),
      mk(<FaRobot />,       'HuggingFace',       '#fffbeb', '#f59e0b'),
      mk(<SiScikitlearn />, 'Scikit-learn',      '#fffbeb', '#d97706'),
      mk(<FaEye />,         'Computer Vision',   '#ede9fe', '#7c3aed'),
      mk(<FaFont />,        'NLP',               '#eff6ff', '#3b82f6'),
      mk(<SiOpencv />,   'OpenCV',          '#ecfdf5', '#059669'),
      mk(<SiNumpy />,    'NumPy',           '#eff6ff', '#3b82f6'),
      mk(<SiPandas />,   'Pandas',          '#ede9fe', '#7c3aed'),
    ],
  },
  {
    id: 'llm', label: 'LLM & Agentic AI', icon: <FaRobot />,
    skills: [
      mk(<SiOpenai />,       'OpenAI API',         '#ecfdf5', '#059669'),
      mk(<FaBrain />,        'LangChain',          '#ede9fe', '#7c3aed'),
      mk(<MdAccountTree />,  'LangGraph',          '#f3e8ff', '#9333ea'),
      mk(<FaSearch />,       'RAG Systems',        '#eff6ff', '#3b82f6'),
      mk(<FaDatabase />,     'Vector Databases',   '#e0f7fa', '#0891b2'),
      mk(<FaMagic />,        'Prompt Engineering', '#fffbeb', '#f59e0b'),
    ],
  },
  {
    id: 'tools', label: 'Tools & Programming', icon: <FaCode />,
    skills: [
      mk(<SiPython />,   'Python',      '#eff6ff', '#3b82f6'),
      mk(<FaDatabase />, 'SQL',         '#e0f7fa', '#0891b2'),
      mk(<SiGit />,      'Git',         '#fef2f2', '#dc2626'),
      mk(<SiDocker />,   'Docker',      '#eff6ff', '#2563eb'),
      mk(<SiFastapi />,  'FastAPI',     '#ecfdf5', '#059669'),
      mk(<SiJupyter />,  'Jupyter',     '#fffbeb', '#d97706'),
      mk(<SiLinux />,    'Linux',       '#fffbeb', '#f59e0b'),
      mk(<FaTerminal />, 'Bash / Shell','#ecfdf5', '#059669'),
      mk(<FaPlug />,     'REST APIs',   '#eff6ff', '#3b82f6'),
      mk(<FaAws />,      'AWS',         '#fffbeb', '#d97706'),
      mk(<FaCode />,     'Gradio',      '#fce7f3', '#ec4899'),
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)
  const ref = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="s-head">
          <p className="s-label">What I Know</p>
          <h2 className="s-title">Skills &amp; Technologies</h2>
          <p className="s-sub">ML engineering with hands-on experience in deep learning, computer vision, and LLM-based systems</p>
        </div>

        <div className="skills-tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`tab-btn${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div ref={ref}>
          {tabs.map((t, i) => (
            <div key={t.id} className={`tab-panel${active === i ? ' active' : ''}`}>
              <div className="skills-grid">
                {t.skills.map(({ icon, name, bg, color }) => (
                  <div className="skill-card reveal" key={name}>
                    <div className="skill-icon-wrap" style={{ background: bg, color }}>
                      {icon}
                    </div>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
