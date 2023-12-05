import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './Homepage/Homepage'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Projects } from './Projects/Projects'
import Education from './Education/Education'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/Portfolio" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/education" element={<Education/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes