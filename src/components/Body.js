import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'

const Body = () => {
  return (
    <div className='bg-slate-300'>
        <Header/>
        <Home/>
        <About/>
        <Experience/>
        <Skills/>
    </div>
  )
}

export default Body