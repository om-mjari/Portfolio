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
    <div className="min-h-screen relative bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-black">
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
