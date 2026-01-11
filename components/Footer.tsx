import React from 'react';
import { Link } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/next";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1120] py-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Nashed
              </span>
              <span className="text-xl font-bold tracking-[0.2em] text-red-600 uppercase -mt-1 italic" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Tuned
              </span>
            </div>
            <p className="text-slate-500 text-sm">Precision Auto Engineering • Honda Specialists</p>
            <div className="mt-4 max-w-md">
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold">Nashed Tuned</span> | Premier <span className="font-bold">Honda Specialist</span> & Performance Tuning Workshop.
                Serving Midrand, Centurion, Sandton, Fourways, and the greater Gauteng area.
              </p>
            </div>
          </div>

          <div className="flex space-x-6 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-red-500 transition-colors uppercase tracking-wide">Home</Link>
            <Link to="/services" className="hover:text-red-500 transition-colors uppercase tracking-wide">Services</Link>
            <Link to="/about" className="hover:text-red-500 transition-colors uppercase tracking-wide">About</Link>
            <Link to="/gallery" className="hover:text-red-500 transition-colors uppercase tracking-wide">Gallery</Link>
            <Link to="/contact" className="hover:text-red-500 transition-colors uppercase tracking-wide">Contact</Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Nashed Tuned. RMI No: 1007817. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Proudly Powered by NexusScalers.co.za</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
