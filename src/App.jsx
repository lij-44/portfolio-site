import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PetApp from './components/PetApp';
import AuroraApp from './components/AuroraApp';
import WebDesign from './components/WebDesign';
import OtherDesign from './components/OtherDesign';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'pet-app') {
    return <PetApp onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'aurora-app') {
    return <AuroraApp onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'web-design') {
    return <WebDesign onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'other-design') {
    return <OtherDesign onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects
          onNavigateToPetApp={() => setCurrentPage('pet-app')}
          onNavigateToAuroraApp={() => setCurrentPage('aurora-app')}
          onNavigateToWebDesign={() => setCurrentPage('web-design')}
          onNavigateToOtherDesign={() => setCurrentPage('other-design')}
        />
        <About />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;