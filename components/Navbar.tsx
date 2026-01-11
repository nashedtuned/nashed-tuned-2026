import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
          ? 'glass-nav border-slate-800 py-3'
          : 'bg-gradient-to-b from-[#0f172a] to-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Text Only */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center group relative">
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-black tracking-tighter leading-none text-white uppercase italic" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Nashed
              </span>
              <span className="text-lg font-bold tracking-[0.2em] leading-none text-red-600 uppercase -mt-1 italic" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Tuned
              </span>
            </div>
          </Link>
          <a href="tel:0834379366" className="hidden sm:flex items-center text-slate-300 hover:text-white transition-colors text-sm font-bold tracking-wide">
            <span className="text-red-600 mr-2 hidden md:inline">|</span> 083 437 9366
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-wide relative group ${isActive(link.href) ? 'text-red-500' : 'text-slate-300 hover:text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 rounded-sm bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase italic transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] skew-x-[-10deg]"
          >
            <span className="block skew-x-[10deg]">Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-red-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-slate-700 animate-fade-in-down">
          <div className="flex flex-col px-4 py-6 space-y-4 bg-[#0f172a]/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg font-bold uppercase tracking-wider ${isActive(link.href) ? 'text-red-500' : 'text-slate-200'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center px-6 py-3 bg-red-600 text-white font-bold uppercase italic"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;