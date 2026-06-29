/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Users, 
  Home, 
  KeyRound, 
  TrendingUp, 
  Truck, 
  Star,
  ChevronRight,
  Send
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Buy'
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get in touch with you shortly.');
    setFormData({ name: '', phone: '', email: '', interest: 'Buy' });
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-[#D4AF37]/30">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#002147] text-white border-b-2 border-[#D4AF37] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center font-bold text-white italic">RE</div>
                <h1 className="text-xl font-semibold tracking-tight uppercase">Real Estate Brokers USA, Inc.</h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
              <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors cursor-pointer">Why Us</a>
              <a href="#services" className="text-white hover:text-[#D4AF37] transition-colors cursor-pointer">Services</a>
              <a href="#reviews" className="text-white hover:text-[#D4AF37] transition-colors cursor-pointer">Reviews</a>
              <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors cursor-pointer">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-[#D4AF37] focus:outline-none p-2"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#002147] border-b-2 border-[#D4AF37] shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center text-center uppercase tracking-widest">
              <a onClick={closeMobileMenu} href="#about" className="block px-3 py-3 text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 w-full rounded-md">Why Us</a>
              <a onClick={closeMobileMenu} href="#services" className="block px-3 py-3 text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 w-full rounded-md">Services</a>
              <a onClick={closeMobileMenu} href="#reviews" className="block px-3 py-3 text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 w-full rounded-md">Reviews</a>
              <a onClick={closeMobileMenu} href="#contact" className="block px-3 py-3 text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 w-full rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#002147]/60 mix-blend-multiply z-10" />
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
            alt="Beautiful luxury home exterior with a pool"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left pt-12 pb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
            Based in Winter Haven, FL
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight max-w-4xl tracking-tight">
            Your Trusted Partner in <span className="text-[#D4AF37]">Central Florida</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            Whether you are buying your first home, selling your property, or building your investment portfolio, our 24/7 team is ready to guide you home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+18632426624" 
              className="inline-flex justify-center items-center px-8 py-3 bg-[#D4AF37] text-white rounded-sm font-bold text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all outline-none"
            >
              Call Us: (863) 242-6624
            </a>
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-3 border-2 border-white text-white rounded-sm font-bold text-lg hover:bg-white/10 transition-all outline-none backdrop-blur-sm"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 border-b pb-8 border-slate-100">
            <h2 className="text-[#002147] font-bold text-sm uppercase tracking-tighter mb-4">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#002147]">Dedicated to Your Success, Day or Night</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              We operate differently. Real estate moves fast, and so do we. Here is why families and investors across Central Florida trust us with their biggest decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 mb-8 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Clock className="w-6 h-6 flex-shrink-0 text-[#002147]" />,
                title: 'Available 24/7',
                description: 'Always here when you need us. Opportunities do not sleep.'
              },
              {
                icon: <MapPin className="w-6 h-6 flex-shrink-0 text-[#002147]" />,
                title: 'Local Expertise',
                description: 'Deep knowledge of Winter Haven & Central Florida markets.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 flex-shrink-0 text-[#002147]" />,
                title: 'Honest & Transparent',
                description: 'Clear, straightforward honesty in every property transaction.'
              },
              {
                icon: <Zap className="w-6 h-6 flex-shrink-0 text-[#002147]" />,
                title: 'Fast Communication',
                description: 'Rapid communication and response times within 15 mins.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 border border-slate-200 rounded shadow-sm flex flex-col">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100/50 text-[#002147] flex items-center justify-center rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-[#002147] text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#002147] rounded p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex-1 md:pr-8 text-center md:text-left mb-6 md:mb-0">
              <h4 className="text-2xl font-serif font-bold text-white mb-2">Trusted by the Region</h4>
              <p className="text-slate-300 text-lg">Join hundreds of satisfied families and high-volume investors who chose Real Estate Brokers USA, Inc.</p>
            </div>
            <div className="relative z-10">
              <a href="#contact" className="inline-flex items-center text-white bg-[#D4AF37] font-bold px-8 py-3 rounded-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                Work With Us
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#002147] font-bold text-sm uppercase tracking-tighter mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#002147]">Comprehensive Real Estate Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 border border-slate-200 rounded flex flex-col sm:flex-row gap-6 items-start hover:border-[#D4AF37] transition-colors">
              <div className="w-16 h-16 bg-slate-50 flex-shrink-0 border border-slate-100 flex items-center justify-center rounded">
                <Home className="w-8 h-8 text-[#002147]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-[#002147] mb-2">Home Buying</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Find your dream property in Polk County. We guide you through the entire process—from prioritizing neighborhoods to negotiating the absolute best price for your new Florida home.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 border border-slate-200 rounded flex flex-col sm:flex-row gap-6 items-start hover:border-[#D4AF37] transition-colors">
              <div className="w-16 h-16 bg-slate-50 flex-shrink-0 border border-slate-100 flex items-center justify-center rounded">
                <KeyRound className="w-8 h-8 text-[#002147]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-[#002147] mb-2">Home Selling</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Maximize your ROI with expert marketing. Get top dollar for your property with precise market data, and expert negotiation strategies to sell your home faster.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 border border-slate-200 rounded flex flex-col sm:flex-row gap-6 items-start hover:border-[#D4AF37] transition-colors">
              <div className="w-16 h-16 bg-slate-50 flex-shrink-0 border border-slate-100 flex items-center justify-center rounded">
                <TrendingUp className="w-8 h-8 text-[#002147]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-[#002147] mb-2">Investment Properties</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Strategic guidance for rental portfolios. Central Florida is a booming market for real estate investing. We identify high-yield opportunities and analyze returns.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-8 border border-slate-200 rounded flex flex-col sm:flex-row gap-6 items-start hover:border-[#D4AF37] transition-colors">
              <div className="w-16 h-16 bg-slate-50 flex-shrink-0 border border-slate-100 flex items-center justify-center rounded">
                <Truck className="w-8 h-8 text-[#002147]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-[#002147] mb-2">Relocation Services</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Stress-free transitions for your family. Moving to the Sunshine State? We handle the heavy lifting of coordinating long-distance moves and providing area tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section id="reviews" className="py-24 bg-white relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 border-b pb-8 border-slate-100">
            <h2 className="text-[#002147] font-bold text-sm uppercase tracking-tighter mb-4">Client Feedback</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#002147]">Don't Just Take Our Word For It</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "We needed to sell our house fast, and these guys were available literally at 11 PM on a Sunday answering our questions. Highly recommend their dedication and non-stop work ethic. We closed in 3 weeks.",
                author: "Sarah M.",
                role: "Seller in Winter Haven"
              },
              {
                text: "Their local knowledge of Central Florida is unmatched. They patiently showed us dozens of listings and found us the perfect investment property in under two weeks. True professionals.",
                author: "David L.",
                role: "Real Estate Investor"
              },
              {
                text: "Honest, reliable, and always just a phone call away. Real Estate Brokers USA made buying our first home a breeze. They handled negotiations beautifully and saved us thousands.",
                author: "The Johnson Family",
                role: "First-Time Buyers"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 rounded shadow-sm text-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-4 text-[#D4AF37]">
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                  </div>
                  <p className="text-slate-600 leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div>
                  <span className="block font-bold text-[#002147]">{review.author}</span>
                  <span className="text-xs text-slate-500">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden flex flex-col md:flex-row">
            
            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12">
              <h3 className="text-[#002147] font-bold text-sm uppercase tracking-tighter mb-4">Direct Inquiry</h3>
              <h4 className="text-3xl font-serif font-bold text-[#002147] mb-4">Get In Touch</h4>
              <p className="text-slate-600 mb-8">Reach out to us anytime, 24/7. Fill out the form below and we will contact you immediately.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                    placeholder="Full Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div>
                  <select 
                    id="interest" 
                    name="interest"
                    value={formData.interest}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D4AF37] appearance-none"
                  >
                    <option>I'm looking to Buy</option>
                    <option>I'm looking to Sell</option>
                    <option>Invest in Real Estate</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#002147] text-white font-bold py-3 rounded text-sm hover:opacity-90 flex justify-center items-center"
                >
                  Submit Request
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="md:w-1/3 bg-[#002147] p-8 md:p-12 flex flex-col justify-center text-white relative">
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-transparent to-[#002147]"></div>
              <div className="relative z-10">
                <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 border-b border-slate-700 pb-2">Information</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Our Office</span>
                    <div className="flex items-start">
                      <span className="text-lg">📍</span>
                      <p className="text-slate-200 text-sm ml-2 leading-relaxed">
                        6358 Cypress Gardens Blvd,<br />
                        Winter Haven, FL 33884
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Direct Line</span>
                    <div className="flex items-center">
                      <span className="text-lg">📞</span>
                      <p className="text-white text-lg font-bold ml-2">
                        +1 863-242-6624
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8">
                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    Available 24/7 • Licensed Florida Broker
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] border-t-2 border-[#D4AF37] pt-12 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center font-bold text-white italic">RE</div>
                <h1 className="text-xl font-semibold tracking-tight uppercase">Real Estate Brokers USA, Inc.</h1>
              </a>
              <p className="text-slate-300 leading-relaxed max-w-sm mb-6 text-sm">
                Your premier, 24/7 real estate brokerage serving Winter Haven and the entirety of Central Florida.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 font-serif text-lg tracking-wide">Quick Links</h4>
              <ul className="space-y-3 font-medium text-sm text-slate-300">
                <li><a href="#home" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Home</a></li>
                <li><a href="#about" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Why Choose Us</a></li>
                <li><a href="#services" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Services</a></li>
                <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Reviews</a></li>
                <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-serif text-lg tracking-wide">Contact Us</h4>
              <ul className="space-y-3 font-medium text-sm text-slate-300">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-[#D4AF37] mt-1 flex-shrink-0" />
                  6358 Cypress Gardens Blvd,<br/>Winter Haven, FL 33884
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0" />
                  <a href="tel:+18632426624" className="hover:text-[#D4AF37] transition-colors font-bold">+1 863-242-6624</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest">
            <span className="mb-4 md:mb-0">© 2025 Real Estate Brokers USA, Inc.</span>
            <span className="mb-4 md:mb-0">Florida Licensed Real Estate Brokerage</span>
            <span>Winter Haven, FL 33884</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <a 
        href="tel:+18632426624" 
        className="fixed bottom-6 right-6 md:hidden bg-[#D4AF37] text-white border border-[#D4AF37] p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:brightness-110 transition-transform hover:scale-105 active:scale-95"
        aria-label="Call Us Now"
      >
        <Phone className="w-6 h-6 fill-white" />
      </a>

      {/* Floating Offer Button */}
      <a 
        href="https://auroraadv.co/?tab=wizard"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#002147] border-4 border-[#D4AF37] shadow-2xl flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform duration-300 group"
      >
        <span className="text-white font-bold text-xs sm:text-sm leading-tight group-hover:text-white/90">Get this website<br />for only</span>
        <span className="text-[#D4AF37] font-black text-lg sm:text-xl mt-1">$999</span>
      </a>
    </div>
  );
}

