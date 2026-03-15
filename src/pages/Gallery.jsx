import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCamera, FaTimes, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'

const allModules = import.meta.glob('../assets/photos/*', { eager: true })

const isVideo = src => /\.(mp4|webm|mov|ogg)$/i.test(src)

const media = Object.values(allModules).map(mod => ({ src: mod.default }))

export default function Gallery() {
  const navigate = useNavigate()
  const [lightbox, setLightbox] = useState(null)

  const prev = useCallback(() => setLightbox(i => (i - 1 + media.length) % media.length), [])
  const next = useCallback(() => setLightbox(i => (i + 1) % media.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = e => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next])

  return (
    <div className="gallery-page">
      <nav className="verses-nav">
        <button className="verses-back" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Portfolio
        </button>
        <span className="verses-nav-title"><FaCamera /> Travel &amp; Photography</span>
      </nav>

      <div className="gallery-container">
        <div className="verses-header">
          <h1 className="verses-title">Travel &amp; Photography</h1>
          <p className="verses-sub">Moments captured across mountains, cities, and everything in between.</p>
        </div>

        {media.length > 0 ? (
          <div className="gallery-grid">
            {media.map(({ src, caption, location }, i) => (
              <div className="gallery-item" key={i} onClick={() => setLightbox(i)}>
                {isVideo(src) ? (
                  <>
                    <video src={src} muted playsInline preload="metadata" />
                    <div className="gallery-play-icon"><FaPlay /></div>
                  </>
                ) : (
                  <img src={src} alt={caption || ''} />
                )}
                <div className="gallery-overlay">
                  {caption && <p className="gallery-caption">{caption}</p>}
                  {location && <span className="gallery-location"><FaCamera /> {location}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="photo-empty">
            <FaCamera />
            <p>Photos & videos coming soon — adventures in progress.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><FaTimes /></button>

          <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); prev() }}>
            <FaChevronLeft />
          </button>

          {isVideo(media[lightbox].src) ? (
            <video
              src={media[lightbox].src}
              controls
              autoPlay
              className="lightbox-video"
              onClick={e => e.stopPropagation()}
            />
          ) : (
            <img
              src={media[lightbox].src}
              alt={media[lightbox].caption || ''}
              onClick={e => e.stopPropagation()}
            />
          )}

          <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); next() }}>
            <FaChevronRight />
          </button>

          <p className="lightbox-caption">
            {media[lightbox].caption || ''}
            <span className="lightbox-counter">{lightbox + 1} / {media.length}</span>
          </p>
        </div>
      )}
    </div>
  )
}
