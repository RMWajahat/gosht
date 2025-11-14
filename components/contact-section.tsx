'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const whatsappNumber = '+923463336286'
  const whatsappMessage = encodeURIComponent('Hello GOSHT! I would like to place an order.')
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`

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
                href={whatsappLink}
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
        </div>
      </div>
    </section>
  )
}
