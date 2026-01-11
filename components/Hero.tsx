import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

const Hero: React. FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Helmet>
        <title>Nashed Tuned | Honda Specialist & Performance Tuning Gauteng</title>
        <meta name='description' content='Premier Honda performance tuning and auto repair in President Park, Midrand. RMI accredited specialists for Type R, VTEC Turbo, and general service.' />
        <meta name='keywords' content='Honda specialist, performance tuning, mechanics midrand, RMI approved, VTEC turbo, civic type r tuning gauteng' />
        <link rel="canonical" href="https://nashedtuned.co.za/" />

        {/* Open Graph for WhatsApp & Facebook Sharing */}
        <meta property='og:title' content='Nashed Tuned | Honda Specialist Gauteng' />
        <meta property='og:description' content='Precision auto engineering and performance tuning.  Book your service today.' />
        <meta property='og:image' content='https://nashedtuned.co.za/images/hero-bg.jpg' />
        <meta property='og:url' content='https://nashedtuned.co.za/' />
        <meta property='og:type' content='website' />
      </Helmet>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Local image reference for Hero background */}
        <img
          src="/images/hero-bg.jpg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback only if local image is missing
            target.src = 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2800&auto=format&fit=crop';
            console.warn("Local image /images/hero-bg.jpg not found.  Using fallback.");
          }}
          alt="Nashed Tuned Hero"
          className="w-full h-full object-cover object-center transform scale-105"
        />

        {/* Military Green / Tech overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#586e45]/20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <RevealOnScroll className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-[#586e45] bg-[#586e45]/20 text-[#a3b18a] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur[...]
            <ShieldCheck className="w-4 h-4" />
            <span>MIWA Accredited • Honda Specialists</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 italic">
            PRECISION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              PERFORMANCE
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-light border-l-4 border-[#586e45] pl-4 bg-black/30 p-2 backdrop-blur-sm rounded-r-sm">
            Specializing in Honda performance tuning and general repairs for all makes. 
            Nashed Tuned combines military-grade precision with automotive passion. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase italic tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:-translate-y-1 s[...]
            >
              <span className="flex items-center gap-2 skew-x-[10deg]">
                Book Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-bold uppercase tracking-wide transition-all hover:-translate-y-1 skew-x-[-10deg] border-l-4 border-l-[#586e45]"
            >
              <span className="block skew-x-[10deg]">Explore Services</span>
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-700/50 pt-8">
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded">
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-[#586e45] uppercase tracking-wider font-bold">Years Exp. </p>
            </div>
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded">
              <p className="text-2xl font-bold text-white">RMI</p>
              <p className="text-xs text-[#586e45] uppercase tracking-wider font-bold">Approved</p>
            </div>
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-[#586e45] uppercase tracking-wider font-bold">Satisfaction</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
    </div>
  );
};

export default Hero;
