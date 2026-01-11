import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Armchair, Coffee, Wifi, Award, Users } from 'lucide-react';

interface AboutProps {
  isStandalone?: boolean;
}

const About: React.FC<AboutProps> = ({ isStandalone = true }) => {
  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-slate-900 min-h-screen relative border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Who We Are</span>
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase italic">Driven By Passion</h1>
                <div className="w-full h-px bg-slate-800 max-w-md mx-auto"></div>
            </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <RevealOnScroll>
            <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#586e45] to-slate-800 rounded-sm opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative rounded-sm overflow-hidden border border-slate-700">
                    <img 
                        src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop" 
                        alt="Mechanic working on car" 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase italic skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Since 2014</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="glass-panel p-4 rounded-sm border-b-2 border-transparent hover:border-red-600 transition-all">
                        <Award className="w-6 h-6 text-[#586e45] mb-2" />
                        <h4 className="text-white font-bold uppercase text-sm">Certified</h4>
                        <p className="text-xs text-slate-500">RMI & MIWA Approved</p>
                    </div>
                    <div className="glass-panel p-4 rounded-sm border-b-2 border-transparent hover:border-red-600 transition-all">
                        <Users className="w-6 h-6 text-[#586e45] mb-2" />
                        <h4 className="text-white font-bold uppercase text-sm">Expert Team</h4>
                        <p className="text-xs text-slate-500">Highly Skilled Techs</p>
                    </div>
                </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="prose prose-invert">
              <h2 className="text-3xl font-bold text-white mb-6 italic">
                More Than Just <span className="text-red-600">Repairs</span>
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-light">
                <p>
                  <strong className="text-white">Nashed Tuned</strong> strives to remain ahead of the ever-changing technologies and best practices of the aftermarket motor industry. While we have a deep-rooted passion for Honda performance, our expertise spans across all major vehicle manufacturers.
                </p>
                <p>
                  We don’t just care about providing our clients with exemplary auto service once; we want to invest in the health of their vehicles and remain their auto service partner for many years to come. That’s why we still approach auto repair work with complete transparency.
                </p>
                <p>
                  Our mission is simple: to create an uncommonly great experience for customers. Relax in our family-friendly, comfortable customer lounge while we look after your vehicle.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Customer Amenities</h3>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                    <div className="text-center p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Armchair className="w-8 h-8 text-[#586e45] mx-auto mb-3" />
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Lounge</span>
                    </div>
                    <div className="text-center p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Wifi className="w-8 h-8 text-[#586e45] mx-auto mb-3" />
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Free Wi-Fi</span>
                    </div>
                    <div className="text-center p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Coffee className="w-8 h-8 text-[#586e45] mx-auto mb-3" />
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Coffee Bar</span>
                    </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default About;