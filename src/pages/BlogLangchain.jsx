import { Link } from 'react-router-dom'
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa'

export default function BlogLangchain() {
  return (
    <div className="bp">
      <nav className="bp-nav">
        <Link to="/" className="bp-back"><FaArrowLeft /> Back to Portfolio</Link>
        <span className="bp-logo">&lt;SR/&gt;</span>
      </nav>

      <article className="bp-content">
        <span className="bp-cat">Agentic AI</span>
        <h1 className="bp-title">Building Agentic AI Systems with LangGraph</h1>
        <div className="bp-meta">
          <span><FaUser /> Smriti Regmi</span>
          <span><FaCalendarAlt /> June 12, 2025</span>
          <span><FaClock /> 12 min read</span>
          <span><FaTag /> LangGraph, Agents, LLM</span>
        </div>

        <div className="bp-body">
          <p>The AI landscape has shifted dramatically. We've moved from static prompt-response systems to <strong>autonomous agents</strong> that can plan, act, use tools, and self-correct. LangGraph sits at the heart of this transition — it's a library for building stateful, multi-actor applications with LLMs using a graph-based execution model.</p>

          <p>In this post, I'll walk you through building a production-ready agentic AI system from scratch: a <strong>research assistant</strong> that autonomously searches the web, reads papers, synthesizes information, and produces structured reports.</p>

          <div className="bp-callout">
            <strong>📌 What you'll build:</strong> A multi-agent research pipeline that uses LangGraph's state machine to coordinate a Planner agent, a Researcher agent, and a Writer agent — each with specialized tools.
          </div>

          <h2>Why LangGraph Over Simple Chains?</h2>
          <p>LangChain chains are great for linear pipelines: Input → LLM → Output. But real-world AI tasks require <strong>cycles</strong> — the ability to retry, branch, and maintain complex state. LangGraph models this as a directed graph where nodes are functions, edges are transitions, and state flows between them.</p>

          <h2>Setting Up the Environment</h2>
          <pre><code>{`pip install langgraph langchain-openai langchain-community
pip install tavily-python pypdf faiss-cpu

export OPENAI_API_KEY="your-key"
export TAVILY_API_KEY="your-key"`}</code></pre>

          <h2>Defining the Agent State</h2>
          <pre><code>{`from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph, END
import operator

class ResearchState(TypedDict):
    query: str
    plan: str
    search_results: Annotated[List[str], operator.add]
    draft: str
    revision_count: int
    final_report: str`}</code></pre>

          <h2>Building the Planner Agent</h2>
          <pre><code>{`from langchain_openai import ChatOpenAI
from pydantic import BaseModel

class ResearchPlan(BaseModel):
    sub_questions: List[str]
    search_queries: List[str]
    strategy: str

planner_llm = ChatOpenAI(model="gpt-4o", temperature=0)
planner_with_output = planner_llm.with_structured_output(ResearchPlan)

def planner_node(state: ResearchState) -> ResearchState:
    chain = PLANNER_PROMPT | planner_with_output
    plan = chain.invoke({"query": state["query"]})
    return {"plan": plan.strategy}`}</code></pre>

          <h2>Connecting the Graph</h2>
          <pre><code>{`workflow = StateGraph(ResearchState)

workflow.add_node("planner", planner_node)
workflow.add_node("researcher", researcher_node)
workflow.add_node("writer", writer_node)
workflow.add_node("reviewer", reviewer_node)

workflow.set_entry_point("planner")
workflow.add_edge("planner", "researcher")
workflow.add_edge("researcher", "writer")
workflow.add_conditional_edges(
    "reviewer",
    should_revise,
    {"writer": "writer", END: END}
)

app = workflow.compile()`}</code></pre>

          <h2>Key Takeaways</h2>
          <ul>
            <li>LangGraph's graph model is the right abstraction for cyclic, stateful AI workflows</li>
            <li>Separate concerns cleanly: Planner → Researcher → Writer → Reviewer</li>
            <li>Use structured outputs (Pydantic) for reliable inter-agent communication</li>
            <li>Implement checkpointing from day one — production agents fail unexpectedly</li>
            <li>Stream outputs for real-time user feedback in deployed applications</li>
          </ul>

          <blockquote>
            The shift from chains to graphs isn't just architectural — it's a fundamental change in how we think about AI systems. Agents need memory, the ability to fail gracefully, and to learn from their own outputs.
          </blockquote>
        </div>

        <div className="bp-author">
          <div className="bp-avatar">SR</div>
          <div>
            <p className="bp-author-name">Smriti Regmi</p>
            <p className="bp-author-bio">AI Researcher & ML Engineer specializing in agentic systems and large language models. Passionate about building intelligent systems that reason, act, and learn autonomously.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
