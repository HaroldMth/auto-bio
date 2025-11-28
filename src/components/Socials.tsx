import {
  MessageCircle,
  Phone,
  Instagram,
  Github,
  Facebook,
  Send,
  Share2,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
  color: string;
  label?: string;
}

export function Socials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    const socials: SocialLink[] = [
    {
      name: 'WhatsApp 1',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://wa.me/237680260772',
      color: 'from-green-400 to-green-600',
      label: '+237 680 260 772',
    },
    {
      name: 'WhatsApp 2',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://wa.me/237696900612',
      color: 'from-green-400 to-green-600',
      label: '+237 696 900 612',
    },
    {
      name: 'WhatsApp 3',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://wa.me/237694668970',
      color: 'from-green-400 to-green-600',
      label: '+237 694 668 970',
    },
    {
      name: 'Phone',
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'tel:+237680260772',
      color: 'from-blue-400 to-blue-600',
      label: '+237 680 260 772',
    },
    {
      name: 'Pinterest',
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://pinterest.com/haroldmibe',
      color: 'from-red-400 to-red-600',
      label: '@haroldmibe',
    },
    {
      name: 'TikTok',
      icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://tiktok.com/@Haroldmth',
      color: 'from-pink-400 to-purple-600',
      label: '@Haroldmth',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://facebook.com/harold.mth',
      color: 'from-blue-500 to-blue-700',
      label: 'Harold Mth',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://instagram.com/Aarons2.2',
      color: 'from-purple-400 via-pink-500 to-orange-500',
      label: '@Aarons2.2',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://instagram.com/Haroldmth',
      color: 'from-purple-400 via-pink-500 to-orange-500',
      label: '@Haroldmth',
    },
    {
      name: 'Reddit',
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://reddit.com/u/harold_mth',
      color: 'from-orange-400 to-orange-600',
      label: 'u/harold_mth',
    },
    {
      name: 'Snapchat',
      icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://snapchat.com/add/Harold.mth',
      color: 'from-yellow-400 to-yellow-600',
      label: 'Harold.mth',
    },
    {
      name: 'Duolingo',
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://duolingo.com/profile/Harold%20mibe',
      color: 'from-green-500 to-green-700',
      label: 'Harold mibe',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://github.com/Haroldmth',
      color: 'from-gray-400 to-gray-600',
      label: '@Haroldmth',
    },
    {
      name: 'NGL.link',
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://ngl.link/Hanstech1',
      color: 'from-cyan-400 to-cyan-600',
      label: 'Hanstech 1',
    },
  ];

  return (
    <section
      id="socials"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-6xl w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text px-2">
            Connect With Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">{social.name}</h3>
                  {social.label && (
                    <p className="text-xs sm:text-sm text-gray-400">{social.label}</p>
                  )}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl blur-xl transition-opacity duration-300`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
