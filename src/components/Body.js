import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Education from './Education'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
  return (
    <div className='bg-slate-300'>
        
        <Routes>
          <Route path='/contact' element = {<Contact/>} />
        </Routes>
        <Routes>
          <Route path='/' element = {<div>
            <Header/>
            <Home/>
            <About/>
            <Experience/>
            <Skills/>
            <Education/>
            <Footer/>
          </div>} />
        </Routes>
    </div>
  )
}

export default Body