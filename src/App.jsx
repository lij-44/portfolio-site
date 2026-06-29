import { useState } from 'react';
import Plasma from './components/Plasma';
import GooeyNav from './components/GooeyNav';
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

const gooeyItems = [
  { label: '首页', href: '#hero' },
  { label: '项目作品', href: '#projects' },
  { label: '关于我', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '联系方式', href: '#contact' },
];

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
      {/* Global Plasma Background */}
      <div className="app-plasma-bg">
        <Plasma
          color="#ff6b35"
          speed={0.5}
          direction="forward"
          scale={1.15}
          opacity={0.55}
          mouseInteractive={true}
        />
        <div className="app-plasma-frost" />
      </div>

      <div className="navbar-wrapper">
        <GooeyNav
          items={gooeyItems}
          animationTime={600}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          timeVariance={300}
          initialActiveIndex={0}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
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