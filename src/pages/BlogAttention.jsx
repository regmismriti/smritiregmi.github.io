import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogAttention() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">Deep Learning</span>
        <h1 className="bp-title">Attention Is All You Need — The Paper That Changed Everything</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> January 10, 2025</span>
          <span><FaClock /> 14 min read</span>
          <span><FaTag /> Transformer, Attention, NLP</span>
        </div>

        <div className="bp-body">
          <p>In 2017, Vaswani et al. published a paper titled <strong>"Attention Is All You Need"</strong> — and the field of deep learning was never the same. Before this, sequence modeling was dominated by RNNs and LSTMs, which processed tokens one at a time. The Transformer discarded recurrence entirely and replaced it with a single elegant mechanism: <strong>self-attention</strong>.</p>

          <div className="bp-callout">
            <strong>📌 Key insight:</strong> Instead of processing tokens sequentially, the Transformer looks at all tokens simultaneously and learns which ones should "attend" to each other — in parallel.
          </div>

          <h2>The Problem with RNNs</h2>
          <p>Recurrent networks process sequences step-by-step, maintaining a hidden state. This causes two problems: they're slow to train (no parallelism), and they struggle with long-range dependencies — by the time the network processes token 100, information from token 1 has been diluted through 99 update steps.</p>

          <h2>The Attention Mechanism</h2>
          <p>Attention answers the question: <em>"For each token in the sequence, how much should I focus on every other token when computing its representation?"</em></p>
          <p>Given a sequence, we compute three matrices from the input embeddings:</p>
          <ul>
            <li><strong>Q (Query)</strong> — what this token is looking for</li>
            <li><strong>K (Key)</strong> — what each token offers</li>
            <li><strong>V (Value)</strong> — the actual content to aggregate</li>
          </ul>
          <p>The attention score is then:</p>
          <pre><code>{`Attention(Q, K, V) = softmax(QKᵀ / √dₖ) · V`}</code></pre>
          <p>The division by √dₖ (square root of the key dimension) prevents the dot products from growing too large, keeping gradients stable.</p>

          <h2>Multi-Head Attention</h2>
          <p>Instead of computing attention once, the Transformer computes it <strong>h times in parallel</strong> with different learned projections. Each "head" can focus on different types of relationships — one head might track syntactic dependencies, another semantic similarity.</p>
          <pre><code>{`MultiHead(Q, K, V) = Concat(head₁, ..., headₕ) · Wᴼ
where headᵢ = Attention(QWᵢQ, KWᵢK, VWᵢV)`}</code></pre>

          <h2>Positional Encoding</h2>
          <p>Since attention has no notion of order, the Transformer adds <strong>positional encodings</strong> to the input embeddings — sinusoidal functions that inject position information without requiring learned parameters.</p>
          <pre><code>{`PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))`}</code></pre>

          <h2>The Full Architecture</h2>
          <p>The Transformer is an encoder-decoder architecture. The <strong>encoder</strong> maps the input sequence to a continuous representation. The <strong>decoder</strong> generates the output sequence one token at a time, attending to both its own previous outputs and the encoder's representation.</p>
          <p>Each encoder/decoder layer consists of:</p>
          <ul>
            <li>Multi-head self-attention</li>
            <li>Position-wise feed-forward network</li>
            <li>Layer normalization + residual connections</li>
          </ul>

          <h2>Why It Matters</h2>
          <p>Every major AI system you interact with today — GPT-4, Gemini, Claude, BERT, Whisper, DALL·E — is built on this architecture or a direct descendant of it. The Transformer's parallelism made it possible to train on internet-scale data, unlocking capabilities that were previously unimaginable.</p>

          <blockquote>
            "Attention is all you need" was not just a catchy title — it was a statement that turned out to be literally true for the next decade of AI progress.
          </blockquote>
        </div>

        <div className="bp-author">
          <div className="bp-avatar">SR</div>
          <div>
            <p className="bp-author-name">Smriti Regmi</p>
            <p className="bp-author-bio">AI Researcher & ML Engineer specializing in agentic systems and large language models. Passionate about making complex research accessible.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
