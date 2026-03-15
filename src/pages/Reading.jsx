import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaBook } from 'react-icons/fa'

const bookModules = import.meta.glob('../assets/books/*', { eager: true })
const books = Object.entries(bookModules).map(([path, mod]) => {
  const filename = path.split('/').pop().replace(/\.[^.]+$/, '')
  const title = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return { cover: mod.default, title }
})

export default function Reading() {
  const navigate = useNavigate()

  return (
    <div className="verses-page">
      {/* Nav */}
      <nav className="verses-nav">
        <button className="verses-back" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Portfolio
        </button>
        <span className="verses-nav-title"><FaBook /> Reading List</span>
      </nav>

      <div className="verses-container">
        <div className="verses-header">
          <h1 className="verses-title">Reading List</h1>
          <p className="verses-sub">Books that have shaped the way I think, research, and see the world.</p>
        </div>

        {books.length > 0 ? (
          <div className="reading-grid reading-page-grid">
            {books.map(({ cover, title }) => (
              <div className="book-card" key={title}>
                <div className="book-cover">
                  {cover
                    ? <img src={cover} alt={title} />
                    : <div className="book-cover-placeholder"><FaBook /></div>
                  }
                </div>
                <div className="book-info">
                  <h4 className="book-title">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="photo-empty">
            <FaBook />
            <p>Add book covers to src/assets/books/ to display them here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
