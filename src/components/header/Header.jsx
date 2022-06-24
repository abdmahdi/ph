import React from 'react'
import CTA from './CTA'
import './header.css'
// import image from '../../assets/IMG_8375-removebg-preview.png'
import image from '../../assets/me.png'
import Social from './headerSocials'


const Header = () => {

  return (
    <section id='home'>
         <header>
       <div className="container header__container">
      <h5>Hi I'm </h5>
      <h1>Abderahmane Mahdi Gharzouli</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
      <Social />
      <div className="me">
        <img src={image} alt="Me" />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   </header>
 </section>
    
  )
}

export default Header