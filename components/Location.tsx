import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface LocationProps {
  isStandalone?: boolean;
}

const Location: React.FC<LocationProps> = ({ isStandalone = true }) => {
  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-slate-900 min-h-screen flex flex-col border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase italic">Locate <span className="text-[#586e45]">HQ</span></h1>
            <p className="text-slate-400">Visit our state-of-the-art facility in Midrand.</p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 bg-[#1e293b] rounded-sm overflow-hidden border border-slate-800 shadow-2xl">

          <div className="p-10 flex flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <MapPin className="w-64 h-64 text-white" />
            </div>

            <RevealOnScroll>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide border-b border-slate-700 pb-4">Contact Details</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#586e45]/10 border border-[#586e45]/20 p-3 rounded-sm group-hover:bg-[#586e45] transition-colors">
                    <MapPin className="w-6 h-6 text-[#586e45] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase">Workshop Address</h4>
                    <p className="text-slate-400 mt-1 font-light">
                      Unit 22 Workshop, 8 Swart Road,<br />
                      President Park, Gauteng, 1685
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#586e45]/10 border border-[#586e45]/20 p-3 rounded-sm group-hover:bg-[#586e45] transition-colors">
                    <Phone className="w-6 h-6 text-[#586e45] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase">Phone</h4>
                    <p className="text-slate-400 mt-1 text-lg tracking-wide font-mono">083 437 9366</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#586e45]/10 border border-[#586e45]/20 p-3 rounded-sm group-hover:bg-[#586e45] transition-colors">
                    <Clock className="w-6 h-6 text-[#586e45] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase">Trading Hours</h4>
                    <p className="text-slate-400 mt-1 font-light">
                      Mon - Fri: 8:00 - 17:00<br />
                      Sat: By Appointment<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="flex items-center space-x-2 opacity-60">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-400">Open for Business</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative h-96 lg:h-auto min-h-[500px] bg-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Abstract Map Representation */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.386054817112!2d28.140896315024227!3d-26.0028889835282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e18f8876c11%3A0x6b8641477727195!2s8%20Swart%20Dr%2C%20President%20Park%20AH%2C%20Midrand%2C%201685!5e0!3m2!1sen!2sza!4v1626084000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Workshop Location"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 text-xs font-bold shadow-lg">
              GET DIRECTIONS
            </div>
          </div>

          <div className="lg:col-span-2 p-8 border-t border-slate-700 bg-[#1e293b]">
            <h4 className="text-white font-bold uppercase mb-4">Central Gauteng Access</h4>
            <p className="text-sm text-slate-400 mb-6">
              Nashed Tuned is strategically located in President Park, serving the entire Gauteng performance community.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-400">
              <div className="mt-6">
                <strong className="text-[#586e45] block mb-1 uppercase text-xs tracking-wider">From Sandton (15-20 mins)</strong>
                Quick access via the M1 and N1 North (Allandale offramp).
              </div>
              <div className="mt-6">
                <strong className="text-[#586e45] block mb-1 uppercase text-xs tracking-wider">From Pretoria (20 mins)</strong>
                Direct route via N1 South.
              </div>
              <div className="mt-6">
                <strong className="text-[#586e45] block mb-1 uppercase text-xs tracking-wider">From Kyalami/Waterfall (10 mins)</strong>
                Immediate access via R55. We are the destination workshop for Honda owners who refuse to compromise.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;