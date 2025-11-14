'use client'

import { useEffect, useState } from 'react'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhatWeDoSection from '@/components/what-we-do-section'
import ProductsSection from '@/components/products-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <ContactSection />
    </main>
  )
}
