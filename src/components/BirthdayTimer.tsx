import { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function BirthdayTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let birthdayThisYear = new Date(now.getFullYear(), 0, 15);

      if (now > birthdayThisYear) {
        birthdayThisYear = new Date(now.getFullYear() + 1, 0, 15);
      }

      const difference = birthdayThisYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 my-12">
      <div className="flex items-center gap-3">
        <Gift className="w-6 h-6 text-cyan-400 animate-bounce" />
        <span className="text-sm uppercase tracking-widest text-gray-400">Birthday Countdown</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur opacity-20"></div>
            <div className="relative p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
