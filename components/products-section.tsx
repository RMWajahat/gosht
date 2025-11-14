'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const products = [
  {
    name: 'Fresh Mutton (Goat)',
    description: 'Premium quality goat meat, ethically raised and halal certified',
    image: '/fresh-halal-goat-meat-premium-mutton-cuts.jpg',
  },
  {
    name: 'Fresh Veal',
    description: 'Tender young beef, grain-fed and organically certified',
    image: '/premium-fresh-veal-beef-meat-halal-certified.jpg',
  },
  {
    name: 'Cuts & Portions',
    description: 'Custom cuts tailored to your cooking preferences and recipes',
    image: '/butcher-cuts-portions-premium-meat-selection.jpg',
  },
  {
    name: 'Custom Orders',
    description: 'Wholesale and bulk orders available for restaurants and events',
    image: '/bulk-meat-orders-wholesale-premium-quality.jpg',
  },
]

export default function ProductsSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const scrollToContact = () => {
    const element = document.getElementById('contact-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="products-section"
      ref={ref}
      className="py-20 md:py-32 bg-black px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
          >
            Our Products
          </h2>
          <div 
            className="h-1 w-32 mb-8"
            style={{ backgroundColor: 'hsl(33.79deg 39.37% 56.67%)' }}
          />
          <p className="font-sans text-xl text-white max-w-2xl leading-relaxed">
            Explore our premium selection of organic Mutton and veal — including with-bone cuts, boneless cubes, mince, and specialty portions. Every product is freshly prepared, hygienically handled, and rich in natural flavor and nutrition.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-black overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                border: `1px solid hsl(33.79deg 39.37% 56.67%)`,
                boxShadow: `0 0 0 0 rgba(212, 175, 55, 0.1)`,
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px rgba(212, 175, 55, 0.4)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 rgba(212, 175, 55, 0.1)`
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gray-900">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="font-serif text-xl font-bold mb-2"
                  style={{ color: 'hsl(33.79deg 39.37% 56.67%)' }}
                >
                  {product.name}
                </h3>
                <p className="font-sans text-white text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="w-full border-2 py-2 font-sans font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'hsl(33.79deg 39.37% 56.67%)',
                    color: 'hsl(33.79deg 39.37% 56.67%)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(33.79deg 39.37% 56.67%)'
                    e.currentTarget.style.color = '#0a0a0a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'hsl(33.79deg 39.37% 56.67%)'
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
