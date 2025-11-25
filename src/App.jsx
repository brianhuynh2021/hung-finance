import React from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingChatButtons from './components/FloatingChatButtons'


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
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