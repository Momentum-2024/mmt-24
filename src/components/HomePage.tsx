import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import About from './About'
import TopEvents from './TopEvents'
import Faqs from './Faqs'
import Sponsors from './Sponsors'

function HomePage() {
  return (
    <>
      <LandingPage/>
      <About/>
      <TopEvents/>
      {/* <Sponsors/> */}
      <Faqs/>
      <Footer/>
    </>
  )
}

export default HomePage
