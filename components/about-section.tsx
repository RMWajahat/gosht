'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 bg-black px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
          >
            About GOSHT
          </h2>
          <div 
            className="h-1 w-32 mb-8"
            style={{ backgroundColor: 'hsl(33.79deg 39.37% 56.67%)' }}
          />
          <p className="font-sans text-xl text-white max-w-2xl leading-relaxed">
              GOSHT is Pakistan’s leading organic meat shop, built on a commitment to clean, ethical, and transparent food. Our animals are grass-fed, nurtured in a natural environment, and raised without artificial growth enhancers. Every cut reflects our promise of purity and responsible farming.          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
          {/* Images */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/healthy-livestock-goat-farm-certified-organic.jpg" 
                alt="Certified Organic Livestock" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video overflow-hidden">
              <img 
                src="/fresh-butchered-halal-meat-premium-quality.jpg" 
                alt="Premium Fresh Meat" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className={`space-y-8 transition-all col-span-2 duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <div 
                className="border-l-4 pl-6"
                style={{ borderColor: 'hsl(33.79deg 39.37% 56.67%)' }}
              >
                <h3 
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  Certified Organic
                </h3>
                <p className="font-sans text-white text-lg leading-relaxed">
                  Every animal is raised following strict organic farming standards, free from antibiotics and harmful additives.
                </p>
              </div>

              <div 
                className="border-l-4 pl-6"
                style={{ borderColor: 'hsl(76.29deg 41.67% 32.94%)' }}
              >
                <h3 
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: 'hsl(76.29deg 41.67% 32.94%)' }}
                >
                  Halal Certified
                </h3>
                <p className="font-sans text-white text-lg leading-relaxed">
                  Our butchery follows authentic halal standards with proper certification and compliance documentation.
                </p>
              </div>

              <div 
                className="border-l-4 pl-6"
                style={{ borderColor: 'hsl(33.79deg 39.37% 56.67%)' }}
              >
                <h3 
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  100% Traceable
                </h3>
                <p className="font-sans text-white text-lg leading-relaxed">
                  Know exactly where your meat comes from. Full transparency from farm to table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
