import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Stats from '../../components/Stats'
import Footer from '../../components/Footer'
import Tasks from '../../components/Tasks'
import Activevolunteers from '../../components/Activevolunteers'
import OurTeam from '../../components/OurTeam'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Tasks/>
      <Activevolunteers/>
      <OurTeam/>
      <Footer/>
    </>
  )
}

export default Homepage