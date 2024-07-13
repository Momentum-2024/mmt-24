import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import About from './About'
import TopEvents from './TopEvents'
import Faqs from './Faqs'

function HomePage() {
  return (
    <>
      <LandingPage/>
      <About/>
      <TopEvents/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default HomePage
