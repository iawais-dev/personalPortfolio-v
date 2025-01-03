import ContactSection from '@/Components/Contact/ContactSection'
import Footer from '@/Components/Footer/FooterSection'
import NavbarSection from '@/Components/Navbar/NavbarSection'
import React from 'react'

function page() {
  return (
    <div>
        <NavbarSection/>
    <ContactSection />
    <Footer/>
    </div>
  )
}

export default page