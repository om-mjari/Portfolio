import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';
import './index.css';

function App() {
  return (
    <div className="min-h-screen relative bg-[#0a0f1c] text-slate-100 overflow-x-hidden selection:bg-neon-cyan/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <ThreeDBackground />
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
  );
}

export default App;
