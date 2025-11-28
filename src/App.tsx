import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Socials } from './components/Socials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/back.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <About />
          <Socials />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
