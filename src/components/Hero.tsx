import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 py-12 sm:py-0">
      <div className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full">
        <div
          className={`transform transition-all duration-1000 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <img
                src="/thumb.jpg"
                alt="Harold Mth"
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text tracking-tight">
            Harold Mth
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide px-2">
            Code enthusiast • Digital creator • Future innovator
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-300 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="mt-8 sm:mt-12 group flex flex-col items-center gap-2 mx-auto hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to about section"
          >
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
