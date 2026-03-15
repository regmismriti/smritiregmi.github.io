import { FaGithub, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa'

const projects = [
  {
    Icon: FaMicrochip,
    grad: 'g1',
    title: 'OncoSeg AI — GI Tract Segmentation',
    desc: 'Deep learning pipeline for gastrointestinal tract medical image segmentation. Trained on endoscopy and video capsule images to assist in early cancer detection and diagnosis.',
    tech: ['PyTorch', 'ViT', 'CNN', 'Medical Imaging', 'HuggingFace'],
    github: 'https://github.com/regmismriti/UW-Madison-GI-tract-segmentation',
    live: 'https://huggingface.co/spaces/Sregmi12334/Oncoseg-ai',
  },
  // {
  //   Icon: FaStream,
  //   grad: 'g2',
  //   title: 'ML Pipeline Automation Framework',
  //   desc: 'End-to-end ML pipeline automation with experiment tracking, model versioning, and automated deployment. Integrates MLflow, Kubeflow, and Docker for seamless dev-to-production transitions.',
  //   tech: ['MLflow', 'Kubeflow', 'Docker', 'GitHub Actions', 'AWS'],
  //   github: 'https://github.com/smritiregmi/ml-pipeline-automation',
  //   live: 'https://ml-pipeline-docs.vercel.app',
  // },
  // {
  //   Icon: FaMicrochip,
  //   grad: 'g3',
  //   title: 'LLM Fine-Tuning Hub',
  //   desc: 'A comprehensive toolkit for fine-tuning LLMs using QLoRA and PEFT on custom datasets. Includes evaluation benchmarks, model comparison dashboards, and W&B integration.',
  //   tech: ['HuggingFace', 'QLoRA', 'PEFT', 'W&B', 'PyTorch'],
  //   github: 'https://github.com/smritiregmi/llm-finetuning-hub',
  //   live: 'https://huggingface.co/smritiregmi',
  // },
  // {
  //   Icon: FaBookReader,
  //   grad: 'g4',
  //   title: 'AI-Powered Literature Review System',
  //   desc: 'Ingests academic PDFs, builds a semantic knowledge graph, and enables natural language querying across thousands of research papers using RAG with Claude API backend.',
  //   tech: ['LangChain', 'ChromaDB', 'Streamlit', 'Claude API', 'PyPDF'],
  //   github: 'https://github.com/smritiregmi/ai-literature-review',
  //   live: 'https://ai-literature-review.streamlit.app',
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="s-head">
          <p className="s-label">What I've Built</p>
          <h2 className="s-title">AI Projects</h2>
          <p className="s-sub">Building intelligent systems that push the boundaries of AI</p>
        </div>

        <div className="projects-grid">
          {projects.map(({ Icon, grad, title, desc, tech, github, live }) => (
            <div className="proj-card reveal" key={title}>
              <div className="proj-top">
                <div className={`proj-icon ${grad}`}>
                  <Icon />
                </div>
                <div className="proj-ext-links">
                  <a href={github} className="proj-ext-btn" target="_blank" rel="noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href={live} className="proj-ext-btn" target="_blank" rel="noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <h3 className="proj-title">{title}</h3>
              <p className="proj-desc">{desc}</p>
              <div className="proj-tech">
                {tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
