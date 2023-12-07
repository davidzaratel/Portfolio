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
            <Route exact path="/Portfolio" element={<HomePage/>}/>
            <Route path="/Portfolio/about" element={<About/>}/>
            <Route path="/Portfolio/experience" element={<Experience/>}/>
            <Route path="/Portfolio/projects" element={<Projects/>}/>
            <Route path="/Portfolio/education" element={<Education/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes