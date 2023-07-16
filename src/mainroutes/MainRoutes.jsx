import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Main from '../pages/mainpages/Main'
import Footer from '../components/header/Footer'
import Hero from '../pages/mainpages/Hero'
import Technology from '../pages/mainpages/Technology'
import Services from '../pages/mainpages/Services'
import Testimonials from '../pages/mainpages/Testimonials'
import Recruit from '../pages/recruit/Recruit'

const MainRoutes = () => {
  return (
   <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='home' element={<Hero/>} />
            <Route path='technology' element={<Technology/>} />
            <Route path='service' element={<Services/>} />
            <Route path='testimonial' element={<Testimonials/>} />

            <Route path='recruitease' element={<Recruit/>} />
           
        </Routes>
      <Footer/>
   </Router>
  )
}

export default MainRoutes