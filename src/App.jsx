import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen relative bg-[#f6f8fc] text-slate-900 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.2))]" />
        <div className="absolute inset-0 bg-fine-grid opacity-70" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary-100/70 via-transparent to-transparent" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl animate-drift" />
        <div className="absolute right-[-6rem] top-40 h-[28rem] w-[28rem] rounded-full bg-neon-purple/15 blur-3xl animate-drift" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl animate-drift" />
        <div className="absolute inset-0 bg-noise-soft opacity-[0.25]" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
