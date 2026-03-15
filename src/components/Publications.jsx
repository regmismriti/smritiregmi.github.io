import { FaBookOpen } from 'react-icons/fa'

const pubs = [
  {
    year: '2023',
    title: 'Vision transformer for efficient chest x-ray and gastrointestinal image classification',
    authors: 'Smriti Regmi, Aliza Subedi, Nikhil Kumar Tomar, Ulas Bagci, Debesh Jha',
    venue: 'Medical Imaging 2025: Computer-Aided Diagnosis',
    tags: ['Vision Transformer', 'Medical Imaging', 'X-Ray', 'GI Imaging', 'Classification'],
    scholarUrl: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13407/134073N/Vision-transformer-for-efficient-chest-x-ray-and-gastrointestinal-image/10.1117/12.3045810.short',
  },
  {
    year: '2024',
    title: 'Classification of endoscopy and video capsule images using CNN-transformer model',
    authors: 'Aliza Subedi, Smriti Regmi, Nisha Regmi, Bhumi Bhusal, Ulas Bagci, Debesh Jha',
    venue: 'MICCAI Workshop on Cancer Prevention through Early Detection',
    tags: ['CNN', 'Transformer', 'Endoscopy', 'Capsule Endoscopy', 'Cancer Detection'],
    scholarUrl: 'https://link.springer.com/chapter/10.1007/978-3-031-73376-5_3',
  },
  {
    year: '2025',
    title: 'Optimizing Neural Network Effectiveness via Non-monotonicity Refinement',
    authors: 'Koushik Biswas, Amit Reza, Meghana Karri, Debesh Jha, Hongyi Pan, Nikhil Tomar, Aliza Subedi, Smriti Regmi, Ulas Bagci',
    venue: '2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)',
    tags: ['Neural Networks', 'Activation Functions', 'Non-monotonicity', 'WACV', 'Optimization'],
    scholarUrl: 'https://ieeexplore.ieee.org/abstract/document/10943303/',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="section section-alt">
      <div className="container">
        <div className="s-head">
          <p className="s-label">My Research</p>
          <h2 className="s-title">Publications</h2>
          <p className="s-sub">Contributions to the AI &amp; ML research community</p>
        </div>

        <div className="pub-list">
          {pubs.map((p) => (
            <article className="pub-card reveal" key={p.title}>
              <span className="pub-year-badge">{p.year}</span>
              <h3 className="pub-title">{p.title}</h3>
              <p className="pub-authors">
                {p.authors.split(',').map((name, i, arr) => {
                  const trimmed = name.trim()
                  return (
                    <span key={i}>
                      {trimmed === 'Smriti Regmi'
                        ? <strong className="pub-highlight">{trimmed}</strong>
                        : trimmed}
                      {i < arr.length - 1 ? ', ' : ''}
                    </span>
                  )
                })}
              </p>
              <p className="pub-venue">
                <FaBookOpen /> {p.venue}
              </p>
              <div className="pub-tags">
                {p.tags.map(t => <span className="pub-tag" key={t}>{t}</span>)}
              </div>
              <div className="pub-links">
                <a href={p.scholarUrl} className="pub-link" target="_blank" rel="noreferrer"><FaBookOpen /> View Paper</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
