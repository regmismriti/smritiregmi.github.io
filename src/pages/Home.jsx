import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import Blogs from '../components/Blogs'
import Projects from '../components/Projects'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'
import ScrollTop from '../components/ScrollTop'

// Global scroll-reveal for sections
function useGlobalReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useGlobalReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Publications />
      <Blogs />
      <Projects />
      <Hobbies />
      <Contact />
      <ScrollTop />
    </>
  )
}
