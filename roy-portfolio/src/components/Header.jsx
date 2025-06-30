import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/professional', label: 'Professional' },
    { path: '/drone-photos', label: 'Drone Photos' },
    { href: 'https://technicallyprivate.substack.com/', label: 'Blog', external: true },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/RoyRinberg', label: 'Twitter' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/hello.svg" alt="Hello" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-900">What's the Matter with Roy?</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                    location.pathname === link.path ? 'text-primary-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition ${
                    location.pathname === link.path ? 'text-primary-600 bg-gray-50' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            
            <div className="flex items-center space-x-4 mt-4 pt-4 px-4 border-t border-gray-100">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;