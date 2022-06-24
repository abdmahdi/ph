import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [active, setActiveNav] = useState("#home")
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={active === "#home" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={active === "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={active === "#experience" ? 'active' : ''}><BiBook /></a>
      <a href="#services"  onClick={() => setActiveNav('#services')} className={active === "#services" ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={active === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav