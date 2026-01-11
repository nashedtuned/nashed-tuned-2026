import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Wrapper to trigger animations on route change and scroll to top
const PageWrapper = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-enter min-h-screen flex flex-col">
      {children}
    </div>
  );
};

// Combined Home Page containing all sections
const HomeCombined = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services isStandalone={false} />
      <About isStandalone={false} />
      <Gallery isStandalone={false} />
      <Location isStandalone={false} />
      <Contact isStandalone={false} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PageWrapper><HomeCombined /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/location" element={<PageWrapper><Location /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;