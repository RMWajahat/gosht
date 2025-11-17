'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const whatsappNumber = '+923445421520'
  const instagramHandle = 'https://www.instagram.com/gosht.pk'
  const facebookHandle = 'https://www.facebook.com/gosht.pk'
  const whatsappMessage = 'Hi GOSHT! I would like to place an order.'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;


  return (
    <section 
      id="contact-section"
      ref={ref}
      className="py-20 md:py-32 bg-black px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
          >
            Get in Touch
          </h2>
          <div 
            className="h-1 w-32 mx-auto mb-8"
            style={{ backgroundColor: 'hsl(33.79deg 39.37% 56.67%)' }}
          />
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              <div>
                <h3 
                  className="font-serif text-3xl font-bold mb-4"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  Visit Our Store
                </h3>
                <p className="font-sans text-xl text-white leading-relaxed mb-2">
                  Orchard B Commercial
                </p>
                <p className="font-sans text-xl text-white leading-relaxed mb-6">
                  DHA Phase I, Islamabad
                </p>
                <p className="font-sans text-lg text-gray-300">
                  📍 Located in the premium DHA commercial area with dedicated parking
                </p>
              </div>

              <div className="space-y-4">
                <h4 
                  className="font-serif text-2xl font-bold"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  Hours
                </h4>
                <div className="font-sans text-white space-y-2">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 
                  className="font-serif text-2xl font-bold"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  Contact
                </h4>
                <div className="font-sans text-white space-y-2">
                  <p>WhatsApp: {whatsappNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA and Map */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <a
                href= {`tel:${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:shadow-lg transform hover:scale-105 py-6 px-8 font-sans font-bold text-xl text-center transition-all duration-300 text-black mb-4"
                style={{
                  backgroundColor: 'hsl(33.79deg 39.37% 56.67%)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33.79deg 39.37% 62%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33.79deg 39.37% 56.67%)'}
              >
                Order Now on WhatsApp
              </a>

              {/* Certifications */}
              <div className="space-y-4">
                <h4 
                  className="font-serif text-2xl font-bold mb-4"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  Certifications
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="p-4 text-center hover:bg-opacity-10 transition-colors duration-300"
                    style={{
                      border: `2px solid hsl(33.79deg 39.37% 56.67%)`,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <p 
                      className="font-sans font-bold mb-2"
                      style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                    >
                      ✓ Certified
                    </p>
                    <p className="font-sans text-sm text-white">Organic</p>
                  </div>
                  
                  <div 
                    className="p-4 text-center transition-colors duration-300"
                    style={{
                      border: `2px solid hsl(76.29deg 41.67% 32.94%)`,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(130, 180, 45, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <p 
                      className="font-sans font-bold mb-2"
                      style={{ color: 'hsl(76.29deg 41.67% 32.94%)' }}
                    >
                      ✓ Halal
                    </p>
                    <p className="font-sans text-sm text-white">Certified</p>
                  </div>

                  <div 
                    className="p-4 text-center transition-colors duration-300"
                    style={{
                      border: `2px solid hsl(33.79deg 39.37% 56.67%)`,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <p 
                      className="font-sans font-bold text-white mb-2"
                    >
                      ✓ ISO
                    </p>
                    <p className="font-sans text-sm text-white">Compliant</p>
                  </div>

                  <div 
                    className="p-4 text-center transition-colors duration-300"
                    style={{
                      border: `2px solid hsl(76.29deg 41.67% 32.94%)`,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(130, 180, 45, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <p 
                      className="font-sans font-bold mb-2"
                      style={{ color: 'hsl(76.29deg 41.67% 32.94%)' }}
                    >
                      ✓ Fresh
                    </p>
                    <p className="font-sans text-sm text-white">Daily Quality</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div 
                className="p-6 rounded"
                style={{
                  backgroundColor: '#0a0a0a',
                  border: `1px solid rgba(212, 175, 55, 0.3)`,
                }}
              >
                <p className="font-sans text-white leading-relaxed">
                  📦 We offer fast delivery across Islamabad or convenient store pickup. All products are vacuum-sealed and temperature-controlled for maximum freshness.
                </p>
                
              </div>
              <div 
                className="p-6 rounded"
                style={{
                  backgroundColor: '#0a0a0a',
                  border: `1px solid rgba(212, 175, 55, 0.3)`,
                }}
              >
                  <p className="font-sans text-white leading-relaxed">
                  👆 GOSHT follows rigorous organic principles and aligns with recognized food safety and quality standards. Our approach prioritizes animal welfare, soil health, and sustainability throughout the farming and processing journey. With a fully transparent supply chain, we ensure your meat is clean, responsible, and environmentally conscious.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="mt-20 pt-12"
        style={{
          borderTop: `1px solid rgba(212, 175, 55, 0.2)`,
        }}
      >
        <div className="text-center">
          <p 
            className="font-serif text-2xl font-bold mb-2"
            style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
          >
            GOSHT
          </p>
          <p className="font-sans text-white text-sm">
            © 2025 GOSHT - Certified Organic & Halal Fresh Meat. All rights reserved.
          </p>
          <p className="font-sans text-gray-400 text-xs mt-4">
            Fresh. Ethical. Traceable.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href={instagramHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[hsl(33.79deg_39.37%_56.67%)] transition-colors duration-300"
              aria-label="Visit our Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={facebookHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[hsl(33.79deg_39.37%_56.67%)] transition-colors duration-300"
              aria-label="Visit our Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
