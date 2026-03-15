import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogRag() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">LLM</span>
        <h1 className="bp-title">RAG Systems: Architecture, Evaluation & Optimization</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> February 18, 2025</span>
          <span><FaClock /> 10 min read</span>
          <span><FaTag /> RAG, Vector DB, Embeddings, LLM</span>
        </div>

        <div className="bp-body">
          <p>Retrieval-Augmented Generation (RAG) has become the go-to architecture for grounding LLMs in private or up-to-date knowledge. But building a RAG system that <em>actually works well in production</em> requires far more nuance than the basic "chunk → embed → retrieve → generate" pipeline most tutorials show.</p>

          <div className="bp-callout">
            <strong>📋 What we'll cover:</strong> Document preprocessing · Chunking strategies · Embedding model selection · Vector store comparison · Retrieval evaluation (RAGAS) · Advanced RAG patterns
          </div>

          <h2>Why Naive RAG Fails</h2>
          <ul>
            <li><strong>Retrieval failures:</strong> The right document exists but isn't retrieved</li>
            <li><strong>Context pollution:</strong> Irrelevant chunks confuse the LLM</li>
            <li><strong>Chunking artifacts:</strong> Splitting mid-sentence destroys semantic coherence</li>
            <li><strong>Query-document mismatch:</strong> Short questions vs long expositions embed differently</li>
          </ul>

          <h2>Semantic Chunking</h2>
          <pre><code>{`from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

semantic_splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=90
)

chunks = semantic_splitter.split_documents(documents)`}</code></pre>

          <h2>Choosing the Right Embedding Model</h2>
          <ul>
            <li><strong>General knowledge:</strong> <code>text-embedding-3-large</code> — top MTEB performer</li>
            <li><strong>Scientific/technical:</strong> <code>BAAI/bge-large-en-v1.5</code></li>
            <li><strong>Multilingual:</strong> <code>intfloat/multilingual-e5-large</code></li>
            <li><strong>Efficiency:</strong> <code>BAAI/bge-small-en-v1.5</code> — 3x faster, 90% quality</li>
          </ul>

          <h2>HyDE: Fixing the Query-Document Gap</h2>
          <pre><code>{`from langchain.chains import HypotheticalDocumentEmbedder

hyde_embeddings = HypotheticalDocumentEmbedder.from_llm(
    llm=ChatOpenAI(model="gpt-4o-mini"),
    base_embeddings=base_embeddings,
    custom_prompt="""Write a paragraph that directly answers: {question}"""
)`}</code></pre>

          <h2>Evaluating with RAGAS</h2>
          <pre><code>{`from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall

results = evaluate(
    dataset=eval_data,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall]
)
print(results.to_pandas())`}</code></pre>

          <p>Target scores for production:</p>
          <ul>
            <li><strong>Faithfulness &gt; 0.85</strong></li>
            <li><strong>Answer Relevancy &gt; 0.80</strong></li>
            <li><strong>Context Precision &gt; 0.70</strong></li>
            <li><strong>Context Recall &gt; 0.75</strong></li>
          </ul>

          <h2>Production Optimization Checklist</h2>
          <ul>
            <li>✅ Use semantic chunking for technical documents</li>
            <li>✅ Implement re-ranking with <code>cross-encoder/ms-marco-MiniLM-L-6-v2</code></li>
            <li>✅ Cache embeddings for frequently retrieved documents</li>
            <li>✅ Use hybrid search (dense + BM25) — typically +5–15% recall</li>
            <li>✅ Monitor retrieval quality in production with RAGAS on sampled queries</li>
            <li>✅ Implement query routing for different query types</li>
          </ul>

          <blockquote>
            RAG is not a silver bullet — it's a system. Every component has failure modes. Evaluate each independently before blaming the LLM.
          </blockquote>
        </div>

        <div className="bp-author">
          <div className="bp-avatar">SR</div>
          <div>
            <p className="bp-author-name">Smriti Regmi</p>
            <p className="bp-author-bio">AI Researcher & ML Engineer. I research and build production RAG systems for scientific and enterprise applications. Always optimizing for accuracy over cleverness.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
