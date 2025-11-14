'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const services = [
  {
    title: 'Ethical Sourcing',
    description: 'Partnerships with certified organic farms ensuring humane treatment',
    icon: '🌾',
  },
  {
    title: 'Certified Organic',
    description: 'All livestock raised without antibiotics or artificial supplements',
    icon: '✓',
  },
  {
    title: 'Halal Butchery',
    description: 'Expert butchers following strict halal compliance standards',
    icon: '🔪',
  },
  {
    title: 'Fresh Quality',
    description: 'Daily butchering ensures maximum freshness and premium quality',
    icon: '⭐',
  },
  {
    title: 'Multiple Options',
    description: 'Choose from mutton, veal, and custom cut selections',
    icon: '🥩',
  },
  {
    title: 'Fast Delivery',
    description: 'Local delivery in Islamabad or convenient pickup options available',
    icon: '🚚',
  },
]

export default function WhatWeDoSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/cows-goats-grazing-fresh-grass.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
          >
            What We Do
          </h2>
          <div 
            className="h-1 w-32 mx-auto mb-8"
            style={{ backgroundColor: 'hsl(33.79deg 39.37% 56.67%)' }}
          />
          <p className="font-sans text-xl text-white max-w-2xl mx-auto leading-relaxed">
           We combine natural farming practices, halal-compliant processes, and modern hygiene standards to deliver exceptional quality. <br /> Our direct farm-to-shop model ensures freshness, transparency, and wholesome nutrition your family can trust. No additives, no shortcuts — just real, honest meat.

          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-black/40 backdrop-blur-sm border transition-all duration-500 transform hover:-translate-y-2 cursor-pointer transition-all duration-1000 p-8 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'hsl(33.79deg 39.37% 56.67%)',
                boxShadow: isVisible ? `0 0 20px hsl(33.79deg 39.37% 56.67% / 0.1)` : 'none',
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px hsl(33.79deg 39.37% 56.67% / 0.3)'
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px hsl(33.79deg 39.37% 56.67% / 0.1)'
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 
                className="font-serif text-2xl font-bold mb-3"
                style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
              >
                {service.title}
              </h3>
              <p className="font-sans text-white text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
