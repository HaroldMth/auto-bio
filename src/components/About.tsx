import { Code2, Calendar, GraduationCap, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { BirthdayTimer } from './BirthdayTimer';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-4xl w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="relative p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6 sm:mb-8">
                <Code2 className="w-10 sm:w-12 h-10 sm:h-12 text-cyan-400" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  About Me
                </h2>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">2025</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                <img
                  src="/images.jpg"
                  alt="Harold"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl border border-white/10 shadow-xl"
                />
                <img
                  src="/image2.jpg"
                  alt="Harold"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl border border-white/10 shadow-xl"
                />
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto px-2">
                I'm Harold Mth, a 14-year-old student in Form 4 Science C at Laval who genuinely enjoys working
                with computers and discovering how technology works. I spend my free time coding, learning new tools,
                and building small projects to improve my skills. Born on January 15, I'm taking things step by step
                as I grow in the world of tech. While I'm not a big sports fan, I find real excitement in solving problems
                and figuring things out through code.
              </p>

              <div className="my-8 sm:my-12">
                <BirthdayTimer />
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-400">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all text-xs sm:text-sm">
                  <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                  <span>Form 4 Science C</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all text-xs sm:text-sm">
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                  <span>Age 14 • 2025</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all text-xs sm:text-sm">
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                  <span>Born January 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
