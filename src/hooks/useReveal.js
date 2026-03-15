import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current
      ? ref.current.querySelectorAll('.reveal')
      : document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
