import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ showBack = false }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <Link to="/" className="text-xl font-bold text-foreground">
            YouLearn
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Learning paths
          </Link>
          <Link
            to="/trending"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Trending
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Achievements
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            More
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
          <Button size="sm">Start</Button>
        </div>
      </div>
    </header>
  );
};
