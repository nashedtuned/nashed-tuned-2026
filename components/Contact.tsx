import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RevealOnScroll from './RevealOnScroll';
import { Phone, MapPin, MessageSquare, Send } from 'lucide-react';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isStandalone = true }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Service',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle WhatsApp Submission
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Construct the message
    const text = `*New Booking Request from Nashed Tuned Website* %0A%0A` +
      `*Name:* ${formData.name} %0A` +
      `*Phone:* ${formData.phone} %0A` +
      `*Service Type:* ${formData.service} %0A` +
      `*Message:* ${formData.message}`;

    // 2. Phone Number (International Format without +)
    const phoneNumber = "27834379366";

    // 3. Create the API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // 4. Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-[#0f172a] relative overflow-hidden min-h-screen flex items-center border-t border-slate-800`}>
      <Helmet>
        <title>Book a Service | Mechanic in Midrand | Nashed Tuned</title>
        <meta name='description' content='Book your car service or tuning appointment in Midrand. WhatsApp us directly for quotes. Located at President Park.' />
      </Helmet>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#586e45]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-2 uppercase italic">Book Your Service</h1>
            <p className="text-slate-400">
              Ready to give your vehicle the care it deserves? Send us a request directly via WhatsApp.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Sidebar */}
          <RevealOnScroll delay={100} className="lg:col-span-1">
            <div className="h-full space-y-6">
              <div className="glass-panel p-8 rounded-sm border-l-4 border-l-red-600">
                <h3 className="text-xl font-bold text-white uppercase italic mb-6">Quick Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600/20 p-3 rounded-sm text-red-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Call Us</p>
                      <a href="tel:0834379366" className="text-2xl font-bold text-white hover:text-red-500 transition-colors font-mono tracking-tight">083 437 9366</a>
                      <p className="text-xs text-slate-500 mt-1">Mon-Fri: 8am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600/20 p-3 rounded-sm text-red-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Visit Us</p>
                      <p className="text-white font-medium leading-snug mt-1">
                        Unit 22 Workshop, 8 Swart Rd,<br />
                        President Park, Midrand
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600/20 p-3 rounded-sm text-red-500">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">WhatsApp</p>
                      <a href="https://wa.me/27834379366" target="_blank" rel="noreferrer" className="text-white hover:text-green-400 transition-colors mt-1 block">
                        Chat with us directly
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-sm border border-slate-700 bg-[#586e45]/5">
                <h4 className="text-white font-bold uppercase mb-2">Need a Tow?</h4>
                <p className="text-slate-400 text-sm mb-4">We can arrange rollback services for non-runners. Mention this in your booking message.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Booking Form */}
          <RevealOnScroll delay={200} className="lg:col-span-2">
            <form onSubmit={handleWhatsAppSubmit} className="glass-panel p-8 sm:p-12 rounded-sm border-t-4 border-t-[#586e45] shadow-2xl relative h-full">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-white/5 border-l-[60px] border-l-transparent"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="083 437 9366"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="service" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Service Type</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none"
                >
                  <option>General Service</option>
                  <option>Diagnostics</option>
                  <option>Performance Tuning (Honda)</option>
                  <option>Brake Repair</option>
                  <option>Clutch Replacement</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Vehicle Details / Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="Make, Model, Year, and issues you are experiencing..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 uppercase italic tracking-wide transition-all transform hover:translate-y-[-2px] shadow-lg shadow-green-900/30 skew-x-[-5deg] flex items-center justify-center gap-2"
              >
                <span className="flex items-center gap-2 skew-x-[5deg]">
                  Request on WhatsApp <Send className="w-5 h-5" />
                </span>
              </button>
              <p className="text-center text-slate-500 text-xs mt-4">
                This will open WhatsApp with your pre-filled booking details.
              </p>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;