import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back to Home CTA */}
        <div className="text-center py-8 border-b border-primary-foreground/20 mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold hover:underline">
            <span>← Back to Home</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Learn faster</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">
                  Learning paths
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Career tracks
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-sm hover:underline">
                  Trending now
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Start learning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore more</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Popular topics
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  My progress
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Discover skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get started</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Why use AI paths
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Live demos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-3">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 YouLearn AI. All rights reserved.
          </p>
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link to="#" className="text-sm hover:underline">
              Privacy policy
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Terms of service
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Cookie settings
            </Link>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <Instagram className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <Twitter className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <Youtube className="w-5 h-5 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>
    </footer>
  );
};
