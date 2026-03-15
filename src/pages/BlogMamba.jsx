import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogMamba() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">Architecture</span>
        <h1 className="bp-title">State Space Models & Mamba: The Transformer Alternative</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> February 20, 2025</span>
          <span><FaClock /> 16 min read</span>
          <span><FaTag /> Mamba, SSM, Sequence Modeling</span>
        </div>

        <div className="bp-body">
          <p>Transformers are powerful — but they have a fundamental scaling problem. Self-attention is <strong>quadratic in sequence length</strong>: processing a sequence of length N requires O(N²) computation and memory. For long documents, audio, genomics, or video, this becomes prohibitively expensive. State Space Models (SSMs), and specifically <strong>Mamba</strong>, offer a compelling alternative.</p>

          <div className="bp-callout">
            <strong>📌 Key insight:</strong> Mamba achieves linear-time sequence modeling by making the SSM parameters input-dependent — giving it the expressiveness of attention without the quadratic cost.
          </div>

          <h2>What is a State Space Model?</h2>
          <p>An SSM maps an input sequence x(t) to an output sequence y(t) through a latent state h(t). The continuous-time formulation is:</p>
          <pre><code>{`h'(t) = Ah(t) + Bx(t)
y(t)  = Ch(t) + Dx(t)`}</code></pre>
          <p>Where <strong>A</strong> is the state transition matrix, <strong>B</strong> projects the input into state space, <strong>C</strong> projects the state to output, and <strong>D</strong> is a skip connection. To use this in deep learning, we discretize it into:</p>
          <pre><code>{`hₜ = Āhₜ₋₁ + B̄xₜ
yₜ = Chₜ`}</code></pre>

          <h2>The Problem with Earlier SSMs (S4)</h2>
          <p>Structured State Space Models (S4) were efficient but used <strong>fixed</strong> A, B, C matrices — meaning they treated all inputs the same regardless of content. This made them poor at content-aware selection, a key strength of attention.</p>

          <h2>Mamba: Selective State Spaces</h2>
          <p>Mamba (Gu & Dao, 2023) solves this by making <strong>B, C, and Δ (the discretization step) functions of the input</strong>. This "selectivity" allows the model to decide what to remember, what to forget, and what to focus on — dynamically, per token.</p>
          <pre><code>{`# Mamba selective scan (simplified)
B = linear(x)     # input-dependent
C = linear(x)     # input-dependent
Δ = softplus(linear(x))  # input-dependent step size

Ā = exp(ΔA)       # discretized
B̄ = (Ā - I) A⁻¹ B Δ

h = Ā * h_prev + B̄ * x
y = C * h`}</code></pre>

          <h2>Hardware-Aware Implementation</h2>
          <p>Mamba's selective scan is not parallelizable in the naive form (it's a recurrence). The authors solve this with a <strong>hardware-aware parallel scan</strong> — computing the recurrence in parallel using prefix sums on GPU, keeping everything in SRAM to avoid expensive HBM reads.</p>

          <h2>Mamba vs Transformer</h2>
          <ul>
            <li><strong>Complexity:</strong> Mamba is O(N) vs Transformer's O(N²)</li>
            <li><strong>Long context:</strong> Mamba scales to 1M+ tokens; Transformers struggle past 128K</li>
            <li><strong>Training speed:</strong> Mamba is ~5x faster than Transformers at sequence length 2K</li>
            <li><strong>Recall:</strong> Transformers still outperform on tasks requiring precise token retrieval</li>
          </ul>

          <h2>Where Mamba Shines</h2>
          <p>Mamba has shown strong results in genomics (DNA sequences), audio modeling, time series, and long-document understanding. Hybrid architectures (Mamba + Attention layers) like <strong>Jamba</strong> and <strong>Zamba</strong> are emerging as a best-of-both-worlds approach.</p>

          <blockquote>
            The Transformer is not the end of history. Mamba reminds us that the best architecture depends on the problem — and for long sequences, linear-time models may well win.
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
