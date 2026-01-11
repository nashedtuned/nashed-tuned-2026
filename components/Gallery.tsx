import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface GalleryProps {
  isStandalone?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isStandalone = true }) => {
  // Updated to use local images in /images/
  const images = [
    {
      src: "/images/gallery-1.jpg",
      fallback: "https://images.unsplash.com/photo-1609207263918-004d1f45d0be?q=80&w=1000&auto=format&fit=crop",
      cat: "VTEC Turbo",
      desc: "Precision Turbo Build",
      alt: "Honda Civic VTEC Turbo engine build precision tuning Gauteng"
    },
    {
      src: "/images/gallery-2.jpg",
      fallback: "https://images.unsplash.com/photo-1597396693877-77772e1c8547?q=80&w=1000&auto=format&fit=crop",
      cat: "K20 Build",
      desc: "Custom Valve Cover",
      alt: "Honda K20 engine build custom valve cover performance tuning"
    },
    {
      src: "/images/gallery-3.jpg",
      fallback: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1000&auto=format&fit=crop",
      cat: "Type R",
      desc: "Aero Package",
      alt: "Honda Civic Type R Aero Package and Performance Upgrades Midrand"
    },
    {
      src: "/images/gallery-4.jpg",
      fallback: "https://images.unsplash.com/photo-1610200903230-46372245219d?q=80&w=1000&auto=format&fit=crop",
      cat: "S2000",
      desc: "Classic Performance",
      alt: "Honda S2000 classic performance tuning and maintenance"
    },
    {
      src: "/images/gallery-5.jpg",
      fallback: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000&auto=format&fit=crop",
      cat: "Civic FL5",
      desc: "The New Standard",
      alt: "Honda Civic FL5 Type R performance upgrades and tuning"
    },
    {
      src: "/images/gallery-6.jpg",
      fallback: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
      cat: "Engine Bay",
      desc: "Carbon Intake Systems",
      alt: "Custom Carbon Intake System Honda Engine Bay Detailing"
    },
  ];

  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-[#0f172a] min-h-screen border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-[#586e45] font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase italic">Our <span className="text-red-600">Work</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto">A showcase of our workmanship, facility, and the beautiful machines we have the privilege to work on.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <RevealOnScroll key={idx} delay={idx * 50}>
              {/* Themed Border Container */}
              <div className="group relative p-1 bg-[#1e293b] clip-path-slant">
                {/* Technical Border Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#586e45] z-20"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#586e45] z-20"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#586e45] z-20"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#586e45] z-20"></div>

                <div className="relative overflow-hidden rounded-sm aspect-video cursor-pointer bg-slate-900">
                  {/* Category Tag */}
                  <div className="absolute top-2 left-2 bg-[#586e45]/90 backdrop-blur px-3 py-1 z-20 skew-x-[-10deg] border-l-2 border-white">
                    <span className="block skew-x-[10deg] text-xs font-bold text-white uppercase tracking-wider">{img.cat}</span>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
                    <h3 className="text-white font-bold text-xl uppercase italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.desc}</h3>
                    <div className="w-12 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = img.fallback;
                      console.warn(`Local image ${img.src} not found. Using fallback.`);
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
