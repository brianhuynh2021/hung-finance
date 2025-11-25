import React, { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingChatButtons from './components/FloatingChatButtons'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        <Banner />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingChatButtons />
    </div>
  )
}

export default App
