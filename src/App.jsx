import React, { useEffect } from 'react';
import Lenis from 'lenis';

// 1. Imports (Ensure these files exist in these folders)
import Scene from './components/canvas/Scene';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact'; 

function App() {
  // Initialize Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-[#030014] w-full overflow-x-hidden">
      {/* 2. Background Layer (3D) */}
      <Scene /> 
      
      {/* 3. UI Layer (DOM) */}
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

export default App;