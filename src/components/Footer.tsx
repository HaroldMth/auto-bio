import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span>by Harold</span>
          </div>

          <p className="text-gray-500 text-sm">
            Harold Mth • Hans © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
