'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToExplore = () => {
    const element = document.getElementById('products-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative w-full flex items-center justify-center"
      style={{
        height: '100vh',
        backgroundImage: 'url(/cows-goats-grazing-fresh-grass.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/72" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Branding */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image src="/logo.png" alt="GOSHT Logo" width={150} height={150} />
          <div 
            className="h-1 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'hsl(33.79deg 39.37% 56.67%)' }}
          />
        </div>

        {/* Main Header */}
        <h1 
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow: '0 4px 6px rgba(0,0,0,0.3)',
          }}
        >
          Certified Organic Meat Shop
        </h1>

        {/* Subtext */}
        <p 
          className={`font-sans text-base w-[80%] mb-12 transition-all duration-1000 delay-300 text-slate-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Enjoy Pakistan’s finest organic Mutton and veal, raised naturally at Lillah Farms. Fresh, pure, hormone-free meat produced with care, integrity, and the highest hygiene standards.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToExplore}
          className={`px-10 py-4 text-black font-sans font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            backgroundColor: 'hsl(33.79deg 39.37% 56.67%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(33.79deg 39.37% 62%)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(33.79deg 39.37% 56.67%)'}
        >
          Explore Our Cuts
        </button>
      </div>

    </section>
  )
}
